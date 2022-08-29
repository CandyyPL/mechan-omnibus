import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	background-color: #26a96c;
	box-shadow: 0 0 20px 5px #26a96c;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const Logo = styled.div`
	width: fit-content;
	height: fit-content;
	max-height: 100px;

	font-size: 50px;
	font-family: 'Chango', sans-serif;
	letter-spacing: 5px;
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 80px;

		margin: 0 10px;

		&:first-child {
			transform: scaleX(-1);
		}
	}
`
