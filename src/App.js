import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import BackOffice from './components/back/BackOffice';
import Dashboard from './contents/Home/Dashboard';
import {Button, Grid, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Project from './contents/Project/Project';
import Footer from "./contents/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from 'react-i18next';
import {Translation} from "react-i18next";

const heading = {
  backgroundColor: '#1d1f26',
  color:'white',
}

const styles = theme => ({
    desktopSize: {
        [theme.breakpoints.up("md")]: {
          width:"350px",
          height:"300px",
        }
    },
    mobileSize: {
        [theme.breakpoints.down("sm")]: {
            width:400,
            marginLeft: 100
        }
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: "2px solid #ffe",
        },
        fontWeight: 'bold'
    },
    root: {
        backgroundColor: '#090A0D',
    },
    img: {
        width:40, height:'auto'
    },
});

function App({ classes, t }) {

    const {i18n} = useTranslation();
    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }
  return (
    <div className={classes.root}>
      <BrowserRouter>
          <nav style={heading}>
              <Typography component="div">
                  <AppBar position="fixed" color="transparent" style={{zIndex:1}}>
                      <Toolbar>
                          <Grid container justify="space-between"  alignItems="center">
                              <Grid container item lg={4} sm={5} alignItems="center" justify="space-around">
                                  <Grid item>
                                      <a href="https://github.com/mamadou-niakate" target="_blank" rel="noopener noreferrer" >
                                          <img src="https://img.icons8.com/color/2x/github.png"  alt="logo" className={classes.img}/>
                                      </a>
                                  </Grid>
                                  <Grid item>
                                      <a href="https://www.linkedin.com/in/mamadou-niakate/" target="_blank" rel="noopener noreferrer" >
                                          <img src="https://img.icons8.com/color/72/linkedin-circled.png"  alt="logo" className={classes.img}/>
                                      </a>
                                  </Grid>
                                  <Grid item>
                                      <a href="mailto:mamadouniakate10@yahoo.fr" target="_blank" rel="noopener noreferrer" >
                                          <img src="https://img.icons8.com/fluent/2x/filled-sent.png"  alt="logo" className={classes.img}/>
                                      </a>
                                  </Grid>
                                  |
                                  <Grid item>
                                      <Button onClick={() => changeLanguage('fr')}>
                                            <img src={"https://img.icons8.com/color/2x/france-circular.png"} alt="france-flag" className={classes.img}/>
                                      </Button>
                                  </Grid>
                                  <Grid item>
                                      <Button onClick={() => changeLanguage('en')}>
                                            <img src={"https://img.icons8.com/color/2x/great-britain-circular.png"} alt="england-flag" className={classes.img}/>
                                      </Button>
                                  </Grid>
                              </Grid>
                              <Grid container item lg={2} sm={3} justify="space-around">
                                  <Grid item>
                                      <Typography variant="h6" noWrap >
                                          <Link to="/" className={classes.navLink}>
                                              <Translation>
                                                  {
                                                      t => <>{t("Portfolio")}</>
                                                  }
                                              </Translation>
                                          </Link>
                                      </Typography>
                                  </Grid>
                                  <Grid item>
                                      <Typography variant="h6" noWrap>
                                          <Link to="/projects" className={classes.navLink}>
                                              <Translation>
                                                  {
                                                      t => <>{t("Projets")}</>
                                                  }
                                              </Translation>
                                          </Link>
                                      </Typography>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Toolbar>
                  </AppBar>
                  <ScrollToTop smooth style={{backgroundColor: 'teal'}}/>
              </Typography>
          </nav>
        <Switch>
          <Route exact path="/admin" component={BackOffice} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={Project}/>
        </Switch>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default withStyles(styles) (App);
