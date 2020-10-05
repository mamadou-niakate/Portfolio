import React, {useState} from 'react';
import ExperiencesList from '../../components/front/Experiences/ExperiencesList';

function Experience (props) {
    const [experiences, setExperiences] = useState([
        {
            status: 'Apprenti',
            area: 'Vélizy (78)',
            company: 'Dassault Systèmes',
            job: 'Ingénieur Qualité Logicielle',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 0,
        },
        {
            status: 'Apprenti',
            area: 'Igny (91)',
            company: 'Orthoplus',
            job: 'Développeur Web',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 1,
        },
        {
            status: 'Intérimaire',
            area: 'Fleury - Merogis (91)',
            company: 'General Logistics Systems',
            job: 'Agent de quai',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 2,
        }
    ]);
    return (
        <ExperiencesList data={experiences} />
    )
}
export default Experience;