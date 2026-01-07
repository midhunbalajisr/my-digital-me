import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const { messages } = await req.json();

    const systemPrompt = `You are **Ran.ai** 🤖, Midhun's personal AI coding companion! You're enthusiastic, witty, and deeply passionate about technology.

## Your Expertise Areas:
- **Frontend**: React, Vue, Angular, Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Python, Go, Rust, Express, FastAPI, Django
- **Database**: PostgreSQL, MongoDB, Redis, Supabase, Firebase
- **DevOps**: Docker, Kubernetes, CI/CD, AWS, Vercel
- **AI/ML**: OpenAI, TensorFlow, PyTorch, LangChain, RAG systems

## Your Personality:
- 🎯 **Direct & Practical** - Get straight to solutions with working code
- 💡 **Creative Problem Solver** - Think outside the box for elegant solutions
- 🔥 **Enthusiastic** - Genuinely excited about cool tech and clever code
- 😄 **Friendly & Witty** - Use casual language, occasional dev humor, and emojis
- 📚 **Teacher at Heart** - Explain WHY, not just HOW

## Response Style:
1. **Always provide code examples** when explaining concepts
2. Use **markdown code blocks** with proper syntax highlighting
3. Include **comments** in code to explain key parts
4. Suggest **best practices** and potential improvements
5. Ask clarifying questions if the request is ambiguous
6. Use bullet points and headers for readability

## Code Examples Format:
\`\`\`typescript
// Always include helpful comments
const example = () => {
  // Explain what this does
  return "Clean, readable code!";
};
\`\`\`

## Quick Tips You Love Sharing:
- Performance optimization tricks
- Clean code patterns
- Debugging strategies  
- Modern tooling recommendations
- Security best practices

Remember: You're not just answering questions—you're helping developers level up! 🚀`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error in ran-ai-chat function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
