// Objeto con preguntas y respuestas predefinidas
const qa = {
    "¿cuál es tu nombre?": "Mi nombre es Serena IA, estoy aquí para asistirte.",
    "estoy feliz": "¡Qué alegría escuchar que te sientes feliz! La felicidad es un estado maravilloso. 😄\n\n¿Te gustaría compartir qué te hace sentir tan bien hoy? O si prefieres, podemos explorar algunas maneras de mantener ese ánimo positivo.",
    "me siento triste": "Veo que no te sientes tan bien en este momento, y está bien sentirse así de vez en cuando. 😔\n\nEstoy aquí para escucharte y apoyarte. Si quieres, podemos hablar sobre lo que te preocupa, o incluso podemos explorar algunas maneras de sentirte un poco mejor. \n\n¿Quieres platicarme porque te sientes así?",
    "frustrado": "Lamento que estés sintiendo frustración, entiendo lo difícil que puede ser cuando las cosas no van como esperábamos. 😔\n\nPero no te preocupes, estoy aquí para ayudarte a superar este momento. Si quieres, podemos hablar sobre lo que te está frustrando o incluso podemos probar algunas estrategias para liberar esa tensión y sentirte más tranquilo/a. \n\n¿Te gustaría intentar algo ahora?",
    "charlar": "Estoy aquí para escucharte y ayudarte a sentirte mejor. ¿Cómo te sientes hoy? 😇 \n\nSi te gustaría, podemos hablar sobre cualquier cosa que esté en tu mente, sin apuros ni juicios. \n\nEstoy aquí para acompañarte.",
    "estoy así porque perdí mi trabajo": "Lamento mucho escuchar que has perdido tu trabajo. \n\nSé que eso puede ser una experiencia difícil y abrumadora. Es normal sentirse triste o inseguro en momentos como este, pero quiero que sepas que no estás solo en esto. A veces, el cierre de un capítulo puede abrir nuevas oportunidades que aún no ves. \n\nSi necesitas hablar o explorar ideas para avanzar, estoy aquí para ayudarte en lo que necesites. Juntos podemos encontrar formas de superar esta situación y dar pequeños pasos hacia un futuro lleno de nuevas posibilidades.",
    "si, ayudame": "Claro, estoy aquí para ayudarte. \n\nPodemos comenzar con algo pequeño, como hablar sobre cómo te estás sintiendo o explorar algunas ideas para darle forma a tu próximo paso. \n\nSi te parece bien, también puedo guiarte a través de una breve meditación para relajarte y calmar tu mente, o si prefieres, podemos buscar juntos recursos que te ayuden a planificar tu siguiente movimiento en tu carrera. \n\n¿Cómo te gustaría comenzar?",
    "gracias": "Gracias por compartir tus pensamientos conmigo hoy. \n\nRecuerda que está bien tomarse el tiempo que necesites para procesar lo que sientes. Estás haciendo un gran trabajo en cuidar de ti mismo. \n\nSi alguna vez necesitas hablar o explorar más, estaré aquí para apoyarte. \n\nNo estás solo/a en esto. Cuídate mucho y que tengas un día lleno de calma y bienestar.",
    "estoy feliz porque ya voy a terminar el diplomado": "¡Felicitaciones! Terminar un diplomado es un gran logro y una muestra de tu dedicación y esfuerzo. 🎉\n\nDisfruta este momento y valora lo que has aprendido durante el proceso. Si quieres, podemos hablar sobre cómo este logro impacta tus planes futuros o explorar nuevas metas que puedas plantearte ahora que estás a punto de cerrar esta etapa con éxito.",
    "gracias, me motiva a trabajar mas en ia, solo espero no termine pronto mi felicidad": "Entiendo ese sentimiento. Es normal preocuparse por el futuro, especialmente cuando algo nos hace sentir bien. 😊\n\nLa felicidad no es un destino estático, sino un proceso continuo. Trabajar en IA, aprender cosas nuevas y avanzar hacia tus metas pueden ayudar a mantener ese bienestar a largo plazo. Si en algún momento sientes que tu felicidad disminuye, siempre puedes volver a evaluar tus objetivos, buscar nuevas motivaciones o apoyarte en las experiencias pasadas que te han hecho sentir bien.\n\n¿Hay alguna meta específica que tengas en mente en este momento?",
    "si pero tengo miedo de fracasar quiero integrarlo a servicios medicos": "Es comprensible sentir miedo al aventurarte en un nuevo campo, especialmente uno tan importante como el sector médico. El temor al fracaso es algo común y, a menudo, indica que te importa lo que haces y que quieres hacerlo bien. 🌱\n\nLa inteligencia artificial en el ámbito de la salud tiene el potencial de mejorar la atención, diagnosticar con mayor precisión y optimizar recursos. Antes de sentirte abrumado, considera dar pequeños pasos: investiga casos de éxito, comunícate con profesionales de la salud y expertos en IA, y plantea objetivos alcanzables a corto plazo. Con dedicación, puedes superar el miedo inicial y encontrar maneras de hacer una contribución valiosa. \n\n¿Te gustaría explorar alguna estrategia para empezar poco a poco?"
   
};

// Función para mostrar el mensaje inicial de "hola" con las opciones
function showInitialHolaMessage() {
    let botResponse = "¡Hola! 💙 Soy tu SERENA, 🤖 tu chatbot de bienestar mental.\n\n" +
                      "Aquí estoy para ofrecerte apoyo y guiarte a través de cualquier desafío emocional que puedas estar enfrentando. " + 
                      "Si necesitas ayuda o alguien con quien hablar, estoy aquí para ti. \n\n" +
                      "¿Cómo te sientes hoy?";

    // Crear y añadir la respuesta del bot
    var botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent = "Serena IA: " + botResponse;
    document.getElementById('chat-box').appendChild(botMessageElement);

    // Opciones predefinidas
    let options = [
        {text: "Me siento feliz", value: "feliz"},
        {text: "Me siento triste", value: "Me siento triste"},
        {text: "Me siento frustrado", value: "frustrado"},
        {text: "Solo quiero hablar", value: "charlar"}
    ];

    // Crear contenedor de opciones
    var optionsContainer = document.createElement('div');
    optionsContainer.classList.add('bot-options');
    
    options.forEach(function(opt) {
        var optionButton = document.createElement('button');
        optionButton.textContent = opt.text;
        optionButton.onclick = function() {
            document.getElementById('user-message').value = opt.value;
            sendMessage();
        };
        optionsContainer.appendChild(optionButton);
    });

    document.getElementById('chat-box').appendChild(optionsContainer);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

// Función para enviar mensaje
function sendMessage() {
    var message = document.getElementById('user-message').value.toLowerCase().trim();
    if (message !== '') {
        // Añadir el mensaje del usuario a la caja de chat
        var userMessageElement = document.createElement('div');
        userMessageElement.classList.add('user-message');
        userMessageElement.textContent = message;
        document.getElementById('chat-box').appendChild(userMessageElement);
        
        let botResponse = "Lo siento, no tengo una respuesta para esa pregunta.";
        let showOptions = false;
        let options = [];

        // Lógica especial para "hola"
        if (message === "hola" || message === "inicio") {
            botResponse = "¡Hola! 💙 Soy tu SERENA, 🤖 tu chatbot de bienestar mental.\n\n" + 
                          "Aquí estoy para ofrecerte apoyo y guiarte a través de cualquier desafío emocional que puedas estar enfrentando. " + 
                          "Si necesitas ayuda o alguien con quien hablar, estoy aquí para ti. \n\n" +
                          "¿Cómo te sientes hoy?"
            
            // Activar muestra de opciones
            showOptions = true;
            
            // Opciones predefinidas
            options = [
                {text: "Me siento feliz", value: "feliz"},
                {text: "Me siento triste", value: "triste"},
                {text: "Me siento frustrado", value: "frustrado"},
                {text: "Solo quiero hablar", value: "charlar"}
            ];
        } 
    
        else if (message === "si, quiero meditar" || message === "quiero meditar") {
            botResponse = "De acuerdo, iniciemos con la meditación 👌";
            
            // Activar muestra de opciones
            showOptions = true;
            
            // Opciones predefinidas
            options = [
                {text: "Relajación", value: "relajacion"},
                {text: "Dormir", value: "dormir"},
                {text: "Ansiedad", value: "ansiedad"},
                {text: "Concentración", value: "conentracion"},
                {text: "Gratitud", value: "gratitud"},
                {text: "Personalizada", value: "personalizada"}
            ];
        }

        else if (message === "relajacion") {
            botResponse = "De acuerdo, iniciemos con la meditación 👌\nTe enviaré unos audios cada 5 segundos para ayudarte a relajarte.";
        
            // Después de establecer la respuesta, definimos el arreglo de audios
            let audioFiles = [
                '../audios/relajacion1.mp3',
                '../audios/relajacion2.mp3',
                '../audios/relajacion3.mp3',
                '../audios/relajacion4.mp3',
                '../audios/relajacion5.mp3',
                '../audios/relajacion6.mp3'
            ];
        
            // No mostramos opciones esta vez, o si las mostramos, se hace antes de los audios.
            showOptions = false; 
            options = [];
            
            // Cuando hayas terminado de añadir el mensaje del bot (fuera del else if, después de crear botMessageElement), 
            // puedes lanzar los audios. Espera a que el mensaje del bot se haya agregado al DOM.
        
            // Utiliza setTimeout para ir agregando cada audio:
            // Por ejemplo, tras el append del botMessageElement, agrega este código:
            setTimeout(function() {
                playAudiosSequentially(audioFiles, 0);
            }, 2000); // Esperamos 2 segundos antes de iniciar la secuencia de audios (puedes ajustarlo a tu gusto)
        }

        else if (message === "dormir") {
            botResponse = "De acuerdo, iniciemos con la meditación 👌\nTe enviaré unos audios cada 5 segundos para ayudarte a relajarte.";
        
            // Después de establecer la respuesta, definimos el arreglo de audios
            let audioFiles = [
                '../audios/dormir1.mp3',
                '../audios/dormir2.mp3',
                '../audios/dormir3.mp3',
                '../audios/dormir4.mp3',
                '../audios/dormir5.mp3',
                '../audios/dormir6.mp3'
            ];
        
            // No mostramos opciones esta vez, o si las mostramos, se hace antes de los audios.
            showOptions = false; 
            options = [];
            
            // Cuando hayas terminado de añadir el mensaje del bot (fuera del else if, después de crear botMessageElement), 
            // puedes lanzar los audios. Espera a que el mensaje del bot se haya agregado al DOM.
        
            // Utiliza setTimeout para ir agregando cada audio:
            // Por ejemplo, tras el append del botMessageElement, agrega este código:
            setTimeout(function() {
                playAudiosSequentially(audioFiles, 0);
            }, 2000); // Esperamos 2 segundos antes de iniciar la secuencia de audios (puedes ajustarlo a tu gusto)
        }
        
        else if(qa.hasOwnProperty(message)) {
            // Si la pregunta está en el objeto qa, usar esa respuesta
            botResponse = qa[message];
        }

        // Crear y añadir la respuesta del bot
        var botMessageElement = document.createElement('div');
        botMessageElement.classList.add('bot-message');
        botMessageElement.textContent = "Serena IA: " + botResponse;
        document.getElementById('chat-box').appendChild(botMessageElement);

        // Si queremos mostrar opciones (botones)
        if (showOptions && options.length > 0) {
            var optionsContainer = document.createElement('div');
            optionsContainer.classList.add('bot-options');
            
            options.forEach(function(opt) {
                var optionButton = document.createElement('button');
                optionButton.textContent = opt.text;
                optionButton.onclick = function() {
                    document.getElementById('user-message').value = opt.value;
                    sendMessage();
                };
                optionsContainer.appendChild(optionButton);
            });

            document.getElementById('chat-box').appendChild(optionsContainer);
        }

        // Limpiar el campo de texto y hacer scroll al final
        document.getElementById('user-message').value = '';
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
}

// Detectar Enter para enviar mensaje
document.getElementById('user-message').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
  }
});

function playAudiosSequentially(audioList, index) {
    if (index < audioList.length) {
        // Crear el elemento de audio
        var audioElement = document.createElement('audio');
        audioElement.src = audioList[index];
        audioElement.controls = true; 
        audioElement.autoplay = true;

        // Crear contenedor del mensaje del bot
        var botAudioContainer = document.createElement('div');
        botAudioContainer.classList.add('bot-message');
        botAudioContainer.textContent = "Serena IA: Aquí tienes un audio de meditación:";
        
        // Añadir el contenedor del bot y el audio al chat
        document.getElementById('chat-box').appendChild(botAudioContainer);
        document.getElementById('chat-box').appendChild(audioElement);

        // Hacer scroll al final
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

        // Cuando el audio termine, esperaremos 10 segundos antes de reproducir el siguiente
        audioElement.addEventListener('ended', function() {
            setTimeout(function() {
                playAudiosSequentially(audioList, index + 1);
            }, 10000); // 10 segundos (10000 milisegundos)
        });

        // Intentar reproducir de inmediato (con la misma consideración sobre autoplay)
        var playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.warn('El navegador bloqueó la reproducción automática:', error);
            });
        }
    }
}


// Mostrar el mensaje inicial al cargar la página (antes de cualquier interacción)
document.addEventListener('DOMContentLoaded', showInitialHolaMessage);
