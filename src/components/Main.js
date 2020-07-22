import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#c9d6ff',
    background: '-webkit-linear-gradient(to right, #c9d6ff, #e2e2e2)',
    background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: 'center',
  },
  paperBackground:{
    background: '#c9d6ff',
  }
}));

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box pt="20%" className={classes.center}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Ning Chen</h1>
          </Grid>
          <Grid item xs={12}>
            <Box pl="30%" pr="30%">
              <Paper elevation={0} className={classes.paperBackground}>
                <Box pt="10%" pb="10%" >
                  <h1>Hello</h1>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Main
