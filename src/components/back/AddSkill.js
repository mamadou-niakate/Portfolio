import React, {Component, createRef } from 'react';
import {ListItem, Typography, ListItemAvatar, 
         ListItemText, ListItemSecondaryAction,  
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddSkillForm from './forms/AddSkillForm';
import EditSkillForm from './forms/EditSkillForm';

class AddSkill extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dense: null,
            chipData: [
                { key: 0, label: 'Angular' },
                { key: 1, label: 'jQuery' },
                { key: 2, label: 'Polymer' },
                { key: 3, label: 'React' },
                { key: 4, label: 'Vue.js' },
            ],
        }
        this.modalRef = createRef();
        this.editSkillFormRef = createRef() ;
    }

    openModal = () => {
        this.modalRef.current.handleOpen();
    }

    render() {
        return (
            <div>
                <AddSkillForm ref={this.modalRef} />
                <EditSkillForm ref={this.editSkillFormRef} />
                <Typography variant="h6">
                    Ajouter une compétence
                    <IconButton edge="end" aria-label="add" onClick={this.openModal}>
                        <AddIcon />
                    </IconButton>
                </Typography>

                <div> 
                    <List dense={this.state.dense}>
                        {
                            this.state.chipData.map(skill => {
                                return (
                                    <ListItem key={skill.key}>
                                        <ListItemAvatar> 
                                            <Avatar> <AddIcon /> </Avatar> 
                                        </ListItemAvatar>
                                        <ListItemText> {skill.label} </ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton 
                                                edge="end" aria-label="edit"
                                                onClick={() => {
                                                    this.editSkillFormRef.current.getSkillToEdit(skill);
                                                }}
                                            > 
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
            </div>
        )
    }
}
export default AddSkill;