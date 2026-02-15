"use server";

import { invokeBedrockWithImage } from "@/lib/bedrock";
import { type AnalysisResult } from "@/lib/types";

// MOCK MODE: Auto-enable if AWS keys are missing
const MOCK_MODE = process.env.MOCK_MODE === "true" || !process.env.AWS_ACCESS_KEY_ID;
const MAX_RETRIES = 3;

function cleanJsonString(text: string): string {
    // Remove markdown code blocks if present
    if (text.includes("```json")) {
        text = text.split("```json")[1].split("```")[0].trim();
    } else if (text.includes("```")) {
        text = text.split("```")[1].split("```")[0].trim();
    }
    return text.trim();
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function analyzeImageAction(formData: FormData): Promise<AnalysisResult> {
    // Check if we should run in mock mode
    if (MOCK_MODE) {
        console.log("🔧 MOCK MODE: Returning simulated analysis");
        await delay(1500);
        return {
            category: "Pothole",
            severityScore: 7,
            description: "[MOCK DEMO] Large Pothole detected on asphalt road. High risk to vehicles.",
            priority: "HIGH",
            isEmergency: false
        } as AnalysisResult;
    }

    const file = formData.get("image") as File;
    if (!file) {
        throw new Error("No image provided");
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");

    const prompt = `You are an expert Civic Safety Analyst for an emergency reporting system.
    Analyze this image and classify the civic issue or emergency.

    CRITICAL EMERGENCY CATEGORIES (severity 9-10):
    - Stampede, crowd crush, mass panic
    - Earthquake damage, building collapse
    - Fire, explosion, gas leak
    - Flood, tsunami, landslide
    - Terror attack, active shooter
    - Major accident with casualties
    - Infrastructure collapse (bridge, building)

    HIGH PRIORITY CATEGORIES (severity 7-8):
    - Major road blockage, traffic accident
    - Downed power lines, electrical hazard
    - Water main break, flooding street
    - Dangerous construction site
    - Aggressive animals, wildlife threat

    STANDARD CATEGORIES (severity 1-6):
    - Pothole, road damage
    - Garbage overflow, illegal dumping
    - Broken streetlight
    - Water leakage
    - Traffic violation
    - Vandalism, graffiti
    
    Return strictly JSON with no markdown formatting:
    {
       "category": "String describing the issue (e.g., 'Stampede', 'Earthquake', 'Fire', 'Pothole', 'Garbage')",
       "severityScore": number (1-10, use 9-10 for CRITICAL emergencies),
       "description": "Technical description of the situation and recommended action",
       "priority": "CRITICAL" | "HIGH" | "NORMAL" | "LOW",
       "isEmergency": boolean (true for severity >= 9)
    }`;

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`AWS Bedrock API attempt ${attempt}/${MAX_RETRIES}...`);

            const text = await invokeBedrockWithImage(prompt, base64Data, file.type);
            console.log("Bedrock Success:", text.substring(0, 100) + "...");

            const cleaned = cleanJsonString(text);
            const data = JSON.parse(cleaned);
            return data as AnalysisResult;

        } catch (error: unknown) {
            lastError = error as Error;
            const isThrottled = lastError.message?.includes("ThrottlingException");
            console.error(`Attempt ${attempt} failed:`, lastError.message);

            if (attempt < MAX_RETRIES) {
                const waitTime = isThrottled ? attempt * 15000 : attempt * 3000;
                console.log(`${isThrottled ? "⚠️ Throttled! " : ""}Retrying in ${waitTime / 1000}s...`);
                await delay(waitTime);
            }
        }
    }

    throw new Error(`AI Analysis Failed after ${MAX_RETRIES} attempts: ${lastError?.message}`);
}
