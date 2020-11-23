import React, {useEffect, useState} from 'react';
import SKillsList from '../../components/front/Skills/SkillsList';
import axios from 'axios';

class Skill extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                { key: 0, label: 'React', level:80, color:'#00454a', image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" },
                { key: 1, label: 'JavaScript', level:25, color:'#a12559', image:"https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"},
                { key: 2, label: 'Ionic', level:50, color:'#044343', image:"https://cdn0.iconfinder.com/data/icons/designer-skills/128/ionic-256.png"},
                { key: 3, label: 'PHP', level:75, color:'#1b1f3a', image: "https://cdn4.iconfinder.com/data/icons/logos-3/568/php-logo-256.png"},
                { key: 4, label: 'WordPress', level:13, color:'#f6c90e', image: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/WordPress-256.png" },
                { key: 5, label: 'Java', level:13, color:'#f6c90e', image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-java-software-develop-command-language-256.png" },
            ],
            techno:[],
            loading:true
        }
    }

    componentDidMount() {
        this.getTechno();
    }

    async getTechno() {
        try {
            const response = await axios.get(
                `http://admin-portfolio1.herokuapp.com/api/project_technologies`
            );

            const techno = response.data;

            this.setState({
                techno:techno['hydra:member'],
                loading:false
            });
        }catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <SKillsList data={this.state.skills} />
        )
    }
}
export default Skill;
