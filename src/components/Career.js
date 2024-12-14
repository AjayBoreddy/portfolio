import React from 'react'
import '../index.css'
import CV from '../assets/CV.pdf'
const Career = () => {
    const careers =[
        {
            title:" Information Technology Specialist",
            name:"NYS Department of Information Technology Services",
            year:"Feb 2024-Aug 2024"
        },
        {
            title:" Software Engineer",
            name:"CGI Technologies and Solutions",
            year:"Mar 2020- May 2022"
        },
        {
            title:" Associate Software Engineer",
            name:"CGI Technologies and Solutions",
            year:"Sep 2019- Feb 2020"
        },
        {
            title:" Full Stack .Net Intern",
            name:"NIIT Technologies",
            year:"Jul 2019- Oct 2019"
        },



    ]
    const educations =[{
        title:"Master of Science in Computer Science",
        name:"University at Albany",
        year:"Aug 2022- May 2024"
    },
    {
        title:"Bachelor of Technology in Electronics & Communication Engineering",
        name:"Karunya Institute of Technology and Sciences",
        year:"Aug 2015- May 2019"
    }]
  return (
    <section id = "career">
        <div className="career-education">
            <div className ="career" data-aos ="fade-right">
                <h3>Career</h3>
                <div className="c-b-container">
                    {
                        careers.map((career, index) => (
                            
                                <div key={index} className="c-box">
                                    <h4>{career.title}</h4>
                                    <strong>{career.name}</strong>
                                    <span>{career.year}</span>
                                </div>
                            )
                        )
                    }

                </div>
            </div>
            <div className ="career-edu" data-aos ="fade-left">
                <h3>Education</h3>
                <div className="c-b-container">
                    {
                        educations.map((career, index) => (
                            
                                <div key={index} className="c-box">
                                    <h4>{career.title}</h4>
                                    <strong>{career.name}</strong>
                                    <span>{career.year}</span>
                                </div>
                            )
                        )
                    }

                </div>
            </div>
            
        </div>
    
        <div className="btn-c">
                <a href={CV} download className="btn-link">Get my CV
                <i class="fa-solid fa-download"></i>
                </a>
            </div>
    </section> 
  )
}

export default Career
