import React from 'react'
import img from '../images/logo.svg'
import PageLinks from './PageLinks'
import { socialLink } from '../data'
import SocialLink from './SocialLink'
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={img} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLink.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
