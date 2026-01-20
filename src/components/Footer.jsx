import { Link } from 'react-router-dom'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/about', label: 'About Us' },
    { path: '/amenities', label: 'Amenities' },
  ]

  const supportLinks = [
    { path: '/contact', label: 'Contact Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/booking', label: 'Book Now' },
  ]



  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <Building2 size={32} />
              <span className="footer-logo-text">Padmavathi Complex</span>
            </div>
            <p className="footer-description">
              Your trusted partner for quality rental properties near Agnipureeswarar Temple.
              We offer clean, comfortable accommodation for devotees.
            </p>
            <div className="footer-badge-container">
              <span className="badge badge-24-7">24/7 Service Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/properties" className="footer-link">Accommodation</Link></li>
              <li><Link to="/temple" className="footer-link">Temple Information</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/booking" className="footer-link">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href={`tel:${import.meta.env.VITE_PROPERTY_PHONE}`} className="footer-link">
                    {import.meta.env.VITE_PROPERTY_PHONE?.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3') || '+91 63828 12143'}
                  </a>
                  <a href="tel:+919047842375" className="footer-link">+91 90478 42375</a>
                </div>
              </li>
              <li>
                <Mail size={18} />
                <a href={`mailto:${import.meta.env.VITE_PROPERTY_EMAIL}`} className="footer-link">
                  {import.meta.env.VITE_PROPERTY_EMAIL}
                </a>
              </li>
              <li>
                <MapPin size={18} />
                <span>{import.meta.env.VITE_PROPERTY_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © {currentYear} Padmavathi Complex. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--color-maroon-primary), var(--color-maroon-dark));
          color: var(--color-white);
          padding: var(--spacing-2xl) 0 var(--spacing-lg);
          margin-top: var(--spacing-2xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: var(--font-weight-bold);
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
        }

        .footer-logo-text {
          color: var(--color-white);
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .footer-badge-container {
          margin-top: var(--spacing-sm);
        }

        .footer-title {
          color: var(--color-white);
          font-size: 1.125rem;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-sm);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.85);
          transition: color var(--transition-fast);
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-beige-light);
          transform: translateX(5px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .footer-contact svg {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
          padding-top: var(--spacing-lg);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .footer-social {
          display: flex;
          gap: var(--spacing-md);
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--color-white);
          transition: all var(--transition-base);
        }

        .footer-social-link:hover {
          background-color: var(--color-beige-light);
          color: var(--color-maroon-primary);
          transform: translateY(-3px);
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
