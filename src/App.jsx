import React, { useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'

import { ThemeContext } from './context'
import Home from './components/Home'
import Gradient from './gradient/containers/Gradient'


const themes = {
  alvi: {
    background: '#ede6d1',
    color: '#626960',
    hover: 'rgba(0,0,0,0.2)'
  },
  tony: {
    background: '#a6b2a1',
    color: '#f1e5e6',
    hover: 'rgba(255,255,255,0.8)'
  }
}

const App = ({ classes }) => {
  const [theme, setTheme] = useState('alvi');
  const toggleTheme = () => setTheme(theme => theme === 'alvi' ? 'tony' : 'alvi');

  return (
  <ThemeContext.Provider value={[theme, toggleTheme]}>
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/gradient' component={Gradient} />
      </Router>
    </ThemeProvider>
  </ThemeContext.Provider>
)

}

export default App
