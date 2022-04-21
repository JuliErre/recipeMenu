import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import MenuContextProvider from './context/MenuContext'

ReactDOM.render(
  <React.StrictMode>

    <ChakraProvider>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
