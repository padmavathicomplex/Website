import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import BookingForm from './pages/BookingForm'
import About from './pages/About'
import Amenities from './pages/Amenities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import TempleGuide from './pages/TempleGuide'
import Terms from './pages/Terms'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/property/:id" element={<PropertyDetail />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/amenities" element={<Amenities />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/temple" element={<TempleGuide />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
