LANGUAGE_REGISTRY.register({
    id: "spanish",
    name: "Spanish",
    native: "Español",
    flag: "🇪🇸",

    vocab: [
        // Basics
        { foreign: "Hola", english: "Hello", category: "Basics" },
        { foreign: "Adiós", english: "Goodbye", category: "Basics" },
        { foreign: "Hasta luego", english: "See you later", category: "Basics" },
        { foreign: "Sí", english: "Yes", category: "Basics" },
        { foreign: "No", english: "No", category: "Basics" },
        { foreign: "Por favor", english: "Please", category: "Basics" },
        { foreign: "Gracias", english: "Thank you", category: "Basics" },
        { foreign: "De nada", english: "You're welcome", category: "Basics" },
        { foreign: "Perdón", english: "Excuse me / Sorry", category: "Basics" },
        { foreign: "Lo siento", english: "I'm sorry", category: "Basics" },
        // Pronouns & Core Verbs
        { foreign: "Yo", english: "I", category: "Pronouns" },
        { foreign: "Tú", english: "You (informal)", category: "Pronouns" },
        { foreign: "Él / Ella", english: "He / She", category: "Pronouns" },
        { foreign: "Nosotros", english: "We", category: "Pronouns" },
        { foreign: "Vosotros", english: "Y'all", category: "Pronouns" },
        { foreign: "Ellos", english: "They", category: "Pronouns" },
        { foreign: "Soy", english: "I am (ser)", category: "Pronouns" },
        { foreign: "Estoy", english: "I am (estar)", category: "Pronouns" },
        { foreign: "Tengo", english: "I have", category: "Pronouns" },
        { foreign: "Quiero", english: "I want", category: "Pronouns" },
        { foreign: "Puedo", english: "I can", category: "Pronouns" },
        // Numbers
        { foreign: "Uno", english: "One", category: "Numbers" },
        { foreign: "Dos", english: "Two", category: "Numbers" },
        { foreign: "Tres", english: "Three", category: "Numbers" },
        { foreign: "Cuatro", english: "Four", category: "Numbers" },
        { foreign: "Cinco", english: "Five", category: "Numbers" },
        { foreign: "Seis", english: "Six", category: "Numbers" },
        { foreign: "Siete", english: "Seven", category: "Numbers" },
        { foreign: "Ocho", english: "Eight", category: "Numbers" },
        { foreign: "Nueve", english: "Nine", category: "Numbers" },
        { foreign: "Diez", english: "Ten", category: "Numbers" },
        { foreign: "Veinte", english: "Twenty", category: "Numbers" },
        { foreign: "Treinta", english: "Thirty", category: "Numbers" },
        { foreign: "Catorce", english: "Forty", category: "Numbers" },
        { foreign: "Catorce y dos", english: "Forty Two", category: "Numbers" },
        { foreign: "Quince", english: "Fifty", category: "Numbers" },
        { foreign: "Sesenta", english: "Sixty", category: "Numbers" },
        { foreign: "Sesenta y nueve", english: "Sixty Nine", category: "Numbers" },
        { foreign: "Setenta", english: "Seventy", category: "Numbers" },
        { foreign: "Ochenta", english: "Eighty", category: "Numbers" },
        { foreign: "Noventa", english: "Ninety", category: "Numbers" },
        { foreign: "Cien", english: "One hundred", category: "Numbers" },
        { foreign: "Cientos", english: "Anything over one hundred", category: "Numbers" },
        // Family
        { foreign: "La familia", english: "Family", category: "Family" },
        { foreign: "Madre", english: "Mother", category: "Family" },
        { foreign: "Padre", english: "Father", category: "Family" },
        { foreign: "Hermano", english: "Brother", category: "Family" },
        { foreign: "Hermana", english: "Sister", category: "Family" },
        { foreign: "Hijo", english: "Son", category: "Family" },
        { foreign: "Hija", english: "Daughter", category: "Family" },
        { foreign: "Abuelo", english: "Grandfather", category: "Family" },
        { foreign: "Abuela", english: "Grandmother", category: "Family" },
        { foreign: "Tío", english: "Uncle", category: "Family" },
        { foreign: "Tía", english: "Aunt", category: "Family" },
        { foreign: "Primo", english: "Cousin (MAN)", category: "Family" },
        { foreign: "Prima", english: "Cousin (WOMAN)", category: "Family" },
        { foreign: "Amigo / Amiga", english: "Friend (m/f)", category: "Family" },
        // Food & Drink
        { foreign: "El agua", english: "Water", category: "Food & Drink" },
        { foreign: "El café", english: "Coffee", category: "Food & Drink" },
        { foreign: "El café solo", english: "Black Coffee", category: "Food & Drink" },
        { foreign: "El café con Leche", english: "Coffee With Creamer", category: "Food & Drink" },
        { foreign: "El vino", english: "Wine", category: "Food & Drink" },
        { foreign: "La cerveza", english: "Beer", category: "Food & Drink" },
        { foreign: "El pan", english: "Bread", category: "Food & Drink" },
        { foreign: "La carne", english: "Meat", category: "Food & Drink" },
        { foreign: "El pollo", english: "Chicken", category: "Food & Drink" },
        { foreign: "El pescado", english: "Fish", category: "Food & Drink" },
        { foreign: "El arroz", english: "Rice", category: "Food & Drink" },
        { foreign: "Las verduras", english: "Vegetables", category: "Food & Drink" },
        { foreign: "Las frutas", english: "Fruits", category: "Food & Drink" },
        { foreign: "La leche", english: "Milk", category: "Food & Drink" },
        { foreign: "El queso", english: "Cheese", category: "Food & Drink" },
        { foreign: "El huevo", english: "Egg", category: "Food & Drink" },
        { foreign: "La hamburguesa", english: "Hamburbur", category: "Food & Drink" },
        { foreign: "La hamburguesa con queso", english: "Chezburbur", category: "Food & Drink" },
        // Places
        { foreign: "La casa", english: "House", category: "Places" },
        { foreign: "El hotel", english: "Hotel", category: "Places" },
        { foreign: "El aeropuerto", english: "Airport", category: "Places" },
        { foreign: "La estación", english: "Station", category: "Places" },
        { foreign: "La tienda", english: "Shop / Store", category: "Places" },
        { foreign: "El mercado", english: "Market", category: "Places" },
        { foreign: "El hospital", english: "Hospital", category: "Places" },
        { foreign: "La playa", english: "Beach", category: "Places" },
        { foreign: "El banco", english: "Bank", category: "Places" },
        { foreign: "El restaurante", english: "Restaurant", category: "Places" },
        { foreign: "La farmacia", english: "Pharmacy", category: "Places" },
        // Time
        { foreign: "Hoy", english: "Today", category: "Time" },
        { foreign: "Mañana", english: "Tomorrow", category: "Time" },
        { foreign: "Ayer", english: "Yesterday", category: "Time" },
        { foreign: "Ahora", english: "Now", category: "Time" },
        { foreign: "Pronto", english: "Soon", category: "Time" },
        { foreign: "La mañana", english: "Morning", category: "Time" },
        { foreign: "La tarde", english: "Afternoon", category: "Time" },
        { foreign: "La noche", english: "Night", category: "Time" },
        { foreign: "La semana", english: "Week", category: "Time" },
        { foreign: "El mes", english: "Month", category: "Time" },
        { foreign: "El año", english: "Year", category: "Time" },
        // Descriptions
        { foreign: "Grande", english: "Big / Large", category: "Descriptions" },
        { foreign: "Pequeño", english: "Small", category: "Descriptions" },
        { foreign: "Bueno", english: "Good", category: "Descriptions" },
        { foreign: "Mal", english: "Bad", category: "Descriptions" },
        { foreign: "Rápido", english: "Fast", category: "Descriptions" },
        { foreign: "Lento", english: "Slow", category: "Descriptions" },
        { foreign: "Bonit(o/a)", english: "Beautiful", category: "Descriptions" },
        { foreign: "Caro", english: "Expensive", category: "Descriptions" },
        { foreign: "Barato", english: "Cheap", category: "Descriptions" },
        { foreign: "Nuevo", english: "New", category: "Descriptions" },
        { foreign: "Viejo", english: "Old", category: "Descriptions" },
        { foreign: "Feliz", english: "Happy", category: "Descriptions" },
        { foreign: "Triste", english: "Sad", category: "Descriptions" },
        { foreign: "Cansado", english: "Tired", category: "Descriptions" },
        { foreign: "Caliente", english: "Hot", category: "Descriptions" },
        { foreign: "Frío", english: "Cold", category: "Descriptions" },
        // Undefinded
        { foreign: "", english: "Red", category: "Colors" },
        { foreign: "", english: "Orange", category: "Colors" },
        { foreign: "", english: "Yellow", category: "Colors" },
        { foreign: "", english: "Green", category: "Colors" },
        { foreign: "", english: "Blue", category: "Colors" },
        { foreign: "", english: "Indigo", category: "Colors" },
        { foreign: "", english: "Violet", category: "Colors" },
        { foreign: "", english: "White", category: "Colors" },
        { foreign: "", english: "Grey", category: "Colors" },
        { foreign: "", english: "Gray", category: "Colors" },
        { foreign: "", english: "Black", category: "Colors" },
        { foreign: "", english: "Racist Green", category: "Colors" },
    ],

    phrases: [
        { foreign: "¿Cómo te llamas?", english: "What is your name?", context: "Introductions" },
        { foreign: "Me llamo…", english: "My name is…", context: "Introductions" },
        { foreign: "¿De dónde eres?", english: "Where are you from?", context: "Introductions" },
        { foreign: "Soy de…", english: "I am from…", context: "Introductions" },
        { foreign: "Mucho gusto.", english: "Nice to meet you.", context: "Introductions" },
        { foreign: "¿Cuánto cuesta?", english: "How much does it cost?", context: "Shopping" },
        { foreign: "¿Tiene esto en otra talla?", english: "Do you have this in another size?", context: "Shopping" },
        { foreign: "Quisiera comprar esto.", english: "I would like to buy this.", context: "Shopping" },
        { foreign: "¿Dónde está el baño?", english: "Where is the bathroom?", context: "Travel" },
        { foreign: "¿Cómo llego a…?", english: "How do I get to…?", context: "Travel" },
        { foreign: "Un billete a…, por favor.", english: "A ticket to…, please.", context: "Travel" },
        { foreign: "Una mesa para dos, por favor.", english: "A table for two, please.", context: "Restaurant" },
        { foreign: "La cuenta, por favor.", english: "The bill, please.", context: "Restaurant" },
        { foreign: "¿Qué recomienda usted?", english: "What do you recommend?", context: "Restaurant" },
        { foreign: "No entiendo.", english: "I don't understand.", context: "Communication" },
        { foreign: "¿Puede hablar más despacio?", english: "Can you speak more slowly?", context: "Communication" },
        { foreign: "¿Hablas inglés?", english: "Do you speak English?", context: "Communication" },
        { foreign: "Tengo hambre.", english: "I am hungry.", context: "Daily Life" },
        { foreign: "Estoy cansado/a.", english: "I am tired.", context: "Daily Life" },
        { foreign: "¡Buen provecho!", english: "Enjoy your meal!", context: "Daily Life" },
    ],

    grammar: [
        {
            title: "Ser vs. Estar (To Be)",
            text: "Spanish has two verbs for 'to be'. Ser is used for permanent traits — identity, origin, and profession. Estar is used for temporary states — feelings, location, and conditions.",
            examples: [
                { foreign: "Soy médico.", english: "I am a doctor. (permanent — ser)" },
                { foreign: "Estoy cansado.", english: "I am tired. (temporary — estar)" },
                { foreign: "Madrid está en España.", english: "Madrid is in Spain. (location — estar)" },
            ]
        },
        {
            title: "Noun Gender & Articles",
            text: "Every Spanish noun is masculine or feminine. Words ending in -o are usually masculine (el/un); words ending in -a are usually feminine (la/una). Articles and adjectives must agree.",
            examples: [
                { foreign: "el libro (m) / la mesa (f)", english: "the book / the table" },
                { foreign: "un perro / una gata", english: "a dog (m) / a cat (f)" },
            ]
        },
        {
            title: "Present Tense: -AR Verbs",
            text: "Regular -AR verbs follow a predictable pattern. Remove -ar and add the correct ending based on the subject.",
            examples: [
                { foreign: "hablar → hablo, hablas, habla, hablamos, hablan", english: "to speak → I speak, you speak, he speaks, we speak, they speak" },
            ]
        },
        {
            title: "Present Tense: -ER / -IR Verbs",
            text: "-ER verbs take endings: -o, -es, -e, -emos, -en. -IR verbs take: -o, -es, -e, -imos, -en.",
            examples: [
                { foreign: "comer → como, comes, come, comemos, comen", english: "to eat → I eat, you eat, he eats, we eat, they eat" },
                { foreign: "vivir → vivo, vives, vive, vivimos, viven", english: "to live → I live, you live, he lives, we live, they live" },
            ]
        },
        {
            title: "Adjective Agreement",
            text: "Adjectives must agree in gender and number with the noun they modify. Most adjectives ending in -o change to -a for feminine, and add -s for plural.",
            examples: [
                { foreign: "un chico alto / una chica alta", english: "a tall boy / a tall girl" },
                { foreign: "los libros rojos / las mesas rojas", english: "the red books / the red tables" },
            ]
        },
        {
            title: "Reflexive Verbs",
            text: "Reflexive verbs show that the subject acts on itself. They use reflexive pronouns: me, te, se, nos, os, se. They are extremely common in Spanish daily life.",
            examples: [
                { foreign: "Yo me llamo Ana.", english: "My name is Ana. (lit: I call myself Ana)" },
                { foreign: "Me levanto a las 7.", english: "I get up at 7." },
            ]
        },
    ],

    learningPath: [
        {
            section: "Foundations",
            icon: "🌱",
            description: "Build your first words and sounds in Spanish.",
            nodes: [
                {
                    id: "sp-greetings",
                    name: "Greetings",
                    icon: "👋",
                    description: "Say hello, goodbye, and introduce yourself with confidence.",
                    skills: ["Hola", "Adiós", "Por favor", "Gracias"],
                    xp: 20,
                    status: "active"
                },
                {
                    id: "sp-numbers",
                    name: "Numbers 1–10",
                    icon: "🔢",
                    description: "Count from one to ten — the backbone of every conversation.",
                    skills: ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-pronouns",
                    name: "Pronouns",
                    icon: "🙋",
                    description: "Learn who's who: yo, tú, él, ella, nosotros, ellos.",
                    skills: ["Yo", "Tú", "Él / Ella", "Nosotros"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-fundationsQuiz",
                    name: "Unit Quiz",
                    icon: "📄",
                    description: "Unit Quiz For Foundations",
                    skills: [
                        "Hola", "Adiós", "Por favor", "Gracias",                                            // sp-greetings
                        "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez",  // sp-numbers
                        "Yo", "Tú", "Él / Ella", "Nosotros",                                                // sp-pronouns
                    ],
                    xp: 30,
                    status: "locked"
                },
            ]
        },
        {
            section: "Everyday Life",
            icon: "🏙️",
            description: "Navigate the world around you in Spanish.",
            nodes: [
                {
                    id: "sp-family",
                    name: "Family",
                    icon: "👨‍👩‍👧",
                    description: "Talk about the people closest to you.",
                    skills: ["Madre", "Padre", "Hermano", "Abuela"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-food",
                    name: "Food & Drink",
                    icon: "🍽️",
                    description: "Order meals, describe food, and survive in any restaurant.",
                    skills: ["El agua", "El café", "El pan", "La carne"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-places",
                    name: "Places",
                    icon: "🗺️",
                    description: "Find your way around town — hotel, airport, market and more.",
                    skills: ["La casa", "El aeropuerto", "La playa"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-everydayLifeQuiz",
                    name: "Unit Quiz",
                    icon: "📄",
                    description: "Unit Quiz For Everyday Life",
                    skills: [
                        "Madre", "Padre", "Hermano", "Abuela",      // sp-family
                        "El agua", "El café", "El pan", "La carne", // sp-food
                        "La casa", "El aeropuerto", "La playa",     // sp-places
                    ],
                    xp: 40,
                    status: "locked",
                }
            ]
        },
        {
            section: "Conversations",
            icon: "💬",
            description: "String sentences together and hold real conversations.",
            nodes: [
                {
                    id: "sp-time",
                    name: "Time & Days",
                    icon: "⏰",
                    description: "Talk about when things happen — today, tomorrow, next week.",
                    skills: ["Hoy", "Mañana", "La semana", "El año"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-descriptions",
                    name: "Descriptions",
                    icon: "🎨",
                    description: "Describe people, places, and things with adjectives.",
                    skills: ["Grande", "Pequeño", "Bonito", "Feliz"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-grammar-ser",
                    name: "Ser vs. Estar",
                    icon: "⚖️",
                    description: "Master Spanish's two 'to be' verbs — the #1 hurdle for learners.",
                    skills: ["Soy", "Estoy", "Es", "Está"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-conversationsQuiz",
                    name: "Unit Quiz",
                    icon: "📄",
                    description: "Unit Quiz For Conversations",
                    skills: [
                        "Hoy", "Mañana", "La semana", "El año", // sp-time
                        "Grande", "Pequeño", "Bonito", "Feliz", // sp-descriptions
                        "Soy", "Estoy", "Es", "Está"            // sp-grammar-ser
                    ],
                    xp: 40,
                    status: "locked"
                },
            ]
        },
        {
            section: "Fluency",
            icon: "🚀",
            description: "Put it all together and reach conversational level.",
            nodes: [
                {
                    id: "sp-reflexive",
                    name: "Reflexive Verbs",
                    icon: "🔄",
                    description: "Me llamo, me levanto — actions you do to yourself.",
                    skills: ["Me llamo", "Me levanto", "Se llama"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "sp-travel-phrases",
                    name: "Travel Phrases",
                    icon: "✈️",
                    description: "Survive airports, trains, and hotels with these key phrases.",
                    skills: ["¿Dónde está…?", "Un billete a…", "La cuenta"],
                    xp: 20,
                    status: "locked"
                },
            ]
        },
    ],
});
