import { fastify } from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

app.get("/prompts", async () => {
    const prompt = await prisma.prompt.findMany();

    return prompt;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running on port 3333');
});

