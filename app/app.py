import openai
import os
from flask import Flask, request, jsonify

app = Flask(__name__)

# Configura tu clave de API (asegúrate de que esté segura)
# Clave API KEY

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message", "")

        # Usando la interfaz actualizada de la API
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": user_message}
            ]
        )

        # Obtener la respuesta generada por el modelo
        reply = response['choices'][0]['message']['content']
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)