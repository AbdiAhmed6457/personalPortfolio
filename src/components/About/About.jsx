import React from 'react'
import "./About.css"
import mypic from "../../assets/backre.png"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";


const About = () => {
  return (
    <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>
         <div className='container about_container'>
           <div className='about_me'>
               <div className="about_me-image">
                  <img src={mypic} alt='about Image'/>
               </div>
           </div>

           <div className='about_content'>
           <div className="about_cards">
                        <article className='about_card'>
                          <FaAward className='about-icon'/>
                          <h5>Experience</h5>
                          <small> 2+ Years Working</small>
                        </article>

                        <article className='about_card'>
                          <FiUsers className='about-icon'/>
                          <h5>Client</h5>
                          <small> 100+ Client World Wide</small>
                        </article>

                        <article className='about_card'>
                          <BsFolder2 className='about-icon'/>
                          <h5>ProJect</h5>
                          <small> 5+ completed project</small>
                        </article>
                    </div>
                    <p>
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's talk</a>
             </div>
         </div>
    </section>
  )
}

export default About
