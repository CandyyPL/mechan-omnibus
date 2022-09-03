import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from 'assets/styles/GlobalStyle'
import App from 'pages/App/App'
import WebFont from 'webfontloader'
import AuthProvider from 'providers/AuthProvider'

WebFont.load({
  google: {
    families: ['Nunito', 'Chango', 'Charmonman', 'Montserrat'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
