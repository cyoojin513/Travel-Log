import styled from "styled-components"

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 1fr;

  a {
    text-decoration: none;
    padding-top: 15px;
    margin-right: 20px;
    text-align: right;
    font-size: 13px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #B9B9B9;
  }
`

export { NavContainer }