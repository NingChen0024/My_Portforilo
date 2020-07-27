import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import faceImage from '../ning.jpg'
import List from '@material-ui/core/List'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import Divider from '@material-ui/core/Divider'
import InstagramIcon from '@material-ui/icons/Instagram'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  link: {
    color: 'inherit'
  }
}));

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box pt="15%" pl="6%" pr="6%" pb="8%" className={classes.center}>
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
              <Box pb={7}>
                <List>
                  <Button>
                    <a href="https://github.com/NingChen0024" className={classes.link}>
                      <GitHubIcon fontSize="large"/>
                    </a>
                  </Button>
                  <Button>
                    <a href="https://www.linkedin.com/in/ning-chen-00a7741a9/" className={classes.link}>
                      <LinkedInIcon fontSize="large"/>
                    </a>
                  </Button>
                  <Button>
                    <a href="https://www.facebook.com/ning.chen.775823" className={classes.link}>
                      <FacebookIcon fontSize="large"/>
                    </a>
                  </Button>
                  <Button>
                    <a href="https://www.instagram.com/ning.chen.775823/" className={classes.link}>
                      <InstagramIcon fontSize="large"/>
                    </a>
                  </Button>            
                </List>
                <h3>nche0024@gmail.com</h3>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Footer/>
    </div>
  )
}

export default Main
