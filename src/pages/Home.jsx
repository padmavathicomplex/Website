import { Link } from 'react-router-dom'
import { Star, ArrowRight, CheckCircle, Clock, Shield, Sparkles } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import { getFeaturedProperties } from '../data/properties'
import { testimonials } from '../data/testimonials'
import templeHero from '../assets/temple_hero.png'
import templeView from '../assets/temple_view.png'

function Home() {
    const featuredProperties = getFeaturedProperties()


    const benefits = [
        {
            icon: Clock,
            title: '24/7 Service',
            description: 'Round-the-clock support for all your needs'
        },
        {
            icon: Shield,
            title: 'Secure & Safe',
            description: 'CCTV surveillance and security monitoring'
        },
        {
            icon: Sparkles,
            title: 'Premium Quality',
            description: 'Clean, modern, and well-maintained properties'
        },
        {
            icon: CheckCircle,
            title: 'Best Value',
            description: 'Competitive pricing with excellent amenities'
        }
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="bg-image" style={{
                    backgroundImage: `url(${templeHero})`
                }}></div>
                <div className="overlay"></div>
                <div className="hero-content container">
                    <span className="badge badge-24-7 mb-md">Near Agnipureeswarar Temple</span>
                    <p className="hero-subtitle" style={{ color: 'white', fontWeight: 'bold' }}>
                        Peaceful, clean, and comfortable accommodation for devotees in Thirupugalur
                    </p>
                    <div className="hero-buttons">
                        <Link to="/booking" className="btn btn-primary btn-large">
                            Book Your Stay
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/temple" className="btn btn-secondary btn-large">
                            Temple Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Overview */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2 className="heading-2">Accommodation Types</h2>
                        <p className="text-large text-gray-dark">Choose the perfect room for your pilgrimage</p>
                    </div>

                    <div className="grid grid-3 gap-lg">
                        <div className="overview-card">
                            <div className="overview-icon">❄️</div>
                            <h3 className="heading-4">AC Rooms</h3>
                            <p className="card-text">
                                Cool and comfortable rooms to relax after darshan. Attached bathroom with hot water.
                            </p>
                            <p className="overview-price">From ₹1800/day</p>
                            <Link to="/properties?type=AC Room" className="btn btn-outline btn-small">
                                View Details
                            </Link>
                        </div>

                        <div className="overview-card">
                            <div className="overview-icon">🛏️</div>
                            <h3 className="heading-4">Non-AC Rooms</h3>
                            <p className="card-text">
                                Budget-friendly, clean, and well-ventilated rooms with all basic amenities.
                            </p>
                            <p className="overview-price">From ₹1500/day</p>
                            <Link to="/properties?type=Non-AC Room" className="btn btn-outline btn-small">
                                View Details
                            </Link>
                        </div>

                        <div className="overview-card">
                            <div className="overview-icon">🏠</div>
                            <h3 className="heading-4">Independent House</h3>
                            <p className="card-text">
                                Spacious house for families and groups (6-8 pax). Privacy and home-like comfort.
                            </p>
                            <p className="overview-price">From ₹2000/day</p>
                            <Link to="/properties?type=House" className="btn btn-outline btn-small">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section bg-beige-medium">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2 className="heading-2">Your Home in Thirupugalur</h2>
                            <p className="text-large mb-md">
                                Padmavathi Complex is dedicated to serving devotees visiting the historic <strong>Arulmigu Agnipureeswarar Temple</strong>.
                            </p>
                            <p className="mb-md">
                                Located just a 2-minute walk from the temple, we offer a peaceful environment for your spiritual journey. Whether you are performing Pariharam or simply seeking blessings, our clean rooms and devotee-friendly service ensure a hassle-free stay.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                Read Our Story
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="about-image">
                            <img
                                src={templeView}
                                alt="Temple View"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2 className="heading-2">Devotee Friendly Facilities</h2>
                        <p className="text-large text-gray-dark">Designed for your comfort and peace of mind</p>
                    </div>

                    <div className="grid grid-4 gap-lg">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">
                                        <Icon size={32} />
                                    </div>
                                    <h4 className="heading-4">{benefit.title}</h4>
                                    <p className="card-text">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="section bg-beige-light">
                <div className="container">
                    <div className="flex-between mb-xl">
                        <div>
                            <h2 className="heading-2">Featured Properties</h2>
                            <p className="text-large text-gray-dark">Our most popular rentals</p>
                        </div>
                        <Link to="/properties" className="btn btn-outline">
                            View All Properties
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-3 gap-lg">
                        {featuredProperties.slice(0, 3).map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2 className="heading-2">What Our Customers Say</h2>

                    </div>

                    <div className="grid grid-2 gap-lg">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-header">

                                    <div>
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="var(--color-maroon-primary)" color="var(--color-maroon-primary)" />
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <p className="testimonial-date">{testimonial.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section bg-maroon text-white">
                <div className="container text-center">
                    <h2 className="heading-2 text-white">Ready to Book Your Stay?</h2>
                    <p className="text-large mb-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Get in touch with us today for the best deals and personalized service
                    </p>
                    <div className="flex-center gap-md" style={{ flexWrap: 'wrap' }}>
                        <Link to="/booking" className="btn btn-secondary btn-large">
                            Book Now
                        </Link>
                        <Link to="/contact" className="btn btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .overview-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: all var(--transition-base);
        }

        .overview-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .overview-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-md);
        }

        .overview-price {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          color: var(--color-maroon-primary);
          margin: var(--spacing-md) 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-image {
            order: -1;
          }
        }

        .benefit-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: all var(--transition-base);
        }

        .benefit-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--spacing-md);
          background: linear-gradient(135deg, var(--color-beige-light), var(--color-beige-medium));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-maroon-primary);
        }

        .rating-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: var(--spacing-sm);
        }

        .rating-value {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          color: var(--color-maroon-primary);
        }

        .rating-text {
          color: var(--color-gray-dark);
        }

        .testimonial-card {
          background: var(--color-beige-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-beige-medium);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-name {
          font-weight: var(--font-weight-semibold);
          color: var(--color-maroon-primary);
          margin-bottom: 0.25rem;
        }

        .testimonial-role {
          font-size: 0.875rem;
          color: var(--color-gray-dark);
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          margin-left: auto;
        }

        .testimonial-text {
          line-height: 1.7;
          margin-bottom: var(--spacing-sm);
        }

        .testimonial-date {
          font-size: 0.875rem;
          color: var(--color-gray-dark);
        }
      `}</style>
        </div>
    )
}

export default Home
