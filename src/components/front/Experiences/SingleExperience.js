import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function SingleExperience({status,area,company,job,startingDate,endingDate,description,logo,key,}) {
    return (
        <>
          <h3>{job}</h3>
          <img src={logo} alt={company} className='photo'/><br/>
          <h4>{company}</h4> <h4><LocationOnIcon/> {area}</h4>
          <p className="job-date">{startingDate} - {endingDate}</p>
          {
            description ? description.map((duty,index) => {
              return (
                  <div className="job-desc" key={index}>
                    <DoubleArrowIcon className='job-icon' />
                    <p>{duty}</p>
                  </div>)
            }): ''
          }
      </>
    );
}
export default SingleExperience;
