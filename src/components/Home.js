import React from 'react';
import '../index.css';
import  Picture from '../assets/myimg.jpg';

const Home = () => {
  return (
    <section id ="home">
        <div className="home-text" data-aos ="fade-down">
    <strong>
        Hello, it's me
    </strong>
    <h1>Ajay Boreddy</h1>
     <p>Full Stack Developer</p>
     <a href="#summary" className='btn-link'>Scroll For Me</a>
     </div>
     <div className="home-img" data-aos ="fade-up">
        <div className="img-box">
            <img src={Picture} alt="Picture" />
            <h2>Ajay Boreddy <br/><span>Full-Stack Developer</span></h2>
            <div className="social">
                <a href="mailto:ajaykumar.boreddy@gmail.com">
                <i class="fa-brands fa-google"></i>
                <a href="https://www.linkedin.com/in/ajay-kumar-reddy-boreddy-13398512b/">
                <i class="fa-brands fa-linkedin"></i>
                    </a>
                <a href="https://github.com/AjayBoreddy">
                <i class="fa-brands fa-github"></i>
                </a>
                </a>

            </div>
             <a href="mailto:ajaykumar.boreddy@gmail.com" className='hire-me'>Hire Me</a>
        </div>

     </div>
    </section>

  )
}

export default Home
