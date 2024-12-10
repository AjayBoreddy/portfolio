import React from 'react';
import '../index.css';
import CV from '../assets/CV.pdf';

const Summary = () => {
  return (
    <section id="summary">
      <div className="summary-heading">
        <strong>My SkillSet</strong>
        <h2></h2>
        <a href={CV} download className='btn-link'>
         Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summary-details">
        <p>
            
        </p>

      </div>
    </section>
  )
}

export default Summary

