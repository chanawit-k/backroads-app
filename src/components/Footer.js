import React from 'react'
import { pageLink, socialLink } from '../data'
const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLink.map((link) => {
          const { id, href, text } = link
          return (
            <li key={id}>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul class="footer-icons">
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
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
