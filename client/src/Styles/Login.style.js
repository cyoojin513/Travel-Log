import styled from "styled-components"

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 300px auto;

  .card-grid {
    grid-column: 2;
    display: grid;
    /* position: absolute;
    width: 100%;
    height: 100%; */
  }

  .login-form {
    margin-top: 150px;
    width: 300px;
    height: 360px;
    background: #0F0F0F;
    border-radius: 40px;
  }

  h2 {
    font-family: "Gill Sans", sans-serif;;
    font-size: 20px;
    font-weight: 100;
    color: #F1F1F1;
    margin: 70px 0px 25px 39px;
  }

  input {
    width: 230px;
    height: 43px;
    margin: 5px;
    border: none;
    border-radius: 15px;
    background-color: #1C1C1C;
    margin-left: 34px;
  }

  input::placeholder {
    font-size: 12px;
    padding-left: 13px;
  }


  input[type="submit"] {
    width: 44px;
    height: 18px;
    background: none;
    border: none;
    padding: 0;
    color: #8A8A8A;
    font-family: "Gill Sans", sans-serif;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 0.5px;
    margin: 8px 0px 43px 221px;
    cursor: pointer;
  }

  .signup-link {
    color: #8A8A8A;
    font-family: "Gill Sans", sans-serif;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 0.5px;
    margin-left: 217px;
    margin-top: -30px;
    text-decoration: none;
  }

  .signup-form {
    margin-top: 150px;
    width: 300px;
    height: 360px;
    background: #0F0F0F;
    border-radius: 40px;
  }

  .error {
    color: #8A8A8A;
    font-family: "Gill Sans", sans-serif;
    font-size: 14px;
    margin: 30px 0px 0px 30px
  }
`

export { MainContainer }