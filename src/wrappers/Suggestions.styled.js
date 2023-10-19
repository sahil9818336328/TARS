import styled from 'styled-components'

const StyledSuggestionsWrapper = styled.div`
  margin-top: 3rem;
  .suggestions-title {
    h3 {
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 1rem;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    .single-tag {
      padding: 0.6rem 1.5rem;
      color: var(--text-color);
      border: 1px solid #c4c4c4;
      border-radius: 0.3rem;
      font-size: 12px;
      text-transform: capitalize;
    }
  }
`

export default StyledSuggestionsWrapper
