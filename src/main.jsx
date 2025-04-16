import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Postcard from './pages/Postcard.jsx';
import Singlepage from './pages/Singlepage.jsx';
import Category from './pages/Category.jsx';
import Notfound from './pages/Notfound.jsx';
 
import Login from './dashbord/Login';
import Signup from './dashbord/Signup';
import Dashbord from './dashbord/Dashbord';
import Landingpage from './pages/Landingpage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Testimonial from './component/Testimonial';
import About from './pages/About';
import Conditions from './pages/Conditions';
import PrivacyPolicy from './pages/PrivacyPolicy';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
       
      {
        path:"/",
        element:<Landingpage/>
      },
      {
        path:"/testimonial",
        element:<Testimonial/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },

      {
        path:"/postcard",
        element:<Postcard/>
      },
      {
        path:"/singlepage/:id",
        element:<Singlepage/>
      },
      {
        path:"/category/:cat",
        element:<Category/>
      },
      
      {
        path:"/conditions",
        element:<Conditions/>
      },
      {
        path:"/privacyPolicy",
        element:<PrivacyPolicy/>
      },
      {
        path:"*",
        element:<Notfound/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/dashbord",
    element:<Dashbord/>
  }
]);


createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <RouterProvider router={router}>   
       
    </RouterProvider>
  </StrictMode>
 
 
)
