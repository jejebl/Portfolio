import React from 'react'
import './Home.css';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import resume from '../ResumeBlancJeremie.pdf';
import pp from '../img/PP.png';

const Home = () => {

  return (
    <div id='home' className='home_container'>

      <div className="sky-container">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className='home_profil_container'>
        <div className='home_description_container'>
          <p className='home_soliditydeveloper'>Web3 Developer</p>
          <p className='home_name'>Hi, I'm Jérémie Blanc</p>
          <div className='home_icon_container'>
            <div className='home_icon'>
              <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-blanc-72bab9176'><img alt='linkedin' className='home_icon_img_linkedin' src={linkedin}></img></a>
            </div>
            <div className='home_icon'>
              <a rel="noreferrer" target="_blank" href='https://github.com/jejebl'><img alt='github' className='home_icon_img_github' src={github}></img></a>
            </div>
            <a href={resume} download="ResumeBlancJeremie"><button className='home_resume'>Resume</button></a>
          </div>
          <p className='home_phone'>+33 07 81 04 08 71</p>
          <p className='home_email'>jeremieblanc.dev@gmail.com</p>
        </div>
        <div className='home_part2_container'>
          <div className='home_image_container'>
            <img className='home_image' src={pp} alt="pp"></img>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home
