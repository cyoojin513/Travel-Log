import styled from "styled-components"

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 80px 80px 1fr 80px;

  #logo-container {
    margin-left: 15px;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    margin: 18px 13px;
    text-align: right;
    font-size: 13px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #B9B9B9;
  }

  .sign-out {
    margin: 18px 12px;
    text-align: right;
    font-size: 13px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #B9B9B9;
    cursor: pointer;
  }

  #login-page-logo {
    width: 130px;
    height: auto;
    margin: 10px 0px 0px 15px;
  }
`

const Logo = styled.div`

  img {
    width: 32px;
    height: auto;
    margin: -13% -3px 0px 0px;
    opacity: 90%;
  }
`

export { NavContainer, Logo }