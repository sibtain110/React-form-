import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Contacts(props) {

    var getresults = props.contact
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .map((event) => {
            console.log(event);

            const handledelete=()=>{
                props.handledelete(props.index)
            }

            return (
                <div className='container' >
                    <Table striped>
                        <tbody>
                            <tr>
                                <td className='col-md-4'>{event.name}</td>
                                <td className='col-md-4'>{event.email}</td>
                                <td><Stack spacing={2} direction="row">
                                    <Button variant="text" onClick={()=>handledelete()} className='position-absolute col-md-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg></Button>
                                </Stack></td>
                            </tr>
                        </tbody>
                    </Table>



                </div>
            )
        })

        const navigate = useNavigate();
    return (

        <>
       
       <Navbar bg="primary" variant="dark" className='mt-4'>
     <Container className='justify-content-center'>
       <Navbar.Brand href="#home">Contact List</Navbar.Brand>
     </Container>
   </Navbar>


        <div className='container mt-5' >

            <Table striped>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email Addres</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <Button variant="text" className='mt-5'  onClick={()=> navigate('/')}>Add Contact <svg className='mb-2' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg></Button>

            </Table>
            {getresults}
        </div>
        </>
    )
}
