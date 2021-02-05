import React, {Fragment, useState, useEffect} from 'react';
import {Grid} from "@material-ui/core";

const ProgressBar = (props) => {
  const { skill} = props;
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      for(let i = 0 ; i < skill.level; i++) {
        setCompleted(i)
      }
    },1000)
  }, []);

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 40,
    marginTop: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: `${skill.color} `,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <Fragment>
      <Grid container alignItems="center">
        <Grid item lg={1}>
          <p style={{color:'white', marginTop: -10}}> <img src={`${skill.image}`} style={{width: 50, height: 50}} alt="skill-logo"/> </p>
        </Grid>
        <Grid item lg={11}>
          <div style={containerStyles}>
            <div style={fillerStyles}>
              <span style={labelStyles}>{`${completed}%`}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ProgressBar;
