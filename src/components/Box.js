import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export default class Box extends Component {
  fibonaaci = n => {
    const F0 = 0
    const F1 = 1
    let fib = [F0, F1]

    for (let i = 0; i < n - 1; i++) {
      fib[i + 2] = fib[i] + fib[i + 1]
    }

    return fib[n]
  }
  render() {
    console.log('fib9', this.fibonaaci(9))
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {ThemeContext => {
              const { isLogin, toggleAuth } = authContext
              const { isLightTheme, light, dark } = ThemeContext
              const theme = isLightTheme ? light : dark
              return (
                <div
                  className="box"
                  style={{ color: theme.text, backgroundColor: theme.bg }}
                >
                  The Box
                  <div className="auth" onClick={toggleAuth}>
                    {isLogin ? 'Log in' : 'Log out'}
                  </div>
                </div>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}
