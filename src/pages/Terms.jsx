import { ChevronRight } from 'lucide-react'

function Terms() {
    return (
        <div className="terms-page">
            <section className="page-header bg-beige-medium">
                <div className="container">
                    <h1 className="heading-1">Terms & Conditions</h1>
                    <p className="text-large">
                        Please read our booking policies and house rules carefully
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="terms-content">
                        <section className="terms-section mb-xl">
                            <h2 className="heading-3 mb-md">Booking & Reservation Policy</h2>
                            <ul className="terms-list">
                                <li>All bookings are subject to availability.</li>
                                <li>Advance booking is recommended during festival seasons and special occasions.</li>
                                <li>Booking confirmation will be sent via phone/email/WhatsApp after verification.</li>
                                <li>Full guest details (Name, ID proof, Number of guests) are required for check-in.</li>
                            </ul>
                        </section>

                        <section className="terms-section mb-xl">
                            <h2 className="heading-3 mb-md">Check-in / Check-out</h2>
                            <ul className="terms-list">
                                <li><strong>Check-in Time:</strong> 12:00 PM (Noon)</li>
                                <li><strong>Check-out Time:</strong> 11:00 AM</li>
                                <li>Early check-in or late check-out is subject to availability and may incur additional charges.</li>
                                <li>Valid Government ID proof (Aadhar, Driving License, Passport, etc.) is required for all guests at the time of check-in.</li>
                            </ul>
                        </section>

                        <section className="terms-section mb-xl">
                            <h2 className="heading-3 mb-md">Payment Terms</h2>
                            <ul className="terms-list">
                                <li>We accept Cash, UPI (GPay, PhonePe, Paytm), and Bank Transfers.</li>
                                <li>Advance payment may be required to confirm bookings during peak seasons.</li>
                                <li>Full payment must be settled at the time of check-in.</li>
                                <li>Prices mentioned on the website are indicative and may vary based on seasons/festivals.</li>
                            </ul>
                        </section>

                        <section className="terms-section mb-xl">
                            <h2 className="heading-3 mb-md">Cancellation Policy</h2>
                            <ul className="terms-list">
                                <li><strong>Cancellations 7+ days before check-in:</strong> Full refund of advance payment (if any).</li>
                                <li><strong>Cancellations 3-7 days before check-in:</strong> 50% refund of advance payment.</li>
                                <li><strong>Cancellations less than 3 days before check-in:</strong> No refund.</li>
                                <li><strong>No-show:</strong> No refund.</li>
                            </ul>
                        </section>

                        <section className="terms-section mb-xl">
                            <h2 className="heading-3 mb-md">House Rules</h2>
                            <div className="alert alert-warning">
                                <strong>Note:</strong> Padmavathi Complex is a devotee-friendly property located near a sacred temple. We request all guests to maintain the spiritual sanctity of the place.
                            </div>
                            <ul className="terms-list">
                                <li>Smoking, consumption of alcohol, and illicit activities are <strong>strictly prohibited</strong> within the premises.</li>
                                <li>Non-vegetarian food is strictly not allowed in the premises.</li>
                                <li>Please maintain silence after 10:00 PM to respect the peace of other devotees and neighbors.</li>
                                <li>Guests are responsible for the safety of their belongings. Management is not responsible for any loss or damage to personal property.</li>
                                <li>Any damage to property assets (furniture, electronics, etc.) will be charged to the guest.</li>
                                <li>Visitors are not allowed in the rooms. Please meet them in the common areas or outside.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2 className="heading-3 mb-md">Contact</h2>
                            <p>
                                For any clarifications regarding these terms, please contact us at:
                                <br />
                                <strong>Phone:</strong> +91 1234567890
                                <br />
                                <strong>Email:</strong> info@padmavathicomplex.com
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .terms-list {
                    list-style: none;
                }

                .terms-list li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: var(--color-gray-dark);
                }

                .terms-list li::before {
                    content: '•';
                    color: var(--color-maroon-primary);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                }
            `}</style>
        </div>
    )
}

export default Terms
