import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import LocationEntry from './components/LocationEntry'

function App() {
 

  return (
    
    <APIProvider apiKey={"redacted"}  onLoad={() => console.log('Maps API has loaded.')}>
      
      <LocationEntry/>



      </APIProvider>
    
  )
}

export default App
