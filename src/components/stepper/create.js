import React from 'react'

const Create = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
    <p className='font-bold text-4xl'>Mailbox Settings</p>
    <div className='flex flex-col border-dashed border-blue-800 border-2 gap-4 rounded-md p-4'>
    <p className='font-bold text-xl'>Mailbox Settings</p>
    <input className='border-gray-300 border-2 p-4'  type='text' placeholder='Amazon, Invoices etc'  />
    <p className='text-blue-800'>Mailbox name is used as a part of your email address. You can change this later if necessary.</p>
    </div>

</div>
  )
}

export default Create