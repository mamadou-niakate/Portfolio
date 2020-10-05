import React, { Fragment } from 'react';
import { AccordionSummary, AccordionDetails,Accordion, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
}));

function EditAbout(props) {
    const classes = useStyles(); 
    return (
        <Fragment>
            <Accordion>
                <AccordionSummary expandIcon={<EditIcon/>} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className={classes.heading}>A Propos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <textarea rows={15} cols={100} />
                </AccordionDetails>
            </Accordion>
        </Fragment>
    )
}
export default EditAbout;