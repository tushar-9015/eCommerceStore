import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-wrapper'>
          <span>BE IN TOUCH WITH US:</span>  
        <div className='contact-wrapper-mail'>
            <input type='email' placeholder='Enter your e-mail...'/>
            <button>JOIN US</button>
        </div>
        </div>
    </div>
  )
}

export default Contact
