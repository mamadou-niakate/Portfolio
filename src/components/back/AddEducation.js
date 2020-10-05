import React, { useState } from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, 
        Card,CardHeader, CardContent, IconButton, Avatar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddEducationForm from './forms/AddEducationForm';


const useStyles = makeStyles((theme) => ({
    demo: { backgroundColor: theme.palette.background.paper, },
    title: { margin: theme.spacing(4, 0, 2), },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: 10,
        padding: theme.spacing(2, 4, 3),
    }
}));

function AddEducation(props) {
    const classes = useStyles();
    const [dense, setDense] = useState(false);

    const modalRef = React.useRef();

    // ouverture du modal
    const handleOpen = () => { 
        modalRef.current.handleOpen();
    } ;

    const [educations, setEducation] = useState([
        {
            school: 'Université d\'Evry',
            diploma: 'L3 Miage',
            startingDate: '01/09/2020',
            endingDate: '01/09/2020',
            description: 'J\'aime la formation',
            key: 0,
        },
        {
            school: 'Université d\'Evry',
            diploma: 'L3 Miage',
            startingDate: '01/09/2020',
            endingDate: '01/09/2020',
            description: 'J\'aime la formation',
            key: 1,
        },
        {
            school: 'Université d\'Evry',
            diploma: 'L3 Miage',
            startingDate: '01/09/2020',
            endingDate: '01/09/2020',
            description: 'J\'aime la formation',
            key: 2,
        }
    ]);


    return (
        <div className={classes.demo}>
            <AddEducationForm ref={modalRef} />
            <Typography variant="h6">
                Ajouter une formation
                <IconButton edge="end" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
            </Typography>

            <List dense={dense}>
                {
                    educations.map(education => {
                        return (
                            <ListItem key={education.key}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Card variant="outlined">
                                    <CardHeader title={education.school} subheader={education.startingDate + ' - ' + education.endingDate}/>
                                        <CardContent>
                                            <label> { education.description } </label>
                                        </CardContent>
                                    </Card>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}
export default AddEducation; 