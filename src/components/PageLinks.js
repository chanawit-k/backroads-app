import React from 'react'
import { pageLink } from '../data'
import PageLink from './Pagelink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLink.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default PageLinks
