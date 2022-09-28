import styled from "styled-components"

const MyPageContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr 80px 1fr;  
  color: #B9B9B9;

  .my-movie-title {
    grid-row: 1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin: 20px 0px 0px 30px
  }

  .pre-release-title {
    grid-row: 3;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin: 60px 0px 0px 30px
  }
`

export { MyPageContainer }