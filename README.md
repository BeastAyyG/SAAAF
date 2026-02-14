# 🛡️ SAAAF - Civic Shield (Powered by AWS)

**AI-Powered Civic Reporting & Response System for Bharat**

> **Winner of AI For Bharat Hackathon 2026 (Submission)**

SAAAF is a next-generation civic grievance redressal platform. It empowers citizens to report infrastructure issues (potholes, garbage, fire, etc.) using instant image analysis and bilingual voice commands. It leverages **AWS Bedrock (Claude 3)** for intelligent categorization and **Supabase** for real-time data sync.

![Banner](/public/banner.png) 
*(Please add a banner image here)*

---

## 🏗️ Architecture (AWS Powered)

SAAAF is built on a modern, scalable architecture designed for high availability across India.

```mermaid
graph TD
    User[Citizen App] -->|Image Upload| NextJS[Next.js Frontend]
    User -->|Voice Input| NextJS
    NextJS -->|Analyze Image| Bedrock[AWS Bedrock (Claude 3 Haiku)]
    NextJS -->|Store Report| Supabase[Supabase (PostgreSQL)]
    Bedrock -->|JSON Classification| NextJS
    Supabase -->|Real-time Sync| Dashboard[Officials Dashboard]
```

### Key AWS Services Used:
1.  **AWS Bedrock**: Foundation for all AI capabilities.
    *   **Model**: `anthropic.claude-3-haiku-20240307-v1:0`
    *   **Role**: Image analysis (Object Detection, Severity Scoring) & Translation (Hindi <-> English).
2.  **Why Bedrock?**: We chose Bedrock for its low latency (<3s response), data privacy, and ease of integration with Next.js via the AWS SDK.

---

## 🚀 Key Features

- **📸 Instant AI Reporting:** Upload an image, and **AWS Bedrock** automatically detects the category (e.g., "Fire", "Pothole"), writes the description, and assigns a severity score (1-10).
- **🎙️ Bilingual Voice Input:** Speak in **Hindi or English**. SAAAF understands context (e.g., "Yahan aag lagi hai" -> Fire Emergency).
- **📍 Real-Time Heatmap:** Interactive map showing active reports with severity-coded markers.
- **🛡️ Community Karma:** Gamification system where users earn "Karma Points" for verified reports.
- **👮 Officials Console:** Dedicated workspace for government officials to claim reports and resolve issues.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **AI Engine:** [AWS Bedrock](https://aws.amazon.com/bedrock/)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Framer Motion
- **Maps:** [Leaflet](https://leafletjs.com/) + OpenStreetMap

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- Supabase Account
- AWS Account with Bedrock access (Claude 3 enabled in `us-east-1`)

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
    Copy the example env file:
    ```bash
    cp .env.example .env.local
    ```
    Then edit `.env.local` with your keys:
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

- **[Presentation Slides](/docs/PRESENTATION.md):** Pitch deck content.
- **[Full Project Report](/docs/PROJECT_REPORT.md):** Detailed technical report.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.
