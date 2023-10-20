import Wrapper from '../wrappers/Hero.styled'
import banner from '../assets/banner.png'
import SearchInput from '../components/SearchInput'
import { useContext } from 'react'
import { globalContext } from '../context'
import { debounce } from '../utils'

const Hero = () => {
  const { query, setQuery } = useContext(globalContext)

  // USING DEBOUNCE TO LIMIT API CALL ON EVERY KEY STROKE
  const handleChange = debounce((value) => {
    setQuery(value)
  }, 1000)

  // HIDE HERO SECTION IF QUERY IS EMPTY OR IF IT'S THE DEFAULT VIEW
  return (
    !query && (
      <Wrapper>
        <div className='main'>
          <img src={banner} alt='banner-img' className='banner-img' />
          <div className='info-container'>
            <h3 className='info-title'>
              Download High Quality Images by creators
            </h3>
            <p className='info-description'>
              Over 2.4 million+ stock Images by our talented community
            </p>

            <SearchInput
              placeholder='Search high resolution Images, categories, wallpapers'
              background='#fff'
              height='40px'
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </Wrapper>
    )
  )
}
export default Hero
