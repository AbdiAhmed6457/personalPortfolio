import React from 'react'
import myCv from '../../assets/myCv.pdf'
const CTA = () => {
  return (
    <div className="cta">
      <a href={myCv} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA
