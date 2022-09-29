import styled from "styled-components"

const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: auto 300px auto;

  .card-grid {
    grid-column: 2;
    display: grid;
    grid-template-rows: 225px 50px auto;
    margin-top: 150px;
    width: 300px;
    height: 360px;
    background: #0F0F0F;
    border-radius: 40px;
  }

  .paper-flight {
    width: 230px;
    height: auto;
    margin: 15px 0px -10% 50px;
  }

  h2 {
    font-family: "Gill Sans", sans-serif;;
    font-size: 20px;
    font-weight: 100;
    color: #F1F1F1;
    margin: 10px 0px 0px 0px;
    text-align: center;
  }

  .login-link {
    text-align: center;
  }

  a {
    text-align: center;
    color: #8A8A8A;
    font-family: "Gill Sans", sans-serif;
    text-decoration: none;
    font-size: 12px;
    font-weight: 100;
  }
`

export { ErrorContainer }
