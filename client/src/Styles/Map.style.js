import styled from "styled-components"

const MapContainerStyle = styled.div`
  margin: 15px 20px 0px 20px;

  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;

  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
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
    font-family: "Gill Sans", sans-serif;;
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

export { MapContainerStyle }