import React from 'react';
import SingleEducation from './SingleEducation';
import {Grid} from "@material-ui/core";

function EducationsList (props) {
    const {data} = props;

    return(
        <div style={{width:'100%'}}>
            <Grid container justify="center" spacing={2}>
                {
                    data.map(education => (
                        <Grid item style={{width:'30rem'}}>
                            <SingleEducation education={education}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
export default EducationsList ;
