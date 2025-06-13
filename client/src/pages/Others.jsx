import React from 'react'
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"

const Others = () => {
    return (
        <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px] flex items-center flex-col'>

            <h1 className='px-16 font-bold text-2xl md:pt-16 mb-6'>Achievement</h1>

            <div className='md:px-16 px-8 flex  justify-center flex-wrap gap-6'>

                <div className='md:min-w-[600px] min-w-[300px] max-w-[300px] min-h-[350px] max-h-[350px] md:min-h-[300px] md:max-w-[600px] md:max-h-[300px] bg-[#514f4f] rounded mb-6 flex md:flex-row  flex-col-reverse gap-4 px-6 md:py-0 py-4'>

                    <div className='md:min-w-[60%] md:max-w-[60%] min-w-full max-w-full flex items-center'>
                        <img src={c1} alt="" className='' />
                    </div>

                    <div className='text-sm flex items-center '>
                        <p className='md:leading-relaxed leading-tight md:max-h-[232px] max-h-[125px] min-h-[125px]  break-words overflow-y-auto scrollbar-custom p-2 rounded text-gray-800 bg-[#c1b185]'>
                            I had the amazing opportunity to attend my very first college webinar on Integrated Personality Development! 🧠✨

                            This session helped me understand how developing a strong personality is not just about communication or confidence—it's about building the right mindset, values, and life skills that shape who we are, both personally and professionally. 💼💬
                        </p>
                    </div>

                </div>

                <div className='md:min-w-[600px] min-w-[300px] max-w-[300px] min-h-[350px] max-h-[350px] md:min-h-[300px] md:max-w-[600px] md:max-h-[300px] bg-[#514f4f] rounded mb-6 flex md:flex-row  flex-col-reverse gap-4 px-6 md:py-0 py-4'>

                    <div className='md:min-w-[60%] md:max-w-[60%] min-w-full max-w-full flex items-center'>
                        <img src={c2} alt="" className='' />
                    </div>

                    <div className='text-sm flex items-center '>
                        <p className='md:leading-relaxed leading-tight md:max-h-[232px] max-h-[125px] min-h-[125px]  break-words overflow-y-auto scrollbar-custom p-2 rounded text-gray-800 bg-[#c1b185]'>
                             🚀 Attended "AI For All" Workshop | March 24–28, 2025 🤖

                            I recently had the incredible opportunity to be part of the "AI For All" workshop—a week-long journey into the world of Artificial Intelligence! 🧠✨

                            From understanding the basics of AI and machine learning to exploring real-world applications, this experience helped me gain valuable insights into how AI is transforming every field—from healthcare and education to business and creativity. 💡
                        </p>
                    </div>

                </div>

 

            </div>

        </section>
    )
}

export default Others
