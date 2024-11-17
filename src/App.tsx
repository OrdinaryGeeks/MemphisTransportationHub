import { useForm } from 'react-hook-form';

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import LocationEntry from './components/LocationEntry'
import DriverSignUp from './components/DriverSignUp'
import RecieveCall from './components/RecieveCall'



function App() {
 
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { dayOfWeek: "Sunday" }
  });

  const onSubmit = (data) => {
      console.log(data);
      return 
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RecieveCall handleSubmit={handleSubmit(onSubmit)} register={register} watch={watch}/>
    },
    {
      path: "/driver",
      element: <DriverSignUp watch={watch}/>
    },
    {
      path: "/map",
      element: <LocationEntry watch={watch}/>,
    },
  ]);

  return (
    
    <RouterProvider router={router} />

<RequestPickup/>


      
    
  )
}

export default App
