import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ({ close }) => {
    return (
        <section className='bg-neutral-900/70 fixed top-0 bottom-0 right-0 left-0 z-50'>
            <div className='dark:bg-primary-dark w-full max-w-sm max-h-screen min-h-screen ml-auto'>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <Link to={""} className='dark:text-primary-text'>Admin sign Up</Link>
                    <Link to={""} className='dark:text-primary-text'>Admin sign in</Link>
                </div>

            </div>
        </section>
    )
}

export default Sidebar
