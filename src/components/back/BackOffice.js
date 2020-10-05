import React from 'react';
import EditAbout from './EditAbout';
import Paper from '@material-ui/core/Paper';
import {Grid } from '@material-ui/core';
import AddSkill from './AddSkill';
import AddEducation from './AddEducation';
import { makeStyles } from '@material-ui/core/styles';
import AddProject from './AddProject';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    margin : {
        marginTop: 30
    }
}));


function BackOffice() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={10}>
                    <Paper elevation={3} >
                        <EditAbout />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10}>
                    <Paper elevation={3} >
                        <AddSkill />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} className={classes.margin}>
                    <Paper elevation={3} >
                        <AddEducation />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} className={classes.margin}>
                    <Paper elevation={3} >
                        <AddProject />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default BackOffice;