import styled from "styled-components"

const PostPhotoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 760px auto;
  margin: 35px 0px;

  .center-grid {
    display: grid;
    grid-column: 2;
    /* grid-template-columns: 400px 360px; */

    .first-column {
      /* display: grid;
      grid-column: 1; */

      .first-row {
        margin-top: 150px;

        h2 {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-weight: 100;
          color: #838383;
          margin-top: -20px;
        }

        input::file-selector-button {
          background-color: #191919;
          color: #BEBEBE;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          width: 300px;
          height: 45px;
          border: none;
          border-radius: 18px;
          cursor: pointer;
        }
      }
    }

    .image-container {
      /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      background-color: #191919;
      width: 630px;
      height: auto;
      border-radius: 25px;
      margin-top: 12px;
      padding: 25px 20px; */
      grid-column: 2;
      background-color: #191919;
      width: 360px;
      height: 500px;
      margin: -220px 400px 00px;
      border-radius: 80px;
    }

    .renderedPhotos {
      width: 330px;
      height: 470px;
      object-fit: cover;
      margin: 14px 0px 0px 15px;
      border-radius: 70px;
    } 

    .button-grid {
      margin-top: -55px;

      .submit {
        background-color: #5F5F5F;
        color: #D8D8D8;
        width: 170px;
        height: 50px;
        border-radius: 18px;
        margin-left: 10px;
        transition: 0.3s;

        :hover {
          background-color: #E71400;
        }
      }

      .back {
        background-color: #222222;
        color: #8E8E8E;
        width: 170px;
        height: 50px;
        border-radius: 18px;
        transition: 0.3s;

      :hover {
        background-color: #111111;
        }
      }
    }
  }
`

export { PostPhotoContainer }