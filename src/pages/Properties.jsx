import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

function Properties() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filteredProperties, setFilteredProperties] = useState(properties)
    const [filters, setFilters] = useState({
        type: searchParams.get('type') || 'All',
        search: '',
        minPrice: 0,
        maxPrice: 2000
    })

    useEffect(() => {
        let filtered = [...properties]

        // Filter by type
        if (filters.type !== 'All') {
            filtered = filtered.filter(p => p.category === filters.type)
        }

        // Filter by search
        if (filters.search) {
            const search = filters.search.toLowerCase()
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(search) ||
                p.description.toLowerCase().includes(search) ||
                p.location.toLowerCase().includes(search)
            )
        }

        // Filter by price
        filtered = filtered.filter(p => {
            const price = p.pricePer === 'month' ? p.price / 30 : p.price
            return price >= filters.minPrice && price <= filters.maxPrice
        })

        setFilteredProperties(filtered)
    }, [filters])

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    return (
        <div className="properties-page">
            {/* Page Header */}
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Our Properties</h1>
                    <p className="text-large">
                        Browse our collection of {properties.length} quality rental properties
                    </p>
                </div>
            </section>

            {/* Filters Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="filters-container">
                        <div className="filters-header">
                            <h3 className="heading-4">
                                <SlidersHorizontal size={20} />
                                Filter Properties
                            </h3>
                            <button
                                className="btn btn-outline btn-small"
                                onClick={() => setFilters({ type: 'All', search: '', minPrice: 0, maxPrice: 2000 })}
                            >
                                Clear Filters
                            </button>
                        </div>

                        <div className="filters-grid">
                            {/* Property Type Filter */}
                            <div className="form-group">
                                <label className="form-label">Property Type</label>
                                <select
                                    className="form-select"
                                    value={filters.type}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                >
                                    <option value="All">All Types</option>
                                    <option value="AC Room">AC Rooms</option>
                                    <option value="Non-AC Room">Non-AC Rooms</option>
                                    <option value="House">Houses</option>
                                </select>
                            </div>

                            {/* Search */}
                            <div className="form-group">
                                <label className="form-label">Search</label>
                                <div className="search-input-wrapper">
                                    <Search size={20} className="search-icon" />
                                    <input
                                        type="text"
                                        className="form-input search-input"
                                        placeholder="Search by name, location..."
                                        value={filters.search}
                                        onChange={(e) => handleFilterChange('search', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="form-group">
                                <label className="form-label">
                                    Daily Price Range: ${filters.minPrice} - ${filters.maxPrice}
                                </label>
                                <div className="price-range-inputs">
                                    <input
                                        type="number"
                                        className="form-input"
                                        placeholder="Min"
                                        value={filters.minPrice}
                                        onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        className="form-input"
                                        placeholder="Max"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="results-info">
                        <p className="text-large">
                            Showing <strong>{filteredProperties.length}</strong> {filteredProperties.length === 1 ? 'property' : 'properties'}
                        </p>
                    </div>

                    {/* Properties Grid */}
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-3 gap-lg">
                            {filteredProperties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3 className="heading-3">No properties found</h3>
                            <p className="text-large text-gray-dark">
                                Try adjusting your filters to see more results
                            </p>
                            <button
                                className="btn btn-primary mt-md"
                                onClick={() => setFilters({ type: 'All', search: '', minPrice: 0, maxPrice: 2000 })}
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .filters-container {
          background: var(--color-beige-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-xl);
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }

        .filters-header h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
        }

        .filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-md);
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gray-dark);
        }

        .search-input {
          padding-left: 3rem;
        }

        .price-range-inputs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .price-range-inputs input {
          flex: 1;
        }

        .results-info {
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-md);
          background: var(--color-beige-light);
          border-radius: var(--radius-md);
        }

        .no-results {
          text-align: center;
          padding: var(--spacing-2xl);
          background: var(--color-beige-light);
          border-radius: var(--radius-lg);
        }

        @media (max-width: 768px) {
          .filters-header {
            flex-direction: column;
            align-items: stretch;
            gap: var(--spacing-md);
          }

          .filters-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    )
}

export default Properties
