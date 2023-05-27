import React from 'react'
import Announcement from '../component/Announcement'
import Slider from '../component/Slider'
import Navbar from '../component/Navbar'
import Categories from '../component/Categories'
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      </div>
  )
}

export default Home