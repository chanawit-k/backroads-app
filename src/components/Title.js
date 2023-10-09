import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div class="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}

export default Title
