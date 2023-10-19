/* eslint-disable react/prop-types */
// - REUSABLE COMPONENT
const DownloadImage = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className='footer-right'>
      <div className='download'>Download image</div>
    </div>
  )
}
export default DownloadImage
