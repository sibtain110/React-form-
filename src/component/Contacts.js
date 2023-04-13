import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


export default function Contacts(props) {


    var d = props.handledelete;
    var getresults = props.contact
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .map((event, index) => {
            const { name, email } = event;
            return (

                <Table striped>

                    
                        <tbody>
                            <tr>
                                <td className='col-4'><div>{name}</div></td>
                                <td className='col-4'>
                                <Link to='/contactdetails' state={{ from: event }}>
                                    <div>Details</div>
                                </Link>
                                </td>
                                <td className='col-2'>  <div key={index} index={index}>
                                    <Button variant="text" onClick={() => d(index)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></Button>
                                </div></td>
                            </tr>
                        </tbody>


                </Table>
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
                            <th className='col-4'>User Name</th>
                            <th className='col-4'>Details</th>
                            <th className='col-2'>Remove</th>
                        </tr>
                    </thead>

                    <Button variant="text" className='mt-5' onClick={() => navigate('form')}>Add Contact
                        <svg className='mb-2' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg></Button>

                </Table>
                {getresults}
            </div>
        </>
    )
}
