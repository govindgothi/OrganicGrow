import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { RouterProvider,createBrowserRouter,Route, createRoutesFromElements } from 'react-router-dom'
import { store } from './store/store.js'
import { Home } from './pages/Home.jsx'
import { Cart } from './pages/Cart.jsx'
import { ProductDetail } from './pages/ProductDetail.jsx'
import { ProductCategories } from './pages/ProductCategories.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path='ProductCategories' element={<ProductCategories />} />
      <Route path='ProductDetail' element={<ProductDetail />} />
      <Route path='Cart' element={<Cart />} />
      
      
      <Route path='Cart' element={<Cart />} />
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
