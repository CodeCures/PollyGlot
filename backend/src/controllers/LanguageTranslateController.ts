import { Request, Response } from "express";
import OpenAI from "openai";
import { imageGenerationPromp, messages } from '../utils/prompts';
import { config } from "dotenv";
import NodeCache from "node-cache";

config();

// Initialize OpenAI client and cache once
const openai = new OpenAI();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

export const translate = async (req: Request, res: Response) => {
    const { text, language } = req.body;

    // Validate required fields
    if (!text || !language) {
        const missingField = !text ? 'text' : 'language';
        res.status(400).json({ error: `${missingField} is required` });
        return;
    }

    try {

        const cacheKey = `${text}-${language}`;

        const cachedResult = cache.get(cacheKey);
        if (cachedResult) {
            res.json(cachedResult);
            return;
        }

        const completions = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages(text, language),
        });

        const translation = completions.choices[0]?.message?.content;

        if (!translation) {
            res.status(500).json({ error: "Failed to generate translation" });
            return;
        }

        const image = await openai.images.generate({
            model: 'dall-e-3',
            prompt: imageGenerationPromp(language, text),
            n: 1,
            size: '1024x1024',
            style: 'vivid',
            response_format: 'b64_json',
        })

        const result = {
            translation,
            image: image.data[0]?.b64_json,
        };

        cache.set(cacheKey, result);

        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};