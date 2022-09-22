import styled from "styled-components"

const MainContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  .thecard {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
  }

  .signup-form {
    position: absolute;
    width:100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffc728;
    color: #333;
  }

  .login-form {
    position: absolute;
    width:100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffc728;
    color: #333;
  }

  /* .back {
    position: absolute;
    width:100%;
    height: 100%;
    backface-visibility: hidden;
    background: gray;
    color: #222;
    transform: rotateY(180deg);
  }

  #toggle-1 {
   position: absolute;
   top: -9999px;
   left: -9999px;
  }

  #toggle-label { 
    -webkit-appearance: push-button;
    -moz-appearance: button; 
    display: inline-block;
    margin: 60px 0 10px 0;
    cursor: pointer;
  }

  #toggle-1:checked ~ div {
    transform: rotateY(180deg);
  } */

`

export { MainContainer }