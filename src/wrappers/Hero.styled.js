import styled from 'styled-components'

const StyledHeroWrapper = styled.section`
  .main {
    position: relative;
    .banner-img {
      width: 100%;
      height: 500px;
      background-repeat: no-repeat;
      background-position: center;
      object-fit: cover;
    }

    .info-container {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      @media screen and (max-width: 950px) {
        text-align: center;
        width: 100%;
        padding: 0 3rem;
        > div {
          width: 100%;
        }
      }

      > div,
      input {
        background-color: #fff;
      }

      .info-title {
        font-size: 2rem;
        color: var(--white);
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.5rem;

        @media screen and (max-width: 670px) {
          font-size: 1.5rem;
        }
      }

      .info-description {
        color: #c4c4c4;
      }

      .input-search {
        width: 800px;

        @media screen and (max-width: 950px) {
          width: 100%;
        }
      }
    }
  }
`

export default StyledHeroWrapper
