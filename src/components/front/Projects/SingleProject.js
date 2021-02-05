import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Translation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        '&:hover': {
            borderRadius: 10,
            boxShadow: 'inset 0 0 1em white, 0 0 2em #3d3d3d'
        },
        background: '#F1F5F8',
        color: '#fff'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    imageStyle: {
        width: 50,
    },
    text: {
        color:'#8e8f93',
        fontWeight: 'bold',
        textAlign: "center"
    }
}));

function SingleProject(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {project} = props
    const handleExpandClick = () => { setExpanded(!expanded);};

    return (
        <Card className={classes.root}>
            <CardHeader title={<Typography className={classes.text} variant="h5">{project.name}</Typography>}
                subheader={<Typography className={classes.text}>{project.year}</Typography>}
            />
            <CardMedia className={classes.media} image={project.image} title="Paella dish"/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                    <Translation>
                        {
                            t => <> {t(`${project.desciption}`)}</>
                        }
                    </Translation>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <a href={project.links.details.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.links.repository.image} className={classes.imageStyle} alt="project repo icon"/>
                    </a>
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <a href={project.links.details.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.links.details.image} className={classes.imageStyle} alt="project detail icon"/>
                    </a>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"
                >
                    <ExpandMoreIcon style={{color: "#fff"}} />
                </IconButton>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Technologies utilisées</Typography>
                        {
                            project.toolsImage.map(image => <img  key={image} src={image} style={{width: 30, paddingLeft: 10}} alt="project tools"/>)
                        }
                    </CardContent>
                </Collapse>
            </CardActions>
        </Card>
    );
}

export default SingleProject;
