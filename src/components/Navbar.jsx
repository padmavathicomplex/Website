import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Building2, Info, Sparkles, ImageIcon, Phone, HelpCircle } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/properties', label: 'Accommodation', icon: Building2 },
    { path: '/about', label: 'About', icon: Info },
    { path: '/temple', label: 'Temple Info', icon: Sparkles },
    { path: '/gallery', label: 'Gallery', icon: ImageIcon },
    { path: '/contact', label: 'Contact', icon: Phone },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <Building2 size={32} />
            <span className="navbar-logo-text">
              Padmavathi Complex
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/booking" className="btn btn-primary navbar-cta">
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-mobile-menu">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link to="/booking" className="btn btn-primary btn-block mt-md">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
        }

        .navbar-scrolled {
          box-shadow: var(--shadow-md);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          gap: 2rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-maroon-primary);
          font-weight: var(--font-weight-bold);
          font-size: 1.25rem;
          transition: color var(--transition-fast);
        }

        .navbar-logo:hover {
          color: var(--color-maroon-light);
        }

        .navbar-logo-text {
          white-space: nowrap;
        }

        .navbar-menu {
          display: none;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 1024px) {
          .navbar-menu {
            display: flex;
            flex: 1;
            justify-content: center;
          }
        }

        .navbar-link {
          color: var(--color-black);
          font-weight: var(--font-weight-medium);
          padding: 0.5rem 0;
          position: relative;
          transition: color var(--transition-fast);
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-maroon-primary);
          transition: width var(--transition-base);
        }

        .navbar-link:hover,
        .navbar-link.active {
          color: var(--color-maroon-primary);
        }

        .navbar-link.active::after {
          width: 100%;
        }

        .navbar-cta {
          display: none;
        }

        @media (min-width: 1024px) {
          .navbar-cta {
            display: inline-flex;
          }
        }

        .navbar-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-maroon-primary);
          padding: 0.5rem;
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .navbar-toggle {
            display: none;
          }
        }

        .navbar-mobile {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        .navbar-mobile.open {
          max-height: 600px;
          padding: 1rem 0;
        }

        .navbar-mobile-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .navbar-mobile-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          color: var(--color-black);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .navbar-mobile-link:hover,
        .navbar-mobile-link.active {
          background-color: var(--color-beige-light);
          color: var(--color-maroon-primary);
        }

        @media (min-width: 1024px) {
          .navbar-mobile {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
