import { useState } from 'react'

function Gallery() {
  const [filter, setFilter] = useState('All')

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'AC Bedroom' },
    { id: 2, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'Bathroom' },
    { id: 3, src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop', category: 'Exterior', alt: 'House Exterior' },
    { id: 4, src: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&auto=format&fit=crop', category: 'Exterior', alt: 'Temple View' },
    { id: 5, src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'Room Amenities' },
    { id: 6, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'Kitchen' },
    { id: 7, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'Living Area' },
    { id: 8, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop', category: 'Rooms', alt: 'Bedroom' }
  ]

  const categories = ['All', 'Rooms', 'Exterior']

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter)

  return (
    <div className="gallery-page">
      <section className="page-header bg-beige-medium">
        <div className="container">
          <h1 className="heading-1">Photo Gallery</h1>
          <p className="text-large">
            Take a look around Padmavathi Complex and our facilities
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          {/* Filter Buttons */}
          <div className="gallery-filters mb-xl">
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
                .page-header {
                    padding: var(--spacing-2xl) 0;
                    text-align: center;
                }

                .gallery-filters {
                    display: flex;
                    justify-content: center;
                    gap: var(--spacing-md);
                    flex-wrap: wrap;
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: var(--spacing-lg);
                }

                .gallery-item {
                    position: relative;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    aspect-ratio: 4/3;
                    box-shadow: var(--shadow-md);
                    cursor: pointer;
                    transition: all var(--transition-base);
                }

                .gallery-item:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .gallery-item:hover img {
                    transform: scale(1.05);
                }

                .gallery-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: var(--spacing-md);
                    background: linear-gradient(transparent, rgba(0,0,0,0.7));
                    color: white;
                    opacity: 0;
                    transition: opacity var(--transition-fast);
                    display: flex;
                    justify-content: center;
                }

                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
            `}</style>
    </div>
  )
}

export default Gallery
