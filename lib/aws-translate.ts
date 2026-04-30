import {
    TranslateClient,
    TranslateTextCommand,
    type TranslateTextCommandInput,
} from "@aws-sdk/client-translate";

const region = process.env.AWS_REGION || "us-east-1";

export const translateClient = new TranslateClient({
    region,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});

/** All supported language codes for Indian languages + English */
export const SUPPORTED_LANGUAGES = {
    en: "English",
    hi: "Hindi",
    bn: "Bengali",
    ta: "Tamil",
    te: "Telugu",
    mr: "Marathi",
    gu: "Gujarati",
    kn: "Kannada",
    ml: "Malayalam",
    pa: "Punjabi",
    or: "Odia",
    ur: "Urdu",
} as const;

export type SupportedLanguageCode = keyof typeof SUPPORTED_LANGUAGES;

const MOCK_MODE =
    process.env.MOCK_MODE === "true" || !process.env.AWS_ACCESS_KEY_ID;

/**
 * Translate text using AWS Translate.
 * Returns the original text when AWS credentials are unavailable.
 */
export async function translateText(
    text: string,
    targetLang: SupportedLanguageCode,
    sourceLang: SupportedLanguageCode | "auto" = "auto"
): Promise<string> {
    if (!text.trim()) return text;

    if (MOCK_MODE) {
        console.log(`[MOCK] Translate "${text.substring(0, 40)}..." → ${targetLang}`);
        return text;
    }

    try {
        const params: TranslateTextCommandInput = {
            Text: text,
            SourceLanguageCode: sourceLang === "auto" ? "auto" : sourceLang,
            TargetLanguageCode: targetLang,
        };

        const command = new TranslateTextCommand(params);
        const response = await translateClient.send(command);
        return response.TranslatedText ?? text;
    } catch (error) {
        console.error("AWS Translate error:", error);
        return text;
    }
}

/**
 * Detect the language of a text snippet and translate it to English.
 * Useful for normalising multilingual user input before storage.
 */
export async function translateToEnglish(text: string): Promise<string> {
    return translateText(text, "en", "auto");
}

/**
 * Translate an English string into a target Indian language.
 */
export async function translateFromEnglish(
    text: string,
    targetLang: SupportedLanguageCode
): Promise<string> {
    if (targetLang === "en") return text;
    return translateText(text, targetLang, "en");
}
