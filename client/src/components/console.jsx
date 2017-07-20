import React, { Component } from 'react';
import Thumbnail from './thumbnail.jsx';
import DoctorDetails from './doctorDetails.jsx';

const Console = ({ selected, selector, doctors, sublist }) => {
    
  if (!selected) {
    return (
      <div className='console'>
        {doctors.map(doctor => (
          <Thumbnail 
          key={ doctor.firstName + doctor.lastName }
          doctor={ doctor } 
          selector={ selector } />
        ))}
      </div>)
  } else {
    return (
      <div className='console'>
        <DoctorDetails 
        doctor={ selected }
        selector={ selector } />
        {sublist.map(doctor => {
          if (JSON.stringify(doctor) !== JSON.stringify(selected)) {
            return (<Thumbnail 
            key={ doctor.firstName + doctor.lastName }
            doctor={ doctor } 
            selector={ selector } />)
          }
        })}
      </div>)
  }
}

export default Console;
