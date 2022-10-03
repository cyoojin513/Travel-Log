import styled from "styled-components"

const MovieContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;  
  color: #B9B9B9;

  .my-movie-title {
    grid-row: 1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin: 20px 0px 0px 20px
  }
`

const PreReleaseContainer = styled.div`
  display: grid;
  grid-template-rows:80px 1fr;  
  color: #B9B9B9;

  .pre-release-title {
    grid-row: 1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin: 60px 0px 0px 20px
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 5px 1fr 5px;
  margin-bottom: 150px;

  .card-grid {
    display: grid;
    grid-column: 2;
    margin-top: 30px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 180px));
    grid-template-rows: repeat(auto-fit, 200px);
    /* gap: 3px; */
  }
`

const CardStyle = styled.div`
  display: grid;
  grid-template-rows: 100px 30px 20px 50px;
  width: 95%;
  max-width: 150px;
  min-width: 110px;
  max-height: 200px;
  margin-left: 16px;
  background-color: #171717;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
  background-color: #0F0F0F;
  }

  h3 {
    margin: 20px 0px 0px 15px;
    font-family: "Gill Sans", sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: #F1F1F1;
  }

  h4 {
    font-family: "Gill Sans", sans-serif;
    font-size: 8pt;
    margin: 35px 0px 0px 15px;
  }

  h5 {
    font-family: "Gill Sans", sans-serif;
    font-size: 8pt;
    margin: 23px 0px 0px 15px;
  }
`

const AlertStyling = styled.div`
  position: relative;
`

export { MovieContainer, PreReleaseContainer, CardContainer, CardStyle, AlertStyling }