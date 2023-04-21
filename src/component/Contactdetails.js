import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css'


export default function Contactdetails(props) {




  const Location = useLocation();
  console.log(Location.state.from);
  const { name, email } = Location.state.from;



  return (
    <div>

      <div className='card'>
        <h2 className='heading'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg> Contact-Details</h2>
        <h3>  <span> Name </span> : {name} </h3>
        <h3>  <span> Email </span> : {email} </h3>
      </div>
    </div>
  )
}
