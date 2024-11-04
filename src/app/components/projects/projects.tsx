import React from 'react'
import "./projects.css"
import Link from 'next/link'


const Projects = () => {
  return (
    <div id='projects'>
      <div>
        <h1 id='myproject'>My Projects</h1>
        <p className='text'>"As a passionate developer/designer, I've had the opportunity to work on various projects that showcase my skills and creativity".
          <br />
          <br />
          <span id='bold'>Some of my notable projects include:</span>
        </p>
      </div>
      <div id="show_projects">
        <div className="next_projects">
          <h2 className='cv'> Dynamic Resume</h2>
          <h1 className='srb'>Dynamic Resume Builder</h1>
          <p className='text'>This is the project which I'have created with Next.js and Custom CSS.</p>
          <Link id='view' href={"https://vercel.com/tooba-saleems-projects/milestone-3"} target='_blank'>View Project... </Link>
        </div>
        <div className="next_projects">
          <h2 className='cv'> Static Resume</h2>
          <h1 className='srb'>Static Resume Builder</h1>
          <p className='text'>This is the project which I'have created with Next.js and Custom CSS.</p>
          <Link id='view' href={"https://vercel.com/tooba-saleems-projects/milestone1-2"} target='_blank'>View Project... </Link>
        </div>
        <div className="next_projects">
          <h2 className='cv'>Simple Calculator</h2>
          <h1 className='srb'>Typescript Calculator</h1>
          <p className='text'>This is the project that I've created with Typescript by usIng Inquirer and Chalk.</p>
          <Link id='view' href={"https://vercel.com/tooba-saleems-projects/typescript-calculator-project"} target='_blank'>View Project... </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects