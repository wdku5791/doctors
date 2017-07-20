import React, { Component } from 'react';

const optionBar = ({ filter, filterHandler }) => {
  
  return (
      <div className='optionbar'>
      <h1 className='options'>Doctors</h1>
        <div className={filter === 'Rating' ? 'options selected' : 'options'}
         onClick={(e) => filterHandler(e.target.innerText)}>Rating</div>
        <div className={filter === 'Specialty' ? 'options selected' : 'options'}
         onClick={(e) => filterHandler(e.target.innerText)}>Specialty</div>
        <div className={filter === 'Alma Mater' ? 'options selected' : 'options'}
         onClick={(e) => filterHandler(e.target.innerText)}>Alma Mater</div>
        <div className={filter === 'Insurance Coverage' ? 'options selected' : 'options'}
         onClick={(e) => filterHandler(e.target.innerText)}>Insurance Coverage</div>
        <input type="text" name="search" placeholder="Search"></input>
      </div>
  );
}

export default optionBar;
