import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from 'assets/styles/GlobalStyle'
import App from 'pages/App/App'
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Nunito', 'Chango'],
	},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
)
