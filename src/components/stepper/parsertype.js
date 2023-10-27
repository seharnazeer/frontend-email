import React from 'react'

const ParserType = () => {
  return (
    <div className='flex flex-col w-full gap-6'>
        <h4 className='font-extrabold text-3xl'>Choose Parser Type</h4>
        {/* first parser template */}
        <div className='flex justify-between border-dashed items-center border-2 pl-4 pt-4 pb-4 rounded hover:border-[#2b44e7] border-white'>
        <div className='flex flex-col'>
            <p className='text-xl font-bold'>Template-based Parser</p>
            <p className='text-grey-color'>Best for: parsing transactional emails, files and some simple PDFs.</p>
            <div className='flex gap-2'>
                <img src="right.png" className='w-6 h-6' alt='right icon' />
                <p className='text-green-500'>Create your parsing template or select from our catalog</p>

            </div>
            <div className='flex gap-2'>
                <img src="right.png" className='w-6 h-6' alt='right icon' />
                <p className='text-green-500'>Create your parsing template or select from our catalog</p>

            </div>
            <div className='flex gap-2'>
                <img src="wrong.png" className='w-6 h-6' alt='wrong icon' />
                <p className='text-red-600'>No OCR for PDF files</p>

            </div>
            <div className='flex gap-2'>
                <img src="wrong.png" className='w-6 h-6' alt='wrong icon' />
                <p className='text-red-600'>Cannot extract tables from PDF files</p>

            </div>
           

        </div>
        <div className='bg-blue-color  md:p-4 p-2 text-[10px] rounded-md text-white font-bold'>
        2 credit / page
        </div>
        </div>
        <div className='flex justify-between border-dashed items-center border-2 pl-4 pt-4 pb-4 rounded hover:border-[#2b44e7] border-white'>
        <div className='flex flex-col'>
            <p className='text-xl font-bold'>GPT-4-powered parse</p>
            <p className='text-grey-color'>Best for: parsing complex emails and documents without creating templates or parsing rules.</p>
            <div className='flex gap-2'>
                <img src="right.png" className='w-6 h-6' alt='right icon' />
                <p className='text-green-500'>Write a prompt as if you were talking to a person</p>

            </div>
            <div className='flex gap-2'>
                <img src="right.png" className='w-6 h-6' alt='right icon' />
                <p className='text-green-500'>Supported formats: Emails, PDFs, HTML, TXT, DOCX, XML, MD, JSON</p>

            </div>
            <div className='flex gap-2'>
                <img src="wrong.png" className='w-6 h-6' alt='wrong icon' />
                <p className='text-red-600'>Can’t extract tables from PDFs</p>

            </div>
            <div className='flex gap-2'>
                <img src="wrong.png" className='w-6 h-6' alt='wrong icon' />
                <p className='text-red-600'>No OCR for PDF files</p>

            </div>
           

        </div>
        <div className='bg-blue-color md:p-4 p-2 text-[10px] rounded-md text-white font-bold'>
        1 credit / page
        </div>
        </div>
    </div>
  )
}

export default ParserType