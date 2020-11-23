import React from 'react';
import { List, ListItem } from '@material-ui/core';
import SingleSkill from './SingleSkill';

function SKillsList (props) {
    const {data} = props;
    return (
        <List>
            {
                data.map(skill => {
                    return (
                        <ListItem key={skill.key}>
                            <SingleSkill skill={skill}/>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
export default SKillsList;
