/* eslint-disable react/prop-types */
import Wrapper from '../wrappers/SearchDropdown'
const SearchDropdown = ({
  searchOpen,
  suggestions,
  setSearchOpen,
  setQuery,
}) => {
  return (
    searchOpen && (
      <Wrapper>
        <div className='search-suggestions'>
          {suggestions?.map((suggestion, i) => {
            return (
              <p
                key={i}
                className='single-suggestion'
                onClick={() => {
                  setSearchOpen(false)
                  setQuery(suggestion)
                }}
              >
                {suggestion}
              </p>
            )
          })}
        </div>
      </Wrapper>
    )
  )
}
export default SearchDropdown
