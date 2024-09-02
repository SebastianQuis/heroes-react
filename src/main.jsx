import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <HeroesApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
