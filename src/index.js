import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StageProvider } from './context/StageContext'
import { CloudinaryContext } from 'cloudinary-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_NAME}>
    <StageProvider>
      <App />
    </StageProvider>
  </CloudinaryContext>
)
