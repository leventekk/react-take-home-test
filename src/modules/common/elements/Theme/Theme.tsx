import type { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider, createGlobalStyle, type DefaultTheme } from 'styled-components'
import normalize from 'styled-normalize'

const theme: DefaultTheme = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary: '#0D2436',
    text: '#fff',
    secondary: '#ccc',
    accent: '#009B86',
    accentHover: '#34AC9C'
  }
}

const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
  }
`

const Theme = ({ children }: PropsWithChildren): ReactElement => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
