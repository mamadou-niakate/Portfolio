import React, {useRef} from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Education from '../Education/Education';
import Skill from '../Skills/Skill';
import Experience from '../Experience/Experience';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header/Header";
import '../../App.css';
import {Translation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    margin : {
        marginTop: 30
    },
    containerBG: {
        backgroundColor: '#090A0D',
    },
    paperBG: {
        backgroundColor: '#1D1F26',
    },
    textColor: {
        color: 'teal',
        textAlign: 'center',
        padding: 30,
        fontWeight: 'bold'
    }
}));

const scrollToRef = (ref) => {
    window.scrollTo({
        top:ref.current.offsetTop,
        left:0,
        behavior:'smooth'
    })
}

function Dashboard (props) {
    const classes = useStyles();
    const educationRef = useRef(null);

    const executeScroll = () => {
        scrollToRef(educationRef)
    }
    return (
        <div>
            <Header executeScroll={executeScroll}/>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.containerBG}>
                <Grid item xs={12} sm={12} md={12} lg={10} className={classes.margin} ref={educationRef} style={{scrollBehavior: 'smooth'}}>
                    <Typography variant="h4" component="h1" className={classes.textColor}>
                        <Translation>
                            {
                                t => <> {t('Formations')} </>
                            }
                        </Translation>
                    </Typography>
                    <Paper elevation={3} className={classes.paperBG}>
                        <Box p={6}>
                           <Education /> 
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} className={classes.margin}>
                    <Typography variant="h4" component="h1" className={classes.textColor}>
                        <Translation>
                            {
                                t => <> {t('Compétences')} </>
                            }
                        </Translation>
                    </Typography>
                    <Paper elevation={3} className={classes.paperBG}>
                    <Box p={10}>
                        <Skill />
                    </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} className={classes.margin}>
                    <Typography variant="h4" component="h1" className={classes.textColor}>
                        <Translation>
                            {
                                t => <> {t('Expérience Professionnelle')} </>
                            }
                        </Translation>
                    </Typography>
                    <Paper elevation={3} className={classes.paperBG}>
                    <Box p={10}>
                        <Experience />
                    </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard;