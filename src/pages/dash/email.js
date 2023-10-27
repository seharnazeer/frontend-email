import React from 'react'
import Layout from '../layout'
const Email = () => {
  const ZeroInbox=()=>{
    return(
      <div className='flex flex-col items-center justify-center gap-2'>
        <h4 className='font-bold text-xl'>Send your first document</h4>
        <h6 className='text-grey-color'>Send your email ( with or without attachments ) to the address below, ordrop you dcument in the uopload zone.</h6>
        <p className=''>
        Waiting for the first document to arrive. Your email should arrive within 1-2 minutes after you sent it. If itdosen’t 

        </p>
        <div className='flex border-2 rounded w-full justify-center border-grey-color border-dashed p-8'>
          <p className='text-grey-color'>Please send your mail</p>

        </div>
        <p className='text-blue-700 cursor-pointer'>Please contact with us</p>
      </div>
    )
  }
  const HaveInboxes=()=>{
    return(
      <div className='p-4 w-full text-center'>
        <table className='w-full'>
          <tr className=' bg-white '>
            <th>Parsed</th>
            <th>
              Name
            </th>
            <th>
              Recieved
            </th>
          </tr>
          <tr className='bg-grey-color h-1'>

          </tr>
          {
            [
              {
                'parsed':'success',
                'name':'dummy',
                'recieved':"12.67.AM"
              },
              {
                'parsed':'success',
                'name':'dummy',
                'recieved':"12.67.AM"
              }
            ].map((elem)=>(
              <tr className='bg-white '>
                <td>{elem.parsed}</td>
                <td>{elem.name}</td>
                <td>{elem.recieved}</td>
              </tr>
            ))
          }
        </table>

      </div>
    )
  }
  return (
<Layout>
    {/* <ZeroInbox /> */}
    <HaveInboxes />
    </Layout>
  )
}

export default Email