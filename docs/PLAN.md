# Plan: Deployment & Demo Data 🚀

## Overview
Prepare **SAAAF** for Hackathon submission by seeding realistic demo data (reports, map markers) and deploying the full application to a live URL.

## Goals
1.  **Populate Database**: Fill the empty map with ~20 realistic reports (potholes, garbage, fire) around a central Indian location (e.g., Connaught Place, New Delhi).
2.  **Deploy App**: Deploy the full Next.js application to Vercel.
3.  **Verify**: Ensure the deployed link works and shows the demo data.

## Phase 1: Demo Data Generation (Seeding)
**Agent**: `frontend-specialist` (Node script)

- [ ] **Task 1.1: Create Seed Script**
    -   **File**: `scripts/seed_demo_reports.js`
    -   **Logic**:
        -   Connect to Supabase.
        -   Array of mock incidents (Title, Description, Category, Severity, Lat/Lng).
        -   Insert into `reports` table.
        -   Use placeholder images for evidence.
    -   **Verify**: Run script, check dashboard map.

## Phase 2: Deployment Preparation
**Agent**: `devops-engineer`

- [ ] **Task 2.1: Check Build Configuration**
    -   **File**: `package.json`, `next.config.ts`.
    -   **Action**: Ensure `npm run build` works without AWS keys (graceful failure or mock mode).
    -   **Note**: We will use **MOCK MODE** for the build if keys aren't present to prevent build failures.

## Phase 3: Deployment
**Agent**: `devops-engineer`

- [ ] **Task 3.1: Vercel Deploy**
    -   **Command**: `npx vercel --prod`.
    -   **Env Vars**: Need to prompt user or set `MOCK_MODE=true` for demo purposes if real keys are missing.

## Phase 4: Verification
- [ ] **Security**: Check for exposed secrets in client bundles.
- [ ] **Functional**: Open deployment URL, see map pins.
