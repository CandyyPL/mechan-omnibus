import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App/App'
import WebFont from 'webfontloader'
import AllProviders from '@/providers/AllProviders'

WebFont.load({
  google: {
    families: ['Nunito', 'Chango', 'Charmonman', 'Montserrat'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>
)
