import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import LocationEntry from './components/LocationEntry'
import DriverSignUp from './components/DriverSignUp'
import RecieveCall from './components/RecieveCall'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecieveCall/>
  },
  {
    path: "/driver",
    element: <DriverSignUp/>
  },
  {
    path: "/map",
    element: <LocationEntry/>,
  },
]);

function App() {
 

  return (
    
    <RouterProvider router={router} />



      
    
  )
}

export default App
