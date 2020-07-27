import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000'
  },
  copyright: {
    color: '#ffffff',
    textAlign: 'center',
  }
}));


function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box pb="2%" pt="4%">
        <p className={classes.copyright}>Copyright &copy; 2020 NingChen <br/>All rights reserved</p>
      </Box>
    </div>
  )
}

export default Footer
