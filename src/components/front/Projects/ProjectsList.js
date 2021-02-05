import React, { useState, useEffect } from "react";
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import SingleProject from './SingleProject';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        marginTop: 50,
        marginBottom: 50,
        marginLeft: "10em",
        backgroundColor: '#F1F5F8',//#1D1F26
    },
    navLinks: {
        fontWeight: 'bold',
        color: 'teal',
        '&:hover': {
            color: '#8e8f93',
            borderBottom: '2px dashed teal'
        }
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
        backgroundColor: '#F1F5F8',
        minHeight: "50em"
    },
    paperBG: {
        backgroundColor: '#3a4750',
    },
    gridStyle: {
        marginTop: 10,
        marginBottom: 40,
    },
    title: {
        backgroundColor: '#F1F5F8',
        color:'#8e8f93',
        paddingTop:10,
        paddingBottom: 30,
        textAlign: 'center',
    },
    image: {
        width: 30,
        height: 'auto'
    },
    deskTopSize: {
        [theme.breakpoints.up('md')]:{
            marginLeft: 200,
            marginRight: 200,
            marginTop: 20,
            marginBottom: 40
        }
    },
    mobileSize: {
        [theme.breakpoints.down('sm')]:{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 40,
        }
    }
}));


function Project(props) {
    const classes = useStyles();
    const [filter, setFilter] = useState("Tous");
    const [projects, setProjects] = useState([]);
    const {data} = props;

    useEffect(() => {
        setProjects(data);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = data.map(p => ({...p,filtered: p.outils.includes(filter)}));
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

    return (
        <Paper elevation={4} className={`${classes.containerBG}`}>
            <div className={classes.title}>
                <Typography variant="h2"> Projets </Typography>
                <Typography variant="h4"> Les projets auxquels j'ai participés </Typography>
            </div>
            <Paper elevation={3} className={`${classes.nav} ${classes.deskTopSize} ${classes.mobileSize}`}>
                <Grid container justify="space-evenly">
                    {
                        technologies.map(techno =>
                            <Grid key={techno} item style={{padding: 10}}>
                                <Button className={classes.navLinks} onClick={() => setFilter(`${techno}`)}>
                                    <Typography variant="h6"> {techno} </Typography>
                                </Button>
                            </Grid>
                        )
                    }
                </Grid>
            </Paper>
            <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.containerBG}>
                <Grid container item justify="space-evenly" alignItems="center" lg={8}>
                    {
                        projects.map(project =>
                            project.filtered === true ? <Grid key={project.name} className={classes.gridStyle}> <SingleProject project={project}/> </Grid> : ""
                        )
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Project;
