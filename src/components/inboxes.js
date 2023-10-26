import React from 'react'

const Inboxes = () => {
    const ZeroInboxes=()=>{
        const Content_Data=[
            {
                number: 1,
                heaing:"Create your first Mailbox",
                subheading: 'What are Mailbox?',
                content: 'Think of mailboxes as email addresses or folders where you can import documents of the same type (e.g., PDF invoices, orders from Amazon, leads from Zillow). If you want to process different document types, simply create multiple mailboxes.'
            },
           
            {
                number: 2,
                heaing:"Import a simple document.",
                subheading: 'What are Mailbox?',
                content: 'Import your first document to that mailbox. You can manually upload your file, send an email, or use our API.'
            },
            {
                number: 3,
                heaing:"Create a parsing template if needed.",
                subheading: 'What are Mailbox?',
                content: 'Parsio uses pre-built Al models to extract data from PDF files and provides a collection of ready-made templates for parsing emails from some platforms. You can also create a custom parsing template to specify which data you want to extract from your emails or documents. '
            },
        ]
        return (
            <div className='flex  flex-col gap-4 items-center justify-center  w-full '>
              {
                Content_Data.map((elem)=>{
                    return(
                        <div className='flex p-4 bg-white rounded-md w-full' id={elem.number}>
                        <div className='bg-blue-color w-5 h-5 rounded-full text-white flex justify-center items-center'>
                            <p>{elem.number}</p>
    
                        </div>
                 
                    <div className='flex flex-col ml-1 w-full'>
                        <h4 className='font-bold'>{elem.heaing}</h4>
                        <p className='text-grey-color font-md '>{elem.subheading}</p>
                        <p className='text-grey-color font-md '>{elem.content}</p>
    
                    </div>
                    </div>
                    )
                })
              }
               <button className='bg-blue-color md:w-2/5 w-4/5 h-10 text-white font-extrabold rounded-md '>Let’s create a Mailbox</button>
            </div>
        )
    }


    const HaveInboxes=()=>{
        return(
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <button className=' border-grey-color border-2 text-grey-color p-2 pl-4 pr-4 rounded-sm'>
                        Jump to a mailbox
                    </button>
                    <button className='bg-blue-color text-white p-2 rounded-sm'>
                        Create mailbox
                    </button>

                </div>
                <div  className='grid overflow-x-scroll bg-white p-2  grid-cols-[40%_auto_auto_auto_auto_auto] text-grey-color'>
                    <div>

                    </div>
                    <p>Documents</p>
                    <p>Parsed</p>
                    <p>Failed</p>
                    <p>Retention</p>
                    <p>last activity</p>

                </div>

            </div>
        )
    }
  return (
    <div className="w-full">
    {/* <table className="min-w-md divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heading 1</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heading 2</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Row 1, Column 1</td>
          <td className="px-6 py-4 whitespace-nowrap">Row 1, Column 2</td>
        </tr>
      </tbody>
    </table> */}
    {/* <ZeroInboxes />
     */}
     <HaveInboxes />
  </div>
  )
}

export default Inboxes