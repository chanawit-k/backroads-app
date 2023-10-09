import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div class="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
