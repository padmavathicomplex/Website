import { useParams, Link, useNavigate } from 'react-router-dom'
import { MapPin, Users, Bed, Home, ArrowLeft, Calendar } from 'lucide-react'
import ImageGallery from '../components/ImageGallery'
import PropertyCard from '../components/PropertyCard'
import { getPropertyById, properties } from '../data/properties'

function PropertyDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const property = getPropertyById(id)

    if (!property) {
        return (
            <div className="container section text-center">
                <h2 className="heading-2">Property Not Found</h2>
                <p className="text-large mb-lg">The property you're looking for doesn't exist.</p>
                <Link to="/properties" className="btn btn-primary">
                    Browse All Properties
                </Link>
            </div>
        )
    }

    // Get similar properties (same category, exclude current)
    const similarProperties = properties
        .filter(p => p.category === property.category && p.id !== property.id)
        .slice(0, 3)

    return (
        <div className="property-detail-page">
            {/* Back Button */}
            <div className="container mt-md">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline btn-small"
                >
                    <ArrowLeft size={18} />
                    Back to Properties
                </button>
            </div>

            {/* Property Header */}
            <section className="section">
                <div className="container">
                    <div className="property-header">
                        <div>
                            <span className="badge badge-primary mb-sm">{property.category}</span>
                            {property.featured && (
                                <span className="badge badge-success mb-sm ml-sm">Featured</span>
                            )}
                            <h1 className="heading-1">{property.name}</h1>
                            <div className="property-location">
                                <MapPin size={20} />
                                <span>{property.location}</span>
                            </div>
                        </div>
                        <div className="property-price-box">
                            <div className="property-price-large">
                                ${property.price}
                                <span className="price-period">/{property.pricePer}</span>
                            </div>
                            <Link
                                to={`/booking?property=${property.id}`}
                                className="btn btn-primary btn-block sticky-book-btn"
                            >
                                <Calendar size={20} />
                                Book This Property
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="section-sm">
                <div className="container">
                    <ImageGallery images={property.images} propertyName={property.name} />
                </div>
            </section>

            {/* Property Details */}
            <section className="section">
                <div className="container">
                    <div className="property-content-grid">
                        {/* Main Content */}
                        <div className="property-main">
                            {/* Description */}
                            <div className="detail-section">
                                <h2 className="heading-3">About This Property</h2>
                                <p className="text-large">{property.description}</p>
                            </div>

                            {/* Specifications */}
                            <div className="detail-section">
                                <h3 className="heading-3">Property Specifications</h3>
                                <div className="specs-grid">
                                    {Object.entries(property.specifications).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                                            <span>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities */}
                            <div className="detail-section">
                                <h3 className="heading-3">Amenities & Features</h3>
                                <div className="amenities-grid">
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className="amenity-item">
                                            <span className="amenity-check">✓</span>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* House Rules */}
                            <div className="detail-section">
                                <h3 className="heading-3">House Rules</h3>
                                <ul className="rules-list">
                                    {property.rules.map((rule, index) => (
                                        <li key={index}>{rule}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="property-sidebar">
                            <div className="sidebar-card">
                                <h4 className="heading-4 mb-md">Property Details</h4>
                                <div className="sidebar-details">
                                    <div className="sidebar-detail-item">
                                        <Home size={20} />
                                        <div>
                                            <strong>Type</strong>
                                            <span>{property.type}</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-detail-item">
                                        <Bed size={20} />
                                        <div>
                                            <strong>Category</strong>
                                            <span>{property.category}</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-detail-item">
                                        <Users size={20} />
                                        <div>
                                            <strong>Capacity</strong>
                                            <span>{property.specifications.capacity}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-cta">
                                    <div className="sidebar-price">
                                        <span className="price-label">Price</span>
                                        <div className="price-value">
                                            ${property.price}
                                            <span className="price-period">/{property.pricePer}</span>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/booking?property=${property.id}`}
                                        className="btn btn-primary btn-block btn-large"
                                    >
                                        Book Now
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="btn btn-outline btn-block"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* 24/7 Service Badge */}
                            <div className="sidebar-badge">
                                <span className="badge badge-24-7">24/7 Service Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
                <section className="section bg-beige-light">
                    <div className="container">
                        <h2 className="heading-2 mb-xl">Similar Properties</h2>
                        <div className="grid grid-3 gap-lg">
                            {similarProperties.map(prop => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <style jsx>{`
        .ml-sm {
          margin-left: var(--spacing-xs);
        }

        .property-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gray-dark);
          font-size: 1.125rem;
          margin-top: var(--spacing-sm);
        }

        .property-price-box {
          background: var(--color-beige-light);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          min-width: 250px;
        }

        .property-price-large {
          font-size: 2.5rem;
          font-weight: var(--font-weight-bold);
          color: var(--color-maroon-primary);
          margin-bottom: var(--spacing-md);
        }

        .price-period {
          font-size: 1rem;
          color: var(--color-gray-dark);
          font-weight: var(--font-weight-regular);
        }

        .property-content-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-xl);
        }

        @media (max-width: 968px) {
          .property-content-grid {
            grid-template-columns: 1fr;
          }
        }

        .property-main {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .detail-section {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: var(--spacing-sm);
          background: var(--color-beige-light);
          border-radius: var(--radius-md);
        }

        .spec-item strong {
          color: var(--color-maroon-primary);
          text-transform: capitalize;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }

        .amenity-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: var(--spacing-sm);
        }

        .amenity-check {
          width: 24px;
          height: 24px;
          background-color: var(--color-maroon-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .rules-list {
          margin-top: var(--spacing-md);
          padding-left: var(--spacing-lg);
        }

        .rules-list li {
          margin-bottom: var(--spacing-sm);
          line-height: 1.7;
        }

        .property-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .sidebar-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
        }

        .sidebar-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-lg);
          border-bottom: 2px solid var(--color-beige-medium);
        }

        .sidebar-detail-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
        }

        .sidebar-detail-item svg {
          color: var(--color-maroon-primary);
          flex-shrink: 0;
        }

        .sidebar-detail-item div {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sidebar-detail-item strong {
          color: var(--color-maroon-primary);
          font-size: 0.875rem;
        }

        .sidebar-cta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .sidebar-price {
          background: var(--color-beige-light);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .price-label {
          display: block;
          font-size: 0.875rem;
          color: var(--color-gray-dark);
          margin-bottom: 0.25rem;
        }

        .price-value {
          font-size: 2rem;
          font-weight: var(--font-weight-bold);
          color: var(--color-maroon-primary);
        }

        .sidebar-badge {
          text-align: center;
        }

        @media (max-width: 768px) {
          .property-price-box {
            width: 100%;
          }

          .sidebar-card {
            position: static;
          }
        }
      `}</style>
        </div>
    )
}

export default PropertyDetail
