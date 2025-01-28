const axios = require('axios');
const textToSpeech = async (text) => {
  try {
    const { nombre, genero, edad, ocupacion, motivacionPara, mensaje } = text;
    const response = await axios.post(
      API_URL,
      {
        text: `Necesito una meditación, soy ${nombre} mi genero es ${genero} tengo ${edad} de edad y me dedico a ${ocupacion} y quiero una meditación para ${motivacionPara}`,
        voice: 'en_us_male', // Voz de audio
        stability: 0.75,
        similarity: 0.75
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    );
    console.log('Respuesta recibida:', response.data);
  } catch (error) {
    console.error('Error al generar la voz:', error);
  }
};

textToSpeech('Hola, esta es una prueba.');