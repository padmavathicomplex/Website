import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  // Use environment variable or default number
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890'
  const message = encodeURIComponent("Hello, I'm interested in booking at Padmavathi Complex")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <>
      <a
        href={whatsappUrl}
        className="whatsapp-button no-print"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-xl);
          z-index: 999;
          transition: all var(--transition-base);
          animation: pulse 2s infinite;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-button:active {
          transform: scale(0.95);
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            width: 56px;
            height: 56px;
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default WhatsAppButton
