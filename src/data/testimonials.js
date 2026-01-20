export const testimonials = [
    {
        id: 0,
        name: 'Navya Yellina',
        role: 'Pilgrim Visitor',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        text: 'Absolutely good experience! The AC room was good the staff was incredibly helpful, and the 24/7 service made my entire stay stress-free. Highly recommended for anyone looking for accommodation near by temple',
        date: '2 days ago'
    },

    {
        id: 2,
        name: 'Bharath',
        role: 'Family Vacation',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        text: 'We rented the family house for a 3 days and it meet all our expectations. Spacious, clean, and in a great location(very Near to Temple). The booking process was smooth and the property manager was always available for any questions.',
        date: '1 month ago'
    },
    {
        id: 3,
        name: 'Iyar',
        role: 'Temple Visitor',
        image: 'https://randomuser.me/api/portraits/men/68.jpg',
        rating: 5,
        text: 'I visited this temple for one day and wasn\'t sure about the timings and poojas. The staff helped me with everything, guided me with all the details of the temple, and were very friendly.',
        date: '3 weeks ago'
    },

]

export const getAverageRating = () => {
    const sum = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0)
    return (sum / testimonials.length).toFixed(1)
}
