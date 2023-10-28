import React,{useState} from 'react'
import axios from 'axios';
import { useStatevalue } from '../../ccontext/stateProvider';
import {v1 as uuid} from 'uuid'
const Create = () => {
  const [{inboxes},dispatch]=useStatevalue();
    const [inbox,setinbox]= useState('');
    const [taken,settaken]= useState('');

    const generteUnique = async () => {
      let unique = uuid();
      unique = unique.split('-').join('');
      console.log('unique', unique);
      let result = '';
      let i = 0;
      while (i < 6) {
        result += unique.charAt(Math.floor(Math.random() * unique.length));
        i += 1;
      }
      return result.toUpperCase();
    };
    const createInbox=async()=>{
      const newinbox= inbox + await generteUnique() ;
      console.log(newinbox)
      setinbox(newinbox);
        console.log("heyy")
    const result=await axios.post('/api/createinboxes',{
        inboxename: inbox + '@feedyouthfoundation.org',
        userid: JSON.parse(sessionStorage.getItem('userid'))
    })
    console.log(result.data);
    dispatch({
        type: 'SET_INBOXES',
        inboxes: result.data.message[0].inboxes
    })
    }
 
    const handleSubmit=async(e)=>{
       
       const result=await axios.post('/api/checkinbox',{
            inboxename: inbox + '@feedyouthfoundation.org'
        })
        console.log(result.data.message)
        if(result.data.message === 'Available' ){
            createInbox();
        }else{
         
          createInbox()
        }
    }
  return (
    <div className='flex flex-col gap-6 w-full'>
    <p className='font-bold text-4xl'>Mailbox Settings</p>
    <div className='flex flex-col border-dashed border-blue-800 border-2 gap-4 rounded-md p-4'>
    <p className='font-bold text-xl'>Mailbox Settings</p>
    <input className='border-gray-300 border-2 p-4' onChange={({target:{value}})=>setinbox(value)} type='text' placeholder='Amazon, Invoices etc'  />
    <p className='text-blue-800'>Mailbox name is used as a part of your email address. You can change this later if necessary.</p>
    <button onClick={handleSubmit} className='bg-blue-color p-4 rounded-md text-white'>Create</button>
    </div>

</div>
  )
}

export default Create