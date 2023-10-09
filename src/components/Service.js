import React from 'react'
import Title from './Title'
import { services } from '../data'
const Service = () => {
  return (
    <section class="section services" id="services">
      <Title title="our" subTitle="services" />
      <div class="section-center services-center">
        {services.map((service) => {
          const { icon, title, text } = service
          return (
            <article className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Service
