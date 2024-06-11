import React from 'react'
import ReactDOM from 'react-dom/client'
import { AlurafixApp } from './AlurafixApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <AlurafixApp />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>,
)
