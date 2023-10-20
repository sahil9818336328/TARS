import styled from 'styled-components'

const StyledNavbarWrapper = styled.nav`
  margin: 2rem 0;

  .navbar {
    display: flex;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 1140px) {
      gap: 2rem;
    }

    @media screen and (max-width: 955px) {
      justify-content: space-between;
    }

    .phone-options {
      display: flex;
      gap: 0.5rem;
      font-size: 1.5rem;

      @media screen and (min-width: 956px) {
        display: none;
      }
    }

    .nav-main {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 3rem;

      @media screen and (max-width: 1040px) {
        gap: 2rem;
      }

      @media screen and (max-width: 955px) {
        display: none;
      }

      .search-container {
        width: 100%;

        .input-search {
          width: 100%;
        }
      }

      .nav-options {
        .list {
          display: flex;
          align-items: center;
          gap: 3rem;
          font-weight: 500;

          @media screen and (max-width: 1040px) {
            gap: 1rem;
          }

          .nav-list {
            a {
              color: var(--text-color);
            }
          }
        }
      }
    }

    .mode {
      display: flex;
      align-items: center;
      font-weight: 500;
      gap: 0.8rem;
      white-space: nowrap;

      @media screen and (max-width: 955px) {
        display: none;
      }
    }

    input[type='checkbox'] {
      position: relative;
      width: 40px;
      height: 20px;
      -webkit-appearance: none;
      appearance: none;
      background: #858484;
      outline: none;
      border-radius: 2rem;
      cursor: pointer;
      box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);
    }

    input[type='checkbox']::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s;
    }

    input[type='checkbox']:checked::before {
      transform: translateX(100%);
      background: #858484;
    }

    input[type='checkbox']:checked {
      background: #fff;
    }
  }
`

export default StyledNavbarWrapper
