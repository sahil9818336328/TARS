import styled from 'styled-components'

const StyledPhotosWrapper = styled.div`
  .unsplash-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.8rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: block;
  }

  .img-description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-secondary-color);
    border: 1px solid var(--border-color);
    border-top: 0;
    border-radius: 0.8rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    padding: 1rem;

    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;

      .user {
        .user-name {
          color: var(--text-color);
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .user-social {
          color: #a7a7a7;
          font-style: italic;
          font-size: 13px;
          font-weight: 500;
        }
      }
    }

    .user-img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid var(--grey-200);
    }

    .likes {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      font-weight: 600;
      color: var(--text-color);
      .like-icon {
        font-size: 1.3rem;
      }

      span {
        padding-top: 0.2rem;
      }
    }
  }
`

export default StyledPhotosWrapper
