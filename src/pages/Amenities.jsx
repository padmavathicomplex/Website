import { amenities, getAmenityIcon } from '../data/amenities'

function Amenities() {
    return (
        <div className="amenities-page">
            {/* Header */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Our Amenities & Services</h1>
                    <p className="text-large">
                        Everything you need for a comfortable and convenient stay
                    </p>
                    <div className="mt-md">
                        <span className="badge badge-24-7">24/7 Service Available</span>
                    </div>
                </div>
            </section>

            {/* Main Amenities */}
            <section className="section bg-white">
                <div className="container">
                    <div className="amenities-grid">
                        {amenities.map((amenity) => {
                            const Icon = getAmenityIcon(amenity.icon)
                            return (
                                <div key={amenity.id} className="amenity-card">
                                    <div className="amenity-icon">
                                        <Icon size={36} />
                                    </div>
                                    <h3 className="heading-4">{amenity.name}</h3>
                                    <p>{amenity.description}</p>
                                    {amenity.available && (
                                        <span className="badge badge-success mt-sm">Available</span>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 24/7 Service Highlight */}
            <section className="section bg-maroon text-white">
                <div className="container text-center">
                    <h2 className="heading-2 text-white mb-md">24/7 Service - Always Here for You</h2>
                    <p className="text-large mb-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Our commitment to round-the-clock service means you're never alone. Whether it's a
                        maintenance issue in the middle of the night or a question about local amenities,
                        our team is always ready to help.
                    </p>
                    <div className="service-features">
                        <div className="service-feature">
                            <h4>Emergency Support</h4>
                            <p>Immediate response for urgent issues</p>
                        </div>
                        <div className="service-feature">
                            <h4>24/7 Reception</h4>
                            <p>Always available for check-in and assistance</p>
                        </div>
                        <div className="service-feature">
                            <h4>Maintenance On-Call</h4>
                            <p>Quick resolution of any property issues</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section bg-beige-light">
                <div className="container">
                    <h2 className="heading-2 text-center mb-xl">Additional Services</h2>
                    <div className="services-list">
                        <div className="service-item">
                            <h4 className="heading-4">🧹 Regular Cleaning</h4>
                            <p>Weekly cleaning service for all long-term rentals, ensuring your space stays fresh and tidy</p>
                        </div>
                        <div className="service-item">
                            <h4 className="heading-4">🔧 Maintenance & Repairs</h4>
                            <p>Prompt maintenance service with skilled technicians available for any repairs</p>
                        </div>
                        <div className="service-item">
                            <h4 className="heading-4">📦 Package Handling</h4>
                            <p>Secure package receiving and storage service for your delivered items</p>
                        </div>
                        <div className="service-item">
                            <h4 className="heading-4">🌐 Travel Assistance</h4>
                            <p>Local recommendations, directions, and assistance with area information</p>
                        </div>
                        <div className="service-item">
                            <h4 className="heading-4">💳 Flexible Payment</h4>
                            <p>Multiple payment options including cash, cards, and online transfers</p>
                        </div>
                        <div className="service-item">
                            <h4 className="heading-4">📋 Contract Flexibility</h4>
                            <p>Flexible rental terms from daily to monthly, accommodating your schedule</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .mt-md {
          margin-top: var(--spacing-md);
        }

        .mt-sm {
          margin-top: var(--spacing-sm);
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .amenity-card {
          background: var(--color-beige-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: all var(--transition-base);
        }

        .amenity-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .amenity-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--spacing-md);
          background: linear-gradient(135deg, var(--color-maroon-primary), var(--color-maroon-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .amenity-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .service-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .service-feature {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.1);
        }

        .service-feature h4 {
          font-size: 1.25rem;
          font-weight: var(--font-weight-semibold);
          color: white;
          margin-bottom: var(--spacing-sm);
        }

        .service-feature p {
          color: rgba(255, 255, 255, 0.9);
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .service-item {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--color-maroon-primary);
        }

        .service-item h4 {
          margin-bottom: var(--spacing-sm);
        }
      `}</style>
        </div>
    )
}

export default Amenities
