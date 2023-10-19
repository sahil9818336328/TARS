import Wrapper from '../wrappers/Loading.styled'
import loading from '../assets/loading.png'

const Loading = () => {
  // SHOWS LOADING WHILE FETCHING DATA
  return (
    <Wrapper>
      <img src={loading} alt='loader-img' className='loading-img' />
      <h3 className='loading-text'>Loading some awesome Images...</h3>
    </Wrapper>
  )
}
export default Loading
