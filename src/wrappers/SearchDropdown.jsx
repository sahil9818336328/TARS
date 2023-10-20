import styled from 'styled-components'

const StyledSearchDropdownWrapper = styled.div`
  position: relative;

  .search-suggestions {
    z-index: 1;
    position: absolute;
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 300px;
    overflow: scroll;

    .single-suggestion {
      color: #4f4f4f;
      text-transform: capitalize;
      cursor: pointer;
      line-height: 1.2;
    }
  }
`

export default StyledSearchDropdownWrapper
