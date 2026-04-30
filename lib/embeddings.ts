import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const region = process.env.AWS_REGION || "us-east-1";

const embeddingClient = new BedrockRuntimeClient({
    region,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});

/** AWS Bedrock Titan Text Embeddings V2 model ID */
const TITAN_EMBED_MODEL = "amazon.titan-embed-text-v2:0";

const MOCK_MODE =
    process.env.MOCK_MODE === "true" || !process.env.AWS_ACCESS_KEY_ID;

/**
 * Generate a 1024-dimension embedding vector for a text string using
 * AWS Bedrock Titan Text Embeddings V2.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
    if (!text.trim()) return [];

    if (MOCK_MODE) {
        // Return a deterministic pseudo-random vector for demo/tests
        return mockEmbedding(text);
    }

    const body = JSON.stringify({ inputText: text });

    const command = new InvokeModelCommand({
        modelId: TITAN_EMBED_MODEL,
        body: new TextEncoder().encode(body),
        accept: "application/json",
        contentType: "application/json",
    });

    const response = await embeddingClient.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    return result.embedding as number[];
}

/**
 * Compute cosine similarity between two equal-length vectors.
 * Returns a value in [-1, 1] where 1 is identical.
 */
export function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length === 0 || a.length !== b.length) return 0;
    let dot = 0;
    let magA = 0;
    let magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }
    const denom = Math.sqrt(magA) * Math.sqrt(magB);
    return denom === 0 ? 0 : dot / denom;
}

/** Build a combined text for embedding from complaint fields */
export function buildComplaintText(category: string, description: string): string {
    return `${category}: ${description}`.slice(0, 2048);
}

// ---------------------------------------------------------------------------
// Mock helpers (used when AWS credentials are absent)
// ---------------------------------------------------------------------------

function mockEmbedding(text: string): number[] {
    // 32-dim vector seeded from char codes – lightweight but deterministic
    const dim = 32;
    const vec: number[] = new Array(dim).fill(0);
    for (let i = 0; i < text.length; i++) {
        vec[i % dim] += text.charCodeAt(i) / 1000;
    }
    // Normalise to unit vector
    const mag = Math.sqrt(vec.reduce((s, v) => s + v * v, 0)) || 1;
    return vec.map((v) => v / mag);
}
