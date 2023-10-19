import styled from 'styled-components'

const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .loading-img {
    width: 250px;
  }

  .loading-text {
    text-align: center;
    line-height: 1.2;
    color: #a7a7a7;
    font-weight: 600;
    width: 300px;
  }
`

export default StyledLoadingWrapper
