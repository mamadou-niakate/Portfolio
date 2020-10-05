import React from 'react';
import {Fab, Grid, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const heading = {
    backgroundColor: '#070707',
    height: 800,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center'
}

const overlay = {
    backgroundColor: '#313131',//053f5e
    //background: 'linear-gradient(45deg, #182952 30%, #182952 90%)',
    height: '100%',
    width: '100%',
    opacity: '0.5',
}

const info = {
    paddingTop: '10%',
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
            width:300,
            height: 'auto',
            paddingTop: 50
        }
    },
    button: {
        color: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'teal'
    }
});


function Header(props) {
  const { classes } = props;
  return (
    <div style={heading}>
        <Typography component="div" style={overlay}>
            <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid container item direction="row" justify="space-around" alignItems="center" style={info}>
                    <Grid item direction="column" lg={4} spacing={1}>
                        <Grid item> <Typography component="em" variant="h6">Je suis Mamadou NIAKATE</Typography></Grid>
                        <Grid item> <Typography component="p" variant="h4">Étudiant en L3 Miage & </Typography></Grid>
                        <Grid item> <Typography component="p" variant="h4">Quality Assurance Engineer</Typography></Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <img className={`${classes.desktopSize} ${classes.mobileSize}`} src={"https://www.learneasycode.com/wp-content/uploads/2020/03/coding-isometric-01.png"} alt="Logo" />
                    </Grid>
                </Grid>
                <Grid container item justify="center">
                    <Fab color="secondary" aria-label="edit" onClick={props.executeScroll} className={classes.button}>
                        <ArrowDownwardIcon style={{fontSize: 50}} />
                    </Fab>
                </Grid>
            </Grid>
        </Typography>
    </div>      
  )
}

export default withStyles(styles)(Header);