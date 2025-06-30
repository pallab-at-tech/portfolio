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
import fetchUserDetails from '../../utils/FetchUserDetails'


const ProfileWindowEdit = ({ close }) => {
    const user = useSelector((state) => state?.user)
    const imageRef = useRef();
    const dispatch = useDispatch()

    const [data, setData] = useState({
        _id : user?._id,
        name: user?.name || "",
        avatar: user?.avatar || ""
    })
    const [imageLoading, setImageLoading] = useState(false)

    const handleChange = (e) => {

        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

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

            const dataFetch = await fetchUserDetails()
            dispatch(setUserDetails(dataFetch?.data))
            close()
        }
    }


    return (
        <section className='fixed top-0 right-0 left-0 bottom-0 min-h-screen bg-neutral-900/70 z-50 flex items-center justify-center'>

            <div>

                <form onSubmit={handleOnSubmit} className='grid md:max-h-[280px] md:min-h-[280px]  md:min-w-[350px] md:max-w-[350px] min-w-[280px] max-w-[280px] max-h-[250px] min-h-[250px] py-2  bg-gradient-to-br to-[#767d8c] from-[#80899a] rounded overflow-y-auto  md:px-10 px-6'>

                    <div className='w-full flex justify-end text-primary-black mt-2'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    <div>


                        <div className='text-primary-black flex items-center gap-x-6 pb-2'>

                            {
                                !data?.avatar ? (
                                    <div><CgProfile size={56} /></div>
                                ) : (
                                    <div className='w-26 h-16 rounded-full overflow-hidden border'>
                                        <img src={data.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                )
                            }

                            <input type="file" onChange={handlePhoto} ref={imageRef} hidden name='avatar' id='profile_image' accept="image/*" />
                            <div onClick={() => imageRef.current?.click()} className='rounded-md md:px-4 px-2 py-2  bg-[#cc8708] border border-black text-base font-semibold cursor-pointer w-full flex items-center p-2 justify-center'>
                                {
                                    imageLoading ? (
                                        <div className='loader mt-3'></div>
                                    ) : (
                                        <p>upload image</p>
                                    )
                                }
                            </div>

                        </div>

                        <div>
                            <input type="text" name='name' onChange={handleChange} value={data.name} placeholder='Enter your name ...' className='text-primary-dark p-2 border-2 outline-none rounded w-full h-8 my-1' />
                        </div>

                        <button className='p-2 my-2 w-full bg-[#2c6abc]  hover:bg-[#2463b5]  text-[#d1dcfb]  mt-2 rounded  font-semibold cursor-pointer'>update</button>

                    </div>

                </form>
            </div>

        </section>
    )
}

export default ProfileWindowEdit
