import React from 'react'
import { createUseStyles } from 'react-jss'
import ToggleComponent from 'react-toggle'
import './Toggle.css'

import { ReactComponent as CatIcon } from '../icons/cat.svg'

const useStyles = createUseStyles({
  toggleLabel: {
    display: 'flex',
  },
  spacer: {
    flexGrow: 1,
  },
  catIcon: {
    transform: 'scale(0.75) translate(-5px, -4px)',
  },
})

const Toggle = ({ toggleTheme }) => {
  const classes = useStyles()

  return (
    <label className={classes.toggleLabel}>
      <div className={classes.spacer} />
      <ToggleComponent
        defaultChecked={false}
        icons={{
          checked: null,
          unchecked: <CatIcon className={classes.catIcon} />,
        }}
        onChange={toggleTheme}
      />
    </label>
  )
}

export default Toggle
