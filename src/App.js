import React,{useState, useEffect} from 'react'
import {Routes , Route} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Form from './component/Form'
import List from './component/List';
import Contacts from './component/Contacts'
import Contactdetails from './component/Contactdetails';
import Card from './component/Card';

export default function App() {

  const handledelete=(index)=>{
    const newcontacts = [...contacts];
    newcontacts.splice(index,1);
    setContacts(newcontacts)
    localStorage.setItem('contacts',JSON.stringify(newcontacts));
  }


  const [contacts , setContacts] = useState([]);

  
  const oncontactchange = (contact)=>{
    if(contact){
      localStorage.setItem('contacts',JSON.stringify([...contacts, contact]));
    setContacts(contacts)
    }
    setContacts([...contacts, contact])
   
  }

  useEffect(()=>{
    const retrieve =JSON.parse(localStorage.getItem('contacts'))
    if(retrieve) setContacts(retrieve)
  },[])

  
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='form' element={<Form contact={contacts} oncontactchange={oncontactchange}/>}></Route>
        <Route path='Contactlist' element={<List/>}></Route>
        <Route path='/' element={<Contacts contact={contacts} handledelete={handledelete}/>}></Route>
        <Route path='Contactdetails' element={<Contactdetails/>}></Route>
        <Route path='Card' element={<Card/>}></Route>
      </Routes>
      
      
    </div>
  )
  }
