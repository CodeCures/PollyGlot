import { Request, Response } from "express";
import OpenAI from "openai";
import { messages } from '../utils/prompts'
import { config } from "dotenv";

config();

export const translate = async (req: Request, res: Response) => {
    const { text, language } = req.body;

    // Validate required fields
    if (!text || !language) {
        const missingField = !text ? 'text' : 'language';
        res.status(400).json({ error: `${missingField} is required` });
        return;
    }

    try {
        const openai = new OpenAI();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages(text, language)
        });

        res.json({ translation: completion.choices[0].message.content })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}   