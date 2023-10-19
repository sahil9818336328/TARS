/* eslint-disable react/prop-types */
import Wrapper from '../wrappers/SearchInput.styled'
import { GoSearch } from 'react-icons/go'

// REUSABLE COMPONENT IN NAVBAR AND HERO
const SearchInput = ({
  placeholder = 'Search Images here...',
  width = '',
  height = '43px',
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <Wrapper width={width} height={height}>
      <GoSearch className='search-icon' />
      <input
        type='text'
        placeholder={placeholder}
        className='input-search'
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  )
}
export default SearchInput
