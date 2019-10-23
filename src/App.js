import React from 'react'
// import logo from './logo.svg'
import Box from './components/Box'
import ThemeContextProvider from './contexts/ThemeContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  )
}

export default App
