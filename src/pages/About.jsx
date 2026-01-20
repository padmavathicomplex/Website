import { MapPin, Users, Heart, Star } from 'lucide-react'

function About() {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">About Padmavathi Complex</h1>
                    <p className="text-large">
                        Serving devotees with comfort and dedication near Agnipureeswarar Temple
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section bg-white">
                <div className="container">
                    <div className="content-grid">
                        <div>
                            <h2 className="heading-2 mb-md">Our Story</h2>
                            <p className="text-large mb-md">
                                Padmavathi Complex was established to serve devotees visiting the sacred Agnipureeswarar Temple in Thirupugalur. Located in the peaceful village of Thirupugalur, Nagapattinam district, we understand the needs of pilgrims and spiritual seekers who travel from far and wide to seek blessings at this ancient temple.
                            </p>
                            <p className="mb-md">
                                We are committed to providing clean, comfortable, and affordable accommodation with a devotee-friendly atmosphere. Our family-run property ensures personal attention and care for every guest, making you feel at home.
                            </p>
                            <p>
                                Whether you're visiting for a day's darshan or staying for a festival, Padmavathi Complex is your peaceful home away from home.
                            </p>
                        </div>
                        <div className="about-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop"
                                alt="Thirupugalur Temple Area"
                                className="about-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Location */}
            <section className="section bg-maroon text-white">
                <div className="container text-center">
                    <h2 className="heading-2 text-white mb-lg">Our Location: Thirupugalur</h2>
                    <p className="text-large mb-xl" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                        Thirupugalur is a serene village in Nagapattinam district, Tamil Nadu, famous for the Agnipureeswarar Temple.
                        Padmavathi Complex is strategically located within walking distance (2-3 minutes) of the temple, making it
                        extremely convenient for early morning and evening darshans.
                    </p>
                    <div className="grid grid-3 gap-lg text-left">
                        <div className="feature-card-dark">
                            <MapPin size={32} className="mb-sm" />
                            <h4>Prime Location</h4>
                            <p>Just steps away from the temple entrance</p>
                        </div>
                        <div className="feature-card-dark">
                            <Users size={32} className="mb-sm" />
                            <h4>Devotee Friendly</h4>
                            <p>Understanding needs of pilgrims and families</p>
                        </div>
                        <div className="feature-card-dark">
                            <Heart size={32} className="mb-sm" />
                            <h4>Homely Service</h4>
                            <p>Family-run with personal care</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="heading-2 text-center mb-xl">Why Devotees Choose Us</h2>
                    <div className="why-list">
                        <div className="why-item">
                            <span className="why-number">01</span>
                            <div>
                                <h4 className="heading-4">Proximity to Temple</h4>
                                <p>Just 2-3 minutes walk to Agnipureeswarar Temple. Perfect for attending all poojas.</p>
                            </div>
                        </div>
                        <div className="why-item">
                            <span className="why-number">02</span>
                            <div>
                                <h4 className="heading-4">Cleanliness</h4>
                                <p>We maintain strict hygiene standards in all our rooms and common areas.</p>
                            </div>
                        </div>
                        <div className="why-item">
                            <span className="why-number">03</span>
                            <div>
                                <h4 className="heading-4">24/7 Service</h4>
                                <p>Always available to assist you, whether for early check-out or late arrivals.</p>
                            </div>
                        </div>
                        <div className="why-item">
                            <span className="why-number">04</span>
                            <div>
                                <h4 className="heading-4">Affordable & Honest</h4>
                                <p>Transparent pricing with no hidden charges. Options for every budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-image-container {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          height: 400px;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 900px;
          margin: 0 auto;
        }

        .why-item {
          display: flex;
          gap: var(--spacing-lg);
          background: var(--color-beige-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-beige-medium);
        }

        .why-number {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-maroon-primary), var(--color-maroon-light));
          color: white;
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          border-radius: 50%;
        }

        .feature-card-dark {
            background: rgba(255,255,255,0.1);
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
        }
      `}</style>
        </div>
    )
}

export default About
