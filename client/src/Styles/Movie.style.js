import styled from "styled-components"

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: auto 750px auto;
  margin: 80px 0px;
  color: #8A8A8A;

  .center-grid {
    display: grid;
    grid-column: 2;
    grid-template-columns: 350px 50px 360px 30px;
  
    .first-column {

      h1 {
        font-family: "Gill Sans", sans-serif;
        font-size: 60px;
        font-weight: 100;
        color: #F1F1F1;
        margin: 50px 0px 0px 0px;
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
      grid-template-rows: 250px 250px;
      padding-left: 12px;

      #pencil {
        width: 18px;
        height: auto;
        margin: 223px 0px 0px 3px;
        cursor: pointer;
      }
      
      #delete {
        width: 20px;
        height: auto;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }

  .photo-container {
    animation: fadeIn 3s;

    .photo {
      width: 360px;
      height: 500px;
      object-fit: cover;
      border-radius: 80px;
    }

    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  }

  #date {
    font-family: "Gill Sans", sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #8A8A8A;
    writing-mode: vertical-rl;
    margin-top: 220px;
  }
`

export { MovieContainer }