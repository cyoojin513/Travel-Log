import styled from "styled-components"

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: auto 300px 30px 300px 30px auto;
  color: #8A8A8A;

  .slideshow {
    width: 350px;
    height: 500px;
    object-fit: cover;
  }
`

export { MovieContainer }