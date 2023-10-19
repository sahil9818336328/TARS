/* eslint-disable react/prop-types */
import numeral from 'numeral'
import { BiLike } from 'react-icons/bi'

// REUSABLE COMPONENT
const ImageInfo = ({ image }) => {
  return (
    <div className='image-info'>
      <p>
        {/* NUMERAL LIBRARY TO FORMAT NUMBER INTO A SPECIFIC FORMAT */}
        {numeral(image?.downloads).format('0.[0]a')} <span>downloads</span>{' '}
      </p>
      <p>
        <BiLike className='like-icon' />{' '}
        <span className='likes'>{numeral(image?.likes).format('0.[0]a')}</span>
      </p>
    </div>
  )
}
export default ImageInfo
