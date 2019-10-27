import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, toggleTheme } = this.context
    return (
      <button className="button" onClick={toggleTheme}>
        {isLightTheme ? 'Turn off' : 'Turn on'}
      </button>
    )
  }
}
