import { Link } from 'react-router-dom'
import { Wifi, Car, Utensils, Bath, Bed, Users, MapPin, IndianRupee } from 'lucide-react'

function PropertyCard({ property }) {
  const iconMap = {
    wifi: Wifi,
    parking: Car,
    kitchen: Utensils,
    bathroom: Bath,
    bed: Bed,
    guests: Users,
  }

  return (
    <div className="card">
      <div className="property-card-image-container">
        <img
          src={property.image}
          alt={property.name}
          className="card-img"
          loading="lazy"
        />
        <div className="property-card-badges">
          <span className={`badge ${property.type === 'House' ? 'badge-primary' : 'badge-secondary'}`}>
            {property.category}
          </span>
          {property.featured && (
            <span className="badge badge-success">Featured</span>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{property.name}</h3>

        <div className="property-card-location">
          <MapPin size={16} />
          <span>{property.location || 'Prime Location'}</span>
        </div>

        <p className="card-text property-card-description">
          {property.description.substring(0, 100)}...
        </p>

        <div className="property-card-amenities">
          {property.amenities.slice(0, 4).map((amenity, index) => {
            const Icon = iconMap[amenity.toLowerCase()] || Wifi
            return (
              <div key={index} className="property-card-amenity">
                <Icon size={16} />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>

        <div className="property-card-footer">
          <div className="property-card-price">
            <IndianRupee size={18} />
            <span className="price-amount">{property.price}</span>
            <span className="price-period">/{property.pricePer}</span>
          </div>

          <div className="property-card-buttons">
            <Link to={`/property/${property.id}`} className="btn btn-outline btn-small">
              View Details
            </Link>
            <Link to={`/booking?property=${property.id}`} className="btn btn-primary btn-small">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .property-card-image-container {
          position: relative;
          overflow: hidden;
        }

        .card-img {
          transition: transform var(--transition-slow);
        }

        .card:hover .card-img {
          transform: scale(1.1);
        }

        .property-card-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .property-card-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gray-dark);
          font-size: 0.875rem;
          margin-bottom: var(--spacing-sm);
        }

        .property-card-description {
          font-size: 0.9rem;
          color: var(--color-gray-dark);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .property-card-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--color-gray-medium);
        }

        .property-card-amenity {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          color: var(--color-gray-dark);
        }

        .property-card-amenity svg {
          color: var(--color-maroon-primary);
        }

        .property-card-footer {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .property-card-price {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          color: var(--color-maroon-primary);
          font-weight: var(--font-weight-bold);
        }

        .price-amount {
          font-size: 1.75rem;
        }

        .price-period {
          font-size: 0.875rem;
          color: var(--color-gray-dark);
          font-weight: var(--font-weight-regular);
        }

        .property-card-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .property-card-buttons .btn {
          flex: 1;
          min-width: fit-content;
        }
      `}</style>
    </div>
  )
}

export default PropertyCard
