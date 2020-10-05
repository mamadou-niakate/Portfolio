import React, {useState} from 'react';
import ProjectsList from '../../components/front/Projects/ProjectsList';

function Project (props) {
    const [projects, setProject] = useState([
        {
            name: 'Site Taxi',
            outils: ['Tous','Bootstrap','JavaScript','PHP'],
            toolsImage: [
                'https://img.icons8.com/color/2x/javascript.png',
                'https://img.icons8.com/officel/2x/php-logo.png'
            ],
            year: 2020,
            status: 'En cours',
            links: {
                repository : {
                    image: 'https://img.icons8.com/fluent/2x/github.png',
                    link: 'https://github.com/mamadou-niakate'
                },
                details: {
                    image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                    link: 'http://www.taxi-viano-montlhery.fr/'
                }
            },
            desciption: 'Création d\'une page web de présentation pour un chauffeur de taxi',
            image: 'https://images.freeimages.com/images/large-previews/bba/taxi-sign-1512600.jpg'
        },
        {
            name: 'Portfolio',
            outils: ['Tous','ReactJS','Material UI'],
            toolsImage: [
                'https://img.icons8.com/color/2x/react-native.png',
                'https://img.icons8.com/color/2x/material-ui.png',
            ],
            year: 2020,
            status: 'En cours',
            links: {
                repository : {
                    image: 'https://img.icons8.com/fluent/2x/github.png',
                    link: 'https://github.com/mamadou-niakate'
                },
                details: {
                    image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                    link: 'https://github.com/mamadou-niakate'
                }
            },
            desciption: 'Création d\'un portfolio permettant de mettre en avant mes compétences et connaissances',
            image: 'https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_960_720.png'
        },
        {
            name: 'Site Afriki-Saxa',
            outils: ['Tous','Symfony','JavaScript'],
            toolsImage: [
                'https://www.nextedia.com/wp-content/uploads/2019/11/template-logo-page-partenaire-Symfony.png',
                'https://img.icons8.com/color/2x/javascript.png',
            ],
            year: 2020,
            status: 'En cours',
            links: {
                repository : {
                    image: 'https://img.icons8.com/fluent/2x/github.png',
                    link: 'https://github.com/mamadou-niakate'
                },
                details: {
                    image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                    link: 'https://github.com/mamadou-niakate'
                }
            },
            desciption: 'Un projet personnel de création d\'un site e-commerce',
            image: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg'
        },
        {
            name: 'Web App Smart Campus',
            outils: ['Tous','ReactJS'],
            toolsImage: ['https://img.icons8.com/color/2x/react-native.png'],
            year: 2020,
            status: 'En cours',
            links: {
                repository : {
                    image: 'https://img.icons8.com/fluent/2x/github.png',
                    link: 'https://github.com/mamadou-niakate'
                },
                details: {
                    image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                    link: 'https://github.com/mamadou-niakate'
                }
            },
            desciption: 'Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus ',
            image: 'https://www.skapane.com/wp-content/uploads/2020/01/smart-campus-1.png'
        },
        {
            name: 'Education Fonctionnelle',
            outils: ['Tous','WordPress'],
            toolsImage: ['https://img.icons8.com/color/72/wordpress.png', 'https://img.icons8.com/windows/2x/yoast.png',],
            year: 2020,
            status: 'En cours',
            links: {
                repository : {
                    image: 'https://img.icons8.com/fluent/2x/github.png',
                    link: 'https://github.com/mamadou-niakate'
                },
                details: {
                    image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                    link: 'https://github.com/mamadou-niakate'
                }
            },
            desciption: 'Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus ',
            image: 'https://cdn.pixabay.com/photo/2016/03/29/18/37/seo-1288976_960_720.jpg'
        }
    ]);
    return (
        <>
            <ProjectsList data={projects} />
        </>

    )
}
export default Project;