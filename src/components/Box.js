import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Box extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context
          const theme = isLightTheme ? light : dark
          return (
            <div
              className="box"
              style={{ color: theme.text, backgroundColor: theme.bg }}
            >
              The Box
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
