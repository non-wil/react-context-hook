import React from 'react'
import Box from './components/Box'
import ThemeToggle from './components/ThemeToggle'
import ThemeContextProvider from './contexts/ThemeContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  )
}

export default App
