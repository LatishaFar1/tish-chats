import React from 'react'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin, AiOutlineTwitter, AiOutlineBook, AiOutlineInstagram } from "react-icons/ai";

function About() {
  return (
    <div className='about'>
      <section className='about-box'>
        <h1 className='tish-title'>
          TISH FAROUL ⚡️🎧🌙
        </h1>

           <details className='details-2'>
            <summary>About TishChats</summary>
            <p>
              TishChats' backend is built with Firebase and the frontend is built with ReactJS.
              <br/>
              Users are able to register and login using their emails. Once you login, the Chat component appears, allowing authenticated users to add text.
              <br/>
              Finally, users are able to logout - and make the chat disappear!
            </p>
          </details>
          <details>
             <summary>Background</summary>
                 <p>
                  - Frontend Engineer
                  <br/>
                  - Recently graduated from a Full-Stack SWE Bootcamp
                  <br/>
                  - Writer
                  <br/>
                  - Content Creator
                 </p>
           </details>
          <details className='details-2'>
            <summary>Skills</summary>
            <p>
            JavaScript, ReactJS, Ruby On Rails, Git, SQL, Firebase, etc.
            </p>
          </details>
          <details>
            <summary>Links</summary>
            <p className='tish-links'>
              <a href='https://github.com/LatishaFar1'>
                <AiFillGithub />
              </a>
            <a href='mailto:lfaroul14@gmail.com'>
              <AiOutlineMail />
            </a>


            <a href='https://www.linkedin.com/in/latisha-faroul/'>
              <AiFillLinkedin />
            </a>


            <a href='https://twitter.com/TishFaroul'>
              <AiOutlineTwitter />
            </a>


            <a href='https://tishfaroul.medium.com/'>
              <AiOutlineBook />
            </a>


            <a href='https://www.instagram.com/tish.codes/'>
              <AiOutlineInstagram />
            </a>
              

            </p>
          </details>
 

  </section>
    </div>
  )
}

export default About