import styled from 'styled-components'

const StyledInputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--search-input-color);
  border-radius: 6px;
  gap: 0.6rem;
  padding: 0 0.5rem;

  .search-icon {
    color: #c4c4c4;
    font-size: 1.5rem;
  }

  .input-search {
    background-color: var(--search-input-color);
    height: ${(props) => props.height};
    border: 1px;
    outline: none;
  }
  ::placeholder {
    color: #c4c4c4;
    font-size: 12px;
  }
`

export default StyledInputSearchWrapper
