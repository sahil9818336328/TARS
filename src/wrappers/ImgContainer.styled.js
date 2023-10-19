import styled from 'styled-components'

const StyledImgContainerWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

export default StyledImgContainerWrapper
