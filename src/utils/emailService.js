import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
const initEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
        try {
            emailjs.init(publicKey)
            console.log('EmailJS Initialized successfully with key length:', publicKey.length)
        } catch (error) {
            console.error('EmailJS Init Failed:', error)
        }
    } else {
        console.error('EmailJS Public Key missing in config!')
    }
}

// Initialize on module load
initEmailJS()

/**
 * Send booking notification email to property manager
 * @param {Object} bookingData - Booking information
 * @returns {Promise} EmailJS promise
 */
export const sendBookingEmail = async (bookingData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.')
    }

    // Format the data for the email template
    const templateParams = {
        to_email: import.meta.env.VITE_PROPERTY_EMAIL || 'manager@example.com',
        subject: `New Booking Request - ${bookingData.propertyName} - ${bookingData.fullName}`,
        customer_name: bookingData.fullName,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone,
        preferred_contact: bookingData.preferredContact || 'Email',
        property_name: bookingData.propertyName,
        property_type: bookingData.propertyType,
        checkin_date: bookingData.checkIn,
        checkout_date: bookingData.checkOut,
        duration: bookingData.duration,
        num_guests: bookingData.guests,
        special_requests: bookingData.specialRequests || 'None',
        submission_time: new Date().toLocaleString(),
    }

    try {
        console.log('Sending booking email with params:', templateParams)
        const response = await emailjs.send(serviceId, templateId, templateParams)
        console.log('Booking email sent successfully:', response)
        return response
    } catch (error) {
        console.error('Failed to send booking email. Details:', error)
        throw error
    }
}

/**
 * Send confirmation email to customer
 * @param {Object} bookingData - Booking information
 * @returns {Promise} EmailJS promise
 */
export const sendConfirmationEmail = async (bookingData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID

    if (!serviceId || !templateId) {
        // If confirmation template not configured, skip silently
        return Promise.resolve({ status: 200, text: 'Skipped' })
    }

    const templateParams = {
        to_email: bookingData.email,
        to_name: bookingData.fullName,
        property_name: bookingData.propertyName,
        checkin_date: bookingData.checkIn,
        checkout_date: bookingData.checkOut,
        message: `Thank you for your booking request! We have received your request for ${bookingData.propertyName} from ${bookingData.checkIn} to ${bookingData.checkOut}. Our team will contact you within 24 hours to confirm your booking.`,
    }

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams)
        return response
    } catch (error) {
        console.error('Failed to send confirmation email:', error)
        // Don't throw - confirmation email is optional
        return { status: 500, text: 'Failed' }
    }
}

/**
 * Send contact form email
 * @param {Object} contactData - Contact form data
 * @returns {Promise} EmailJS promise
 */
export const sendContactEmail = async (contactData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.')
    }

    const templateParams = {
        to_email: import.meta.env.VITE_PROPERTY_EMAIL || 'info@example.com',
        from_name: contactData.name,
        from_email: contactData.email,
        phone: contactData.phone || 'Not provided',
        subject: contactData.subject || 'Contact Form Submission',
        message: contactData.message,
        submission_time: new Date().toLocaleString(),
    }

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams)
        return response
    } catch (error) {
        console.error('Failed to send contact email:', error)
        throw error
    }
}
