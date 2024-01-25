import React from 'react'
import './Tools.css';
import react from '../img/React.png';
import nodejs from '../img/nodejs.png';
import github from '../img/github.png';
import solidity from '../img/Solidity.png';
import hardhat from '../img/hardhat.png';
import metamask from '../img/metamask.png';
import ethers from '../img/ethers.png';
import javascript from '../img/javascript.png'
import html from '../img/html.png'
import css from '../img/css.svg'
import express from '../img/express.png'
import mongodb from '../img/mongodb.png'

const Tools = () => {
  return (
    <div id='tools' className='tools'>

      <div className='tools_container'>
          <p className='tools_title'>Tools</p>
          <div className='tools_list_container'>
            <div className='tools_list'>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='mongodb' className='tools_img' src={mongodb}></img>
                </div>
                <p>MongoDB</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='express' className='tools_img' src={express}></img>
                </div>
                <p>Express.js</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='react' className='tools_img' src={react}></img>
                </div>
                <p>React.js</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='nodejs' className='tools_img' src={nodejs}></img>
                </div>
                <p>Node.js</p>
              </div>
            </div>
            <div className='tools_list'>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='javascript' className='tools_img' src={javascript}></img>
                </div>
                <p>Javascript</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='html' className='tools_img' src={html}></img>
                </div>
                <p>HTML</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='css' className='tools_img' src={css}></img>
                </div>
                <p>CSS</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='github' className='tools_img' src={github}></img>
                </div>
                <p>Github</p>
              </div>
            </div>
            <div className='tools_list'>
              <div className='tools_item'>
              <div className='tools_img_container'>
                  <img alt='solidity' className='tools_img' src={solidity}></img>
                </div>
                <p>Solidity</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='hardhat' className='tools_img' src={hardhat}></img>
                </div>
                <p>Hardhat</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='metamask' className='tools_img' src={metamask}></img>
                </div>
                <p>Metamask</p>
              </div>
              <div className='tools_item'>
                <div className='tools_img_container'>
                  <img alt='ethers' className='tools_img' src={ethers}></img>
                </div>
                <p>ethers.js</p>
              </div>
            </div>
          </div>
        </div> 
      
      <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
      </div> 
    </div>
  )
}

export default Tools
