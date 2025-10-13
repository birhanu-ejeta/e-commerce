import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollectons from '../Components/NewCollections/NewCollectons'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollectons/>
      <NewsLetter/>
    </div>
  )
}
