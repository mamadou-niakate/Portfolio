import React, {useState} from 'react';
import ExperiencesList from '../../components/front/Experiences/ExperiencesList';
import axios from 'axios';
class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
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
            ],
            experience: []
        }
    }

    componentDidMount() {
        this.getExperiences()
    }

    async getExperiences() {
        try {
            const response = await axios.get('http://admin-portfolio1.herokuapp.com/api/experiences');

            const experiences =  response.data;

            this.setState({
                experience: experiences['hydra:member']
            })
        }catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <ExperiencesList data={this.state.experiences} />
        )
    }
}
export default Experience;
