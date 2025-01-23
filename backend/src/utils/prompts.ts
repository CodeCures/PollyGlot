import { ChatCompletionMessageParam } from "openai/resources";

export const messages = (text: string, language: string): ChatCompletionMessageParam[] => {
    return [
        { role: "system", content: "you are a polyglot language translator, you have excellent understand of French, Spanish and Japanese language. you will accept input from users in english and translate to their selected language. You are expected to be formal in your translation. You are to return only the translated text and don't add any other things" },
        {
            role: "user",
            content: `input: ${text}; language: ${language}`,
        },
    ]
}

export const imageGenerationPromp = (language: string, text: string) => {
    return `A very polite ${language} person (male or female) saying these words "${text}"`
}