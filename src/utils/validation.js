/**
 * Validation utility functions for forms
 */

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validatePhone = (phone) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '')
    // Check if it has 10-15 digits
    return cleaned.length >= 10 && cleaned.length <= 15
}

export const validateRequired = (value) => {
    if (typeof value === 'string') {
        return value.trim().length > 0
    }
    return value !== null && value !== undefined && value !== ''
}

export const validateDate = (date) => {
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return selectedDate >= today
}

export const validateCheckoutDate = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    return checkOutDate > checkInDate
}

export const calculateDuration = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const diffTime = Math.abs(checkOutDate - checkInDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
}

export const validateBookingForm = (formData) => {
    const errors = {}

    if (!validateRequired(formData.fullName)) {
        errors.fullName = 'Full name is required'
    }

    if (!validateRequired(formData.email)) {
        errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.phone)) {
        errors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number'
    }

    if (!validateRequired(formData.checkIn)) {
        errors.checkIn = 'Check-in date is required'
    } else if (!validateDate(formData.checkIn)) {
        errors.checkIn = 'Check-in date cannot be in the past'
    }

    if (!validateRequired(formData.checkOut)) {
        errors.checkOut = 'Check-out date is required'
    } else if (formData.checkIn && !validateCheckoutDate(formData.checkIn, formData.checkOut)) {
        errors.checkOut = 'Check-out date must be after check-in date'
    }

    if (!validateRequired(formData.guests)) {
        errors.guests = 'Number of guests is required'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export const validateContactForm = (formData) => {
    const errors = {}

    if (!validateRequired(formData.name)) {
        errors.name = 'Name is required'
    }

    if (!validateRequired(formData.email)) {
        errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number'
    }

    if (!validateRequired(formData.message)) {
        errors.message = 'Message is required'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export const formatDate = (date) => {
    if (!date) return ''
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

export const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '')
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
    }
    return phone
}
