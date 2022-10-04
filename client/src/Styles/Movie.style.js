import styled from "styled-components"

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: auto 800px auto;
  color: #8A8A8A;

  .center-grid {
    display: grid;
    grid-column: 2;
    grid-template-columns: 410px 30px 330px 30px;
  
    .first-column {
      display: grid;
      grid-template-rows: 300px 50px 300px;
    }

    .second-column {
      display: grid;
      grid-column: 3;
    }

  
  }
  .slideshow {
    width: 350px;
    height: 500px;
    object-fit: cover;
  }
`

export { MovieContainer }