import React, {Fragment} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Translation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
    textColor:   {
        color: '#8e8f93'
    },
    fonts: {
        fontWeight: 'bold'
    },
    desktopImage: {
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            height: 100
        }
    },
    mobileImage: {
        [theme.breakpoints.down('sm')]:{
            width: 260,
            height: 'auto',
        }
    }
}))

function SingleEducation(props) {
    const classes = useStyles();
    const {education} = props;

    return (
        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <img src={`${education.image}`} className={`${classes.desktopImage} ${classes.mobileImage}`} alt="school-img"/>
                    <Typography variant="h5" component="h2">
                        <Translation>
                            {
                                t => <> {t(`${education.diploma}`)}</>
                            }
                        </Translation>
                    </Typography>
                    <Typography color="textSecondary">
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Translation>
                                    {
                                        t => <> {t(`${education.school}`)} </>
                                    }
                                </Translation>
                            </Grid>
                            <Grid item>
                                <span className={classes.textColor}> {education.area}</span>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <span className={classes.textColor}> {education.startingDate} - {education.endingDate}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Savoir Plus</Button>
                </CardActions>
            </Card>
        </Fragment>
    );
  }
export default SingleEducation;
