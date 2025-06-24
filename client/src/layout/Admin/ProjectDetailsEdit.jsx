import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import bg from "../../assets/no data.png"
import { TiStarburst, TiTick } from 'react-icons/ti'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'
import TickMark from '../../utils/TickMark'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreateProjectDataWindow from './CreateProjectDataWindow'
import { IoMdClose } from 'react-icons/io'
import { FiUploadCloud } from 'react-icons/fi'
import uploadFile from '../../utils/uploadFile'
import ConfirmationBox from '../../utils/ConfirmationBox'

const ProjectDetailsEdit = () => {

    const alldata = useSelector(state => state.allofdetails)
    const { fetchAllDetails } = useGlobalContext()

    const [openCreateWindow, setopenCreateWindow] = useState(false)

    const [index, setIndex] = useState(0)
    const projectArr = alldata?.projectList || [];
    const total = projectArr?.length;

    const [confirmation, setConfirmation] = useState({
        confirm: false,
        closeWindow: false
    })
    const [videoLoading, setVideoLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [tick, setTick] = useState(false)

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

    const makeEditable = (item) => (
        {
            projectId: item?._id,
            tittle: item?.tittle || "",
            body: item?.body || "",
            feature: [...(item?.feature || [])],
            tech_uses: [...(item?.tech_uses || [])],
            project_deploy_link: item?.project_deploy_link || "",
            project_git_link: item?.project_git_link || "",
            video: item?.video || "",
            image: item?.image || "",
            status: item?.status || ""
        }
    );

    const [data, setData] = useState(() => makeEditable(projectArr[0]))

    useEffect(() => {

        if (total === 0) return;
        setData(makeEditable(projectArr[index]));

    }, [index, total])

    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handlePhotoAndVideo = async (e) => {

        const file = e.target.files?.[0];
        const { name } = e.target

        // console.log("name", name)

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
    }

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.update_Project_details,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
                setTick(true)
                toast.success(responseData?.message)
                fetchAllDetails()
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {

            const response = await Axios({
                ...SummaryApi.delete_project_details,
                data: {
                    projectId: data?.projectId
                }
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
                toast.success(responseData?.message)
                fetchAllDetails()
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        if (confirmation.confirm) {
            handleDelete()

            setConfirmation((preve) => {
                return {
                    ...preve,
                    confirm: false
                }
            })
        }

    }, [confirmation.confirm])



    return (
        <section className='lg:mx-24 md:mx-14 mx-8 lg:mt-16 mt-10 text-primary-text'>

            <div className='flex flex-col mb-6'>
                <div>
                    {
                        alldata?.all_education?.length === 0 ? (
                            <p>It's look you haven't create education data ....</p>
                        ) : (
                            <p>Create new Data . . . . . . . .</p>
                        )
                    }

                    <div onClick={() => setopenCreateWindow(true)} className=' my-4 rounded-full cursor-pointer px-4 py-1.5 w-fit border-3 text-terniary-dark text-base  transition duration-200 outline-none font-semibold button-shadow'>
                        create
                    </div>
                </div>

            </div>

            {
                alldata?.projectList?.length === 0 && (
                    <div>
                        <div className='opacity-60' style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: '280px',
                            backgroundPosition: 'center',
                            height: '300px',
                            backgroundRepeat: "no-repeat"
                        }} >

                        </div>

                        <p className='text-center -mt-6'>no data found yet !</p>

                    </div>
                )
            }

            {
                alldata?.projectList?.length > 0 && (
                    <div>

                        <div className='flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start gap-2 lg:min-w-[750px] lg:max-w-[750px]'>

                            <p className='text-2xl font-bold'>Project Details :</p>

                            <div className='flex gap-3 items-center justify-end '>
                                <div onClick={() => {
                                    if (index === 0) {
                                        setIndex(total - 1)
                                    }
                                    else {
                                        setIndex(index - 1)
                                    }
                                }}><FaArrowAltCircleLeft size={32} /></div>

                                <p>{index % total} / {total - 1}</p>

                                <div onClick={() => setIndex((index + 1) % total)}><FaArrowAltCircleRight size={32} /></div>
                            </div>

                        </div>

                        <form onSubmit={handleOnSubmit} className='bg-[#1c1d1f] lg:min-w-[750px] lg:max-w-[750px] md:min-h-[500px] md:max-h-[800px] min-h-[500px]  max-h-[500px] scrollbar-custom overflow-y-auto p-6 rounded mt-6 grid gap-3 mb-4'>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Title :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='tittle' value={data.tittle} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Body :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='body' value={data.body} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Body :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <input type="text"
                                    onChange={(e) => {

                                        const value = e.target.value

                                        setData((preve) => {
                                            return {
                                                ...preve,
                                                feature: value.split(".")
                                            }
                                        })
                                    }}

                                    required name='feature' value={data.feature?.join(".")}
                                    className='bg-[#353333f2] rounded outline-none w-full p-2'
                                />

                            </div>

                            <div className='group'>


                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Tech use :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <select name="" id="" required className='bg-[#353333f2]  outline-none p-1 rounded'

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
                                                <option key={i} value={v}>{v}</option>
                                            )
                                        })
                                    }
                                </select>

                                <div className='flex gap-1.5 flex-wrap my-2 rounded'>
                                    {
                                        data.tech_uses.map((v, i) => {
                                            return (
                                                <div key={`${data.tittle}-${i}01`} className='text-sm bg-[#ada3a3] rounded-2xl text-black p-1 flex items-center justify-between'>
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

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Project deploy link :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} name='project_deploy_link' value={data.project_deploy_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Project git link :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} name='project_git_link' value={data.project_git_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            {/* image */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>video :</p>
                                </div>

                                <label htmlFor="video">
                                    <input onChange={handlePhotoAndVideo} type="file" hidden name='video' id='video' accept="video/*" />
                                    <div className='bg-[#353333f2] p-2 rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer'>
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
                                </label>

                            </div>


                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Cover Image :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <label htmlFor="cover_image">
                                    <input type="file" onChange={handlePhotoAndVideo} hidden name='image' id='cover_image' accept="image/*" />
                                    <div className='bg-[#353333f2]  p-2  rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer'>
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
                                </label>

                            </div>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Status :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <select name="" id="" className='bg-[#353333f2] outline-none p-1'

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

                                    <div className='pt-1 text-sm  opacity-30'>
                                        [{`${data.status}`}]
                                    </div>

                                </div>



                            </div>

                            <button className='py-3 w-full bg-terniary-dark  hover:bg-[#fc4503]  text-[#d1dcfb]  mt-2 rounded  font-semibold cursor-pointer'>
                                {
                                    tick ? (
                                        <TickMark />
                                    ) : (
                                        <p>update</p>
                                    )
                                }
                            </button>

                        </form>

                        <div className='flex items-center gap-1 mb-6 cursor-pointer'
                            onClick={() => {
                                setConfirmation((prev) => {
                                    return {
                                        ...prev,
                                        closeWindow: true
                                    }
                                })
                            }}>
                            <p className='text-lg font-semibold text-[#0bfb0766] underline'>Delete above details ?</p>
                            <div className='text-red-600'><MdDelete size={24} /></div>
                        </div>

                    </div>
                )
            }



            {
                openCreateWindow && (
                    <CreateProjectDataWindow close={() => setopenCreateWindow(false)} />
                )
            }

            {
                confirmation.closeWindow && (
                    <ConfirmationBox confirmation={confirmation} setConfirmation={setConfirmation} />
                )
            }



        </section>
    )
}

export default ProjectDetailsEdit
