export const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Business Traveler',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        text: 'Absolutely wonderful experience! The AC room was spotless, the staff was incredibly helpful, and the 24/7 service made my entire stay stress-free. Highly recommended for anyone looking for quality accommodation.',
        date: '2 weeks ago'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Family Vacation',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        text: 'We rented the family house for a month and it exceeded all our expectations. Spacious, clean, and in a great location. The booking process was smooth and the property manager was always available for any questions.',
        date: '1 month ago'
    },
    {
        id: 3,
        name: 'Emma Williams',
        role: 'Long-term Resident',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        rating: 5,
        text: 'I\'ve been living in one of their townhouses for 6 months now, and I couldn\'t be happier. The amenities are excellent, maintenance is prompt, and the value for money is outstanding. Best rental decision I\'ve made!',
        date: '3 weeks ago'
    },
    {
        id: 4,
        name: 'David Rodriguez',
        role: 'Student',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 4,
        text: 'Great budget-friendly option! The non-AC room was perfect for my needs - clean, comfortable, and affordable. The WiFi was reliable which was crucial for my online classes. Would definitely stay again.',
        date: '1 week ago'
    }
]

export const getAverageRating = () => {
    const sum = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0)
    return (sum / testimonials.length).toFixed(1)
}
