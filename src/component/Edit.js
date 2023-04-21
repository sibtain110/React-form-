import React , {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation , useNavigate} from 'react-router-dom'

export default function Edit(props) {

  console.log(props.handleupdate);

  const navigate = useNavigate();

    const location = useLocation();
    const event= location.state;
    // console.log(event);

    const {contact} = location.state;
    
  const[name , setName] = useState("");
  const[email , setEmail] = useState("");

  useEffect(()=>{
    if(contact)
    setName(contact.name)
    setEmail(contact.email)
  },[contact])

 
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(name === ''|| email=== ''){
    }
    handleupdate()
  };
  const handleupdate = ()=>{
    props.updateContact({name,email});
    navigate('/')
  }
  return (
    <>
      <div className='container'>
      <div className='container'>
<div className='row'>
<div className='col-3'></div>
<div className='col-6'> 
    <Form className='mt-5' onSubmit={handlesubmit}>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"
        value = {name}
        onChange={(e)=> setName(e.target.value)}
        required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value = {email}
        onChange={(e)=> setEmail(e.target.value)}
        required />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Update
      </Button>
    </Form>
    </div>
<div className='col-3'></div>
</div>
        
</div>
    </div>
    </>
  )
}
