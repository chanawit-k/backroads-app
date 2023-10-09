import React from 'react'
import { socialLink } from '../data'
import PageLink from './PageLink'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLink.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
