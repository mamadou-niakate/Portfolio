import { Paper } from '@material-ui/core';
import React, {useState} from 'react';
import SKillsList from '../../components/front/Skills/SkillsList';

function Skill (props) {
    const [skills, setSkill] = useState([
        { key: 0, label: 'Angular', level:80, color:'#00454a' },
        { key: 1, label: 'jQuery', level:25, color:'#a12559'},
        { key: 2, label: 'Polymer', level:50, color:'#044343' },
        { key: 3, label: 'React', level:75, color:'#1b1f3a' },
        { key: 4, label: 'Vue.js', level:13, color:'#f6c90e' },
    ]);
    return ( 
        <SKillsList data={skills} />
    )
}
export default Skill;