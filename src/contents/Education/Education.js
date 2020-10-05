import React, {useState} from 'react';
import EducationsList from '../../components/front/Educations/EducationsList';

function Education (props) {
    const [educations, setEducation] = useState([
        {
            school: 'Université Paris-Saclay',
            diploma: 'Licence 3 MIAGE',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Universite_Evry.png',
            area: 'Évry (91)'
        },
        {
            school: 'Université Paris-Saclay',
            diploma: 'DUT Informatique',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 1,
            image: 'https://www.universite-paris-saclay.fr/sites/default/files/2020-01/IUT-D-ORSAY-v-rvb.png',
            area: 'Orsay (91)'
        },
        {
            school: 'Lycée Edmond Michelet',
            diploma: 'Bac Techno STI2D specialité Système d\'Information et Numérique (SIN)',
            startingDate: '09/2020',
            endingDate: '09/2020',
            description: 'J\'aime la formation',
            key: 0,
            image: 'https://file.diplomeo-static.com/file/00/00/01/33/13312.svg',
            area: 'Arpajon (91)'
        }
    ]);
    return (
        <EducationsList data={educations} />
    )
}
export default Education;