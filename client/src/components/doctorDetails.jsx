import React from 'react';

const doctorDetail = ({ doctor, selector }) => {
  return (
    <div className='detail' onClick={(e) => {selector(null)}}>
      <img src={ doctor.picture }></img>
      <div>{`Name: ${doctor.firstName} ${doctor.lastName}`}</div>
      <div>{`Location: ${doctor.area}`}</div>
      <div>{`Specialty: ${doctor.specialty}`}</div>
      <div>{`Rating: ${doctor.rating}`}</div>
      <div>{`Coverage type: ${doctor.insurance}`}</div>
      <div>{`Details: ${doctor.details}`}</div>
    </div>
  )
}

export default doctorDetail;