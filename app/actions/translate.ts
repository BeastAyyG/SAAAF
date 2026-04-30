"use server";

import { translateToEnglish, translateFromEnglish, type SupportedLanguageCode } from "@/lib/aws-translate";

/** Translate any Indian-language text to English (for normalisation before storage) */
export async function translateAction(text: string): Promise<string> {
    if (!text || !text.trim()) return "";

    try {
        return await translateToEnglish(text);
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
}

/** Translate English text into the specified target Indian language */
export async function translateToLanguageAction(
    text: string,
    targetLang: SupportedLanguageCode
): Promise<string> {
    if (!text || !text.trim()) return "";

    try {
        return await translateFromEnglish(text, targetLang);
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
}
