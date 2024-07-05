import React from 'react'
import Hero from '../components/hero/Hero'
import HeadLineCard from '../components/headline card/HeadLineCard'
import Food from '../components/food/Food'
import Category from '../components/category/Category'

const Home = () => {
  return (
    <div>
        <Hero />
        <HeadLineCard />
        <Food />
        <Category />
    </div>
  )
}

export default Home