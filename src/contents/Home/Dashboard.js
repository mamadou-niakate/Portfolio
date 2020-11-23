import React, { Component } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Education from '../Education/Education';
import Skill from '../Skills/Skill';
import Experience from '../Experience/Experience';
import Header from "../Header/Header";
import '../../App.css';
import {Translation} from "react-i18next";
import axios from 'axios';

const classes = {
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
};


class Dashboard extends Component{
    constructor(props) {
        super(props);

        this.educationRef = React.createRef();
    }

    scrollToRef = (ref) => {
        window.scrollTo({
            top:ref.current.offsetTop,
            left:0,
            behavior:'smooth'
        })
    }

    executeScroll = () => {
        this.scrollToRef(this.educationRef)
    }

    render() {
        return (
            <div>
                <Header executeScroll={this.executeScroll}/>
                <Grid container direction="row" justify="center" alignItems="center" style={classes.containerBG}>
                    <Grid item xs={12} sm={12} md={12} lg={10} style={classes.margin} ref={this.educationRef} style={{scrollBehavior: 'smooth'}}>
                        <Typography variant="h4" component="h1" style={classes.textColor}>
                            <Translation>
                                {
                                    t => <> {t('Formations')} </>
                                }
                            </Translation>
                        </Typography>
                        <Paper elevation={3} style={classes.paperBG}>
                            <Box p={6}>
                                <Education />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} style={classes.margin}>
                        <Typography variant="h4" component="h1" style={classes.textColor}>
                            <Translation>
                                {
                                    t => <> {t('Compétences')} </>
                                }
                            </Translation>
                        </Typography>
                        <Paper elevation={3} style={classes.paperBG}>
                            <Box p={10}>
                                <Skill />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} style={classes.margin}>
                        <Typography variant="h4" component="h1" style={classes.textColor}>
                            <Translation>
                                {
                                    t => <> {t('Expérience Professionnelle')} </>
                                }
                            </Translation>
                        </Typography>
                        <Paper elevation={3} style={classes.paperBG}>
                            <Box p={10}>
                                <Experience />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

}
export default Dashboard;
