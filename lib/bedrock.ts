import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const region = process.env.AWS_REGION || "us-east-1";

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.warn("⚠️ Missing AWS credentials. AI features will run in MOCK mode.");
}

export const bedrockClient = new BedrockRuntimeClient({
    region,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});

export const MODEL_ID = "anthropic.claude-3-haiku-20240307-v1:0";

export async function invokeBedrockText(prompt: string): Promise<string> {
    const body = JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1024,
        messages: [{
            role: "user",
            content: [{ type: "text", text: prompt }]
        }]
    });

    const command = new InvokeModelCommand({
        modelId: MODEL_ID,
        body: new TextEncoder().encode(body),
        accept: "application/json",
        contentType: "application/json",
    });

    const response = await bedrockClient.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    return responseBody.content[0].text;
}

export async function invokeBedrockWithImage(prompt: string, base64Image: string, mimeType: string): Promise<string> {
    const body = JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1024,
        messages: [{
            role: "user",
            content: [
                {
                    type: "image",
                    source: {
                        type: "base64",
                        media_type: mimeType,
                        data: base64Image
                    }
                },
                { type: "text", text: prompt }
            ]
        }]
    });

    const command = new InvokeModelCommand({
        modelId: MODEL_ID,
        body: new TextEncoder().encode(body),
        accept: "application/json",
        contentType: "application/json",
    });

    const response = await bedrockClient.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    return responseBody.content[0].text;
}
