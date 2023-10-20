import Wrapper from '../wrappers/Navbar.styled'
import logo from '../assets/logo.png'
import logoTwo from '../assets/logoTwo.png'
import SearchInput from './SearchInput'
import { useContext } from 'react'
import { globalContext } from '../context'
import { Link, useParams } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GoSearch } from 'react-icons/go'
import { debounce } from '../utils'
import SearchDropdown from './SearchDropdown'

const Navbar = () => {
  const {
    isDarkTheme,
    toggleDarkTheme,
    setQuery,
    searchSuggestions,
    query,
    searchOpen,
    setSearchOpen,
  } = useContext(globalContext)

  // FOR GETTING IMAGE ID
  const data = useParams()

  // USING DEBOUNCE TO LIMIT API CALL ON EVERY KEY STROKE
  const handleChange = debounce((value) => {
    setQuery(value)
    setSearchOpen(true)
  }, 1000)

  const updatedSuggestions =
    query &&
    searchSuggestions?.map((suggestion) => {
      return suggestion?.alt_description
    })

  return (
    <Wrapper>
      <div className='container'>
        <div className='navbar'>
          <Link to='/'>
            <img src={isDarkTheme ? logoTwo : logo} alt='tars-logo' />
          </Link>

          <div className='nav-main'>
            <div className='search-container'>
              <SearchInput
                onChange={(e) => handleChange(e.target.value)}
                disabled={data?.id}
              />
              <SearchDropdown
                searchOpen={searchOpen}
                suggestions={updatedSuggestions}
                setSearchOpen={setSearchOpen}
                setQuery={setQuery}
              />
            </div>
            <div className='nav-options'>
              <ul className='list'>
                <li className='nav-list'>
                  <a href='#'>Explore</a>
                </li>
                <li className='nav-list'>
                  <a href='#'>Collection</a>
                </li>
                <li className='nav-list'>
                  <a href='#'>Community</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mode'>
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}{' '}
            <input type='checkbox' onChange={toggleDarkTheme} />
          </div>
          <div className='phone-options'>
            <GoSearch />
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
