import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const About = () => {
  let navigate = useNavigate();
  return (
    <>
   
    <div >
      <div >
        <div>
          
          <div >
          <h2>Welcome To Mustafa AKTEPE 
            
            Profile</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, itaque modi! Assumenda quasi iusto numquam, facere officiis sapiente asperiores totam magni consectetur eveniet veniam! Accusantium ullam corrupti voluptatem nemo dolore?</p>
          </div>
          
        </div>
      <button onClick={() => {
        navigate(-1)
      }} >Go back</button>
      </div>
    </div>
    </>
    
  )
}

export default About