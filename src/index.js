import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StageProvider } from './context/StageContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StageProvider>
    <App />
  </StageProvider>
)
