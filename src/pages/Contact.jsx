import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { validateContactForm } from '../utils/validation'
import { sendContactEmail } from '../utils/emailService'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validation = validateContactForm(formData)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await sendContactEmail(formData)
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } catch (error) {
            console.error('Contact form error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="contact-page">
            {/* Header */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Contact Us</h1>
                    <p className="text-large">
                        Get in touch with us - we're here to help 24/7
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-white">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <h2 className="heading-3 mb-lg">Get In Touch</h2>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="contact-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="heading-4">Phone</h4>
                                        <a href={`tel:${import.meta.env.VITE_PROPERTY_PHONE}`} style={{ display: 'block', marginBottom: '0.25rem' }}>
                                            {import.meta.env.VITE_PROPERTY_PHONE?.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3') || '+91 63828 12143'}
                                        </a>
                                        <a href="tel:+919047842375" style={{ display: 'block', marginBottom: '0.25rem' }}>+91 90478 42375</a>
                                        <p className="contact-note">Available 24/7</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="heading-4">Email</h4>
                                        <a href={`mailto:${import.meta.env.VITE_PROPERTY_EMAIL}`}>{import.meta.env.VITE_PROPERTY_EMAIL}</a>
                                        <p className="contact-note">We reply within 24 hours</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="heading-4">Address</h4>
                                        <p style={{ whiteSpace: 'pre-line' }}>{import.meta.env.VITE_PROPERTY_ADDRESS?.replace(/, /g, ',\n')}</p>
                                        <p className="contact-note">Walkable distance from Temple</p>
                                    </div>
                                </div>
                            </div>

                            <div className="business-hours">
                                <h4 className="heading-4 mb-md">Business Hours</h4>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span>Monday - Friday:</span>
                                        <strong>9:00 AM - 6:00 PM</strong>
                                    </div>
                                    <div className="hours-item">
                                        <span>Saturday:</span>
                                        <strong>10:00 AM - 4:00 PM</strong>
                                    </div>
                                    <div className="hours-item">
                                        <span>Sunday:</span>
                                        <strong>Closed (Emergency support available)</strong>
                                    </div>
                                </div>
                                <div className="mt-md">
                                    <span className="badge badge-24-7">24/7 Emergency Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2 className="heading-3 mb-lg">Send Us a Message</h2>

                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    <CheckCircle size={24} />
                                    <div>
                                        <strong>Message Sent!</strong>
                                        <p>Thank you for contacting us. We'll get back to you soon.</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    <AlertCircle size={24} />
                                    <div>
                                        <strong>Failed to Send</strong>
                                        <p>Please try again or contact us directly via phone or email.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label className="form-label required">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`form-input ${errors.name ? 'error' : ''}`}
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="form-error">{errors.name}</p>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label required">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="form-error">{errors.email}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className={`form-input ${errors.phone ? 'error' : ''}`}
                                            placeholder="+1 (234) 567-8900"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <p className="form-error">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-input"
                                        placeholder="What is this regarding?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Message</label>
                                    <textarea
                                        name="message"
                                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                    ></textarea>
                                    {errors.message && <p className="form-error">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large btn-block"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner spinner-small"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-sm bg-beige-light">
                <div className="container">
                    <h2 className="heading-2 text-center mb-lg">Find Us</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919377!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: var(--spacing-2xl);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-info-section,
        .contact-form-section {
          background: var(--color-beige-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .contact-method {
          display: flex;
          gap: var(--spacing-md);
        }

        .contact-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          background: var(--color-maroon-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-method h4 {
          margin-bottom: 0.25rem;
        }

        .contact-method a {
          color: var(--color-maroon-primary);
          font-weight: var(--font-weight-semibold);
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-note {
          font-size: 0.875rem;
          color: var(--color-gray-dark);
        }

        .business-hours {
          padding: var(--spacing-lg);
          background: white;
          border-radius: var(--radius-md);
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          gap: var(--spacing-md);
          padding: var(--spacing-sm);
          background: var(--color-beige-light);
          border-radius: var(--radius-sm);
        }

        .mt-md {
          margin-top: var(--spacing-md);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .map-container {
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .alert svg {
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
      `}</style>
        </div>
    )
}

export default Contact
