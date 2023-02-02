import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, theme, ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ChakraProvider>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </ChakraProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
