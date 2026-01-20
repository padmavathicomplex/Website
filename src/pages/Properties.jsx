import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

function Properties() {
    return (
        <div className="properties-page">
            {/* Page Header */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Our Accommodation</h1>
                    <p className="text-large">
                        Clean, comfortable, and peaceful stay options near Agnipureeswarar Temple
                    </p>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-3 gap-lg">
                        {properties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }
      `}</style>
        </div>
    )
}

export default Properties
