const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
require('dotenv').config(); // Carga las variables de entorno

// Configuración de OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Asegúrate de que esta clave esté en tu archivo .env
});

const app = express();
app.use(bodyParser.json());

// Endpoint de chat
app.post('/chat', async (req, res) => {
    try {
        const { nombre, genero, edad, ocupacion, sentimientoInicial, mensaje } = req;
        const body = `Me brindas solo mensajes positivos soy ${nombre} mi genero es ${genero} tengo ${edad} de edad y me dedico a ${ocupacion} me siento ${sentimientoInicial} y te tengo que decir algo ${mensaje}`;
        const userMessage = body;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        });

        const reply = response.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error("Error al llamar a la API de OpenAI:", error.message);
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});