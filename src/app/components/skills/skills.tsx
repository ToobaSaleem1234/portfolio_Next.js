import React from 'react'
import "./skills.css"

const Skills = () => {
  return (
    <div id='skills'>
      <h1 id='myskill'>My Skills</h1>
      <p id='skill'>
        "As a detail-oriented and innovative web developer, I possess a robust skill set that enables me to craft dynamic and user-friendly digital experiences. With a solid foundation in front-end and back-end development, I excel at building responsive web applications, optimizing user interfaces, and ensuring seamless user experiences. I'm committed to staying up-to-date with industry trends and expanding my skill set to deliver high-quality solutions."
      </p>
      <div className="html">
        <h2>HTML <span className='me'>100%</span></h2>
        <h2>CSS <span className='me'>97%</span></h2>
        <h2>Typescript <span className='me'>95%</span></h2>
      </div>

      <div className='percent'>
        <div className='abcd'>
        <div id="color"></div>
        </div>
        <div className='abcd'><div id="day"></div></div>
        <div className='abcd'><div id="month"></div></div>
      </div>

      <br />
      <div className="python">
        <h2>Python <span className='me'>70%</span></h2>
        <h2 id='js'>Javascript <span className='me'>75%</span></h2>
        <h2 className='tail'>Tailwind CSS <span className='me'>90%</span></h2>
      </div>

      <div className='percentage'>
        <div className='abcd'><div id="season"></div></div>
        <div className='abcd'><div id="weather"></div></div>
        <div className='abcd'><div id="nature"></div></div>
      </div>
    </div>
  )
}

export default Skills