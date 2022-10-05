// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import camera_icon from '../Images/camera_icon.png'
// Styling
import { MapContainerStyle, Alert } from 'Styles/Map.style'

mapboxgl.accessToken='pk.eyJ1IjoiY3lvb2ppbjUxMyIsImEiOiJjbDhvd3VtdjgwMXc2M29xbWVxOTNmMXhnIn0.lf4m7kWS3gbVN6BWe9kOBA'

function MapCard({movie}) {

  const [ isClicked, setIsClicked ] = useState(true)
  const mapContainer = useRef()

  useEffect(() => {
    function handleMarkers() {
      let object = []
      for (let i = 0; i < movie.length; i++) {
        const data = movie[i]
        const array = {
          'type': 'Feature',
          'properties': {
            'description': 
              `<div>
                <h3>${data.city}</h3>
                <h4>${data.country}</h4>
                <h5>${data.date}</h5>
                <a href="/movie/${data.id}">Watch film</a>
              </div>`
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [data.lon, data.lat]
          }
        }
        object.push(array) 
      }
      return object
    }

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/cyoojin513/cl8q8k0yf006615mv5q0njtfk',
      center: [-98.676392, 39.106667],
      zoom: 2,
      attributionControl: false
    })

    map.on('load', () => {
      map.addSource('mapcard', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features':  handleMarkers()
        }
      })

      map.addLayer({
        'id': 'dots',
        'type': 'circle',
        'source': 'mapcard',
        'paint': {
          'circle-color': 'red',
          'circle-radius': 6,
        }
      })

      map.on('click', 'dots', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        new mapboxgl.Popup({
          offset: { 'bottom': [0, -10] },
        })
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
      })

      map.on('mouseenter', 'dots', () => {
        map.getCanvas().style.cursor = 'pointer'
        })
  
      map.on('mouseleave', 'dots', () => {
        map.getCanvas().style.cursor = ''
        })
    })
  }, [])

 return (
  <div>
    {isClicked
      ? <Alert onClick={() => setIsClicked(!isClicked)}>
          <img src={camera_icon} id='icon' alt='icon'/>
          <h3>Click New Film to create a movie</h3>
        </Alert>
      : null
    }
    <MapContainerStyle>
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet"/>
      <div ref={mapContainer} className='map-container' style={{width:'100%', height:'80vh'}}></div>
    </MapContainerStyle>
  </div>
 )
}

export default MapCard