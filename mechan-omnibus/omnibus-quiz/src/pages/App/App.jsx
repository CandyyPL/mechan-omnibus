import React from 'react'
import { Wrapper } from 'pages/App/App.styles'
import Topbar from 'components/Topbar/Topbar'
import TopPart from 'components/TopPart/TopPart'

const App = () => {
	return (
		<Wrapper>
			<Topbar />
			<TopPart />
		</Wrapper>
	)
}

export default App
