
import React, {useState} from 'react';
import SingleExperience from './SingleExperience';
import {Translation} from "react-i18next";
import './index.css';

function ExperiencesList(props) {
    const [value, setValue] = useState(0)
    const {data} = props;
    const selectedExperience = data[value];
    return (
        <section className='section'>
            <div className="title">
                <Translation>
                    {
                        t => <h2> {t('Expérience')} </h2>
                    }
                </Translation>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {data.map((job,index) => {
                        return (
                            <div key={job.id} className="btn-container">
                                <button
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                    onClick={() => setValue(index)}
                                >
                                    {job.company}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <article className='job-info'>
                    <SingleExperience {...selectedExperience}/>
                </article>
            </div>
        </section>
    );
}

export default ExperiencesList;
