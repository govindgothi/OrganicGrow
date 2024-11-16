import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { RouterProvider,createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import { store } from './store/store.js'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx' 
import ProductFeature from './pages/ProductFeature.jsx'
import About from './pages/About.jsx'
import UserDetail from './pages/UserDetail.jsx'
import Contact from './pages/Contact.jsx'
import SignIn from './pages/SignIn.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />  
      <Route path='Home' element={<Home />} />
      <Route path='ProductFeature' element={<ProductFeature />} />    
      <Route path='Cart' element={<Cart />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='SignIn' element={<SignIn />} />
      <Route path='UserDetail' element={<UserDetail />} >
       <Route path='UserDetail' element={<UserDetail />} />
       <Route path='UserDetail' element={<UserDetail />} />
      </Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
