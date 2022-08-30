import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from 'assets/styles/GlobalStyle'
import WebFont from 'webfontloader'
import App from 'pages/App/App'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
