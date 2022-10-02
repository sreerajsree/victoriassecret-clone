import React from 'react'
import PinkLayout from '../layouts/PinkLayout'
import MainNav from '../components/MainNav'
import TopNavBar from '../components/TopNavBar'

const Pink = () => {
  return (
    <>
        <PinkLayout>
            <TopNavBar />
            <MainNav/>
        </PinkLayout>
    </>
  )
}

export default Pink