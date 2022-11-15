import React from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate=useNavigate();

  return (
    <div>
        <>Details
        <button onClick={()=>navigate(-1)}>Geri</button>
        </>
        

    </div>
  )
}

export default Details