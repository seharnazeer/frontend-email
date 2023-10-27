import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate, useParams, useResolvedPath } from 'react-router-dom'
import {BiSolidEnvelope,BiSolidData,BiMenu} from 'react-icons/bi'
import {FaConnectdevelop} from 'react-icons/fa'

const Layout = ({children}) => {
    const navigate=useNavigate();
    const param=useResolvedPath();
    console.log(param)
  return (
    <div className='grid grid-cols-[20%_80%] h-screen'>
        <div className='flex flex-col gap-6 md:pt-0 pt-8  bg-white'>
            <div className=' hidden md:flex gap-4 justify-center items-center h-20'>
                <img src='avatar.jpg' alt='avatar' className='w-8 h-8' />
                <div className='flex flex-col '>
                    <h4>Dizzydom</h4>
                    <p className='text-grey-color'>
                        xyz@gmail.com
                    </p>
                </div>

            </div>
            {
                [
                    {
                        // image:'inbox.png',
                        image: <BiSolidEnvelope className={`   w-6 h-6`} />,
                        text:"Inbox",
                        url:'/inbox'
                    },{
                        image: <FaConnectdevelop className='w-6 h-6' />,
                        text:'Template',
                        url:'/template'
                    },
                    {
                        image :<BiSolidData className='w-6 h-6' />,
                        text:'Parsed Data',
                        url:'/parsed'
                    },{
                        image: <BiMenu  className='w-6 h-6'/>,
                        text :'Fields',
                        url:'/fields'
                    },
                    // {
                    //     image:'processing.png',
                    //     text :"Post Processing",
                    //     url:'/processing'
                    // }
                ].map((elem,index)=>(
                    <div onClick={()=>navigate(elem.url)} className='flex items-center gap-2 bg-[#f6f7fb] p-2 ml-4 rounded-md ' key='index'>
                        <div className={`${param.pathname === elem.url ? 'text-blue-700': 'text-grey-color'} `}>
                        {/* <img  src={elem.image} alt='elem.text' className='w-6 h-5'/> */}
                        {
                            elem.image
                        }
                        </div>
                        <p className={`${param.pathname === elem.url? 'text-blue-700 font-bold':'' }  md:block hidden `}>{elem.text}</p>
                        </div>
                ))
            }

        </div>
        <div className='flex flex-col'>
            <Navbar />
            <div className='bg-[#f6f7fb] w-full p-2 h-full flex items-center justify-center'>
            {
                children
            }
            </div>
            
        </div>

    </div>
  )
}

export default Layout