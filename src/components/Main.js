import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import faceImage from '../ning.jpg'
import List from '@material-ui/core/List';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: '#fffcdc'
    backgroundColor: '#FFFFFF'
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
    background: '#fffcdc',
    fontFamily: 'cursive;'
  },
  image: {
    hight: '20%',
    width: '20%'
  },
  name: {
    fontFamily: 'cursive',
    fontSize: '30px'
  },
  skill: {
    fontFamily: 'Rowdies',
  },
}));

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box pt="15%" pl="6%" pr="6%" className={classes.center}>
        <Paper elevation={0} className={classes.paperBackground}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box pt={6}>
                <img 
                  src={faceImage} 
                  alt="Logo" 
                  className={classes.image}
                  style={{ borderRadius: 80 }}/>
              </Box>
              <h3 className={classes.name}>Ning Chen</h3>
              <h1 className={classes.skill}>Full Stack Web Developer</h1>
              <Divider variant="middle"/>
              <h2 className={classes.skill}>HTML/CSS | JavaScript | React-Redux | Nodejs | SQL</h2>
              <Box pb={10}>
                <List>
                  <Button>
                    <GitHubIcon fontSize="large"/>
                  </Button>
                  <Button>
                    <LinkedInIcon fontSize="large"/>
                  </Button>
                  <Button>
                    <FacebookIcon fontSize="large"/>
                  </Button>
                  <Button>
                    <YouTubeIcon fonySize="large"/>
                  </Button>            
                </List>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}

export default Main
