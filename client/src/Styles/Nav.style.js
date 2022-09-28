import styled from "styled-components"

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 1fr 80px;

  a {
    text-decoration: none;
    margin: 18px 10px;
    text-align: right;
    font-size: 13px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #B9B9B9;
  }

  //logo
  p {
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
`

export { NavContainer }