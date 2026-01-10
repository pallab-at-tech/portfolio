import React, { useRef, useState } from 'react'
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



const CreateProjectDataWindow = ({ close }) => {

    const [videoLoading, setVideoLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

    const { fetchAllDetails } = useGlobalContext()

    const [data, setData] = useState({
        tittle: "",
        body: "",
        feature: [],
        tech_uses: [],
        project_deploy_link: "",
        project_git_link: "",
        video: "",
        image: "",
        status: ""
    })

    const techList = [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "Firebase",
        "React Native",
        "AWS",
        "Git",
        "Vite",
        "Java"
    ];

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const videoRef = useRef();
    const imageRef = useRef();

    const handlePhotoAndVideo = async (e) => {

        try {
            const file = e.target.files?.[0];
            const name = e.target.name

            if (!file) return;

            if (name === "video") {
                setVideoLoading(true)
            }
            else {
                setImageLoading(true)
            }


            const response = await uploadFile(file)

            setVideoLoading(false)
            setImageLoading(false)

            setData((preve) => {
                return {
                    ...preve,
                    [name]: response?.secure_url
                }
            })
        } catch (error) {
            // console.log(error)
        } finally {
            // e.target.value = null;
        }
    }

    const handleSubmit = async (e) => {

        try {

            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.create_Project_details,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
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
        <section className={`fixed inset-0 h-screen pt-[80px] backdrop-blur-[3px] ${darkMode ? "bg-neutral-900/70" : "bg-[#000000a9]/90"} z-50 flex items-center justify-center`}>

            <div>
                <form onSubmit={handleSubmit} className={`grid gap-y-2 lg:min-w-md  md:min-w-[400px] min-w-[300px] h-[70vh] md:h-[80vh] scrollbar-custom  pb-4 py-2 pt-4 ${darkMode ? "bg-gradient-to-br from-[#334a7d] via-[#4f6aa29c] to-[#232a36]" : "bg-[#dbd7d7]"} rounded-md overflow-y-auto px-6`}>

                    <div className='w-full flex justify-end'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Title : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" onChange={handleOnChange} name='tittle' value={data.tittle} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Small descrption : </p>
                            <TiStarburst size={10} />
                        </div>

                        <textarea name="body" id="" onChange={handleOnChange} value={data.body} rows={4} cols={4} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} max-h-[70px] min-h-[60px] text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}></textarea>
                    </div>


                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Tech use : </p>
                            <TiStarburst size={10} />
                        </div>

                        <select name="" id="" required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark outline-none p-1 rounded`}

                            onChange={(e) => {
                                const value = e.target.value

                                setData((preve) => {
                                    return {
                                        ...preve,
                                        tech_uses: [...preve.tech_uses, value]
                                    }
                                })
                            }}

                        >

                            <option value="" disabled>Select tech</option>

                            {
                                techList.map((v, i) => {
                                    return (
                                        <option value={v}>{v}</option>
                                    )
                                })
                            }
                        </select>

                        <div className='flex gap-1.5 flex-wrap my-2 rounded'>
                            {
                                data.tech_uses.map((v, i) => {
                                    return (
                                        <div key={`${data.tittle}-${i}`} className='text-sm bg-[#ada3a3] rounded-2xl text-black p-1 flex items-center justify-between'>
                                            <p>{v}</p>
                                            <div className='text-red-600 cursor-pointer'
                                                onClick={(e) => {

                                                    setData((preve) => {
                                                        return {
                                                            ...preve,
                                                            tech_uses: preve.tech_uses.filter((_, idx) => i !== idx)
                                                        }
                                                    })

                                                }}>
                                                <IoMdClose size={20} />
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>



                    </div>


                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Describe feature : </p>
                            <TiStarburst size={10} />
                        </div>

                        <textarea name="tittle" id=""
                            onChange={(e) => {
                                const value = e.target.value
                                const splitValue = value.split(".")

                                setData((prev) => {
                                    return {
                                        ...prev,
                                        feature: splitValue
                                    }
                                })
                            }}
                            rows={4} cols={4} required
                            className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} max-h-[70px] min-h-[60px] text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}>

                        </textarea>

                    </div>


                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>project deploy link : </p>
                        <input type="text" onChange={handleOnChange} name='project_deploy_link' value={data.project_deploy_link} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>project Git link : </p>
                        <input type="text" onChange={handleOnChange} name='project_git_link' value={data.project_git_link} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* video */}
                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>video : </p>

                        <input type="file" onChange={handlePhotoAndVideo} ref={videoRef} hidden name='video' id='video' accept="video/*" />
                        <div onClick={() => videoRef.current?.click()} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer`}>
                            {
                                videoLoading ? (
                                    <div className='loader mt-4'></div>
                                ) : (
                                    <>
                                        {
                                            data.video ? (
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

                    {/* image */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Cover Image : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="file" ref={imageRef} onChange={handlePhotoAndVideo} hidden name='image' id='cover_image' accept="image/*" />
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


                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Status : </p>
                            <TiStarburst size={10} />
                        </div>

                        <select required name="" id="" className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark outline-none p-1`}

                            onChange={(e) => {

                                const value = e.target.value
                                setData((preve) => {
                                    return {
                                        ...preve,
                                        status: value
                                    }
                                })
                            }}>

                            <option value="" disabled>Select status </option>
                            <option value="DONE">DONE</option>
                            <option value="PENDING">PENDING</option>
                        </select>

                    </div>


                    <button className='p-2 w-full bg-[#2c6abc]  hover:bg-[#2463b5]  text-[#d1dcfb]  mt-2 rounded  font-semibold cursor-pointer'>submit</button>

                </form>
            </div >

        </section >
    )
}

export default CreateProjectDataWindow
