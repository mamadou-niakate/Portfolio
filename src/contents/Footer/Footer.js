import React from 'react';
import {Divider, Grid, Typography} from "@material-ui/core";
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Paper from "@material-ui/core/Paper";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    image: {
        width: 40,
        paddingLeft: 20
    },
    gridcontainers: {
        padding: 40,
    },
    container: {
        background: '#F1F5F8',
        color: '#8e8f93',
        marginTop: 0,
        marginBottom: 0
    },
    sectionTitle: {
        textAlign: 'center',
    }
})


function Project (props) {
    const classes = useStyles();
    return (
        <Paper className={classes.container}>
            <Grid container direction="column">
                <Grid item container direction="row" justify="space-around" alignItems="center" className={classes.gridcontainers}>
                    <Grid item className={classes.sectionTitle}> <CallRoundedIcon color="primary"  style={{fontSize:50, color: 'teal'}}/> <Typography variant="h5">(+33) 06 98 33 06 17</Typography> </Grid>
                    <Grid item className={classes.sectionTitle}> <EmailRoundedIcon color="primary" style={{fontSize:50, color: 'teal'}}/> <Typography variant="h5">mamadouniakate10@yahoo.fr</Typography> </Grid>
                    <Grid item className={classes.sectionTitle}> <LocationOnRoundedIcon color="primary" style={{fontSize:50, color: 'teal'}}/> <Typography variant="h5">Arpajon (91)</Typography> </Grid>
                </Grid>
                <Divider />
                <Grid item container direction="row" justify="center" alignItems="center" className={classes.gridcontainers} >
                    <Grid item><img src="https://img.icons8.com/material-outlined/72/linkedin.png" className={classes.image} alt="linkedin-icon" /></Grid>
                    <Grid item><img src="https://img.icons8.com/material-outlined/72/github.png" className={classes.image} alt="github-icon"/></Grid>
                    <Grid item><img src="https://img.icons8.com/material-outlined/72/facebook-circled.png" className={classes.image} alt="facebook-icon"/></Grid>
                    <Grid item><img src="https://img.icons8.com/material-outlined/72/twitter-squared.png" className={classes.image} alt="twitter-icon"/></Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default Project;
