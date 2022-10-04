import styled from "styled-components"

const PostPhotoContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 200px;
  /* grid-template-columns: 30px 1fr 30px; */
  margin-top: 35px;

  .first-row {
    display: flex;
    justify-content: center;
    grid-row: 1;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    h2 {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 100;
      color: #838383;
      margin-left: 60px;
      margin-right: 20px;
    }

    input::file-selector-button {
      background-color: #191919;
      color: #BEBEBE;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      width: 380px;
      height: 45px;
      border: none;
      border-radius: 25px;
      margin: 12px 18px 0px 40px;
      cursor: pointer;
    }
  }

  .image-container-wrapper{
    display: flex;
    justify-content: center;

    .image-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      background-color: #191919;
      width: 630px;
      height: auto;
      border-radius: 25px;
      margin-top: 12px;
      padding: 25px 20px;
    }

    .renderedPhotos {
      border-radius: 15px;
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin: 0px 0px 8px 9px;
    } 
  }

  .button-grid {
    display: grid;
    grid-row: 3;
    grid-template-columns: 385px 385px;
    justify-content: center;

    .submit {
      background-color: #5F5F5F;
      color: #D8D8D8;
      width: 330px;
      height: 50px;
      margin-top: 20px;
      margin-left: 8px;
      border-radius: 18px;
      transition: 0.3s;

      :hover {
        background-color: #E71400;
      }
    }

    .back {
      background-color: #222222;
      color: #8E8E8E;
      width: 330px;
      height: 50px;
      margin-top: 20px;
      margin-left: 48px;
      border-radius: 18px;
      transition: 0.3s;

    :hover {
      background-color: #111111;
      }
    }
  }
`

export { PostPhotoContainer }