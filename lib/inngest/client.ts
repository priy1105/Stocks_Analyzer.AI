import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'Stocks_Analyzer.ai',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})
