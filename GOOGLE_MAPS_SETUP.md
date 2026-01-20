# Google Maps API Setup Guide

## How to Get Your Google Maps API Key

Follow these steps to get a Google Maps API key for your website:

### Step 1: Create a Google Cloud Project

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Sign in with your Gmail account (padmavathicomplex@gmail.com)
3. Click on the project dropdown at the top
4. Click **"New Project"**
5. Enter project name: **"Padmavathi Complex Website"**
6. Click **"Create"**

### Step 2: Enable Google Maps JavaScript API

1. In the Google Cloud Console, go to **"APIs & Services" > "Library"**
2. Search for **"Maps JavaScript API"**
3. Click on it and click **"Enable"**
4. Also enable **"Places API"** (search and enable it the same way)

### Step 3: Create API Key

1. Go to **"APIs & Services" > "Credentials"**
2. Click **"+ CREATE CREDENTIALS"**
3. Select **"API key"**
4. Your API key will be created and displayed
5. **Copy this key** - you'll need it!

### Step 4: Restrict Your API Key (IMPORTANT for Security!)

1. Click on your newly created API key to edit it
2. Under **"Application restrictions"**:
   - Select **"HTTP referrers (websites)"**
   - Click **"Add an item"**
   - Add: `padmavathicomplex.com/*`
   - Add: `*.padmavathicomplex.com/*`
   - Add: `localhost:*` (for local development)
   
3. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check:
     - ✅ Maps JavaScript API
     - ✅ Places API
   
4. Click **"Save"**

### Step 5: Add API Key to Your Website

1. Open your `.env` file
2. Replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` with your actual API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyC...your-actual-key-here
   ```
3. Save the file
4. **Restart your development server** (stop and run `npm run dev` again)

### Step 6: Set Up Billing (Required!)

⚠️ **IMPORTANT**: Google Maps requires a billing account, but offers **$200 free credit per month**.

1. In Google Cloud Console, go to **"Billing"**
2. Click **"Link a billing account"** or **"Create billing account"**
3. Enter your credit card details (required for verification)
4. **Don't worry**: You get $200 free credit every month
5. For a small website like yours, you'll likely stay within the free tier

**Monthly Free Usage**:
- 28,000 map loads per month (FREE)
- For your website traffic, this should be more than enough!

### Step 7: Update Map Coordinates (Optional but Recommended)

To show the exact location of Padmavathi Complex:

1. Go to Google Maps: https://maps.google.com
2. Search for your exact address or right-click on your property location
3. Click on the coordinates shown (e.g., "10.8846093, 79.70213729999999")
4. Copy the coordinates
5. Update in `src/components/LocationMap.jsx`:
   ```javascript
   const center = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
   ```

### Troubleshooting

**Map not showing?**
- Check if API key is correctly added to `.env`
- Make sure you restarted the dev server after adding the key
- Check browser console for errors (F12 > Console tab)
- Verify billing is enabled in Google Cloud Console

**"This page can't load Google Maps correctly" error?**
- Enable billing in Google Cloud Console
- Make sure Maps JavaScript API is enabled
- Check API key restrictions

**Map shows but wrong location?**
- Update the coordinates in `LocationMap.jsx` with exact location

---

## Cost Estimate

For a small business website like Padmavathi Complex:

- **Expected monthly cost**: ₹0 (FREE)
- **Reason**: You get $200 free credit, which covers ~28,000 map loads
- **Your expected usage**: Probably 100-500 map loads per month
- **Conclusion**: You'll stay well within the free tier

---

## Alternative: Embedded Google Maps (No API Key Needed)

If you don't want to set up billing, you can use a simple embedded map instead:

1. Go to Google Maps: https://maps.google.com
2. Search for your location
3. Click **"Share"** > **"Embed a map"**
4. Copy the iframe code
5. Let me know and I'll add it to your Contact page

---

**Need Help?**
If you face any issues setting up the API key, let me know and I can help troubleshoot!
