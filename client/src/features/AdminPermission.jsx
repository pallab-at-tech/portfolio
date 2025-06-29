import React from 'react'
import { useSelector } from 'react-redux';

const AdminPermission = ({children}) => {

    const user = useSelector((state) => state?.user)


    return (
        <>

        {
            user?.admin_verify ? children : <p className='text-red-700 bg-red-200 p-4'>Do not have permission</p>
        }

        </>
    )
}

export default AdminPermission
