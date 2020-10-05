import { Grid } from '@material-ui/core';
import React, {Fragment, useState, useEffect} from 'react';

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
      <p style={{color:'white', marginTop: -10}}> {skill.label }</p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </Fragment>

    
  );
};
export default ProgressBar;



/*import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CircularStatic(props) {
  const {skill} = props;
  const [progress, setProgress] = React.useState(10);
  
  React.useEffect(() => {
    setTimeout(() => {
      for(let i = 0 ; i < skill.level; i++) {
        setProgress(i)
      }
    },1000)
  }, []);
  
  return <CircularProgressWithLabel value={progress} />;
}  

function CircularProgressWithLabel (props) {
  return (
    <Box position="relative" display="inline-flex">
        <CircularProgress color="secondary" size={100} variant="static" {...props} />
        <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="caption" component="div" color="secondary" variant="h4">
                {
                    `${Math.round(props.value,)}%`
                }
            </Typography>
        </Box>
    </Box>
  );
}

/**
 * The value of the progress indicator for the determinate and static variants.
 * Value between 0 and 100.
 */
/*CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};*/