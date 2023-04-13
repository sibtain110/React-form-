import React ,{useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


export default function From(props) {

  const[name , setName] = useState("");
  const[email , setEmail] = useState("");

  const navigate = useNavigate('/')

  const handlesubmit=(e)=>{
    e.preventDefault();
    const newcontact = {name,email};
    console.log(newcontact);
    props.oncontactchange(newcontact);
    if(name === ''|| email=== ''){
    }
    else{
      alert('Contact Added')
    }

    setName('');
    setEmail('');
  }

  return (
    <>

<Navbar bg="primary" variant="dark" className='mt-4'>
     <Container className='justify-content-center'>
       <Navbar.Brand href="#home">Contact Form</Navbar.Brand>
     </Container>
   </Navbar>

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
        Add
      </Button>
    </Form>
    </div>
<div className='col-3'></div>
</div>
        
</div>
    </div>
    </>
  );
}