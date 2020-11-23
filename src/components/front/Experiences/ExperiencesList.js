
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SingleExperience from './SingleExperience';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    textColor: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
}));

function ExperiencesList(props) {
    const classes = useStyles();
    const {data} = props;

    return (
        <Timeline align="alternate">
            {
                data.map(experience => {
                    return (
                        <TimelineItem key={experience.key}>
                            <TimelineOppositeContent>
                                <Typography variant="h6" color="textSecondary">
                                    <span className={classes.textColor}>{experience.startingDate} - {experience.endingDate}</span>
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <RepeatIcon/>
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                    <SingleExperience experience={experience}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })
            }
        </Timeline>
    );
}

export default ExperiencesList;
