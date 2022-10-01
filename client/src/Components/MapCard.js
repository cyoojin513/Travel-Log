import React from 'react'
import mapboxgl from 'mapbox-gl'
import { MapContainer } from 'Styles/Map.style'

mapboxgl.accessToken='pk.eyJ1IjoiY3lvb2ppbjUxMyIsImEiOiJjbDhvd3VtdjgwMXc2M29xbWVxOTNmMXhnIn0.lf4m7kWS3gbVN6BWe9kOBA'

// function MapCard() {
//   return (
//     <div>MapCard</div>
//   )
// }

// export default MapCard

class Mapp extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      lng:-98.676392,
      lat:39.106667,
      zoom:2
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/cyoojin513/cl8q8k0yf006615mv5q0njtfk',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: false
    })
  }

  render(){
		return(
			<MapContainer>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'80vh'}}/>
			</MapContainer>
		)
	}
}

export default Mapp;