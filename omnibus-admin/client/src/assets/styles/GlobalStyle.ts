import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
