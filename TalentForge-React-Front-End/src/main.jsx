import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { AuthProvider } from './authentication/AuthContext'
import { AppContextProvider } from './authentication/AppContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider value={{token: 'token'}}>
    <AppContextProvider>
      <App />
      </AppContextProvider>
    </AuthProvider>
  </>
)
