import acRoomImg from '../assets/ac_room.png'
import nonAcRoomImg from '../assets/non_ac_room.png'
import independentHouseImg from '../assets/independent_house.png'

export const properties = [
    {
        id: 1,
        name: 'Air Conditioned Room',
        heading: 'Air Conditioned Room - Padmavathi Complex',
        type: 'Room',
        category: 'AC Room',
        price: 1800,
        priceRange: '₹1800-2200',
        pricePer: 'day',
        location: 'Ground Floor',
        featured: true,
        image: acRoomImg,
        images: [
            acRoomImg
        ],
        description: 'Comfortable air-conditioned room perfect for devotees seeking cool comfort after temple visits. Ideal for couples or small families. Maintained with utmost cleanliness and devotee-friendly amenities.',
        amenities: [
            'Air Conditioning',
            'Double/Queen Bed',
            'Attached Bathroom',
            'Hot Water',
            'TV (Optional)',
            'Seating Area',
            'Power Backup',
            'Daily Cleaning',
            'Secure Parking',
            'Drinking Water'
        ],
        specifications: {
            capacity: '2-3 persons',
            bedType: 'Double/Queen',
            bathroom: 'Attached with Geyser',
            distanceToTemple: '2-3 mins walk'
        },
        rules: [
            'Check-in: 12:00 PM',
            'Check-out: 11:00 AM',
            'No smoking or alcohol',
            'Valid ID required'
        ]
    },
    {
        id: 2,
        name: 'Non-AC Room',
        heading: 'Non-AC Room - Padmavathi Complex',
        type: 'Room',
        category: 'Non-AC Room',
        price: 1500,
        priceRange: '₹1500-1800',
        pricePer: 'day',
        location: 'Ground Floor',
        featured: true,
        image: nonAcRoomImg,
        images: [
            nonAcRoomImg
        ],
        description: 'Simple, clean, and comfortable room with good ventilation. Perfect for devotees on a budget or those who prefer natural air. Well-maintained with all essential amenities.',
        amenities: [
            'Well Ventilated (Fan)',
            'Double Bed',
            'Attached Bathroom',
            'Hot Water',
            'Seating Area',
            'Power Backup',
            'Daily Cleaning',
            'Secure Parking',
            'Drinking Water'
        ],
        specifications: {
            capacity: '2-3 persons',
            bedType: 'Double',
            bathroom: 'Attached with Geyser',
            distanceToTemple: '2-3 mins walk'
        },
        rules: [
            'Check-in: 12:00 PM',
            'Check-out: 11:00 AM',
            'No smoking or alcohol',
            'Valid ID required'
        ]
    },
    {
        id: 3,
        name: 'Independent House',
        heading: 'Independent House - Padmavathi Complex',
        type: 'House',
        category: 'House',
        price: 2000,
        priceRange: '₹2000-3000',
        pricePer: 'day',
        location: 'Private Entrance',
        featured: true,
        image: independentHouseImg,
        images: [
            independentHouseImg
        ],
        description: 'Spacious independent house ideal for families or groups visiting the temple together. Complete privacy with all modern amenities. Perfect for extended stays during festivals or special occasions.',
        amenities: [
            '4 Bedrooms',
            'Spacious Living Area',
            'Balcony',
            'Full Kitchen',
            '4 Bathrooms + 1 Extra Bathroom',
            'AC in All Bedrooms',
            'TV',
            'Power Backup',
            'Private Entrance',
            'Secure Parking',
            'Water Purifier'
        ],
        specifications: {
            capacity: '8-12 persons',
            bedrooms: '4',
            bathrooms: '5 (4 regular + 1 extra)',
            livingArea: 'Spacious with balcony',
            kitchen: 'Full facilities (Stove, utensils)',
            distanceToTemple: '2-3 mins walk'
        },
        rules: [
            'Check-in: 12:00 PM',
            'Check-out: 11:00 AM',
            'No smoking or alcohol',
            'Pet Policy: Inquire',
            'Valid ID required'
        ]
    }
]

export const getPropertyById = (id) => {
    return properties.find(prop => prop.id === parseInt(id))
}

export const getPropertiesByType = (type) => {
    if (!type || type === 'All') return properties
    return properties.filter(prop => prop.category === type)
}

export const getFeaturedProperties = () => {
    return properties.filter(prop => prop.featured)
}

export const searchProperties = (query) => {
    const lowerQuery = query.toLowerCase()
    return properties.filter(prop =>
        prop.name.toLowerCase().includes(lowerQuery) ||
        prop.description.toLowerCase().includes(lowerQuery) ||
        prop.category.toLowerCase().includes(lowerQuery)
    )
}
