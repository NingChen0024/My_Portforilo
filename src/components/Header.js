import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BookIcon from '@material-ui/icons/Book';
import ShareIcon from '@material-ui/icons/Share';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // background: '#12c2e9',
    // background: '-webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
    // background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
    background: '#fffbd5',
    background: '-webkit-linear-gradient(to left, #fffbd5, #b20a2c)',
    background: 'linear-gradient(to left, #fffbd5, #b20a2c)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: 'Rowdies'
  },
  title: {
    display: 'flex',
    fontFamily: 'Rowdies',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navButton: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  uniFont: {
    fontFamily: 'Rowdies'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
  
}));

function Header() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to='/' className={classes.link}>
                My Portfolio
              </Link>
            </Typography>
         
        
          <div className={classes.grow} />
          
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="black"
            >
              <ShareIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />
        <List>
          <Link to='/about' className={classes.link}>
            <ListItem button >
              <ListItemIcon>
                <PersonPinIcon/>
              </ListItemIcon>
              <ListItemText primary="About me"/>
            </ListItem>
          </Link>

          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon/>
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </List>

        <Divider />
        
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon/>
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>

          <ListItem button >
            <ListItemIcon>
              <BookIcon/>
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </List>
      </Drawer>
      {renderMenu}
    </div>
  );
}

export default Header