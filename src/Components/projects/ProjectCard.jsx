import React from 'react'
const ProjectCard = ({title, des, src, linkWeb, linkGit}) => {
  return (
   <div className='boxs'>
      <div className='box'>
         <img src={src}/>
         <div className='info'>
            <p>{title}</p>
            <div className='links'>
              <a href={linkGit} target="_blank" rel="noopener noreferrer"><img src='/github.png'/></a>
              <a href={linkWeb} target="_blank" rel="noopener noreferrer"><img src='/web.png'/></a>
            </div>
         </div>
         <span className='clamp'>{des}</span>
      </div>
   </div>
  )
}

export default ProjectCard
