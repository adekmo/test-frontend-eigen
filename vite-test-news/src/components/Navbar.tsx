import React, { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex p-6 justify-between items-center'>
            <a href="/"><p className='text-[40px] font-poppins font-bold uppercase '><span className="text-red-500">News</span> Portal</p></a>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar