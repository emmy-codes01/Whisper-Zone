import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import './index.css'

import App from './App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const router = createBrowserRouter([{
  path: '/',
  element: <SignIn />,
},
  {
    path: 'SignUp',
  element: <SignUp />
  },
  {
    path: 'SignIn',
  element: <SignIn />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
    {/* <App /> */}
  </StrictMode>
)
