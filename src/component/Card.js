import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import './Card.css'

export default function Card(props) {

  // console.log(props.handledelete);

  const navigate = useNavigate();
  // const location= useLocation();
  // console.log(location);

  // const {name,email}=location.state.from;

  // const [items, setItems] = useState(['']); 



  const deleteevent = ()=>{
    props.handledelete(props.index)
  };

  const navigation = ()=>{
    navigate('/')
  }
  


  return (
    <>
      <div className='conformation'>
        <div className='cardcontainer'>
        <div className='closebtn'>
        <Button onClick={() => navigate(-1)} className='xbtn' variant="text"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></Button>
        </div>
          <div className='title'>
            <h1>Are You Sure You Want To Delete The Contact !</h1>
          </div>
          <div className='body'>
            <p>The Contact Will Be Deleted Permenently</p>
          </div>
          <div className='footer'>
          <Button  onClick={() => navigate(-1)}  variant="outline-secondary">Cancel</Button>{' '}
          <Button onClick={() => { deleteevent(); navigation();}} variant="outline-danger">Delete</Button>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
