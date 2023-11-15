

import React from 'react'

function Contact() {
  return (
    <div className='container pt-5 px-5'>
    <h1>Contact</h1>
    <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        </form>
 </div>
)
}

export default Contact