import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Translation} from "react-i18next";

const background = {
  backgroundColor: '#003545',
  color: '#ffffff',
  marginTop: '20px', 
  borderRadius: '20px'
}

const marginBottom = {
  marginBottom: '20px'
}

class SingleExperience extends Component {
  render() {
    const {experience} = this.props;

    return (
      <Fragment>
        <Grid container alignItems="center" style={background}>
          <Grid item container justify="space-between">
                <Grid item>
                  <Typography style={marginBottom}> 
                    <Translation>
                        {
                            t => <> {t(`${experience.status}`)}</>
                        }
                    </Translation>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="em" style={marginBottom}> 
                    {experience.startingDate} - {experience.endingDate}
                  </Typography> 
                </Grid>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography style={marginBottom}>
                  <Translation>
                      {
                          t => <>{t(`${experience.job}`)}</>
                      }
                  </Translation>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="space-between">
                  <Grid item>
                    <Typography> {experience.company} </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="em"> 
                      <LocationOnIcon/> {experience.area}
                    </Typography> 
                  </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default SingleExperience;
