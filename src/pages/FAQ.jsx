import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I book a room?',
      answer: 'You can book by clicking the "Book Now" button on our website. Fill out the form with your details, and we will contact you within 24 hours to confirm. Alternatively, you can call us or message us on WhatsApp.'
    },
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in is at 12:00 PM and Check-out is at 11:00 AM. Early check-in or late check-out depends on availability and may incur extra charges.'
    },
    {
      question: 'Is the property near the temple?',
      answer: 'Yes! Padmavathi Complex is just a 2-3 minute walk from the Agnipureeswarar Temple entrance, making it extremely convenient for devotees attending early morning poojas.'
    },
    {
      question: 'Do you provide food?',
      answer: 'We do not provide food, but there are several good vegetarian hotels nearby. Food delivery options may be limited in the village, so we recommend planning meals in advance.'
    },
    {
      question: 'Is hot water available?',
      answer: 'Yes, all our rooms (AC and Non-AC) and houses come with attached bathrooms and hot water facilities (Geyser).'
    },
    {
      question: 'Is it safe for solo female travelers or elderly?',
      answer: 'Absolutely. We are a family-run property with 24/7 presence and CCTV surveillance. The area is very safe and peaceful, suitable for elderly devotees and solo travelers.'
    },
    {
      question: 'Do you require an advance payment?',
      answer: 'For confirmed bookings, especially during festival days or weekends, we may request a small advance payment. This can be made via GPay, PhonePe, or Bank Transfer.'
    },
    {
      question: 'Are pets allowed?',
      answer: 'Generally, pets are not allowed in the rooms to maintain cleanliness for all devotees. However, please contact us for specific requests regarding the independent house.'
    },
    {
      question: 'Is there car parking?',
      answer: 'Yes, we have secure parking space available for our guests.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      {/* Header */}
      <section className="page-header bg-beige-medium">
        <div className="container">
          <h1 className="heading-1">Frequently Asked Questions</h1>
          <p className="text-large">
            Find answers to common questions about your stay at Padmavathi Complex
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section bg-white">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-maroon text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-md">Still Have Questions?</h2>
          <p className="text-large mb-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Can't find the answer you're looking for? Our team is here to help!
          </p>
          <div className="flex-center gap-md" style={{ flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-secondary btn-large">
              Contact Us
            </a>
            <a href="tel:+911234567890" className="btn btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .faq-item {
          background: white;
          border: 2px solid var(--color-beige-medium);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }

        .faq-item.open {
          border-color: var(--color-maroon-primary);
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--color-beige-light);
          border: none;
          text-align: left;
          font-size: 1.125rem;
          font-weight: var(--font-weight-semibold);
          color: var(--color-maroon-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .faq-question:hover {
          background: var(--color-beige-medium);
        }

        .faq-item.open .faq-question {
          background: var(--color-maroon-primary);
          color: white;
        }

        .faq-item.open .faq-question svg {
          color: white;
        }

        .faq-question svg {
          flex-shrink: 0;
          color: var(--color-maroon-primary);
          transition: color var(--transition-fast);
        }

        .faq-answer {
          padding: var(--spacing-lg);
          background: white;
          animation: fadeInDown 0.3s ease-out;
        }

        .faq-answer p {
          line-height: 1.7;
          color: var(--color-gray-dark);
          font-size: 1rem;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gap-md {
          gap: var(--spacing-md);
        }
      `}</style>
    </div>
  )
}

export default FAQ
