import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

function LocationMap() {
    const mapRef = useRef(null)
    const googleMapRef = useRef(null)

    // Padmavathi Complex coordinates (approximate - you should update with exact coordinates)
    const center = { lat: 10.8846093, lng: 79.70213729999999 }

    useEffect(() => {
        // Load Google Maps script
        const loadGoogleMapsScript = () => {
            const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

            if (!apiKey) {
                console.warn('Google Maps API key not found. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file')
                return
            }

            if (window.google && window.google.maps) {
                initMap()
                return
            }

            const script = document.createElement('script')
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
            script.async = true
            script.defer = true
            script.onload = initMap
            document.head.appendChild(script)
        }

        const initMap = () => {
            if (!mapRef.current || !window.google) return

            // Create map
            const map = new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: 16,
                mapTypeControl: true,
                streetViewControl: true,
                fullscreenControl: true,
            })

            googleMapRef.current = map

            // Add marker for Padmavathi Complex
            new window.google.maps.Marker({
                position: center,
                map: map,
                title: 'Padmavathi Complex',
                icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#8B0000',
                    fillOpacity: 1,
                    strokeColor: '#FFFFFF',
                    strokeWeight: 2,
                },
            })

            // Add info window
            const infoWindow = new window.google.maps.InfoWindow({
                content: `
          <div style="padding: 10px; font-family: 'Inter', sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #8B0000; font-size: 16px;">Padmavathi Complex</h3>
            <p style="margin: 0; font-size: 14px; color: #333;">
              Thirumanjana Street<br/>
              Near Agnipureeswarar Temple<br/>
              Thirupugalur, Nagapattinam 609704
            </p>
            <p style="margin: 8px 0 0 0; font-size: 14px;">
              <strong>Phone:</strong> <a href="tel:+916382812143" style="color: #4285f4;">+91 63828 12143</a>
            </p>
          </div>
        `,
                position: center,
            })

            // Show info window by default
            infoWindow.open(map)

            // Optional: Add markers for nearby temples
            const nearbyPlaces = [
                {
                    name: 'Agnipureeswarar Temple',
                    position: { lat: 10.8850, lng: 79.7025 }, // Approximate - update with actual coordinates
                },
                {
                    name: 'Sri Sowmya Narayana Perumal Temple',
                    position: { lat: 10.8840, lng: 79.7018 }, // Approximate - update with actual coordinates
                },
            ]

            nearbyPlaces.forEach((place) => {
                new window.google.maps.Marker({
                    position: place.position,
                    map: map,
                    title: place.name,
                    icon: {
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 7,
                        fillColor: '#F5DEB3',
                        fillOpacity: 0.9,
                        strokeColor: '#8B0000',
                        strokeWeight: 1,
                    },
                })
            })
        }

        loadGoogleMapsScript()
    }, [])

    return (
        <div className="location-map-container">
            <div className="map-header">
                <MapPin size={24} />
                <h3>Find Us on the Map</h3>
            </div>
            <div
                ref={mapRef}
                className="google-map"
                style={{
                    width: '100%',
                    height: '450px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                }}
            />
            <div className="map-info">
                <p className="text-small text-gray-dark">
                    📍 Just 2-3 minutes walk from Agnipureeswarar Temple
                </p>
            </div>

            <style jsx>{`
        .location-map-container {
          margin: var(--spacing-lg) 0;
        }

        .map-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
          color: var(--color-maroon-primary);
        }

        .map-header h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: var(--font-weight-semibold);
        }

        .google-map {
          background: var(--color-beige-light);
        }

        .map-info {
          margin-top: var(--spacing-md);
          text-align: center;
        }
      `}</style>
        </div>
    )
}

export default LocationMap
