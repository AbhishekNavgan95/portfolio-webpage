import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SmoothScroll >
      <App />
    </SmoothScroll>
  </BrowserRouter>
)
