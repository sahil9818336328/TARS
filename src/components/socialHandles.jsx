import { AiOutlineInstagram } from 'react-icons/ai'
import { RxTwitterLogo } from 'react-icons/rx'

// REUSABLE COMPONENT
const socialHandles = ({ image }) => {
  return (
    <div className='social-handles'>
      <span>
        <AiOutlineInstagram className='social-icon' />/
        {image?.user?.instagram_username || image?.user?.username}
      </span>
      <span>
        <RxTwitterLogo className='social-icon' />/
        {image?.user?.twitter_username || image?.user?.name}
      </span>
    </div>
  )
}
export default socialHandles
