import { Wifi, Car, Utensils, Waves, Wind, Shield, Clock, Headphones, Tv, Coffee } from 'lucide-react'

export const amenities = [
    {
        id: 1,
        name: 'High-Speed WiFi',
        icon: 'Wifi',
        description: 'Fast and reliable internet connection throughout the property, perfect for streaming, work, and staying connected.',
        available: true
    },
    {
        id: 2,
        name: 'Free Parking',
        icon: 'Car',
        description: 'Dedicated parking spaces available for all guests. Secure and convenient parking right at your doorstep.',
        available: true
    },
    {
        id: 3,
        name: 'Kitchen Facilities',
        icon: 'Utensils',
        description: 'Fully equipped kitchen with modern appliances, cookware, and utensils for your cooking needs.',
        available: true
    },
    {
        id: 4,
        name: 'Air Conditioning',
        icon: 'Wind',
        description: 'Premium air conditioning systems in select rooms and houses to ensure your comfort year-round.',
        available: true
    },
    {
        id: 5,
        name: 'Hot Water',
        icon: 'Waves',
        description: '24/7 hot water supply in all bathrooms for your convenience and comfort.',
        available: true
    },
    {
        id: 6,
        name: '24/7 Security',
        icon: 'Shield',
        description: 'Round-the-clock security monitoring and CCTV surveillance to ensure your safety and peace of mind.',
        available: true
    },
    {
        id: 7,
        name: '24/7 Service',
        icon: 'Clock',
        description: 'Our dedicated staff is available 24 hours a day, 7 days a week to assist you with any needs or concerns.',
        available: true
    },
    {
        id: 8,
        name: 'Customer Support',
        icon: 'Headphones',
        description: 'Responsive customer support team ready to help you via phone, email, or in-person assistance.',
        available: true
    },
    {
        id: 9,
        name: 'Cable TV',
        icon: 'Tv',
        description: 'Cable television with multiple channels for your entertainment in select rooms and houses.',
        available: true
    },
    {
        id: 10,
        name: 'Common Area',
        icon: 'Coffee',
        description: 'Comfortable common areas for relaxation, socializing, or informal meetings with other guests.',
        available: true
    }
]

export const getAmenityIcon = (iconName) => {
    const iconMap = {
        Wifi,
        Car,
        Utensils,
        Waves,
        Wind,
        Shield,
        Clock,
        Headphones,
        Tv,
        Coffee
    }
    return iconMap[iconName] || Wifi
}
