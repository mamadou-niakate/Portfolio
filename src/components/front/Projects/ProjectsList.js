import React, { useState, useEffect } from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import SingleProject from './SingleProject';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Header from "../../../contents/Header/Header";

const useStyles = makeStyles((theme) => ({
    nav: {
        paddingTop: 50,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 50,
        backgroundColor: '#090a0d',
    },
    navLinks: {
        backgroundColor: '#1D1F26',//003545
        color: 'white',
        fontWeight: 'bold',
    },
    table: {
        height:700
    },
    imageStyle: {
        width: 50
    },
    textStyle: {
        textAlign: 'center',
        color: '#ffffff'
    },
    containerBG: {
        backgroundColor: '#090a0d',
        minHeight: "50em"
    },
    paperBG: {
        backgroundColor: '#3a4750',
    },
    gridStyle: {
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        backgroundColor: '#090a0d',
        color:'#8e8f93',
        paddingTop:40,
        paddingBottom: 30,
        textAlign: 'center',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 300,
        background: '#1a202c'
    },
    image: {
        width: 30,
        height: 'auto'
    },
    deskTopSize: {
        /*[theme.breakpoints.up('md')]:{
            height: '82em'
        }*/
    },
    mobileSize: {
        /*[theme.breakpoints.down('sm')]:{
            height: '182em'
        }*/
    }
}));


function Project(props) {
    const classes = useStyles();
    const [filter, setFilter] = useState("Tous");
    const [projects, setProjects] = useState([]);
    const [value, setValue] = React.useState(0);
    const {data} = props;

    useEffect(() => {
        setProjects(data);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = data.map(p => ({
            ...p,
            filtered: p.outils.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);


    var techs = [];
    data.forEach(project => {
        for (let i = 0; i < project.outils.length; i++) {
            techs.push(project.outils[i]);
        }
    })

    const technologies = techs.filter((tech, index) => {
        return techs.indexOf(tech) === index
    })

    const changeNavValue = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Paper elevation={4} className={`${classes.containerBG} ${classes.deskTopSize} ${classes.mobileSize}`}>
            <Grid container direction="column" className={classes.title}>
                <Grid item>
                    <Typography variant="h2" component="h2">
                        Projets
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="4" component='h4'>
                        Les projets auxquels j'ai participés
                    </Typography>
                </Grid>
            </Grid>
            <BottomNavigation value={value} onChange={changeNavValue} showLabels className={classes.nav}>
                {
                    technologies.map(techno =>
                        <BottomNavigationAction className={classes.navLinks}
                                                onClick={() => setFilter(`${techno}`)}
                                                label={<Typography variant="h6" style={{color: 'teal'}}> {techno} </Typography>}  />
                    )
                }
            </BottomNavigation>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.containerBG}>
                <Grid container item justify="space-evenly" alignItems="center" lg={8}>
                    {
                        projects.map(project =>
                            project.filtered === true ? <Grid key={project.outils} className={classes.gridStyle}> <SingleProject project={project}/> </Grid> : ""
                        )
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Project;