# Rental Property Website with Email Notifications

A modern, responsive rental property website built with React and Vite. Features AC rooms, Non-AC rooms, and houses with integrated email booking system using EmailJS.

## 🌟 Features

- **Property Browsing**: View detailed listings of AC rooms, Non-AC rooms, and houses
- **Advanced Filtering**: Filter properties by type, price range, and search keywords
- **Email Notifications**: Automated booking confirmations sent via EmailJS
- **Image Galleries**: Beautiful image carousels with lightbox view
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **24/7 Service Badge**: Prominently displayed throughout the site
- **Contact Forms**: Multiple contact points for customer inquiries
- **FAQ System**: Accordion-style FAQ page
- **Modern UI**: Beige & Maroon color scheme with smooth animations

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- EmailJS account (free tier available)
- Gmail account for receiving booking notifications

## 🚀 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "/Volumes/One Touch/Web Application"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. **Configure EmailJS** (see detailed setup below)

## 📧 EmailJS Setup Guide

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, click "Add New Service"
2. Select "Gmail" as your email service
3. Click "Connect Account" and authorize EmailJS to use your Gmail
4. Note your **Service ID** (you'll need this later)

### Step 3: Create Email Templates

#### Template 1: Booking Notification (to property manager)

1. Click "Email Templates" → "Create New Template"
2. Name it "Booking Notification"
3. Use this template:

**Subject:**
```
New Booking Request - {{property_name}} - {{customer_name}}
```

**Content:**
```
NEW BOOKING REQUEST RECEIVED
================================

CUSTOMER DETAILS:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Preferred Contact: {{preferred_contact}}

BOOKING DETAILS:
- Property: {{property_name}}
- Room Type: {{property_type}}
- Check-in Date: {{checkin_date}}
- Check-out Date: {{checkout_date}}
- Duration: {{duration}}
- Number of Guests: {{num_guests}}

SPECIAL REQUESTS:
{{special_requests}}

Submitted on: {{submission_time}}
```

4. Save and note the **Template ID**

#### Template 2: Customer Confirmation

1. Create another template called "Customer Confirmation"
2. Use this template:

**Subject:**
```
Booking Confirmed - {{property_name}}
```

**Content:**
```
Dear {{to_name}},

Thank you for your booking request!

{{message}}

We'll contact you within 24 hours at {{to_email}}.

Best regards,
Premium Rentals Team
```

3. Save and note the **Template ID**

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy this key

### Step 5: Update Environment Variables

Edit your `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_BOOKING_TEMPLATE_ID=booking_template_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=confirmation_template_id_here

#Contact Information
VITE_PROPERTY_PHONE=+1234567890
VITE_PROPERTY_EMAIL=your-email@gmail.com
VITE_PROPERTY_ADDRESS=123 Main Street, City, State 12345
VITE_WHATSAPP_NUMBER=1234567890
```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/Volumes/One Touch/Web Application/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── ImageGallery.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Properties.jsx
│   │   ├── PropertyDetail.jsx
│   │   ├── BookingForm.jsx
│   │   ├── About.jsx
│   │   ├── Amenities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── FAQ.jsx
│   ├── data/               # Sample data
│   │   ├── properties.js
│   │   ├── testimonials.js
│   │   └── amenities.js
│   ├── utils/              # Utility functions
│   │   ├── emailService.js
│   │   └── validation.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── .env                   # Environment variables (create this)
```

## 🎨 Customization Guide

### Update Property Listings

Edit `/src/data/properties.js`:
- Modify existing properties
- Add new properties following the same structure
- Update images, prices, amenities, etc.

### Change Contact Information

Edit your `.env` file:
```env
VITE_PROPERTY_PHONE=your-phone-number
VITE_PROPERTY_EMAIL=your-email@domain.com
VITE_PROPERTY_ADDRESS=your-address
VITE_WHATSAPP_NUMBER=your-whatsapp-number
```

### Update Testimonials

Edit `/src/data/testimonials.js` to add/modify customer reviews

### Modify Amenities

Edit `/src/data/amenities.js` to update available amenities

### Change Color Scheme

Edit `/src/index.css` CSS variables:
```css
--color-beige-light: #F5F5DC;
--color-maroon-primary: #800000;
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Vercel dashboard
6. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variables
8. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Troubleshooting

### Email Not Sending

1. Check that all EmailJS credentials in `.env` are correct
2. Verify your EmailJS service is active
3. Check browser console for errors
4. Ensure you're not hitting EmailJS free tier limits (200 emails/month)

### Images Not Loading

- Verify image URLs in `properties.js` are valid
- Check internet connection
- Use placeholder images for testing

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Change port in vite.config.js
server: {
  port: 3001  // or any other port
}
```

## 📞 Support

For any issues or questions:
- Create an issue in the repository
- Contact: info@premiumrentals.com
- Phone: +1 (234) 567-890

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with React and Vite
- Icons by Lucide React
- Email service by EmailJS
- Images from Unsplash

---

**Made with ❤️ by Antigravity**

Enjoy your rental property website! 🏠✨
