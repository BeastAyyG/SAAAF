"use server";

import { invokeBedrockText } from "@/lib/bedrock";

export async function translateAction(text: string): Promise<string> {
    if (!text || !text.trim()) return "";

    try {
        const prompt = `Translate the following Hindi text to English. If the text is already English, return it as is. Strictly return ONLY the translated text, no preamble or quotes.

Text: "${text}"`;

        const result = await invokeBedrockText(prompt);
        return result.trim();
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
}
