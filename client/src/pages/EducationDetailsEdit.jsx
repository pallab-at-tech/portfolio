import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const EducationDetailsEdit = () => {


  const alldata = useSelector(state => state.allofdetails)

  console.log("all data by redux",alldata)
  

  return (
    <section className='lg:mx-24 mx-14  mt-16'>

      
      
    </section>
  )
}

export default EducationDetailsEdit
