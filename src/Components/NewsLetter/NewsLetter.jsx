import React from 'react'
import './NewsLetter.css'



const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive Offers On Your Email</h1>
      <p>Stay updated with the latest trends!!</p>
      <div>
        <input type="email" placeholder="Enter your email"/>
        <button>Follow</button>
     </div>
    </div>
  )
}

export default NewsLetter
