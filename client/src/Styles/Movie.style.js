import styled from "styled-components"

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: auto 750px auto;
  margin: 80px 0px;
  color: #8A8A8A;

  .center-grid {
    display: grid;
    grid-column: 2;
    grid-template-columns: 370px 30px 360px 30px;
  
    .first-column {

      h1 {
        font-family: "Gill Sans", sans-serif;
        font-size: 60px;
        font-weight: 100;
        color: #F1F1F1;
        margin: 0px;
      }

      #country {
        font-family: "Gill Sans", sans-serif;
        font-size: 12px;
        font-weight: 100;
        color: #F1F1F1;
        margin: 2px 0px;
      }

      #note {
        font-family: "Gill Sans", sans-serif;
        font-size: 12px;
        font-weight: 100;
        color: #8A8A8A;
        margin: 40px 30px 0px 0px;
      }
    }

    .second-column {
      display: grid;
      grid-column: 2;

      button {
        width: 18px;
        height: 18px;
      }
    }

  
  }
  .photo {
    width: 360px;
    height: 500px;
    object-fit: cover;
  }
`

export { MovieContainer }