import React from 'react'
import '../index.css'

const About = () => {
  return (
   <section id ="about">
    <div className="about-container">
       <div className="about-heading" data-aos ="flip-left">
        <strong>About Me</strong>
        <h3>Building Seamless Web Experiences with React and .NET.</h3>
        <a href="Mob:15186067961" className="btn-link">
            518-606-7961 <i className="fa-solid fa-phone"></i>
        </a>

       </div>
       <div className="about-details" data-aos="flip-right">
        <p> <span style={{ color: 'white' }}>
  I am a passionate React .NET Developer with a strong background in both front-end and back-end development. 
  With extensive experience in building dynamic, responsive web applications, I specialize in using React.js to 
  create seamless user interfaces and .NET Core to develop robust and scalable back-end solutions.
</span></p>
<br/>
<p> <span style={{ color: 'white' }}> On the front-end, I excel at implementing modern JavaScript (ES6+) features, managing state with Redux, and ensuring a responsive design using HTML5, CSS3, and frameworks like SASS and Styled Components. I have a deep understanding of integrating RESTful APIs and real-time features with SignalR to enhance user experiences.</span></p>
<br/>
<p> <span style={{ color: 'white' }}> On the back-end, I have a strong foundation in C#, ASP.NET Core, and Entity Framework to create secure and efficient server-side applications. I have experience in building RESTful APIs, integrating with SQL Server databases, and deploying applications to Azure using Azure DevOps.</span></p>
    </div>
</div>
   </section>
  )
}

export default About
