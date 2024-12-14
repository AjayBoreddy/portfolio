import React from 'react';
import '../index.css';
import CV from '../assets/CV.pdf';

const Summary = () => {
  return (
    <section id="summary">
      <div className="summary-heading" data-aos="fade-right">
        <strong>My SkillSet</strong>
        <h2> React .Net Developer</h2>
        <a href={CV} download className='btn-link'>
         Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summary-details" data-aos ="fade-left">
        <p>
        <b>Front-End:</b> <span style={{ color: 'white' }}>React.js, Redux, JavaScript, HTML5 & CSS3, Styled Components / SASS, Responsive Design, RESTful APIs</span> <br />
        <b>Back-End:</b> <span style={{ color: 'white' }}>C#, ASP.NET Core, Entity Framework, SQL Server, RESTful APIs, Swagger, Azure DevOps</span> <br />
        <b>Tools:</b> <span style={{ color: 'white' }}>Git, Visual Studio, Visual Studio Code, Postman, Azure DevOps, JIRA, Confluence</span> <br />
        <b>Methodologies:</b> <span style={{ color: 'white' }}>Agile, Scrum, Kanban</span> <br />
        <b>Databases:</b> <span style={{ color: 'white' }}>SQL Server, MySQL</span> <br />

        </p>

      </div>
    </section>
  )
}

export default Summary

