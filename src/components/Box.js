import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Box extends Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark
    return (
      <div
        className="box"
        style={{ color: theme.text, backgroundColor: theme.bg }}
      >
        The Box
      </div>
    )
  }
}
