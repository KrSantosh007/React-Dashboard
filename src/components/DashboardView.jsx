import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import User from '../assets/user-2.png'

const DashboardView = () => {
    return (
        <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type='text' className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-5 font-normal' placeholder='Search for...' />
                <div className='bg-[#023b5b] h-10 px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='#fff'/>
                </div>
            </div>

            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-l-[1px] pl-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell color='#df3475'/>
                    <FaEnvelope color='#df3475'/>
                </div>
                <div className='flex items-center gap-[15px] relative'>
                    <p>Santosh Singh</p>
                    <div className='h-[50px] w-[50px] rounded-full bg-[#df3475] cursor-pointer flex items-center justify-center relative'>
                        <img src={User} alt='profile' className='h-[48px] w-[48px] rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView
