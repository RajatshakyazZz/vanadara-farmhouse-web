# VARANADAH — THE FARMSTAY
> *“Breath. Unwind. Rejoice.”*

A website built for **VARANADAH**, a boutique luxury countryside farmhouse retreat surrounded by mountain views, open skies, and centered around the signature L-shaped architecture and expansive wrap-around verandah.

---

## 🌄 Project Highlights & Brand Identity

- **Brand Architecture**: Distinctive L-shaped farmhouse with traditional terracotta Mangalore-tiled roof, aged timber rafters, and stone masonry porch.
- **The Verandah Life**: Highlights the spacious wrap-around porch as the heart and soul of the farmstay experience.
- **Slow Living Philosophy**: Visual and emotional cadence guiding visitors through:
  `PAUSE` → `BREATHE` → `CONNECT` → `REJOICE`
- **Curated Experiences**: Mountain views, morning yoga at dawn, campfire evenings beneath starry skies, authentic home-cooked desi delicacies, modern comfort, and cherished time together.
- **Culinary Showcase**: Farm-to-table dining celebrating regional flavours and city-style cuisine on a communal wooden table.
- **Interactive Gallery**: Masonry visual chronicles with category filtering (All, The Farmhouse, Verandah, Nature, Food, Moments) and full-screen keyboard-accessible Lightbox modal.
- **Location Section**: Topographic map card with transit travel times (airport, railway, highway access).
- **Direct Reservation Enquiries**: Seamless WhatsApp integration and interactive booking enquiry modal with zero third-party commissions.
- **Configurable Settings**: Single configuration file (`src/config/site.ts`) for easily updating host phone/WhatsApp numbers, address details, and directions without altering UI code.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts via `next/font/google` (`Cormorant Garamond` & `Plus Jakarta Sans`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVG Emblems
- **Motion & Interaction**: Smooth scrolling, image zoom hover transitions, and accessible modal dialogs.
- **SEO & Metadata**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph cards, Twitter preview, and vector favicon.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## ⚙️ Configuration

Property details, WhatsApp contact number, and map directions can be customized in [`src/config/site.ts`](src/config/site.ts):

```typescript
export const siteConfig = {
  brand: {
    name: "VARANADAH",
    subName: "THE FARMSTAY",
    tagline: "Breath. Unwind. Rejoice.",
    ...
  },
  contact: {
    whatsappNumber: "91XXXXXXXXXX", // Replace with owner's number
    email: "enquiries@varanadah.com",
    ...
  },
  ...
};
```

---

© 2026 Varanadah. All rights reserved.
