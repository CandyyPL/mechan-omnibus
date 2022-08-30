import React from 'react'
import { Logo, Wrapper } from 'components/Topbar/Topbar.styles'
import busImg from 'assets/bus-small.png'

const Topbar = () => {
	return (
		<Wrapper>
			<Logo>
				<img src={busImg} alt='bus' />
				OMNIBUS
				<img src={busImg} alt='bus' />
			</Logo>
		</Wrapper>
	)
}

export default Topbar
