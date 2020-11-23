import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Translation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
    textColor:   {
        color: '#ffffff'
    },
    fonts: {
        fontWeight: 'bold'
    },
    desktopImage: {
        [theme.breakpoints.up('md')]: {
            width: 400,
            height: 'auto'
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
        <Grid container alignItems="center">
          <Grid item lg={4}>
              <img src={`${education.image}`} className={`${classes.desktopImage} ${classes.mobileImage}`} alt="school-img"/>
          </Grid>
          <Grid item container direction="row" lg={8}>
                <Grid item container direction="column"lg={8}>
                  <Grid item>
                      <Typography className={`${classes.textColor} ${classes.fonts}`}>
                          <Translation>
                              {
                                  t => <> {t(`${education.diploma}`)}</>
                              }
                          </Translation>
                      </Typography>
                  </Grid>
                  <Grid item>
                      <Typography className={classes.textColor}>
                          <Translation>
                              {
                                  t => <> {t(`${education.school}`)} </>
                              }
                          </Translation>
                      </Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="column" lg={4}>
                    <Grid item>
                        <Typography component="p">
                            <span className={classes.textColor}> {education.startingDate} - {education.endingDate}</span>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="p">
                            <span className={classes.textColor}> {education.area}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
export default SingleEducation;
