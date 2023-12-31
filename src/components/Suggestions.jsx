/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from 'react'
import Wrapper from '../wrappers/Suggestions.styled'
import { BsChevronRight } from 'react-icons/bs'
import { globalContext } from '../context'

// WHILE SEARCHING FOR AN IMAGE, IT WILL SHOW RELATED SUGGESTIONS AND THE DATA IS DYNAMIC I.E COMING FROM UNSPLASH API.
const Suggestions = ({ photos }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const { query } = useContext(globalContext)
  const updatedSuggestions = photos?.map((suggestion) => {
    const { tags } = suggestion

    return tags
  })

  // CONVERTING ARRAY OF ARRAYS INTO ARRAY OF OBJECTS
  const tags = updatedSuggestions.flatMap((innerArray) =>
    innerArray.map((obj) => obj.title)
  )

  // SHOW ALL TAGS IN BIG SCREEN AND HALF TAGS ON SMALL SCREEN
  const numTagsToShow = isSmallScreen ? tags.length / 2 : tags.length

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 955)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper>
      <div className='container'>
        <div className='suggestions-title'>
          <h3>{query}</h3>
        </div>
        <div className='tags'>
          {/* AS TAGS WERE GETTING/COMING REPEATED FROM API DATA, USED SET TO RENDER UNIQUE TAGS */}
          {[...new Set(tags)]?.slice(0, numTagsToShow)?.map((tag, i) => {
            return (
              <span key={i} className='single-tag'>
                {tag}
              </span>
            )
          })}
          <BsChevronRight className='icon-right' />
        </div>
      </div>{' '}
    </Wrapper>
  )
}
export default Suggestions
