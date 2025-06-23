import React from 'react'

const ConfirmationBox = ({ confirmation, setConfirmation }) => {
    return (
        <div className='fixed top-0 right-0 left-0 bottom-0 bg-neutral-900/70 z-50 flex items-center justify-center'>

            <div className='bg-[#c1ad00] rounded md:min-w-[400px] p-3 text-black'>

                <p className='font-semibold text-center'>want to delete the education data ?</p>

                <div className='flex justify-around my-2 cursor-pointer'>

                    <div onClick={() => {
                        setConfirmation((preve) => {
                            return {
                                ...preve,
                                closeWindow: false,
                                confirm : true
                            }
                        })
                    }}
                        className='bg-green-700 w-fit px-3 py-1.5 rounded'>
                        confirm
                    </div>

                    <div onClick={() => {
                        setConfirmation((preve) => {
                            return {
                                ...preve,
                                closeWindow: false
                            }
                        })
                    }}
                        className='bg-red-700 w-fit px-3 py-1.5 rounded'>
                        cancel
                    </div>

                    
                </div>

            </div>

        </div>
    )
}

export default ConfirmationBox
