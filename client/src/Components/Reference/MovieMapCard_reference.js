// @ts-nocheck
import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
// Styling
import { MovieMapContainer } from '../../Styles/Map.style'

mapboxgl.accessToken='pk.eyJ1IjoiY3lvb2ppbjUxMyIsImEiOiJjbDhvd3VtdjgwMXc2M29xbWVxOTNmMXhnIn0.lf4m7kWS3gbVN6BWe9kOBA'

function MovieMapCard({movie}) {

  const mapContainer = useRef()

  useEffect(() => {
    const movieData = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [movie.lon, movie.lat]
      }
    }

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/cyoojin513/cl8q8k0yf006615mv5q0njtfk',
      center: [movie.lon, movie.lat],
      zoom: 10,
      attributionControl: false
    })

    map.on('load', () => {
      map.addSource('mapcard', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [ movieData ]
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
    })
  }, [])

 return (
  <MovieMapContainer>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet"/>
    <div ref={mapContainer} className='map-container' style={{width:'53vh', height:'30vh'}}></div>
  </MovieMapContainer>
 )
}

export default MovieMapCard