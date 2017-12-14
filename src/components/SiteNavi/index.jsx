import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar sticky-top navbar-toggleable-sm navbar-inverse bg-danger">
        <button
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="container">
          <Link className="text-center" style={{ boxShadow: 'none' }} to="/">
            <h1 className="navbar-brand mb-0">
              {title}
            </h1>
          </Link>
          <div
            className="navbar-collapse collapse"
            id="navbarColor02"
            aria-expanded="false"
          >
            <ul className="navbar-nav mr-auto">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" style={{ boxShadow: 'none' }} className="nav-link">
                  💥home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/about/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to="/about/"
                  style={{ boxShadow: 'none' }}
                  className="nav-link"
                >
                  🖐about
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/reading-list/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to="/reading-list/"
                  style={{ boxShadow: 'none' }}
                  className="nav-link"
                >
                  📚reading list
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  🔗links
                </a>
                <div
                  className="dropdown-menu bg-danger"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://www.linkedin.com/in/will-saborio-77b7b429/"
                    target="_blank"
                  >
                    linkedin
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://twitter.com/willsab"
                    target="_blank"
                  >
                    twitter
                  </a>
                  <a
                    className="dropdown-item"
                    href="http://vsco.co/wills"
                    target="_blank"
                  >
                    vsco
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.last.fm/user/willsab"
                    target="_blank"
                  >
                    last.fm
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
