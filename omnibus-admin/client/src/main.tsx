import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import App from '@/pages/App/App'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
