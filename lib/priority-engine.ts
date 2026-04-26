import { invokeBedrockText, invokeBedrockWithImage } from "@/lib/bedrock";
import type { ReportPriority } from "@/lib/types";

export type PriorityScore = {
    priority: ReportPriority;
    urgencyLevel: "critical" | "high" | "medium" | "low";
    score: number; // 0–100
    reasoning: string;
};

const MOCK_MODE =
    process.env.MOCK_MODE === "true" || !process.env.AWS_ACCESS_KEY_ID;

/** Maps a numeric severity + text/image to a structured priority score */
export async function computePriorityScore(
    description: string,
    category: string,
    severityScore: number,
    base64Image?: string,
    mimeType?: string
): Promise<PriorityScore> {
    if (MOCK_MODE) {
        return mockPriority(severityScore);
    }

    const prompt = `You are an AI civic safety classifier. Given this complaint, return a JSON priority score.

Category: ${category}
Description: ${description}
Initial severity (1–10): ${severityScore}

Classify urgency by considering:
- Immediate danger to life or property → CRITICAL (score 80–100)
- Significant public safety risk → HIGH (score 60–79)
- Standard civic issue → MEDIUM (score 30–59)
- Minor nuisance → LOW (score 0–29)

Return strictly JSON:
{
  "priority": "URGENT" | "HIGH" | "NORMAL" | "LOW",
  "urgencyLevel": "critical" | "high" | "medium" | "low",
  "score": number,
  "reasoning": "one sentence explanation"
}`;

    try {
        let text: string;
        if (base64Image && mimeType) {
            text = await invokeBedrockWithImage(prompt, base64Image, mimeType);
        } else {
            text = await invokeBedrockText(prompt);
        }
        const cleaned = text.includes("```json")
            ? text.split("```json")[1].split("```")[0].trim()
            : text.trim();
        return JSON.parse(cleaned) as PriorityScore;
    } catch (err) {
        console.error("Priority engine error:", err);
        return mockPriority(severityScore);
    }
}

function mockPriority(severityScore: number): PriorityScore {
    if (severityScore >= 9) {
        return { priority: "URGENT", urgencyLevel: "critical", score: 95, reasoning: "Critical emergency detected." };
    }
    if (severityScore >= 7) {
        return { priority: "HIGH", urgencyLevel: "high", score: 70, reasoning: "High severity civic issue." };
    }
    if (severityScore >= 4) {
        return { priority: "NORMAL", urgencyLevel: "medium", score: 45, reasoning: "Standard civic complaint." };
    }
    return { priority: "LOW", urgencyLevel: "low", score: 15, reasoning: "Minor issue." };
}
