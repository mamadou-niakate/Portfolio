import React, { Component } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Header from "../Header/Header";
import '../../App.css';
import {Translation} from "react-i18next";
import {data} from "../../data";
import ExperiencesList from "../../components/front/Experiences/ExperiencesList";
import EducationsList from "../../components/front/Educations/EducationsList";
import SKillsList from "../../components/front/Skills/SkillsList";

const classes = {
    margin : {
        marginTop: 30
    },
    containerBG: {
        backgroundColor: '#F1F5F8',
    },
    paperBG: {
        backgroundColor: '#F1F5F8',
        marginBottom: 30
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
            <>
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
                        <EducationsList data={data.educations.educations} />
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
                                <SKillsList data={data.skills.skills}  />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} style={classes.margin}>
                        <ExperiencesList data={data.experiences.experiences} />
                    </Grid>
                </Grid>
            </>
        )
    }

}
export default Dashboard;
