import { Configuration, OpenAIApi } from 'openai';

export async function getEmbedding(text) {
  const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(config);
  const response = await openai.createEmbedding({
    model: 'text-embedding-ada-002',
    input: text
  });
  return response.data.data[0].embedding;
}
