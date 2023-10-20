/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Wrapper from '../wrappers/ImgContainer.styled'
import Loading from '../components/Loading'
import Photos from './Photos'
import { globalContext } from '../context'
import { useQuery } from '@tanstack/react-query'
import Suggestions from './Suggestions'

// REACT QUERY FOR FETCHING DATA,
// AVOIDS THE NEED FOR A USE EFFECT HOOK
// AVOID THE NEED TO SETUP STATE VARIABLES FOR LOADING, ERROR AND DATA, AS WE ARE PROVIDED WITH THAT.
const getUnsplashImages = (url, query) => {
  return {
    queryKey: ['unsplash', query],
    queryFn: async () => {
      const { data } = await axios(url)
      return data
    },
    select: (data) => {
      return data.results || data
    },
  }
}

const ImgContainer = () => {
  const [page, setPage] = useState(0)
  const { query, setSearchSuggestions, setSearchOpen } =
    useContext(globalContext)

  // DATA FETCHING QUERIES
  // YES I NEED TO PUT CLIENT ID IN .ENV, BUT JUST TO AVOID UNNECESSARY BUGS WHILE DEPLOYING.
  const clientId = `?client_id=w9zNxwqGoH1vn34suLim00Doubjha3mp7hhZQ6_2YSc`
  const mainUrl = `https://api.unsplash.com/photos/`
  const searchUrl = `https://api.unsplash.com/search/photos/`
  let url = ''
  const urlPage = `&page=${page}`
  const urlQuery = `&query=${query}`
  const itemsPerPage = `&per_page=10`

  if (query) {
    // IF USER SEARCHES FOR AN IMAGE USE THIS URL
    url = `${searchUrl}${clientId}${urlPage}${itemsPerPage}${urlQuery}`
  } else {
    // DEFAULT URL
    url = `${mainUrl}${clientId}${urlPage}${itemsPerPage}`
  }

  const {
    data: photos,
    isLoading,
    isError,
  } = useQuery(getUnsplashImages(url, query))

  useEffect(() => {
    if (photos && photos.length) {
      setSearchSuggestions(photos)
    }

    if (photos && !photos.length) {
      setSearchOpen(false)
    }
  }, [photos, query])

  if (isLoading) return <Loading />

  return (
    <div className='container'>
      {query && <Suggestions photos={photos} />}
      <Wrapper>
        {isError && <h2>SOMETHING WENT WRONG...</h2>}
        {!photos.length && <h2>NO MATCHING IMAGE FOUND...</h2>}
        {photos?.map((image, index) => {
          return <Photos key={index} {...image} />
        })}
      </Wrapper>
    </div>
  )
}
export default ImgContainer
