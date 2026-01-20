import { Clock, MapPin, Calendar, Info } from 'lucide-react'

function TempleGuide() {
    return (
        <div className="temple-page">
            <section className="page-header bg-maroon text-white">
                <div className="container">
                    <h1 className="heading-1 text-white">Agnipureeswarar Temple Guide</h1>
                    <p className="text-large" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Complete guide for devotees visiting the sacred Thirupugalur temple
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-2 gap-xl">
                        <div>
                            <h2 className="heading-2 mb-md">About the Temple</h2>
                            <p className="text-large mb-md">
                                <strong>Arulmigu Agnipureeswarar Temple</strong>, located in Thirupugalur, is a historic Hindu temple dedicated to Lord Shiva. It is one of the 276 Paadal Petra Sthalams and is one of the important Navagraha temples associated with <strong>Agni (Fire)</strong> and <strong>Chevvai (Mars)</strong> protection.
                            </p>
                            <p className="mb-md">
                                The presiding deity is Lord Shiva in the form of Agnipureeswarar, and the Goddess is Karundhaar Kuzhali. The temple is famous for its unique architecture where the shrine of Agni is located. Legend says that Agni Bhagavan worshipped Lord Shiva here to get rid of his doshas, hence the name Agnipureeswarar.
                            </p>
                            <p>
                                Devotees visit this temple to seek relief from Chevvai Dosham (Mars affliction), for marriage obstacles, and for general prosperity and health.
                            </p>
                        </div>
                        <div>
                            <div className="card p-lg bg-beige-light">
                                <h3 className="heading-3 mb-md flex-center gap-sm">
                                    <Clock size={24} />
                                    Temple Timings
                                </h3>
                                <div className="timings-grid">
                                    <div className="time-block">
                                        <strong>Morning:</strong>
                                        <p>6:00 AM - 12:00 PM</p>
                                    </div>
                                    <div className="time-block">
                                        <strong>Evening:</strong>
                                        <p>4:00 PM - 8:30 PM</p>
                                    </div>
                                </div>
                                <p className="text-small mt-md text-gray-dark">
                                    * Timings may vary during festivals and special occasions.
                                </p>
                            </div>

                            <div className="card p-lg mt-lg bg-beige-light">
                                <h3 className="heading-3 mb-md flex-center gap-sm">
                                    <Calendar size={24} />
                                    Special Days
                                </h3>
                                <ul className="special-list">
                                    <li><strong>Tuesdays (Chevvai):</strong> Special poojas for Mars dosha</li>
                                    <li><strong>Pradosham:</strong> Bi-monthly observance</li>
                                    <li><strong>Brahmotsavam:</strong> Annual festival (verify dates)</li>
                                    <li><strong>Vaikasi Visakam:</strong> Important festival day</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-beige-medium">
                <div className="container">
                    <h2 className="heading-2 text-center mb-xl">How to Reach</h2>
                    <div className="grid grid-3 gap-lg">
                        <div className="card p-lg text-center">
                            <div className="transport-icon">🚆</div>
                            <h3 className="heading-4 mb-sm">By Train</h3>
                            <p>
                                Nearest stations are <strong>Kumbakonam (30 km)</strong> and <strong>Mayiladuthurai (35 km)</strong>. Both are well-connected to major cities like Chennai and Trichy.
                            </p>
                        </div>
                        <div className="card p-lg text-center">
                            <div className="transport-icon">🚌</div>
                            <h3 className="heading-4 mb-sm">By Bus</h3>
                            <p>
                                Regular buses are available from Kumbakonam, Mayiladuthurai, and Thanjavur to Thirupugalur. The bus stand is in the village center.
                            </p>
                        </div>
                        <div className="card p-lg text-center">
                            <div className="transport-icon">🚗</div>
                            <h3 className="heading-4 mb-sm">By Car</h3>
                            <p>
                                Well-connected by road. Parking is available at Padmavathi Complex. We are approximately 300km from Chennai and 100km from Trichy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <h2 className="heading-2 mb-lg">Nearby Navagraha Temples</h2>
                    <p className="mb-xl">Thirupugalur is strategically located for devotees visiting the Navagraha circuit:</p>

                    <div className="grid grid-3 gap-md">
                        <div className="location-card">
                            <h4>Suryanar Kovil (Sun)</h4>
                            <p>Distance: ~20 km</p>
                        </div>
                        <div className="location-card">
                            <h4>Kanjanur (Venus)</h4>
                            <p>Distance: ~25 km</p>
                        </div>
                        <div className="location-card">
                            <h4>Alangudi (Jupiter)</h4>
                            <p>Distance: ~35 km</p>
                        </div>
                        <div className="location-card">
                            <h4>Vaitheeswaran Kovil (Mars)</h4>
                            <p>Distance: ~45 km</p>
                        </div>
                        <div className="location-card">
                            <h4>Thirunallar (Saturn)</h4>
                            <p>Distance: ~60 km</p>
                        </div>
                        <div className="location-card">
                            <h4>Thirunageswaram (Rahu)</h4>
                            <p>Distance: ~25 km</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .transport-icon {
                    font-size: 3rem;
                    margin-bottom: var(--spacing-sm);
                }

                .timings-grid {
                    display: grid;
                    gap: var(--spacing-md);
                }

                .special-list {
                    padding-left: 1.25rem;
                }

                .location-card {
                    background: var(--color-beige-light);
                    padding: var(--spacing-md);
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-maroon-primary);
                }

                .location-card h4 {
                    color: var(--color-maroon-primary);
                    margin-bottom: 0.25rem;
                }
            `}</style>
        </div>
    )
}

export default TempleGuide
