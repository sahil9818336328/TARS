/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'
import Wrapper from '../wrappers/SingleImage.styled'
import Loading from './Loading'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiShare2 } from 'react-icons/fi'
import { saveAs } from 'file-saver'
import { LinkedinShareButton } from 'react-share'
import { AnimatePresence, motion } from 'framer-motion'
import { IoCloseOutline } from 'react-icons/io5'
import DownloadImage from './DownloadImage'
import ImageInfo from './ImageInfo'
import SocialHandles from './socialHandles'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

// REACT QUERY FOR FETCHING DATA,
// AVOIDS THE NEED FOR A USE EFFECT HOOK
// AVOID THE NEED TO SETUP STATE VARIABLES FOR LOADING, ERROR AND DATA, AS WE ARE PROVIDED WITH THAT.
const getSingleImage = (url, id) => {
  return {
    queryKey: ['unsplashSingle', id],
    queryFn: async () => {
      const { data } = await axios(url)
      return data
    },
  }
}

const SingleImage = () => {
  // DATA FETCHING QUERIES
  // YES I NEED TO PUT CLIENT ID IN .ENV, BUT JUST TO AVOID UNNECESSARY BUGS WHILE DEPLOYING.
  const clientId = `?client_id=w9zNxwqGoH1vn34suLim00Doubjha3mp7hhZQ6_2YSc`
  const mainUrl = `https://api.unsplash.com/photos/`
  const { id } = useParams()
  let url = `${mainUrl}${id}${clientId}`

  const { data: image, isLoading } = useQuery(getSingleImage(url, id))

  // CODE RELATED TO FRAMER MOTION
  const modal = {
    hidden: {
      y: '-110vh',
      opacity: 0,
    },

    visible: {
      y: '0vh',
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  }

  if (isLoading) {
    return <Loading />
  }

  // DOWNLOAD FUNCTIONALITY USING FILE SAVER LIBRARY
  const handleClick = () => {
    let url = image?.urls?.regular
    saveAs(url, image?.alt_description)
  }

  return (
    <Wrapper>
      <AnimatePresence mode='wait'>
        <motion.div
          className='main'
          variants={modal}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
          key='modal'
        >
          <IoCloseOutline className='close-icon' />

          {/* IMAGE START */}
          <div className='img-container'>
            <img
              src={image?.urls?.regular}
              alt={image?.alt_description}
              className='single-image'
            />
            <div className='img-footer'>
              <div className='footer-left'>
                <div>
                  <LinkedinShareButton size={32} url={image?.urls?.regular} />
                  <FiShare2 /> Share
                </div>
                <div title={image?.alt_description}>
                  <AiOutlineInfoCircle /> Info
                </div>
              </div>
              <DownloadImage handleClick={handleClick} />
            </div>
          </div>
          {/* IMAGE END */}

          {/* IMAGE DESCRIPTION START */}
          <div className='image-description'>
            <div className='header'>
              <div className='header-left'>
                <div className='user-info'>
                  <img
                    src={image?.user?.profile_image?.medium}
                    alt={image?.user?.username}
                    className='user-img'
                  />
                  <div className='user'>
                    <p className='user-name'>{image?.user?.username}</p>
                    <p className='user-social'>
                      @
                      {image?.user?.instagram_username || image?.user?.username}
                    </p>
                  </div>

                  <SocialHandles image={image} />
                </div>
              </div>

              <div className='header-right'>
                <div className='phone-download'>
                  <DownloadImage handleClick={handleClick} />
                </div>

                <ImageInfo image={image} />
              </div>
            </div>

            <div className='phone-view'>
              <SocialHandles image={image} />
              <ImageInfo image={image} />
            </div>

            <div className='footer'>
              <h3>Related Tags</h3>
              <div className='all-tags'>
                {image?.tags?.map((tag, i) => {
                  return (
                    <span className='single-tag' key={i}>
                      {tag?.title}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          {/* IMAGE DESCRIPTION END */}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  )
}
export default SingleImage
