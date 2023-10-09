import React from 'react'

const PageLink = ({ href, text, itemClass }) => {
  console.log(text)
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
