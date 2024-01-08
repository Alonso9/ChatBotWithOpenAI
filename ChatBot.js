import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}

main();