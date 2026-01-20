import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Calendar, User, Mail, Phone, Users, Send, CheckCircle, AlertCircle } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getPropertyById } from '../data/properties'
import { validateBookingForm, calculateDuration, formatDate } from '../utils/validation'
import { sendBookingEmail, sendConfirmationEmail } from '../utils/emailService'

function BookingForm() {
    const [searchParams] = useSearchParams()
    const propertyId = searchParams.get('property')
    const selectedProperty = propertyId ? getPropertyById(propertyId) : null

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        propertyId: propertyId || '',
        propertyType: selectedProperty?.category || '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        specialRequests: '',
        preferredContact: 'Email'
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error'
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if (formData.checkIn && formData.checkOut) {
            const days = calculateDuration(formData.checkIn, formData.checkOut)
            setDuration(days)
        }
    }, [formData.checkIn, formData.checkOut])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleDateChange = (name, date) => {
        setFormData(prev => ({ ...prev, [name]: formatDate(date) }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate form
        const validation = validateBookingForm(formData)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Prepare booking data
            const bookingData = {
                ...formData,
                propertyName: selectedProperty?.name || 'Property',
                duration: `${duration} ${duration === 1 ? 'day' : 'days'}`,
            }

            // Send emails
            await sendBookingEmail(bookingData)
            await sendConfirmationEmail(bookingData)

            // Success!
            setSubmitStatus('success')

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                propertyId: '',
                propertyType: '',
                checkIn: '',
                checkOut: '',
                guests: '1',
                specialRequests: '',
                preferredContact: 'Email'
            })
            setDuration(0)

            // Scroll to success message
            window.scrollTo({ top: 0, behavior: 'smooth' })

        } catch (error) {
            console.error('Booking submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="booking-page">
            {/* Page Header */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Book Your Stay</h1>
                    <p className="text-large">
                        Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="booking-grid">
                        {/* Booking Form */}
                        <div className="booking-form-container">
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    <CheckCircle size={24} />
                                    <div>
                                        <strong>Booking Request Submitted!</strong>
                                        <p>Thank you for your booking request. We have sent confirmation details to your email. Our team will contact you within 24 hours to confirm your booking.</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    <AlertCircle size={24} />
                                    <div>
                                        <strong>Submission Failed</strong>
                                        <p>We couldn't process your booking request. Please check your email configuration or contact us directly at the phone number below.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="booking-form">
                                <h2 className="heading-3 mb-lg">Booking Information</h2>

                                {/* Personal Information */}
                                <div className="form-section">
                                    <h4 className="heading-4 mb-md">Personal Information</h4>

                                    <div className="form-group">
                                        <label className="form-label required">Full Name</label>
                                        <div className="input-with-icon">
                                            <User size={20} />
                                            <input
                                                type="text"
                                                name="fullName"
                                                className={`form-input ${errors.fullName ? 'error' : ''}`}
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label required">Email Address</label>
                                            <div className="input-with-icon">
                                                <Mail size={20} />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className={`form-input ${errors.email ? 'error' : ''}`}
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.email && <p className="form-error">{errors.email}</p>}
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label required">Phone Number</label>
                                            <div className="input-with-icon">
                                                <Phone size={20} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className={`form-input ${errors.phone ? 'error' : ''}`}
                                                    placeholder="+1 (234) 567-8900"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.phone && <p className="form-error">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Preferred Contact Method</label>
                                        <select
                                            name="preferredContact"
                                            className="form-select"
                                            value={formData.preferredContact}
                                            onChange={handleChange}
                                        >
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                            <option value="WhatsApp">WhatsApp</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Property Selection */}
                                <div className="form-section">
                                    <h4 className="heading-4 mb-md">Property Selection</h4>

                                    {selectedProperty && (
                                        <div className="selected-property-card">
                                            <img src={selectedProperty.image} alt={selectedProperty.name} />
                                            <div>
                                                <h5>{selectedProperty.name}</h5>
                                                <p>{selectedProperty.category}</p>
                                                <p className="selected-property-price">
                                                    ${selectedProperty.price}/{selectedProperty.pricePer}
                                                </p>
                                            </div>
                                            <Link to="/properties" className="btn btn-outline btn-small">
                                                Change Property
                                            </Link>
                                        </div>
                                    )}

                                    {!selectedProperty && (
                                        <div className="no-property-selected">
                                            <p>No property selected. Please select a property first.</p>
                                            <Link to="/properties" className="btn btn-primary">
                                                Browse Properties
                                            </Link>
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label className="form-label">Room/Property Type</label>
                                        <select
                                            name="propertyType"
                                            className="form-select"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="AC Room">AC Room</option>
                                            <option value="Non-AC Room">Non-AC Room</option>
                                            <option value="House">House</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Stay Details */}
                                <div className="form-section">
                                    <h4 className="heading-4 mb-md">Stay Details</h4>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label required">Check-in Date</label>
                                            <div className="input-with-icon">
                                                <Calendar size={20} />
                                                <input
                                                    type="date"
                                                    name="checkIn"
                                                    className={`form-input ${errors.checkIn ? 'error' : ''}`}
                                                    value={formData.checkIn}
                                                    onChange={handleChange}
                                                    min={formatDate(new Date())}
                                                />
                                            </div>
                                            {errors.checkIn && <p className="form-error">{errors.checkIn}</p>}
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label required">Check-out Date</label>
                                            <div className="input-with-icon">
                                                <Calendar size={20} />
                                                <input
                                                    type="date"
                                                    name="checkOut"
                                                    className={`form-input ${errors.checkOut ? 'error' : ''}`}
                                                    value={formData.checkOut}
                                                    onChange={handleChange}
                                                    min={formData.checkIn || formatDate(new Date())}
                                                />
                                            </div>
                                            {errors.checkOut && <p className="form-error">{errors.checkOut}</p>}
                                        </div>
                                    </div>

                                    {duration > 0 && (
                                        <div className="duration-display">
                                            <strong>Duration of Stay:</strong> {duration} {duration === 1 ? 'day' : 'days'}
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label className="form-label required">Number of Guests</label>
                                        <div className="input-with-icon">
                                            <Users size={20} />
                                            <select
                                                name="guests"
                                                className={`form-select ${errors.guests ? 'error' : ''}`}
                                                value={formData.guests}
                                                onChange={handleChange}
                                            >
                                                {[...Array(10)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.guests && <p className="form-error">{errors.guests}</p>}
                                    </div>
                                </div>

                                {/* Special Requests */}
                                <div className="form-section">
                                    <h4 className="heading-4 mb-md">Additional Information</h4>

                                    <div className="form-group">
                                        <label className="form-label">Special Requests or Message</label>
                                        <textarea
                                            name="specialRequests"
                                            className="form-textarea"
                                            placeholder="Any special requirements or questions? (Optional)"
                                            value={formData.specialRequests}
                                            onChange={handleChange}
                                            rows="4"
                                        ></textarea>
                                        <p className="form-helper">Let us know if you have any specific needs or preferences</p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large btn-block"
                                    disabled={isSubmitting || !selectedProperty}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner spinner-small"></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Submit Booking Request
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="booking-sidebar">
                            <div className="sidebar-card">
                                <h4 className="heading-4 mb-md">Need Help?</h4>
                                <p className="mb-md">Our team is available 24/7 to assist you with your booking.</p>

                                <div className="contact-info">
                                    <div className="contact-item">
                                        <Phone size={18} />
                                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                                    </div>
                                    <div className="contact-item">
                                        <Mail size={18} />
                                        <a href="mailto:info@premiumrentals.com">info@premiumrentals.com</a>
                                    </div>
                                </div>

                                <div className="mt-md">
                                    <span className="badge badge-24-7">24/7 Service Available</span>
                                </div>
                            </div>

                            <div className="sidebar-card">
                                <h4 className="heading-4 mb-md">Booking Process</h4>
                                <ol className="process-list">
                                    <li>Fill out the booking form</li>
                                    <li>Receive email confirmation</li>
                                    <li>We'll contact you within 24 hours</li>
                                    <li>Confirm booking details</li>
                                    <li>Enjoy your stay!</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-center;
        }

        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-xl);
        }

        @media (max-width: 968px) {
          .booking-grid {
            grid-template-columns: 1fr;
          }
        }

        .booking-form-container {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .form-section {
          padding-bottom: var(--spacing-lg);
          border-bottom: 2px solid var(--color-beige-medium);
        }

        .form-section:last-of-type {
          border-bottom: none;
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

        .input-with-icon {
          position: relative;
        }

        .input-with-icon svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gray-dark);
        }

        .input-with-icon input,
        .input-with-icon select {
          padding-left: 3rem;
        }

        .selected-property-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--color-beige-light);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-md);
        }

        .selected-property-card img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .selected-property-card h5 {
          font-weight: var(--font-weight-semibold);
          color: var(--color-maroon-primary);
          margin-bottom: 0.25rem;
        }

        .selected-property-card p {
          font-size: 0.875rem;
          color: var(--color-gray-dark);
          margin: 0;
        }

        .selected-property-price {
          font-weight: var(--font-weight-bold);
          color: var(--color-maroon-primary) !important;
          font-size: 1rem !important;
        }

        .no-property-selected {
          padding: var(--spacing-xl);
          background: var(--color-beige-light);
          border-radius: var(--radius-md);
          text-align: center;
          margin-bottom: var(--spacing-md);
        }

        .duration-display {
          padding: var(--spacing-md);
          background: var(--color-beige-light);
          border-radius: var(--radius-md);
          text-align: center;
          font-size: 1.125rem;
          color: var(--color-maroon-primary);
        }

        .booking-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .sidebar-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: var(--spacing-sm);
          background: var(--color-beige-light);
          border-radius: var(--radius-sm);
        }

        .contact-item svg {
          color: var(--color-maroon-primary);
        }

        .contact-item a {
          color: var(--color-black);
          font-weight: var(--font-weight-medium);
        }

        .process-list {
          padding-left: var(--spacing-md);
        }

        .process-list li {
          margin-bottom: var(--spacing-sm);
          line-height: 1.6;
        }

        .mt-md {
          margin-top: var(--spacing-md);
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

export default BookingForm
