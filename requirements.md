# SAAAF - Project Requirements Document

> Generated for AI For Bharat Hackathon 2026

## 1. Project Overview
**Project Name:** SAAAF (Civic Shield)
**Tagline:** Protecting Bharat with AI & AWS Bedrock.
**Problem Statement:** Civic reporting in India is fragmented, slow, and manual. Citizens struggle to report issues like potholes or garbage effectively, and officials lack real-time data for prioritization.
**Solution:** An AI-powered Progressive Web App (PWA) that allows citizens to report issues via image or voice. AWS Bedrock analyzes severity instantly, and Supabase syncs data to officials in real-time.

## 2. User Personas
### 2.1 The Concerned Citizen (Aarav)
- **Goal:** Quickly report a pothole on his commute.
- **Pain Point:** Typing long descriptions, finding the right category.
- **Need:** "Expose photo -> AI fills details -> Submit" workflow.

### 2.2 The Municipal Official (Priya)
- **Goal:** Identify high-priority hazards (e.g., Fire, Open Manhole) first.
- **Pain Point:** Spam reports, unclear descriptions.
- **Need:** AI-verified severity scores and a heatmap of critical zones.

## 3. Functional Requirements

### 3.1 AI Reporting Core
- **FR-01:** System MUST accept image uploads (Camera/Gallery).
- **FR-02:** System MUST analyze images using **AWS Bedrock (Claude 3 Haiku)** to detect:
    - Issue Category (Pothole, Garbage, Fire, etc.)
    - Severity Score (1-10)
    - Description
- **FR-03:** System MUST support Bilingual Voice Input (Hindi/English) for accessibility.

### 3.2 Real-Time Dashboard
- **FR-04:** System MUST display reports on an interactive map (Leaflet).
- **FR-05:** Map markers MUST be color-coded by severity (Red=Critical, Yellow=High, Green=Normal).
- **FR-06:** Dashboard MUST update in real-time without page refresh.

### 3.3 Gamification & Community
- **FR-07:** Users MUST earn "Karma Points" for verified reports.
- **FR-08:** Community members MUST be able to "Upvote" reports to increase visibility.

### 3.4 Official console
- **FR-09:** Officials MUST be able to view a prioritized list of reports.
- **FR-10:** Officials MUST be able to post status updates (e.g., "Work in Progress").

## 4. Technical Requirements

### 4.1 Performance
- **TR-01:** AI Analysis time < 3 seconds (using AWS Bedrock Haiku).
- **TR-02:** Application load time < 1.5 seconds (Next.js Optimization).

### 4.2 Security
- **TR-03:** All API keys (AWS, Supabase) MUST be stored server-side.
- **TR-04:** User authentication via Supabase Auth (or Mock for Demo).

### 4.3 Scalability
- **TR-05:** Database MUST handle concurrent writes during peak reporting times.
- **TR-06:** Storage bucket MUST support image resizing/optimization.

## 5. Deployment Requirements
- **DR-01:** Hosted on Vercel (Frontend/API).
- **DR-02:** Database on Supabase Cloud.
- **DR-03:** AI Model hosted on AWS Bedrock (us-east-1).

---
*Note: This document fulfills the hackathon requirement for `requirements.md`.*
