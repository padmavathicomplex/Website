
export const properties = [
    {
        id: 1,
        name: 'Air Conditioned Room',
        heading: 'Air Conditioned Room - Padmavathi Complex',
        type: 'Room',
        category: 'AC Room',
        price: 1200,
        priceRange: '₹800-1200',
        pricePer: 'day',
        location: 'Ground Floor',
        featured: true,
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop', // Simpler Indian hotel room
        images: [
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop', // Bathroom/Details
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
        price: 700,
        priceRange: '₹500-700',
        pricePer: 'day',
        location: 'Ground Floor',
        featured: true,
        image: 'https://images.unsplash.com/photo-1616594039964-ea806114eb1b?w=800&auto=format&fit=crop', // Simple clean room
        images: [
            'https://images.unsplash.com/photo-1616594039964-ea806114eb1b?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop',
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
        price: 3000,
        priceRange: '₹2000-3000',
        pricePer: 'day',
        location: 'Private Entrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop', // Indian style house exterior/interior
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&auto=format&fit=crop', // Hall
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop', // Bedroom
            'https://images.unsplash.com/photo-1556912173-3db9963f6388?w=800&auto=format&fit=crop', // Kitchen
        ],
        description: 'Spacious independent house ideal for families or groups visiting the temple together. Complete privacy with all modern amenities. Perfect for extended stays during festivals or special occasions.',
        amenities: [
            '2-3 Bedrooms',
            'Spacious Living Room',
            'Full Kitchen',
            '2 Bathrooms',
            'AC in Bedrooms',
            'TV',
            'Power Backup',
            'Private Entrance',
            'Secure Parking',
            'Water Purifier'
        ],
        specifications: {
            capacity: '6-8 persons',
            bedrooms: '2-3',
            bathrooms: '2',
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
