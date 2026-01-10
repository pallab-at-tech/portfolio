import React, { useEffect, useRef, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { TiStarburst, TiTick } from 'react-icons/ti'
import { IoMdClose } from "react-icons/io";
import uploadFile from '../../utils/uploadFile';
import { useGlobalContext } from '../../provider/GlobalProvider';
import { FiUploadCloud } from 'react-icons/fi';
import Axios from '../../utils/Axios';
import SummaryApi from '../../common/SummaryApi';
import toast from 'react-hot-toast';
import AxiosToastError from "../../utils/AxiosToastError"

const CreateOtherWindow = ({ close, loadData, fetchOtherData }) => {

    const [data, setData] = useState({
        tittle: "",
        image: "",
        describe: ""
    })
    const [imageLoading, setImageLoading] = useState(false)
    const imageRef = useRef();
    const { fetchAllDetails } = useGlobalContext()

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

        try {
            const file = e.target.files?.[0];
            const name = e.target.name

            if (!file) return;
            setImageLoading(true)

            const response = await uploadFile(file)

            setImageLoading(false)

            setData((preve) => {
                return {
                    ...preve,
                    [name]: response?.secure_url
                }
            })
        } catch (error) {
            // console.log(error)
        }
    }

    const handleOnSubmit = async (e) => {
        try {

            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.create_Certificate_details,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
                loadData()
                fetchOtherData()
                toast.success(responseData?.message)
                fetchAllDetails()
                close()
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

    const { darkMode } = useGlobalContext()

    return (
        <section className={'fixed inset-0 backdrop-blur-[3px] h-screen pt-[80px] bg-neutral-900/70 z-50 flex items-center justify-center'}>

            <div>

                <form onSubmit={handleOnSubmit} className={`grid gap-y-2 lg:min-w-md lg:max-w-md md:min-w-[400px] md:max-w-[400px] min-w-[300px] max-w-[300px] md:min-h-[440px] max-h-[70vh] md:max-h-[80vh] scrollbar-custom pl-6 pb-4 py-2 pt-4 ${darkMode ? "bg-gradient-to-br from-[#334a7d] via-[#4f6aa29c] to-[#232a36]" : "bg-[#dbd7d7]"} rounded-md overflow-y-auto px-6`}>

                    <div className='w-full flex justify-end'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    {/* title */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Title : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input onChange={handleChange} type="text" name='tittle' value={data.tittle} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* image */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Certificate : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="file" onChange={handlePhoto} ref={imageRef} hidden name='image' id='cover_image' accept="image/*" />
                        <div onClick={() => imageRef.current?.click()} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer`}>
                            {
                                imageLoading ? (
                                    <div className='loader mt-4'></div>
                                ) : (
                                    <>
                                        {
                                            data.image ? (
                                                <div className='flex items-center justify-center'>
                                                    <p>uploaded</p>
                                                    <div className='text-green-600'><TiTick size={28} /></div>
                                                </div>
                                            ) : (
                                                <div className='flex gap-3 items-center'>
                                                    <div><FiUploadCloud size={28} /></div>
                                                    <p>choose file.....</p>
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                        </div>

                    </div>

                    {/* desciption */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Describe : </p>
                            <TiStarburst size={10} />
                        </div>

                        <textarea onChange={handleChange} name="describe" value={data.describe} rows={4} cols={4} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1 max-h-[120px] min-h-[110px]`}></textarea>

                    </div>

                    <button className='p-2 w-full cursor-pointer bg-[#1857a8] hover:bg-[#2463b5] text-[#d1dcfb] mt-2 rounded font-semibold'>submit</button>
                </form>
            </div>

        </section>
    )
}

export default CreateOtherWindow
