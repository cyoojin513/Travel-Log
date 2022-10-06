import styled from "styled-components"

const MapContainerStyle = styled.div`
  margin: 15px 20px 0px 20px;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .mapboxgl-ctrl-logo {
    display: none !important;
  }

  .mapboxgl-popup-tip {
    display: none !important;
  }

  .mapboxgl-popup-content {
    margin-bottom: 5px;
    background-color: #010000;
    border-color: #3B3B3B;
    border-style: solid;
    border-width: thin;
    border-radius: 15px;
    width: 120px;
    height: 170px;
    animation: fadeIn 0.5s;

    .mapboxgl-popup-close-button {
      color: #6D6D6D;
    }

    h3 {
      font-family: "Gill Sans", sans-serif;
      font-size: 20px;
      font-weight: 100;
      color: #F1F1F1;
    }

    h4 {
      font-size: 8pt;
      margin-top: -15%
    }

    h5 {
      margin-top: 40px;
      margin-bottom: -1px
    }

    a {
      text-decoration: none;
      color: #8A8A8A;
      font-size: 8pt;
    }
  }
`

const Alert = styled.div`
  position: absolute;
  margin: 30px 0px 0px 40px;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 3px 2px rgb(00 00 00 / 10%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  animation: fadeIn 2s;
  cursor: pointer;

  h3 {
    margin: 11px 15px 11px 9px;
    font-family: "Gill Sans", sans-serif;
    font-size: 11px;
    font-weight: 100;
  }

  #icon {
    margin-left: 15px;
    width: 15px;
    height: auto;
    opacity: 80%;
  }
`

export { MapContainerStyle, Alert }