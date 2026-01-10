import React from 'react'

const ConfirmationBox = ({ confirmation, setConfirmation }) => {
    return (
        <div className='fixed h-screen inset-0 backdrop-blur-[3px] bg-neutral-900/70 z-50 flex items-center justify-center'>

            <div className='bg-[#dbdde3] rounded-md px-[25px] py-[22px] text-black shadow-md'>

                <p className='font-semibold text-center'>Want To Delete The Education Data ?</p>

                <div className='flex items-center gap-3 mt-2 cursor-pointer text-[16px]'>

                    <div onClick={() => {
                        setConfirmation((preve) => {
                            return {
                                ...preve,
                                closeWindow: false,
                                confirm : true
                            }
                        })
                    }}
                        className='bg-green-700 hover:bg-green-800 transition-colors duration-200 w-fit px-3 py-1 rounded text-white'>
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
                        className='bg-red-700 hover:bg-red-800 transition-colors duration-200 w-fit px-3 py-1 text-white rounded'>
                        cancel
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default ConfirmationBox
