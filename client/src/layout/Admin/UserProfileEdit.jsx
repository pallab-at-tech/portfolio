import React, { useRef, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { CgProfile } from 'react-icons/cg'
import uploadFile from '../../utils/uploadFile'
import SummaryApi from '../../common/SummaryApi'
import Axios from '../../utils/Axios'
import { setUserDetails } from '../../store/userSlice'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'

const UserProfileEdit = ({ close }) => {

    const user = useSelector((state) => state?.user)
    const imageRef = useRef();
    const dispatch = useDispatch()

    const [data, setData] = useState({
        _id: user?._id,
        avatar: user?.avatar || ""
    })
    const [imageLoading, setImageLoading] = useState(false)


    const handlePhoto = async (e) => {

        const file = e.target.files?.[0];
        const name = e.target.name

        if (!file) return;

        setImageLoading(true)

        const response = await uploadFile(file)

        setImageLoading(false)

        setData((prev) => {
            return {
                ...prev,
                [name]: response?.secure_url
            }
        })

    }

    const handleOnSubmit = async (e) => {

        e.preventDefault()

        const response = await Axios({
            ...SummaryApi.upadate_user_details,
            data: data
        })

        const { data: responseData } = response

        if (responseData?.error) {
            toast.error(responseData?.message)
        }


        if (responseData?.success) {
            toast.success(responseData?.message)

            dispatch(setUserDetails({
                ...user,
                avatar: data.avatar
            }))

            close()
        }
    }

    const { darkMode, setDarkMode } = useGlobalContext()

    return (
        <section className={`fixed inset-0 h-screen backdrop-blur-[3px] ${darkMode ? "bg-neutral-900/70" : "bg-[#000000a9]/90"} z-50 flex items-center justify-center`}>

            <form
                onSubmit={handleOnSubmit}
                className={`max-w-lg relative px-6 py-5 ${darkMode ? "bg-gradient-to-br to-[#767d8c] from-[#80899a]" : "bg-[#dbd7d7]"} rounded-md overflow-y-auto`}
            >
                <div className='absolute top-1 right-1 text-primary-black'>
                    <IoMdCloseCircleOutline size={26} onClick={close} className='cursor-pointer' />
                </div>

                <div className='grid gap-4 grid-cols-[1fr_150px] items-center'>

                    <div>
                        {
                            !data?.avatar ? (
                                <div><CgProfile size={70} /></div>
                            ) : (
                                <div className={`w-26 h-26 rounded-full overflow-hidden border-4 ${darkMode ? "border-[#cc8708]" : "border-[#a44307]"}`}>
                                    <img src={data.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <input type="file" onChange={handlePhoto} ref={imageRef} hidden name='avatar' id='profile_image' accept="image/*" />
                        <div onClick={() => imageRef.current?.click()} className='rounded-md md:px-4 px-2 py-2.5  bg-[#cc8708] border border-black text-base font-semibold cursor-pointer w-full flex items-center p-2 justify-center'>
                            {
                                imageLoading ? (
                                    <div className='loader mt-3'></div>
                                ) : (
                                    <p>upload image</p>
                                )
                            }
                        </div>
                    </div>
                </div>

                <button className='px-2 py-2 my-2 w-full bg-[#1d68ca] hover:bg-[#2463b5]  text-[#d1dcfb] rounded  font-semibold cursor-pointer'>update</button>

            </form>

        </section>
    )
}

export default UserProfileEdit
