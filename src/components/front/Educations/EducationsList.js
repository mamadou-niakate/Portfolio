import React from 'react';
import SingleEducation from './SingleEducation';
import { makeStyles } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Translation} from "react-i18next";

const background = {
    backgroundColor: '#003545',
    color: '#ffffff',
    marginTop: '20px', 
    borderRadius: '20px'
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: '#fff'
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
        backgroundColor: '#003545',
        marginTop: '20px',
        borderRadius: '20px',
        textAlign: 'center'
    },
    lightColor: {
        color: '#ffffff'
    }
}))

function EducationsList (props) {
    const classes = useStyles();
    const {data} = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return(
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" style={background}>
                {
                    data.map(education => (
                        <Step key={education.key}>
                            <StepLabel>
                                <Typography className={classes.lightColor} variant="h5">
                                    <Translation>
                                        {
                                            t => <> {t(`${education.school}`)}</>
                                        }
                                    </Translation>
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography component="div">
                                    <SingleEducation education={education}/>
                                </Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={handleBack} className={`${classes.button} ${classes.lightColor}`}>
                                            <Translation>
                                                {
                                                    t => <> {t('Précédent')} </>
                                                }
                                            </Translation>
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                            {
                                                activeStep === data.length - 1 ?
                                                    <Translation>
                                                        {
                                                            t => <> {t('Fini')} </>
                                                        }
                                                    </Translation> :
                                                    <Translation>
                                                        {
                                                            t => <> {t('Suivant')} </>
                                                        }
                                                    </Translation>
                                            }
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))
                }
            </Stepper>
            {
                activeStep === data.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Button onClick={handleReset} className={classes.button}>
                            Revoir
                        </Button>
                    </Paper>
                )
            }
        </div>
    )
}
export default EducationsList ;
