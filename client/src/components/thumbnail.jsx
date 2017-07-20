import React from 'react';

const doctorThumbnail = ({ doctor, selector }) => {

  return (
    <div className='thumbnail' onClick={(e) => {selector(doctor)}}>
      <img className= "thumbnailimage" src={doctor.picture}></img>
      <div>{`Name: ${doctor.firstName} ${doctor.lastName}`}</div>
      <div>{`Location: ${doctor.area}`}</div>
      <div>{`Coverage type: ${doctor.insurance}`}</div>
    </div>
  )
}

export default doctorThumbnail;