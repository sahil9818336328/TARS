import styled from 'styled-components'

const StyledSingleImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    max-width: 1000px;

    .close-icon {
      display: block;
      margin-left: auto;
      margin-right: -1rem;
      margin-bottom: -1rem;
      cursor: pointer;
      position: relative;
      z-index: 10;
      padding: 5px;
      border-radius: 50%;
      font-size: 2rem;
      color: #4f4f4f !important ;
      background-color: var(--white);
    }

    .img-container {
      position: relative;

      .single-image {
        width: 1000px;
        height: 550px;
        object-fit: cover;
        border-radius: 1rem;
        display: block;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        @media screen and (max-width: 970px) {
          width: 100%;
        }
      }
    }

    .img-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .footer-left {
        color: #ececec;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 13px;

        @media screen and (max-width: 850px) {
          margin-left: auto;
        }

        position: relative;
        .react-share__ShareButton {
          width: 20px;
          height: 20px;
          background-color: red;
          z-index: 1000;
          position: absolute;
          width: 79.84px;
          height: 27.78px;
          left: 0;
        }

        div {
          cursor: pointer;
          padding: 0.4rem 0.6rem;
          gap: 0.5rem;
          border: 1px solid var(--white);
          display: flex;
          border-radius: 0.2rem;
          align-items: center;
        }
      }

      .footer-right {
        margin-bottom: 0.5rem;
        justify-self: flex-end;

        @media screen and (max-width: 850px) {
          display: none;
        }

        .download {
          cursor: pointer;
          background-color: #3cb46e;
          color: var(--white);
          padding: 1rem 2rem;
          border-radius: 0.3rem;
          font-size: 13px;
        }
      }
    }
    .image-description {
      background-image: var(--white);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      width: 100%;
      padding: 2rem;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 480px) {
          flex-direction: column;
          gap: 0.5rem;
        }

        .header-left {
          .user-info {
            display: flex;
            align-items: center;
            gap: 1rem;

            .user-img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }

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
                font-weight: 600;
              }
            }

            .social-handles {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-left: 2rem;
              font-style: italic;

              @media screen and (max-width: 850px) {
                display: none;
              }

              span {
                display: flex;
                align-items: center;
                color: #a7a7a7;
                font-size: 13px;
                font-weight: 600;

                .social-icon {
                  font-size: 1.3rem;
                }
              }
            }
          }
        }

        .header-right {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          .phone-download {
            justify-self: flex-end;

            @media screen and (min-width: 851px) {
              display: none;
            }

            .download {
              cursor: pointer;
              background-color: #3cb46e;
              color: var(--white);
              padding: 1rem 2rem;
              border-radius: 0.3rem;
              font-size: 13px;
            }
          }
          .image-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            @media screen and (max-width: 850px) {
              display: none;
            }

            p {
              font-size: 1.1rem;
              color: #858484;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;

              .like-icon {
                font-size: 1.4rem;
              }

              .likes {
                font-size: 1.1rem;
              }

              span {
                font-size: 14px;
              }
            }
          }
        }
      }

      .footer {
        margin-top: 2rem;
        h3 {
          margin-bottom: 0.5rem;
          color: #4f4f4f;
          font-weight: 600;
        }

        .all-tags {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;

          .single-tag {
            background-color: #ececec;
            padding: 0.5rem 0.7rem;
            border-radius: 0.3rem;
            color: #4f4f4f;
            font-size: 12px;
            text-transform: capitalize;
          }
        }
      }

      .phone-view {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        @media screen and (min-width: 851px) {
          display: none;
        }

        @media screen and (max-width: 550px) {
          margin-top: 3rem;
          flex-direction: column;
          gap: 0.5rem;
        }

        .social-handles {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-style: italic;

          span {
            display: flex;
            align-items: center;
            color: #a7a7a7;
            font-size: 13px;
            font-weight: 600;

            .social-icon {
              font-size: 1.3rem;
            }
          }
        }
        .image-info {
          display: flex;
          align-items: center;
          gap: 1rem;

          p {
            font-size: 1.1rem;
            color: #858484;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .like-icon {
              font-size: 1.4rem;
              margin-bottom: 2px;
            }

            .likes {
              font-size: 1.1rem;
            }

            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`

export default StyledSingleImageWrapper
