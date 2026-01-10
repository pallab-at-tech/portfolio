import React from 'react'
import { useSelector } from 'react-redux';

const AdminPermission = ({ children }) => {

    const user = useSelector((state) => state?.user)


    return (
        <div className='h-[calc(100vh-72px)] flex items-center justify-center mx-4'>
            {
                user?.admin_verify ? children : <p className='text-red-700 bg-red-200 border border-red-400 rounded-md p-4'>Do not have permission</p>
            }
        </div>
    )
}

export default AdminPermission
