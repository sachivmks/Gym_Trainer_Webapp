import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import '../../assets/css/others/Gymlocator.css';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Gymlocator = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const inputRef = useRef();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries: ['places']
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleSearch = () => {
    const location = inputRef.current.value;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        map.setCenter(location);
        const service = new window.google.maps.places.PlacesService(map);
        const request = {
          location: location,
          radius: '3000',
          type: ['gym']
        };
        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setMarkers(results.map(place => ({
              position: place.geometry.location,
              title: place.name
            })));
          }
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return (
    <div className='locmain'>
      Find Gyms near you
      <div>
        <input type="text" placeholder='Enter Your Location' className='locinp' ref={inputRef} /><br />
        <button className='locsb' type='button' onClick={handleSearch}>Search</button>
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} title={marker.title} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Gymlocator;
