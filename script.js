// --- 1. CONTENIDO EN ESPAÑOL (TEXTO Y PREGUNTAS) ---

const readingText = `
    <div id="unified-text">
        <p>¿Sabes el significado de la palabra mascota? Tu respuesta probablemente será: “Por
        supuesto. Mascota es un animal de compañía, ¿qué más podría ser, no?”.</p>
        <p>Sin embargo, si buscamos su significado en un diccionario… ¡Oh, sorpresa! Su principal definición es, nada más y nada menos, que: “animal u
        objeto al que se le atribuyen virtudes mágicas”. Tal como se lee… ¡virtudes mágicas!</p>
        <p>En la actualidad, se sabe que las mascotas nos ayudan a conservar la salud, tanto
        psicológica como física. Se ha comprobado, por ejemplo, que la presión arterial baja
        cuando acariciamos a nuestras mascotas, pues nos relajamos mucho.</p>
        <p>Las mascotas brindan afecto sin exigir nada a cambio. Siempre están pendientes de
        su dueño o dueña. Una simple palmada en la cabeza desencadena toda una serie de
        piruetas y movimientos de alegría.</p>
        <p>El comportamiento y las reacciones de las mascotas causan curiosidad y distraen
        nuestra atención frente a los problemas. Con las mascotas, el ser humano se quita
        todas las máscaras, deja brotar sus más cálidas expresiones de ternura y pierde el
        miedo al ridículo. Hasta la más seria y triunfadora de las personas es capaz de
        tirarse al suelo para jugar con su perro o su gato, y hasta “conversarle”.</p>
        <p>¿Habrá acaso forma más sana de combatir las tensiones cotidianas? Para el caso, no
        importa la situación social ni el refinamiento. Con un compañero cuadrúpedo, como con
        los niños, los modales del empresario y de la mujer ejecutiva se vuelven tan bellamente ingenuos como los de cualquier parroquiano. Aquí no hay rangos, posiciones, títulos
        ni millones capaces de modificar el comportamiento de unos y otros, porque es
        sincero, natural y transparente.</p>
        <p>Convivir con una mascota nos ayuda a ejercitar sentimientos que no tienen mucha
        oportunidad en la agitada y artificial vida moderna. En el caso de una niña o un niño,
        tal convivencia es un constante aprendizaje del significado de “amar”: en relación
        con la disciplina, con la responsabilidad de cuidar al otro, con la paciencia y la
        compasión, con la capacidad de sufrir por el dolor ajeno, con compartir el tiempo
        libre y los juegos, y con tratar de comunicarse pese a las diferencias.</p>
        <p>En ambientes familiares conflictivos, además —tal como lo escribió el Dr. Boris
        Levinson, profesor de la Universidad Yeshiva, de Nueva York, Estados Unidos—, las
        mascotas “pueden compensar la negativa influencia cuando al niño se le expone a
        tensiones que no comprende. Entonces, es reconfortante la presencia de la mascota,
        que le puede proporcionar la estabilidad y la seguridad que necesita”.</p>
        <p>Convivir con una mascota nos acerca a la naturaleza, nos hace comprender que en
        este mundo cohabita una multiplicidad de especies. Éstas son, sin duda, sus “virtudes
        mágicas”; pero he aquí la principal: nos humaniza. Gracias a las mascotas, a cada
        instante recordamos que somos seres creados a imagen y semejanza de Dios,
        capaces de los más nobles y profundos sentimientos hacia los demás.</p>
    </div>
`;

const quizData = [
    // ------------------- NIVEL LITERAL -------------------
    {
        level: "Nivel Literal",
        question: "¿Qué significa la palabra mascota según el diccionario?",
        options: ["Animal de compañía", "Animal u objeto con poderes mágicos", "Amigo de los niños", "Animal doméstico"],
        correctAnswer: "Animal u objeto con poderes mágicos",
        name: "l1"
    },
    {
        level: "Nivel Literal",
        question: "¿Qué efecto tiene acariciar a una mascota?",
        options: ["Provoca alergias", "Aumenta el estrés", "Baja la presión arterial", "Causa cansancio"],
        correctAnswer: "Baja la presión arterial",
        name: "l2"
    },
    {
        level: "Nivel Literal",
        question: "¿Qué hacen las mascotas cuando reciben una palmada?",
        options: ["Se duermen", "Saltan y muestran alegría", "Huyen", "Se quedan quietas"],
        correctAnswer: "Saltan y muestran alegría", 
        name: "l3"
    },
    {
        level: "Nivel Literal",
        question: "¿Qué tipo de salud ayudan a cuidar las mascotas?",
        options: ["Solo la salud física", "Solo la salud emocional", "La salud de los animales", "La salud física y emocional"],
        correctAnswer: "La salud física y emocional",
        name: "l4"
    },
    {
        level: "Nivel Literal",
        question: "¿Quién es el especialista que menciona los beneficios de las mascotas?",
        options: ["Albert Einstein", "Boris Levinson", "Sigmund Freud", "Mario Vargas Llosa"],
        correctAnswer: "Boris Levinson",
        name: "l5"
    },
    {
        level: "Nivel Literal",
        question: "¿Dónde trabaja el doctor Boris Levinson?",
        options: ["Universidad de Columbia", "Universidad de Buenos Aires", "Universidad Yeshiva", "Universidad de Tokio"],
        correctAnswer: "Universidad Yeshiva",
        name: "l6"
    },
    {
        level: "Nivel Literal",
        question: "¿Qué hace la convivencia con una mascota, según el texto?",
        options: ["Nos hace más ricos", "Nos hace más inteligentes", "Nos hace más humanos", "Nos hace más rápidos"],
        correctAnswer: "Nos hace más humanos",
        name: "l7"
    },
    // ------------------- NIVEL INFERENCIAL -------------------
    {
        level: "Nivel Inferencial",
        question: "¿Por qué se dice que las mascotas tienen virtudes mágicas?",
        options: ["Porque hacen trucos", "Porque parecen animales fantásticos", "Porque provocan cambios positivos en las personas", "Porque vuelan"],
        correctAnswer: "Porque provocan cambios positivos en las personas",
        name: "i1"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Qué se puede deducir si alguien juega con su mascota aunque sea muy serio en su trabajo?",
        options: ["Que se siente ridículo", "Que su mascota es muy obediente", "Que las mascotas despiertan emociones sinceras", "Que necesita entrenarla mejor"],
        correctAnswer: "Que las mascotas despiertan emociones sinceras",
        name: "i2"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Qué relación establece el texto entre niños y mascotas?",
        options: ["Los niños enseñan a las mascotas", "Las mascotas hacen a los niños más rebeldes", "Las mascotas ayudan a los niños a aprender valores", "Los niños prefieren los videojuegos"],
        correctAnswer: "Las mascotas ayudan a los niños a aprender valores",
        name: "i3"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Por qué no importa la clase social cuando se trata de convivir con mascotas?",
        options: ["Porque los ricos no tienen mascotas", "Porque todos actúan con cariño ante ellas", "Porque las mascotas no saben de dinero", "Porque todos las cuidan igual"],
        correctAnswer: "Porque todos actúan con cariño ante ellas",
        name: "i4"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Qué enseñanza principal da una mascota a un niño, según el texto?",
        options: ["A competir", "A hacer tareas", "A obedecer siempre", "A amar y cuidar a otros"],
        correctAnswer: "A amar y cuidar a otros",
        name: "i5"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Qué quiere decir el texto al afirmar que las personas 'se quitan las máscaras' con las mascotas?",
        options: ["Que se disfrazan", "Que muestran su verdadero yo", "Que están actuando", "Que olvidan cómo comportarse"],
        correctAnswer: "Que muestran su verdadero yo",
        name: "i6"
    },
    {
        level: "Nivel Inferencial",
        question: "¿Qué se puede inferir sobre las familias con conflictos que tienen una mascota?",
        options: ["Que pueden tener más problemas", "Que las mascotas causan peleas", "Que la mascota puede ayudar a mejorar el ambiente", "Que deben evitar tener mascotas"],
        correctAnswer: "Que la mascota puede ayudar a mejorar el ambiente",
        name: "i7"
    }
];

// --- 2. LÓGICA DEL QUIZ ---

let score = 0;
const questionsContainer = document.getElementById('questions-container');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const readingTextContainer = document.getElementById('reading-text-container');

// Inicialización: Carga el texto y las preguntas
function initializeQuiz() {
    // 1. Cargar el texto de lectura
    readingTextContainer.innerHTML = readingText;
    
    // 2. Cargar las preguntas del quiz
    loadQuestions();
    
    // 3. Mostrar el total de preguntas
    totalQuestionsDisplay.textContent = quizData.length;
}

function loadQuestions() {
    let currentLevel = "";
    
    quizData.forEach((item, index) => {
        // Agrega un subtítulo para el nuevo nivel si cambia
        if (item.level !== currentLevel) {
            const levelHeader = document.createElement('h3');
            levelHeader.textContent = item.level;
            levelHeader.classList.add('level-header');
            questionsContainer.appendChild(levelHeader);
            currentLevel = item.level;
        }

        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        questionBlock.innerHTML = `
            <p class="question-text">
                <span class="question-number">${index + 1}.</span> ${item.question}
            </p>
            ${item.options.map(option => `
                <label>
                    <input type="radio" name="${item.name}" value="${option}">
                    ${option}
                </label>
            `).join('<br>')}
            <hr>
        `;
        questionsContainer.appendChild(questionBlock);
    });
}

function submitQuiz() {
    score = 0; // Reiniciar puntaje
    const questionBlocks = document.querySelectorAll('.question-block');
    
    quizData.forEach((item, index) => {
        const selector = `input[name="${item.name}"]:checked`;
        const selectedOption = document.querySelector(selector);
        const block = questionBlocks[index];

        // Resetear estilos anteriores
        block.classList.remove('correct', 'incorrect');
        
        // Encontrar la etiqueta correcta para resaltar
        const correctLabel = Array.from(block.querySelectorAll('label')).find(label => {
            return label.querySelector('input').value === item.correctAnswer;
        });

        if (selectedOption) {
            if (selectedOption.value === item.correctAnswer) {
                score++;
                block.classList.add('correct');
            } else {
                block.classList.add('incorrect');
                // Si la respuesta es incorrecta, resaltar la correcta en verde para feedback
                if (correctLabel) {
                    correctLabel.style.backgroundColor = '#d4edda'; 
                    correctLabel.style.fontWeight = 'bold';
                }
            }
        } 
        
        // Deshabilitar todas las opciones para evitar más clics
        document.querySelectorAll(`input[name="${item.name}"]`).forEach(radio => {
            radio.disabled = true;
        });
    });

    // Actualizar puntaje final
    scoreDisplay.textContent = score;

    // Mostrar mensaje de feedback y deshabilitar botón
    document.getElementById('feedback-message').style.display = 'block';
    document.getElementById('submit-btn').disabled = true;
    
    alert(`¡Quiz completado! Tu puntaje es ${score} de ${quizData.length}.`);
}

// Inicia el quiz cuando la página está lista
window.onload = initializeQuiz;