import React from 'react'

const SkillsCard = ({img, name}) => {
  return (
    <div>
      <div className='box'>
         <img src={img}/>
         <h4>{name}</h4>
      </div>
    </div>
  )
}

export default SkillsCard
