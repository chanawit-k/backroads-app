import React from 'react'
import img from '../images/logo.svg'
import { pageLink, socialLink } from '../data'
import PageLink from './PageLink'
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
        <PageLink parentClass="nav-links" itemClass="nav-link" />

        <ul class="nav-icons">
          {socialLink.map((social) => {
            const { id, href, icon } = social
            console.log(icon)
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
