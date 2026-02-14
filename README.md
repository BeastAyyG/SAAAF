# 🛡️ SAAAF - Civic Shield

**AI-Powered Civic Reporting & Response System**

SAAAF is a next-generation civic grievance redressal platform. It empowers citizens to report infrastructure issues (potholes, garbage, fire, etc.) using instant image analysis and bilingual voice commands. It leverages **AWS Bedrock (Claude 3)** for intelligent categorization and **Supabase** for real-time data sync.

![Banner](/public/banner.png) 
*(Please add a banner image here)*

---

## 🚀 Key Features

- **📸 AI-Powered Reporting:** Upload an image, and **AWS Bedrock** AI automatically detects the category (e.g., "Fire", "Pothole"), writes the description, and assigns a severity score (1-10).
- **🎙️ Bilingual Voice Input:** Speak in **Hindi or English** to report issues. SAAAF understands context (e.g., "Yahan aag lagi hai" -> Fire Emergency).
- **📍 Real-Time Map:** Interactive heatmap showing active reports with severity-coded markers.
- **💬 WhatsApp Integration:** Floating action button for instant reporting via WhatsApp.
- **🛡️ Community Defense:** Gamification system where users earn "Karma Points" for verified reports. Upvoting system for community validation.
- **👮 Officials Console:** Dedicated workspace for government officials to claim reports, post updates, and resolve issues with geospatial filtering.
- **🌓 Dark Mode UI:** Premium, glassmorphism-inspired design optimized for modern devices.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **AI Model:** [AWS Bedrock](https://aws.amazon.com/bedrock/) (Claude 3 Haiku)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Framer Motion
- **Maps:** [Leaflet](https://leafletjs.com/) + OpenStreetMap
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
/app          # Next.js App Router pages
/components   # Reusable UI components
  /feed       # Feed and Report Card components
  /map        # Map visualization components
  /ui         # Design system (Buttons, Inputs, etc.)
/lib          # Utilities, Hooks, and API configurations
/public       # Static assets
/docs         # Project Documentation
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- Supabase Account
- AWS Account with Bedrock access (Claude 3 enabled in us-east-1)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/BeastAyyG/SAAAF.git
    cd SAAAF
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    AWS_ACCESS_KEY_ID=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key
    AWS_REGION=us-east-1
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Documentation

- **[Presentation Slides](/docs/PRESENTATION.md):** Content for the project presentation.
- **[Full Project Report](/docs/PROJECT_REPORT.md):** Detailed architectural and functional report.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.
