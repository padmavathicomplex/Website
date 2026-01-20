import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function ImageGallery({ images, propertyName = 'Property' }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    if (!images || images.length === 0) {
        return null
    }

    return (
        <>
            <div className="image-gallery">
                {/* Main Image */}
                <div className="gallery-main" onClick={() => openLightbox(currentIndex)}>
                    <img
                        src={images[currentIndex]}
                        alt={`${propertyName} - Image ${currentIndex + 1}`}
                        className="gallery-main-image"
                    />
                    <div className="gallery-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            className="gallery-nav gallery-nav-prev"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            className="gallery-nav gallery-nav-next"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="gallery-thumbnails">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                        <X size={32} />
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`${propertyName} - Image ${currentIndex + 1}`}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                className="lightbox-nav lightbox-nav-prev"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    prevImage()
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                className="lightbox-nav lightbox-nav-next"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    nextImage()
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    <div className="lightbox-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}

            <style jsx>{`
        .image-gallery {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--color-gray-light);
        }

        .gallery-main {
          position: relative;
          aspect-ratio: 16 / 9;
          cursor: pointer;
          overflow: hidden;
        }

        .gallery-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-main:hover .gallery-main-image {
          transform: scale(1.05);
        }

        .gallery-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: var(--font-weight-semibold);
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.9);
          color: var(--color-maroon-primary);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 10;
        }

        .gallery-nav:hover {
          background-color: var(--color-maroon-primary);
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-nav-prev {
          left: 1rem;
        }

        .gallery-nav-next {
          right: 1rem;
        }

        .gallery-thumbnails {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          background-color: rgba(0, 0, 0, 0.05);
        }

        .gallery-thumbnail {
          flex-shrink: 0;
          width: 80px;
          height: 60px;
          border: 2px solid transparent;
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .gallery-thumbnail:hover,
        .gallery-thumbnail.active {
          border-color: var(--color-maroon-primary);
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          animation: fadeIn 0.3s ease-out;
        }

        .lightbox-image {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: var(--radius-md);
        }

        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .lightbox-close:hover {
          background-color: var(--color-maroon-primary);
          transform: rotate(90deg);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .lightbox-nav:hover {
          background-color: var(--color-maroon-primary);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-nav-prev {
          left: 2rem;
        }

        .lightbox-nav-next {
          right: 2rem;
        }

        .lightbox-counter {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-weight: var(--font-weight-semibold);
        }

        @media (max-width: 768px) {
          .gallery-nav,
          .lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .lightbox-nav-prev {
            left: 1rem;
          }

          .lightbox-nav-next {
            right: 1rem;
          }

          .gallery-thumbnail {
            width: 60px;
            height: 45px;
          }
        }
      `}</style>
        </>
    )
}

export default ImageGallery
