/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Wrapper from '../wrappers/Photos.styled'
import { BiLike } from 'react-icons/bi'
import numeral from 'numeral'

// SINGLE PHOTO INSIDE IMAGE GALLERY
const Photos = ({
  // LITTLE BIT OF OBJECT DESTRUCTURING HERE
  likes,
  id,
  description,
  urls: { regular },
  user: {
    profile_image: { medium },
    name,
    social: { instagram_username },
    username,
  },
}) => {
  return (
    // LINK TO GO TO SPECIFIC IMAGE FOR IMAGE DETAILS
    <Link to={`photos/${id}`}>
      <Wrapper>
        <img src={regular} alt={description} className='unsplash-img' />
        <div className='img-description'>
          <div className='user-info'>
            <img src={medium} alt={name} className='user-img' />
            <div className='user'>
              <p className='user-name'>{name}</p>
              <p className='user-social'>@{instagram_username || username}</p>
            </div>
          </div>
          <p className='likes'>
            <BiLike className='like-icon' />{' '}
            <span>{numeral(likes).format('0.[0]a')}</span>
          </p>
        </div>
      </Wrapper>
    </Link>
  )
}
export default Photos
