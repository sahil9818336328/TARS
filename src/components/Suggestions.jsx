/* eslint-disable react/prop-types */

import { useContext } from 'react'
import Wrapper from '../wrappers/Suggestions.styled'
import { globalContext } from '../context'

// WHILE SEARCHING FOR AN IMAGE, IT WILL SHOW RELATED SUGGESTIONS AND THE DATA IS DYNAMIC I.E COMING FROM UNSPLASH API.
const Suggestions = ({ photos }) => {
  const { query } = useContext(globalContext)
  const updatedSuggestions = photos?.map((suggestion) => {
    const { tags } = suggestion

    return tags
  })

  // CONVERTING ARRAY OF ARRAYS INTO ARRAY OF OBJECTS
  const tags = updatedSuggestions.flatMap((innerArray) =>
    innerArray.map((obj) => obj.title)
  )

  return (
    <Wrapper>
      <div className='container'>
        <div className='suggestions-title'>
          <h3>{query}</h3>
        </div>
        <div className='tags'>
          {/* AS TAGS WERE GETTING/COMING REPEATED FROM API DATA, USED SET TO RENDER UNIQUE TAGS */}
          {[...new Set(tags)]?.map((tag, i) => {
            return (
              <span key={i} className='single-tag'>
                {tag}
              </span>
            )
          })}
        </div>
      </div>{' '}
    </Wrapper>
  )
}
export default Suggestions
