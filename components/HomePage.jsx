import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
      <Image src='/banner1.jpg' width={1920} height={720} layout="responsive" />
    </div>
  )
}

export default HomePage