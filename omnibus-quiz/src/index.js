import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from 'assets/styles/GlobalStyle'
import App from 'pages/App/App'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nunito', 'Chango', 'Charmonman'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
