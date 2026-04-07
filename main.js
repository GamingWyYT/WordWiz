// ══════════════════════════════════════════════════════
//  LANGUAGE DATA
//  To add a language: copy a block, update id/name/flag,
//  and fill in vocab (with consistent category names),
//  phrases (with context), and grammar.
// ══════════════════════════════════════════════════════

const LANGUAGES = [

    // ─────────────────────── SPANISH ──────────────────────
    {
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
            { foreign: "Cien", english: "One hundred", category: "Numbers" },
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
            { foreign: "Amigo / Amiga", english: "Friend (m/f)", category: "Family" },
            // Food & Drink
            { foreign: "El agua", english: "Water", category: "Food & Drink" },
            { foreign: "El café", english: "Coffee", category: "Food & Drink" },
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
            { foreign: "Malo", english: "Bad", category: "Descriptions" },
            { foreign: "Rápido", english: "Fast", category: "Descriptions" },
            { foreign: "Lento", english: "Slow", category: "Descriptions" },
            { foreign: "Bonito", english: "Beautiful", category: "Descriptions" },
            { foreign: "Caro", english: "Expensive", category: "Descriptions" },
            { foreign: "Barato", english: "Cheap", category: "Descriptions" },
            { foreign: "Nuevo", english: "New", category: "Descriptions" },
            { foreign: "Viejo", english: "Old", category: "Descriptions" },
            { foreign: "Feliz", english: "Happy", category: "Descriptions" },
            { foreign: "Triste", english: "Sad", category: "Descriptions" },
            { foreign: "Cansado", english: "Tired", category: "Descriptions" },
            { foreign: "Caliente", english: "Hot", category: "Descriptions" },
            { foreign: "Frío", english: "Cold", category: "Descriptions" },
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
                        status: "done"
                    },
                    {
                        id: "sp-numbers",
                        name: "Numbers 1–10",
                        icon: "🔢",
                        description: "Count from one to ten — the backbone of every conversation.",
                        skills: ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"],
                        xp: 20,
                        status: "done"
                    },
                    {
                        id: "sp-pronouns",
                        name: "Pronouns",
                        icon: "🙋",
                        description: "Learn who's who: yo, tú, él, ella, nosotros, ellos.",
                        skills: ["Yo", "Tú", "Él / Ella", "Nosotros"],
                        xp: 30,
                        status: "active"
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
                        xp: 30,
                        status: "locked"
                    },
                    {
                        id: "sp-food",
                        name: "Food & Drink",
                        icon: "🍽️",
                        description: "Order meals, describe food, and survive in any restaurant.",
                        skills: ["El agua", "El café", "El pan", "La carne"],
                        xp: 40,
                        status: "locked"
                    },
                    {
                        id: "sp-places",
                        name: "Places",
                        icon: "🗺️",
                        description: "Find your way around town — hotel, airport, market and more.",
                        skills: ["La casa", "El aeropuerto", "La playa"],
                        xp: 40,
                        status: "locked"
                    },
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
                        xp: 40,
                        status: "locked"
                    },
                    {
                        id: "sp-descriptions",
                        name: "Descriptions",
                        icon: "🎨",
                        description: "Describe people, places, and things with adjectives.",
                        skills: ["Grande", "Pequeño", "Bonito", "Feliz"],
                        xp: 50,
                        status: "locked"
                    },
                    {
                        id: "sp-grammar-ser",
                        name: "Ser vs. Estar",
                        icon: "⚖️",
                        description: "Master Spanish's two 'to be' verbs — the #1 hurdle for learners.",
                        skills: ["Soy", "Estoy", "Es", "Está"],
                        xp: 60,
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
                        xp: 60,
                        status: "locked"
                    },
                    {
                        id: "sp-travel-phrases",
                        name: "Travel Phrases",
                        icon: "✈️",
                        description: "Survive airports, trains, and hotels with these key phrases.",
                        skills: ["¿Dónde está…?", "Un billete a…", "La cuenta"],
                        xp: 50,
                        status: "locked"
                    },
                    {
                        id: "sp-fluency",
                        name: "Fluency Check",
                        icon: "🏆",
                        description: "Prove you've mastered everything — the ultimate challenge.",
                        skills: ["Full vocab", "All phrases", "Grammar"],
                        xp: 100,
                        status: "locked"
                    },
                ]
            },
        ],
    },

    // ─────────────────────────── FRENCH ────────────────────────────

    {
        id: "french",
        name: "French",
        native: "Français",
        flag: "🇫🇷",

        vocab: [
            // Basics
            { foreign: "Bonjour", english: "Hello / Good day", category: "Basics" },
            { foreign: "Bonsoir", english: "Good evening", category: "Basics" },
            { foreign: "Au revoir", english: "Goodbye", category: "Basics" },
            { foreign: "À bientôt", english: "See you soon", category: "Basics" },
            { foreign: "Oui", english: "Yes", category: "Basics" },
            { foreign: "Non", english: "No", category: "Basics" },
            { foreign: "S'il vous plaît", english: "Please (formal)", category: "Basics" },
            { foreign: "Merci", english: "Thank you", category: "Basics" },
            { foreign: "De rien", english: "You're welcome", category: "Basics" },
            { foreign: "Excusez-moi", english: "Excuse me", category: "Basics" },
            { foreign: "Pardon", english: "Sorry", category: "Basics" },
            // Pronouns & Core Verbs
            { foreign: "Je", english: "I", category: "Pronouns" },
            { foreign: "Tu", english: "You (informal)", category: "Pronouns" },
            { foreign: "Il / Elle", english: "He / She", category: "Pronouns" },
            { foreign: "Nous", english: "We", category: "Pronouns" },
            { foreign: "Ils / Elles", english: "They (m/f)", category: "Pronouns" },
            { foreign: "Je suis", english: "I am", category: "Pronouns" },
            { foreign: "J'ai", english: "I have", category: "Pronouns" },
            { foreign: "Je veux", english: "I want", category: "Pronouns" },
            { foreign: "Je peux", english: "I can", category: "Pronouns" },
            { foreign: "Je vais", english: "I go / I am going", category: "Pronouns" },
            // Numbers
            { foreign: "Un / Une", english: "One", category: "Numbers" },
            { foreign: "Deux", english: "Two", category: "Numbers" },
            { foreign: "Trois", english: "Three", category: "Numbers" },
            { foreign: "Quatre", english: "Four", category: "Numbers" },
            { foreign: "Cinq", english: "Five", category: "Numbers" },
            { foreign: "Six", english: "Six", category: "Numbers" },
            { foreign: "Sept", english: "Seven", category: "Numbers" },
            { foreign: "Huit", english: "Eight", category: "Numbers" },
            { foreign: "Neuf", english: "Nine", category: "Numbers" },
            { foreign: "Dix", english: "Ten", category: "Numbers" },
            { foreign: "Vingt", english: "Twenty", category: "Numbers" },
            { foreign: "Cent", english: "One hundred", category: "Numbers" },
            // Family
            { foreign: "La famille", english: "Family", category: "Family" },
            { foreign: "La mère", english: "Mother", category: "Family" },
            { foreign: "Le père", english: "Father", category: "Family" },
            { foreign: "Le frère", english: "Brother", category: "Family" },
            { foreign: "La sœur", english: "Sister", category: "Family" },
            { foreign: "Le fils", english: "Son", category: "Family" },
            { foreign: "La fille", english: "Daughter", category: "Family" },
            { foreign: "Le grand-père", english: "Grandfather", category: "Family" },
            { foreign: "La grand-mère", english: "Grandmother", category: "Family" },
            { foreign: "L'oncle", english: "Uncle", category: "Family" },
            { foreign: "La tante", english: "Aunt", category: "Family" },
            { foreign: "L'ami / L'amie", english: "Friend (m/f)", category: "Family" },
            // Food & Drink
            { foreign: "L'eau", english: "Water", category: "Food & Drink" },
            { foreign: "Le café", english: "Coffee", category: "Food & Drink" },
            { foreign: "Le vin", english: "Wine", category: "Food & Drink" },
            { foreign: "La bière", english: "Beer", category: "Food & Drink" },
            { foreign: "Le pain", english: "Bread", category: "Food & Drink" },
            { foreign: "La viande", english: "Meat", category: "Food & Drink" },
            { foreign: "Le poulet", english: "Chicken", category: "Food & Drink" },
            { foreign: "Le poisson", english: "Fish", category: "Food & Drink" },
            { foreign: "Le riz", english: "Rice", category: "Food & Drink" },
            { foreign: "Les légumes", english: "Vegetables", category: "Food & Drink" },
            { foreign: "Les fruits", english: "Fruits", category: "Food & Drink" },
            { foreign: "Le lait", english: "Milk", category: "Food & Drink" },
            { foreign: "Le fromage", english: "Cheese", category: "Food & Drink" },
            { foreign: "L'œuf", english: "Egg", category: "Food & Drink" },
            // Places
            { foreign: "La maison", english: "House", category: "Places" },
            { foreign: "L'hôtel", english: "Hotel", category: "Places" },
            { foreign: "L'aéroport", english: "Airport", category: "Places" },
            { foreign: "La gare", english: "Train station", category: "Places" },
            { foreign: "La boutique", english: "Shop / Store", category: "Places" },
            { foreign: "Le marché", english: "Market", category: "Places" },
            { foreign: "L'hôpital", english: "Hospital", category: "Places" },
            { foreign: "La plage", english: "Beach", category: "Places" },
            { foreign: "La banque", english: "Bank", category: "Places" },
            { foreign: "Le restaurant", english: "Restaurant", category: "Places" },
            { foreign: "La pharmacie", english: "Pharmacy", category: "Places" },
            // Time
            { foreign: "Aujourd'hui", english: "Today", category: "Time" },
            { foreign: "Demain", english: "Tomorrow", category: "Time" },
            { foreign: "Hier", english: "Yesterday", category: "Time" },
            { foreign: "Maintenant", english: "Now", category: "Time" },
            { foreign: "Bientôt", english: "Soon", category: "Time" },
            { foreign: "Le matin", english: "Morning", category: "Time" },
            { foreign: "L'après-midi", english: "Afternoon", category: "Time" },
            { foreign: "Le soir", english: "Evening", category: "Time" },
            { foreign: "La semaine", english: "Week", category: "Time" },
            { foreign: "Le mois", english: "Month", category: "Time" },
            { foreign: "L'année", english: "Year", category: "Time" },
            // Descriptions
            { foreign: "Grand", english: "Big / Tall", category: "Descriptions" },
            { foreign: "Petit", english: "Small", category: "Descriptions" },
            { foreign: "Bon", english: "Good", category: "Descriptions" },
            { foreign: "Mauvais", english: "Bad", category: "Descriptions" },
            { foreign: "Rapide", english: "Fast", category: "Descriptions" },
            { foreign: "Lent", english: "Slow", category: "Descriptions" },
            { foreign: "Beau / Belle", english: "Beautiful (m/f)", category: "Descriptions" },
            { foreign: "Cher", english: "Expensive", category: "Descriptions" },
            { foreign: "Bon marché", english: "Cheap", category: "Descriptions" },
            { foreign: "Nouveau / Nouvelle", english: "New (m/f)", category: "Descriptions" },
            { foreign: "Vieux / Vieille", english: "Old (m/f)", category: "Descriptions" },
            { foreign: "Heureux", english: "Happy", category: "Descriptions" },
            { foreign: "Triste", english: "Sad", category: "Descriptions" },
            { foreign: "Fatigué", english: "Tired", category: "Descriptions" },
            { foreign: "Chaud", english: "Hot", category: "Descriptions" },
            { foreign: "Froid", english: "Cold", category: "Descriptions" },
        ],

        phrases: [
            { foreign: "Comment vous appelez-vous ?", english: "What is your name? (formal)", context: "Introductions" },
            { foreign: "Je m'appelle…", english: "My name is…", context: "Introductions" },
            { foreign: "D'où venez-vous ?", english: "Where are you from?", context: "Introductions" },
            { foreign: "Je viens de…", english: "I come from…", context: "Introductions" },
            { foreign: "Enchanté(e).", english: "Nice to meet you.", context: "Introductions" },
            { foreign: "Combien ça coûte ?", english: "How much does it cost?", context: "Shopping" },
            { foreign: "Avez-vous cela dans une autre taille ?", english: "Do you have this in another size?", context: "Shopping" },
            { foreign: "Je voudrais acheter ceci.", english: "I would like to buy this.", context: "Shopping" },
            { foreign: "Où sont les toilettes ?", english: "Where is the bathroom?", context: "Travel" },
            { foreign: "Comment aller à… ?", english: "How do I get to…?", context: "Travel" },
            { foreign: "Un billet pour…, s'il vous plaît.", english: "A ticket to…, please.", context: "Travel" },
            { foreign: "Une table pour deux, s'il vous plaît.", english: "A table for two, please.", context: "Restaurant" },
            { foreign: "L'addition, s'il vous plaît.", english: "The bill, please.", context: "Restaurant" },
            { foreign: "Qu'est-ce que vous recommandez ?", english: "What do you recommend?", context: "Restaurant" },
            { foreign: "Je ne comprends pas.", english: "I don't understand.", context: "Communication" },
            { foreign: "Pouvez-vous parler plus lentement ?", english: "Can you speak more slowly?", context: "Communication" },
            { foreign: "Parlez-vous anglais ?", english: "Do you speak English?", context: "Communication" },
            { foreign: "J'ai faim.", english: "I am hungry.", context: "Daily Life" },
            { foreign: "Je suis fatigué(e).", english: "I am tired.", context: "Daily Life" },
            { foreign: "Bon appétit !", english: "Enjoy your meal!", context: "Daily Life" },
        ],

        grammar: [
            {
                title: "Le / La / Les / L' (The)",
                text: "French definite articles agree with the noun's gender and number. Le = masculine, La = feminine, Les = plural. Before a vowel or silent h, le/la contract to l'.",
                examples: [
                    { foreign: "le chat, la chatte, les chats", english: "the cat (m), the cat (f), the cats" },
                    { foreign: "l'ami (m), l'amie (f)", english: "the friend — elision before vowel" },
                ]
            },
            {
                title: "Être — To Be",
                text: "Être is irregular and essential. Used for identity, origin, and profession. Also forms the passé composé of motion/reflexive verbs.",
                examples: [
                    { foreign: "je suis, tu es, il est, nous sommes, vous êtes, ils sont", english: "I am, you are, he is, we are, you are, they are" },
                ]
            },
            {
                title: "Avoir — To Have",
                text: "Avoir (to have) is used for possession, age, and as the main auxiliary for forming the past tense (passé composé). Many common expressions use avoir where English uses 'to be'.",
                examples: [
                    { foreign: "j'ai, tu as, il a, nous avons, vous avez, ils ont", english: "I have, you have, he has, we have, you have, they have" },
                    { foreign: "J'ai faim. / J'ai 20 ans.", english: "I am hungry. / I am 20 years old. (lit: I have hunger / 20 years)" },
                ]
            },
            {
                title: "Negation: Ne … Pas",
                text: "To negate a verb, wrap it with ne…pas. Before a vowel, ne becomes n'. In spoken French, ne is commonly dropped.",
                examples: [
                    { foreign: "Je ne parle pas anglais.", english: "I don't speak English." },
                    { foreign: "Elle n'est pas ici.", english: "She is not here." },
                ]
            },
            {
                title: "Adjective Agreement & Position",
                text: "French adjectives agree in gender and number with the noun. Most adjectives follow the noun. Common exceptions (grand, petit, bon, beau, nouveau, vieux) precede it.",
                examples: [
                    { foreign: "un homme grand / une femme grande", english: "a tall man / a tall woman" },
                    { foreign: "un bon repas / une bonne idée", english: "a good meal / a good idea (before noun)" },
                ]
            },
            {
                title: "Passé Composé (Past Tense)",
                text: "The most common past tense uses avoir or être + past participle. Verbs of motion and all reflexive verbs use être, and the participle agrees with the subject's gender/number.",
                examples: [
                    { foreign: "J'ai mangé une pizza.", english: "I ate a pizza. (avoir)" },
                    { foreign: "Elle est allée au marché.", english: "She went to the market. (être + agreement)" },
                ]
            },
        ],

        learningPath: [
            {
                section: "Les Bases",
                icon: "🌱",
                description: "Start with the essentials — greet people and count to ten.",
                nodes: [
                    {
                        id: "fr-greetings",
                        name: "Greetings",
                        icon: "👋",
                        description: "Bonjour, bonsoir, au revoir — nail the French hello and goodbye.",
                        skills: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                        xp: 20,
                        status: "done"
                    },
                    {
                        id: "fr-articles",
                        name: "Le / La / Les",
                        icon: "📖",
                        description: "French nouns have gender. Learn which article goes with which noun.",
                        skills: ["Le (masc)", "La (fem)", "Les (pl)", "L' (vowel)"],
                        xp: 30,
                        status: "done"
                    },
                    {
                        id: "fr-numbers",
                        name: "Numbers",
                        icon: "🔢",
                        description: "Un, deux, trois… count your way into French.",
                        skills: ["Un", "Deux", "Trois", "Dix", "Vingt"],
                        xp: 20,
                        status: "active"
                    },
                ]
            },
            {
                section: "La Vie Quotidienne",
                icon: "☕",
                description: "Handle daily situations in French.",
                nodes: [
                    {
                        id: "fr-family",
                        name: "La Famille",
                        icon: "👨‍👩‍👧",
                        description: "Mère, père, frère, sœur — talk about the people you love.",
                        skills: ["La mère", "Le père", "Le frère", "La sœur"],
                        xp: 30,
                        status: "locked"
                    },
                    {
                        id: "fr-food",
                        name: "Food & Drink",
                        icon: "🥖",
                        description: "From baguettes to café au lait — essential French food vocab.",
                        skills: ["Le pain", "Le vin", "Le fromage", "L'eau"],
                        xp: 40,
                        status: "locked"
                    },
                    {
                        id: "fr-places",
                        name: "Places",
                        icon: "🗼",
                        description: "Navigate cities, find the gare, and check into l'hôtel.",
                        skills: ["La maison", "La gare", "L'aéroport", "La plage"],
                        xp: 40,
                        status: "locked"
                    },
                ]
            },
            {
                section: "La Grammaire",
                icon: "✏️",
                description: "Understand the patterns that make French work.",
                nodes: [
                    {
                        id: "fr-etre",
                        name: "Être — To Be",
                        icon: "🧩",
                        description: "Je suis, tu es, il est — the most essential verb in French.",
                        skills: ["Je suis", "Tu es", "Il est", "Nous sommes"],
                        xp: 50,
                        status: "locked"
                    },
                    {
                        id: "fr-negation",
                        name: "Ne … Pas",
                        icon: "🚫",
                        description: "Negate any sentence with the ne…pas wrapper.",
                        skills: ["Je ne sais pas", "Ce n'est pas", "Il ne vient pas"],
                        xp: 50,
                        status: "locked"
                    },
                    {
                        id: "fr-passe",
                        name: "Passé Composé",
                        icon: "⏳",
                        description: "Talk about the past: j'ai mangé, elle est allée.",
                        skills: ["J'ai mangé", "Tu as dit", "Elle est allée"],
                        xp: 70,
                        status: "locked"
                    },
                ]
            },
            {
                section: "Niveau Avancé",
                icon: "🎭",
                description: "Reach true conversational fluency in French.",
                nodes: [
                    {
                        id: "fr-adjectives",
                        name: "Adjectives",
                        icon: "🎨",
                        description: "Grand, petit, beau — match gender and number like a native.",
                        skills: ["Grand / Grande", "Bon / Bonne", "Vieux / Vieille"],
                        xp: 60,
                        status: "locked"
                    },
                ]
            },
        ],
    },

    // ─────────────────────────── GERMAN ────────────────────────────

    {
        id: "german",
        name: "German",
        native: "Deutsch",
        flag: "🇩🇪",

        vocab: [
            // Basics
            { foreign: "Hallo", english: "Hello", category: "Basics" },
            { foreign: "Tschüss", english: "Bye", category: "Basics" },
            { foreign: "Auf Wiedersehen", english: "Goodbye", category: "Basics" },
            { foreign: "Bis bald", english: "See you soon", category: "Basics" },
            { foreign: "Ja", english: "Yes", category: "Basics" },
            { foreign: "Nein", english: "No", category: "Basics" },
            { foreign: "Bitte", english: "Please", category: "Basics" },
            { foreign: "Danke", english: "Thank you", category: "Basics" },
            { foreign: "Danke schön", english: "Thank you very much", category: "Basics" },
            { foreign: "Bitte schön", english: "You're welcome", category: "Basics" },
            { foreign: "Entschuldigung", english: "Excuse me / Sorry", category: "Basics" },
            { foreign: "Es tut mir leid", english: "I'm sorry", category: "Basics" },
            { foreign: "War", english: "Was", category: "Basics" },
            { foreign: "Mit", english: "With", category: "Basics" },
            { foreign: "Und", english: "And", category: "Basics" },
            { foreign: "Das (n)", english: "The (neuter)", category: "Basics" },
            { foreign: "Die (f)", english: "The (fem.)", category: "Basics" },
            { foreign: "Der (m)", english: "The (masc.)", category: "Basics" },
            { foreign: "Dem (d)", english: "The (dative)", category: "Basics" },
            { foreign: "Den (a-m)", english: "The (accusitive masc.)", category: "Basics" },
            { foreign: "Des (p)", english: "The (possessive)", category: "Basics" },
            // Pronouns & Core Verbs
            { foreign: "Ich", english: "I", category: "Pronouns" },
            { foreign: "Du", english: "You (informal)", category: "Pronouns" },
            { foreign: "Er / Sie", english: "He / She", category: "Pronouns" },
            { foreign: "Wir", english: "We", category: "Pronouns" },
            { foreign: "Sie", english: "They / You (formal)", category: "Pronouns" },
            { foreign: "Bin", english: "Am (ich bin)", category: "Pronouns" },
            { foreign: "Bist", english: "Are (du bist)", category: "Pronouns" },
            { foreign: "Ist", english: "Is (er/sie ist)", category: "Pronouns" },
            { foreign: "Habe", english: "Have (ich habe)", category: "Pronouns" },
            { foreign: "Will", english: "Want (ich will)", category: "Pronouns" },
            { foreign: "Kann", english: "Can (ich kann)", category: "Pronouns" },
            // Numbers
            { foreign: "Ein / Eine", english: "One", category: "Numbers" },
            { foreign: "Zwei", english: "Two", category: "Numbers" },
            { foreign: "Drei", english: "Three", category: "Numbers" },
            { foreign: "Vier", english: "Four", category: "Numbers" },
            { foreign: "Fünf", english: "Five", category: "Numbers" },
            { foreign: "Sechs", english: "Six", category: "Numbers" },
            { foreign: "Sieben", english: "Seven", category: "Numbers" },
            { foreign: "Acht", english: "Eight", category: "Numbers" },
            { foreign: "Neun", english: "Nine", category: "Numbers" },
            { foreign: "Zehn", english: "Ten", category: "Numbers" },
            { foreign: "Elf", english: "Eleven", category: "Numbers" },
            { foreign: "Zwölf", enlish: "Twelve", category: "Numbers" },
            { foreign: "Dreizehn", english: "Thirteen", category: "Numbers" }, // hehe thertenn
            { foreign: "Vierzehn", english: "Fourteen", category: "Numbers" },
            { foreign: "Fünfzehn", english: "Fifteen", category: "Numbers" },
            { foreign: "Sechszehn", english: "Sixteen", category: "Numbers" },
            { foreign: "Siebenzehn", english: "Seventeen", category: "Numbers" },
            { foreign: "Achtzehn", english: "Eighteen", category: "Numbers" },
            { foreign: "Neunzehn", english: "Nineteen", category: "Numbers" },
            { foreign: "Zwanzig", english: "Twenty", category: "Numbers" },
            { foreign: "Eins und Zwanzig", english: "Twenty One", category: "Numbers" },
            { foreign: "Hundert", english: "One hundred", category: "Numbers" },
            { foreign: "Funfhundert, Funf und Funfzig", english: "Five hundred Fifty Five", category: "Numbers" },
            // Family
            { foreign: "Familie", english: "Family", category: "Family" },
            { foreign: "Mutter", english: "Mother", category: "Family" },
            { foreign: "Vater", english: "Father", category: "Family" },
            { foreign: "Bruder", english: "Brother", category: "Family" },
            { foreign: "Schwester", english: "Sister", category: "Family" },
            { foreign: "Sohn", english: "Son", category: "Family" },
            { foreign: "Tochter", english: "Daughter", category: "Family" },
            { foreign: "Großvater", english: "Grandfather", category: "Family" },
            { foreign: "Großmutter", english: "Grandmother", category: "Family" },
            { foreign: "Urgroßvater", english: "Great Grandfather", category: "Family" },
            { foreign: "Onkel", english: "Uncle", category: "Family" },
            { foreign: "Tante", english: "Aunt", category: "Family" },
            { foreign: "Freund / Die Freundin", english: "Friend (m/f)", category: "Family" },
            { foreign: "Kinder", english: "Children", category: "Family" },
            // Food & Drink
            { foreign: "Wasser", english: "Water", category: "Food & Drink" },
            { foreign: "Kaffee", english: "Coffee", category: "Food & Drink" },
            { foreign: "Wein", english: "Wine", category: "Food & Drink" },
            { foreign: "Bier", english: "Beer", category: "Food & Drink" },
            { foreign: "Tee", english: "Tea", category: "Food & Drink" },
            { foreign: "Brot", english: "Bread", category: "Food & Drink" },
            { foreign: "Fleisch", english: "Meat", category: "Food & Drink" },
            { foreign: "Hähnchen", english: "Chicken", category: "Food & Drink" },
            { foreign: "Fisch", english: "Fish", category: "Food & Drink" },
            { foreign: "Reis", english: "Rice", category: "Food & Drink" },
            { foreign: "Gemüse", english: "Vegetables", category: "Food & Drink" },
            { foreign: "Obst", english: "Fruit", category: "Food & Drink" },
            { foreign: "Milch", english: "Milk", category: "Food & Drink" },
            { foreign: "Käse", english: "Cheese", category: "Food & Drink" },
            { foreign: "Ei", english: "Egg", category: "Food & Drink" },
            { foreign: "Sandwich", english: "Sandwich", category: "Food & Drink" },
            // Places
            { foreign: "Haus", english: "House", category: "Places" },
            { foreign: "Hotel", english: "Hotel", category: "Places" },
            { foreign: "Flughafen", english: "Airport", category: "Places" },
            { foreign: "Bahnhof", english: "Train station", category: "Places" },
            { foreign: "Geschäft", english: "Shop / Store", category: "Places" },
            { foreign: "Markt", english: "Market", category: "Places" },
            { foreign: "Krankenhaus", english: "Hospital", category: "Places" },
            { foreign: "Strand", english: "Beach", category: "Places" },
            { foreign: "Bank", english: "Bank", category: "Places" },
            { foreign: "Restaurant", english: "Restaurant", category: "Places" },
            { foreign: "Apotheke", english: "Pharmacy", category: "Places" },
            // Time
            { foreign: "Heute", english: "Today", category: "Time" },
            { foreign: "Morgen", english: "Tomorrow", category: "Time" },
            { foreign: "Gestern", english: "Yesterday", category: "Time" },
            { foreign: "Jetzt", english: "Now", category: "Time" },
            { foreign: "Bald", english: "Soon", category: "Time" },
            { foreign: "Morgen", english: "Morning", category: "Time" },
            { foreign: "Nachmittag", english: "Afternoon", category: "Time" },
            { foreign: "Nacht", english: "Night", category: "Time" },
            { foreign: "Woche", english: "Week", category: "Time" },
            { foreign: "Monat", english: "Month", category: "Time" },
            { foreign: "Jahr", english: "Year", category: "Time" },
            // Descriptions
            { foreign: "Groß", english: "Big / Tall", category: "Descriptions" },
            { foreign: "Klein", english: "Small", category: "Descriptions" },
            { foreign: "Gut", english: "Good", category: "Descriptions" },
            { foreign: "Schlecht", english: "Bad", category: "Descriptions" },
            { foreign: "Schnell", english: "Fast", category: "Descriptions" },
            { foreign: "Langsam", english: "Slow", category: "Descriptions" },
            { foreign: "Schön", english: "Beautiful", category: "Descriptions" },
            { foreign: "Teuer", english: "Expensive", category: "Descriptions" },
            { foreign: "Billig", english: "Cheap", category: "Descriptions" },
            { foreign: "Neu", english: "New", category: "Descriptions" },
            { foreign: "Alt", english: "Old", category: "Descriptions" },
            { foreign: "Glücklich", english: "Happy", category: "Descriptions" },
            { foreign: "Traurig", english: "Sad", category: "Descriptions" },
            { foreign: "Müde", english: "Tired", category: "Descriptions" },
            { foreign: "Heiß", english: "Hot", category: "Descriptions" },
            { foreign: "Kalt", english: "Cold", category: "Descriptions" },
            { foreign: "Klug", english: "Smart", category: "Descriptions" },
            { foreign: "Nett", english: "Nice / Kind", category: "Descriptions" },
            { foreign: "Mein (m/n)", english: "My (masc./neuter)", category: "Descriptions" },
            { foreign: "Meine (f/pl)", english: "My (fem./plural)", category: "Descriptions" },
            // Vehicles
            { foreign: "Krankenwagon", english: "Ambulance", category: "Vehicle" },
            { foreign: "Flugzeug", english: "Airplane", category: "Vehicle" },

        ],

        phrases: [
            { foreign: "Wie heißen Sie?", english: "What is your name? (formal)", context: "Introductions" },
            { foreign: "Ich heiße…", english: "My name is…", context: "Introductions" },
            { foreign: "Woher kommen Sie?", english: "Where are you from? (formal)", context: "Introductions" },
            { foreign: "Ich komme aus…", english: "I come from…", context: "Introductions" },
            { foreign: "Freut mich.", english: "Nice to meet you.", context: "Introductions" },
            { foreign: "Was kostet das?", english: "How much does it cost?", context: "Shopping" },
            { foreign: "Haben Sie das in einer anderen Größe?", english: "Do you have this in another size?", context: "Shopping" },
            { foreign: "Ich möchte das kaufen.", english: "I would like to buy this.", context: "Shopping" },
            { foreign: "Wo ist die Toilette?", english: "Where is the bathroom?", context: "Travel" },
            { foreign: "Wie komme ich nach…?", english: "How do I get to…?", context: "Travel" },
            { foreign: "Eine Fahrkarte nach…, bitte.", english: "A ticket to…, please.", context: "Travel" },
            { foreign: "Einen Tisch für zwei, bitte.", english: "A table for two, please.", context: "Restaurant" },
            { foreign: "Die Rechnung, bitte.", english: "The bill, please.", context: "Restaurant" },
            { foreign: "Was empfehlen Sie?", english: "What do you recommend?", context: "Restaurant" },
            { foreign: "Ich verstehe nicht.", english: "I don't understand.", context: "Communication" },
            { foreign: "Können Sie langsamer sprechen?", english: "Can you speak more slowly?", context: "Communication" },
            { foreign: "Sprechen Sie Englisch?", english: "Do you speak English?", context: "Communication" },
            { foreign: "Ich habe Hunger.", english: "I am hungry.", context: "Daily Life" },
            { foreign: "Ich bin müde.", english: "I am tired.", context: "Daily Life" },
            { foreign: "Guten Appetit!", english: "Enjoy your meal!", context: "Daily Life" },
        ],

        grammar: [
            {
                title: "Der / Die / Das (The)",
                text: "German has three grammatical genders: masculine (der), feminine (die), and neuter (das). Gender must be memorised with each noun. All plural nouns use die.",
                examples: [
                    { foreign: "der Mann, die Frau, das Kind", english: "the man, the woman, the child" },
                    { foreign: "die Männer, die Frauen, die Kinder", english: "all plurals use die" },
                ]
            },
            {
                title: "Sein — To Be",
                text: "Sein (to be) is the most fundamental German verb. Completely irregular. The two most common forms for beginners are ich bin (I am) and du bist (you are).",
                examples: [
                    { foreign: "ich bin, du bist, er/sie ist, wir sind, Sie sind", english: "I am, you are, he/she is, we are, you (formal) are" },
                    { foreign: "Ich bin müde. Du bist nett.", english: "I am tired. You are nice." },
                ]
            },
            {
                title: "Haben — To Have",
                text: "Haben (to have) is used for possession and as the main auxiliary verb forming the past tense (Perfekt). It also appears in many idiomatic expressions.",
                examples: [
                    { foreign: "ich habe, du hast, er hat, wir haben, sie haben", english: "I have, you have, he has, we have, they have" },
                    { foreign: "Ich habe Hunger.", english: "I am hungry. (lit: I have hunger)" },
                ]
            },
            {
                title: "Noun Gender & Articles",
                text: "The indefinite article is ein for masculine/neuter and eine for feminine. Possessives (mein/meine) follow the same pattern. Always learn a noun together with its article.",
                examples: [
                    { foreign: "ein Bruder (m), eine Schwester (f), ein Kind (n)", english: "a brother, a sister, a child" },
                    { foreign: "Mein Vater, meine Mutter, mein Kind", english: "My father, my mother, my child" },
                ]
            },
            {
                title: "The Four Cases",
                text: "German uses four cases: nominative (subject), accusative (direct object), dative (indirect object), and genitive (possession). Articles change form depending on the case.",
                examples: [
                    { foreign: "Der Hund beißt den Mann.", english: "The dog bites the man. (Nom: der → Acc: den)" },
                    { foreign: "Ich gebe dem Kind ein Buch.", english: "I give the child a book. (Dative: dem)" },
                ]
            },
            {
                title: "Verb-Second Word Order",
                text: "In German main clauses, the conjugated verb must always occupy the second position. If the sentence starts with a time expression or adverb, the subject and verb swap (inversion).",
                examples: [
                    { foreign: "Ich lerne Deutsch.", english: "I learn German. (Subject first)" },
                    { foreign: "Heute lerne ich Deutsch.", english: "Today I learn German. (Adverb first → verb second)" },
                ]
            },
        ],

        learningPath: [
            {
                section: "Die Basen",
                icon: "🌱",
                description: "Start with the essentials — greet people and count to ten.",
                nodes: [
                    {
                        id: "de-greetings",
                        name: "Greetings",
                        icon: "👋",
                        description: "Hallo und Tschüss. Hello and goodbye",
                        skills: ["Hallo", "Tschüss", "Auf Wiedersehen", "Und", "Mit"],
                        xp: 20,
                        status: "active"
                    },
                    {
                        id: "de-family",
                        name: "Family :)",
                        icon: "👨‍👩‍👧",
                        description: "Das Mutter ist sehr klüg",
                        skills: ["Mutter", "Vater", "Bruder", "Schwester", "Sohn", "Tochter"],
                        xp: 20,
                        status: "active"
                    },
                ],
            },
            {
                section: "Das Essen",
                icon: "🧾",
                description: "Learn some food terms",
                nodes: [
                    {
                        id: "de-drinks",
                        name: "Drinks",
                        icon: "🥛",
                        description: "Tee mit Milch, bitte",
                        skills: ["Tee", "Milch", "Kaffee", "Wein", "Bier", "Mit", "Und"],
                        xp: 20,
                        status: "active"
                    },
                    {
                        id: "de-food",
                        name: "Food",
                        icon: "🥪",
                        description: "Brot und Milich, bitte",
                        skills: ["Sandwich", "Brot", "Hähnchen", "Fisch", "Reis", "Gemüse", "Obst", "Käse", "Ei"],
                        xp: 20,
                        status: "active"
                    },
                ],
            },
            {
                section: "Ein, Zwei, Drei",
                icon: "🔢",
                description: "Learn to count up to twenty",
                nodes: [
                    {
                        id: "de-numbers",
                        name: "Counting",
                        icon: "🔢",
                        description: "Learn to count to 10",
                        skills: ["Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"],
                        xp: 20,
                        status: "active"
                    },
                    {
                        id: "de-numbers2",
                        name: "Counting From 11 To 20",
                        icon: "🔢",
                        description: "Learn to count from 11 to 20",
                        skills: ["Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechszehn", "Siebenzehn", "Achtzehn", "Neunzehn", "Zwanzig"],
                        xp: 20,
                        status: "active"
                    },
                    {
                        id: "de-numbers3",
                        name: "Counting Up To 20",
                        icon: "🔢",
                        description: "Learn to count from 11 to 20",
                        skills: [
                            "Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", // 1 To 10
                            "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechszehn", "Siebenzehn", "Achtzehn", "Neunzehn", "Zwanzig" // 11 To 20
                        ],
                        xp: 20,
                        status: "active"
                    },
                ],
            },
        ],
    },

    // ────────────────────────────────────────────────────────────────
    //                          LANG. UPD. #2 
    // ────────────────────────────────────────────────────────────────

    // ─────────────────────────── RUSSIAN ────────────────────────────

    {
        id: "russian",
        name: "Russian",
        native: "Русский",
        flag: "🇷🇺",

        vocab: [
            { foreign: "Привет", english: "Hello (informal)", category: "Basics" },
            { foreign: "Здравствуйте", english: "Hello (formal)", category: "Basics" },
            { foreign: "До свидания", english: "Goodbye", category: "Basics" },
            { foreign: "Пока", english: "Bye (informal)", category: "Basics" },
            { foreign: "Да", english: "Yes", category: "Basics" },
            { foreign: "Нет", english: "No", category: "Basics" },
            { foreign: "Пожалуйста", english: "Please / You're welcome", category: "Basics" },
            { foreign: "Спасибо", english: "Thank you", category: "Basics" },
            { foreign: "Извините", english: "Excuse me / Sorry", category: "Basics" },
            { foreign: "Простите", english: "I'm sorry (formal)", category: "Basics" },
            { foreign: "Я", english: "I", category: "Pronouns" },
            { foreign: "Ты", english: "You (informal)", category: "Pronouns" },
            { foreign: "Он / Она", english: "He / She", category: "Pronouns" },
            { foreign: "Мы", english: "We", category: "Pronouns" },
            { foreign: "Они", english: "They", category: "Pronouns" },
            { foreign: "Я есть", english: "I am", category: "Pronouns" },
            { foreign: "У меня есть", english: "I have", category: "Pronouns" },
            { foreign: "Я хочу", english: "I want", category: "Pronouns" },
            { foreign: "Я могу", english: "I can", category: "Pronouns" },
            { foreign: "Я иду", english: "I go", category: "Pronouns" },
            { foreign: "Один", english: "One", category: "Numbers" },
            { foreign: "Два", english: "Two", category: "Numbers" },
            { foreign: "Три", english: "Three", category: "Numbers" },
            { foreign: "Четыре", english: "Four", category: "Numbers" },
            { foreign: "Пять", english: "Five", category: "Numbers" },
            { foreign: "Шесть", english: "Six", category: "Numbers" },
            { foreign: "Семь", english: "Seven", category: "Numbers" },
            { foreign: "Восемь", english: "Eight", category: "Numbers" },
            { foreign: "Девять", english: "Nine", category: "Numbers" },
            { foreign: "Десять", english: "Ten", category: "Numbers" },
            { foreign: "Двадцать", english: "Twenty", category: "Numbers" },
            { foreign: "Сто", english: "One hundred", category: "Numbers" },
            { foreign: "Семья", english: "Family", category: "Family" },
            { foreign: "Мать", english: "Mother", category: "Family" },
            { foreign: "Отец", english: "Father", category: "Family" },
            { foreign: "Брат", english: "Brother", category: "Family" },
            { foreign: "Сестра", english: "Sister", category: "Family" },
            { foreign: "Сын", english: "Son", category: "Family" },
            { foreign: "Дочь", english: "Daughter", category: "Family" },
            { foreign: "Дедушка", english: "Grandfather", category: "Family" },
            { foreign: "Бабушка", english: "Grandmother", category: "Family" },
            { foreign: "Дядя", english: "Uncle", category: "Family" },
            { foreign: "Тётя", english: "Aunt", category: "Family" },
            { foreign: "Друг / Подруга", english: "Friend (m/f)", category: "Family" },
            { foreign: "Вода", english: "Water", category: "Food & Drink" },
            { foreign: "Кофе", english: "Coffee", category: "Food & Drink" },
            { foreign: "Вино", english: "Wine", category: "Food & Drink" },
            { foreign: "Пиво", english: "Beer", category: "Food & Drink" },
            { foreign: "Хлеб", english: "Bread", category: "Food & Drink" },
            { foreign: "Мясо", english: "Meat", category: "Food & Drink" },
            { foreign: "Курица", english: "Chicken", category: "Food & Drink" },
            { foreign: "Рыба", english: "Fish", category: "Food & Drink" },
            { foreign: "Рис", english: "Rice", category: "Food & Drink" },
            { foreign: "Овощи", english: "Vegetables", category: "Food & Drink" },
            { foreign: "Фрукты", english: "Fruits", category: "Food & Drink" },
            { foreign: "Молоко", english: "Milk", category: "Food & Drink" },
            { foreign: "Сыр", english: "Cheese", category: "Food & Drink" },
            { foreign: "Яйцо", english: "Egg", category: "Food & Drink" },
            { foreign: "Дом", english: "House", category: "Places" },
            { foreign: "Гостиница", english: "Hotel", category: "Places" },
            { foreign: "Аэропорт", english: "Airport", category: "Places" },
            { foreign: "Вокзал", english: "Train station", category: "Places" },
            { foreign: "Магазин", english: "Shop / Store", category: "Places" },
            { foreign: "Рынок", english: "Market", category: "Places" },
            { foreign: "Больница", english: "Hospital", category: "Places" },
            { foreign: "Пляж", english: "Beach", category: "Places" },
            { foreign: "Банк", english: "Bank", category: "Places" },
            { foreign: "Ресторан", english: "Restaurant", category: "Places" },
            { foreign: "Аптека", english: "Pharmacy", category: "Places" },
            { foreign: "Сегодня", english: "Today", category: "Time" },
            { foreign: "Завтра", english: "Tomorrow", category: "Time" },
            { foreign: "Вчера", english: "Yesterday", category: "Time" },
            { foreign: "Сейчас", english: "Now", category: "Time" },
            { foreign: "Скоро", english: "Soon", category: "Time" },
            { foreign: "Утро", english: "Morning", category: "Time" },
            { foreign: "День", english: "Afternoon / Day", category: "Time" },
            { foreign: "Ночь", english: "Night", category: "Time" },
            { foreign: "Неделя", english: "Week", category: "Time" },
            { foreign: "Месяц", english: "Month", category: "Time" },
            { foreign: "Год", english: "Year", category: "Time" },
            { foreign: "Большой", english: "Big / Large", category: "Descriptions" },
            { foreign: "Маленький", english: "Small", category: "Descriptions" },
            { foreign: "Хороший", english: "Good", category: "Descriptions" },
            { foreign: "Плохой", english: "Bad", category: "Descriptions" },
            { foreign: "Быстрый", english: "Fast", category: "Descriptions" },
            { foreign: "Медленный", english: "Slow", category: "Descriptions" },
            { foreign: "Красивый", english: "Beautiful", category: "Descriptions" },
            { foreign: "Дорогой", english: "Expensive", category: "Descriptions" },
            { foreign: "Дешёвый", english: "Cheap", category: "Descriptions" },
            { foreign: "Новый", english: "New", category: "Descriptions" },
            { foreign: "Старый", english: "Old", category: "Descriptions" },
            { foreign: "Счастливый", english: "Happy", category: "Descriptions" },
            { foreign: "Грустный", english: "Sad", category: "Descriptions" },
            { foreign: "Усталый", english: "Tired", category: "Descriptions" },
            { foreign: "Горячий", english: "Hot", category: "Descriptions" },
            { foreign: "Холодный", english: "Cold", category: "Descriptions" }
        ],

        phrases: [
            { foreign: "Как вас зовут?", english: "What is your name? (formal)", context: "Introductions" },
            { foreign: "Меня зовут…", english: "My name is…", context: "Introductions" },
            { foreign: "Откуда вы?", english: "Where are you from?", context: "Introductions" },
            { foreign: "Я из…", english: "I am from…", context: "Introductions" },
            { foreign: "Очень приятно.", english: "Nice to meet you.", context: "Introductions" },
            { foreign: "Сколько это стоит?", english: "How much does it cost?", context: "Shopping" },
            { foreign: "Есть ли это в другом размере?", english: "Do you have this in another size?", context: "Shopping" },
            { foreign: "Я хочу купить это.", english: "I would like to buy this.", context: "Shopping" },
            { foreign: "Где туалет?", english: "Where is the bathroom?", context: "Travel" },
            { foreign: "Как добраться до…?", english: "How do I get to…?", context: "Travel" },
            { foreign: "Билет до…, пожалуйста.", english: "A ticket to…, please.", context: "Travel" },
            { foreign: "Столик на двоих, пожалуйста.", english: "A table for two, please.", context: "Restaurant" },
            { foreign: "Счёт, пожалуйста.", english: "The bill, please.", context: "Restaurant" },
            { foreign: "Что вы рекомендуете?", english: "What do you recommend?", context: "Restaurant" },
            { foreign: "Я не понимаю.", english: "I don't understand.", context: "Communication" },
            { foreign: "Говорите медленнее, пожалуйста.", english: "Please speak more slowly.", context: "Communication" },
            { foreign: "Вы говорите по-английски?", english: "Do you speak English?", context: "Communication" },
            { foreign: "Я голоден / голодна.", english: "I am hungry (m/f).", context: "Daily Life" },
            { foreign: "Я устал / устала.", english: "I am tired (m/f).", context: "Daily Life" },
            { foreign: "Приятного аппетита!", english: "Enjoy your meal!", context: "Daily Life" }
        ],

        grammar: [
            {
                title: "The Cyrillic Alphabet",
                text: "Russian uses the Cyrillic script with 33 letters. Many letters resemble Latin ones but sound different (e.g. Р = R, Н = N, В = V). Learning the alphabet first makes everything else much easier.",
                examples: [
                    { 'foreign': 'А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я', 'english': 'The 33 letters of the Russian alphabet' }
                ]
            },
            {
                title: "No Articles, No 'To Be' in Present",
                text: "Russian has no definite or indefinite articles (no 'the' or 'a'). The verb 'to be' (быть) is also omitted in present tense sentences, making basic statements very direct.",
                examples: [
                    { 'foreign': 'Это книга.', 'english': 'This is a book. (lit: This book.)' },
                    { 'foreign': 'Я студент.', 'english': 'I am a student. (no verb needed)' }
                ]
            },
            {
                title: "Noun Gender",
                text: "Russian nouns have three genders: masculine, feminine, and neuter. Masculine nouns usually end in a consonant, feminine in -а/-я, and neuter in -о/-е. Gender affects adjective and verb agreement.",
                examples: [
                    { 'foreign': 'брат (m), сестра (f), окно (n)', 'english': 'brother (m), sister (f), window (n)' }
                ]
            },
            {
                title: "Six Cases",
                text: "Russian has six grammatical cases: nominative, genitive, dative, accusative, instrumental, and prepositional. Case endings on nouns, adjectives, and pronouns change depending on the word's role in the sentence.",
                examples: [
                    { 'foreign': 'Я вижу книгу. (Acc.)', 'english': 'I see the book. (книга → книгу in accusative)' },
                    { 'foreign': 'Я иду в магазин. (Acc.)', 'english': 'I am going to the store.' }
                ]
            },
            {
                title: "Verb Aspect: Imperfective vs Perfective",
                text: "Nearly every Russian verb comes in a pair: imperfective (ongoing/repeated action) and perfective (completed action). Choosing the right aspect is one of the most important skills in Russian.",
                examples: [
                    { 'foreign': 'читать (impf.) / прочитать (pf.)', 'english': 'to read (ongoing) / to finish reading (completed)' },
                    { 'foreign': 'Я читал книгу. / Я прочитал книгу.', 'english': 'I was reading the book. / I read (finished) the book.' }
                ]
            },
            {
                title: "Adjective Agreement",
                text: "Adjectives must agree with the noun they modify in gender, number, and case. Masculine adjectives typically end in -ый/-ий, feminine in -ая/-яя, neuter in -ое/-ее, and plural in -ые/-ие.",
                examples: [
                    { 'foreign': 'новый дом (m), новая книга (f), новое окно (n)', 'english': 'new house, new book, new window' }
                ]
            }
        ]
    },

    // ─────────────────────────── UKRAINIAN ────────────────────────────

    {
        id: "ukrainian",
        name: "Ukrainian",
        native: "Українська",
        flag: "🇺🇦",

        vocab: [
            { foreign: "Привіт", english: "Hello (informal)", category: "Basics" },
            { foreign: "Добрий день", english: "Good day (formal)", category: "Basics" },
            { foreign: "До побачення", english: "Goodbye", category: "Basics" },
            { foreign: "Бувай", english: "Bye (informal)", category: "Basics" },
            { foreign: "Так", english: "Yes", category: "Basics" },
            { foreign: "Ні", english: "No", category: "Basics" },
            { foreign: "Будь ласка", english: "Please / You're welcome", category: "Basics" },
            { foreign: "Дякую", english: "Thank you", category: "Basics" },
            { foreign: "Вибачте", english: "Excuse me / Sorry (formal)", category: "Basics" },
            { foreign: "Пробачте", english: "I'm sorry (formal)", category: "Basics" },
            { foreign: "Я", english: "I", category: "Pronouns" },
            { foreign: "Ти", english: "You (informal)", category: "Pronouns" },
            { foreign: "Він / Вона", english: "He / She", category: "Pronouns" },
            { foreign: "Ми", english: "We", category: "Pronouns" },
            { foreign: "Вони", english: "They", category: "Pronouns" },
            { foreign: "Я є", english: "I am", category: "Pronouns" },
            { foreign: "У мене є", english: "I have", category: "Pronouns" },
            { foreign: "Я хочу", english: "I want", category: "Pronouns" },
            { foreign: "Я можу", english: "I can", category: "Pronouns" },
            { foreign: "Я йду", english: "I go", category: "Pronouns" },
            { foreign: "Один", english: "One", category: "Numbers" },
            { foreign: "Два", english: "Two", category: "Numbers" },
            { foreign: "Три", english: "Three", category: "Numbers" },
            { foreign: "Чотири", english: "Four", category: "Numbers" },
            { foreign: "П'ять", english: "Five", category: "Numbers" },
            { foreign: "Шість", english: "Six", category: "Numbers" },
            { foreign: "Сім", english: "Seven", category: "Numbers" },
            { foreign: "Вісім", english: "Eight", category: "Numbers" },
            { foreign: "Дев'ять", english: "Nine", category: "Numbers" },
            { foreign: "Десять", english: "Ten", category: "Numbers" },
            { foreign: "Двадцять", english: "Twenty", category: "Numbers" },
            { foreign: "Сто", english: "One hundred", category: "Numbers" },
            { foreign: "Сім'я", english: "Family", category: "Family" },
            { foreign: "Мати", english: "Mother", category: "Family" },
            { foreign: "Батько", english: "Father", category: "Family" },
            { foreign: "Брат", english: "Brother", category: "Family" },
            { foreign: "Сестра", english: "Sister", category: "Family" },
            { foreign: "Син", english: "Son", category: "Family" },
            { foreign: "Дочка", english: "Daughter", category: "Family" },
            { foreign: "Дідусь", english: "Grandfather", category: "Family" },
            { foreign: "Бабуся", english: "Grandmother", category: "Family" },
            { foreign: "Дядько", english: "Uncle", category: "Family" },
            { foreign: "Тітка", english: "Aunt", category: "Family" },
            { foreign: "Друг / Подруга", english: "Friend (m/f)", category: "Family" },
            { foreign: "Вода", english: "Water", category: "Food & Drink" },
            { foreign: "Кава", english: "Coffee", category: "Food & Drink" },
            { foreign: "Вино", english: "Wine", category: "Food & Drink" },
            { foreign: "Пиво", english: "Beer", category: "Food & Drink" },
            { foreign: "Хліб", english: "Bread", category: "Food & Drink" },
            { foreign: "М'ясо", english: "Meat", category: "Food & Drink" },
            { foreign: "Курка", english: "Chicken", category: "Food & Drink" },
            { foreign: "Риба", english: "Fish", category: "Food & Drink" },
            { foreign: "Рис", english: "Rice", category: "Food & Drink" },
            { foreign: "Овочі", english: "Vegetables", category: "Food & Drink" },
            { foreign: "Фрукти", english: "Fruits", category: "Food & Drink" },
            { foreign: "Молоко", english: "Milk", category: "Food & Drink" },
            { foreign: "Сир", english: "Cheese", category: "Food & Drink" },
            { foreign: "Яйце", english: "Egg", category: "Food & Drink" },
            { foreign: "Будинок", english: "House", category: "Places" },
            { foreign: "Готель", english: "Hotel", category: "Places" },
            { foreign: "Аеропорт", english: "Airport", category: "Places" },
            { foreign: "Вокзал", english: "Train station", category: "Places" },
            { foreign: "Магазин", english: "Shop / Store", category: "Places" },
            { foreign: "Ринок", english: "Market", category: "Places" },
            { foreign: "Лікарня", english: "Hospital", category: "Places" },
            { foreign: "Пляж", english: "Beach", category: "Places" },
            { foreign: "Банк", english: "Bank", category: "Places" },
            { foreign: "Ресторан", english: "Restaurant", category: "Places" },
            { foreign: "Аптека", english: "Pharmacy", category: "Places" },
            { foreign: "Сьогодні", english: "Today", category: "Time" },
            { foreign: "Завтра", english: "Tomorrow", category: "Time" },
            { foreign: "Вчора", english: "Yesterday", category: "Time" },
            { foreign: "Зараз", english: "Now", category: "Time" },
            { foreign: "Скоро", english: "Soon", category: "Time" },
            { foreign: "Ранок", english: "Morning", category: "Time" },
            { foreign: "День", english: "Afternoon / Day", category: "Time" },
            { foreign: "Ніч", english: "Night", category: "Time" },
            { foreign: "Тиждень", english: "Week", category: "Time" },
            { foreign: "Місяць", english: "Month", category: "Time" },
            { foreign: "Рік", english: "Year", category: "Time" },
            { foreign: "Великий", english: "Big / Large", category: "Descriptions" },
            { foreign: "Маленький", english: "Small", category: "Descriptions" },
            { foreign: "Гарний", english: "Good / Nice", category: "Descriptions" },
            { foreign: "Поганий", english: "Bad", category: "Descriptions" },
            { foreign: "Швидкий", english: "Fast", category: "Descriptions" },
            { foreign: "Повільний", english: "Slow", category: "Descriptions" },
            { foreign: "Красивий", english: "Beautiful", category: "Descriptions" },
            { foreign: "Дорогий", english: "Expensive", category: "Descriptions" },
            { foreign: "Дешевий", english: "Cheap", category: "Descriptions" },
            { foreign: "Новий", english: "New", category: "Descriptions" },
            { foreign: "Старий", english: "Old", category: "Descriptions" },
            { foreign: "Щасливий", english: "Happy", category: "Descriptions" },
            { foreign: "Сумний", english: "Sad", category: "Descriptions" },
            { foreign: "Втомлений", english: "Tired", category: "Descriptions" },
            { foreign: "Гарячий", english: "Hot", category: "Descriptions" },
            { foreign: "Холодний", english: "Cold", category: "Descriptions" }
        ],

        phrases: [
            { foreign: "Як вас звати?", english: "What is your name? (formal)", context: "Introductions" },
            { foreign: "Мене звати…", english: "My name is…", context: "Introductions" },
            { foreign: "Звідки ви?", english: "Where are you from?", context: "Introductions" },
            { foreign: "Я з…", english: "I am from…", context: "Introductions" },
            { foreign: "Дуже приємно.", english: "Nice to meet you.", context: "Introductions" },
            { foreign: "Скільки це коштує?", english: "How much does it cost?", context: "Shopping" },
            { foreign: "Чи є це в іншому розмірі?", english: "Do you have this in another size?", context: "Shopping" },
            { foreign: "Я хочу це купити.", english: "I would like to buy this.", context: "Shopping" },
            { foreign: "Де туалет?", english: "Where is the bathroom?", context: "Travel" },
            { foreign: "Як дістатися до…?", english: "How do I get to…?", context: "Travel" },
            { foreign: "Квиток до…, будь ласка.", english: "A ticket to…, please.", context: "Travel" },
            { foreign: "Столик на двох, будь ласка.", english: "A table for two, please.", context: "Restaurant" },
            { foreign: "Рахунок, будь ласка.", english: "The bill, please.", context: "Restaurant" },
            { foreign: "Що ви рекомендуєте?", english: "What do you recommend?", context: "Restaurant" },
            { foreign: "Я не розумію.", english: "I don't understand.", context: "Communication" },
            { foreign: "Говоріть повільніше, будь ласка.", english: "Please speak more slowly.", context: "Communication" },
            { foreign: "Ви розмовляєте англійською?", english: "Do you speak English?", context: "Communication" },
            { foreign: "Я голодний / голодна.", english: "I am hungry (m/f).", context: "Daily Life" },
            { foreign: "Я втомився / втомилася.", english: "I am tired (m/f).", context: "Daily Life" },
            { foreign: "Смачного!", english: "Enjoy your meal!", context: "Daily Life" }
        ],

        grammar: [
            {
                title: "The Ukrainian Alphabet",
                text: "Ukrainian uses a 33-letter Cyrillic alphabet, distinct from Russian. It includes unique letters like І, Ї, Є, and Ґ not found in Russian. The letter Г has a softer 'h' sound (unlike Russian's hard Г).",
                examples: [
                    { 'foreign': 'А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ю Я', 'english': 'The 33 letters of the Ukrainian alphabet' }
                ]
            },
            {
                title: "No Articles, Flexible Word Order",
                text: "Like Russian, Ukrainian has no articles (no 'the' or 'a'). Word order is relatively flexible due to the case system, though Subject-Verb-Object is most common. The verb 'to be' is often omitted in present tense.",
                examples: [
                    { 'foreign': 'Це книга.', 'english': 'This is a book. (lit: This book.)' },
                    { 'foreign': 'Я студент.', 'english': 'I am a student. (no verb needed in present)' }
                ]
            },
            {
                title: "Noun Gender",
                text: "Ukrainian nouns have three genders: masculine, feminine, and neuter. Masculine nouns typically end in a consonant, feminine in -а/-я, and neuter in -о/-е/-я. Gender affects adjective and verb agreement.",
                examples: [
                    { 'foreign': 'брат (m), сестра (f), місто (n)', 'english': 'brother (m), sister (f), city (n)' }
                ]
            },
            {
                title: "Seven Cases",
                text: "Ukrainian has seven grammatical cases: nominative, genitive, dative, accusative, instrumental, locative, and vocative. The vocative case — used when addressing someone directly — is especially well-preserved in Ukrainian.",
                examples: [
                    { 'foreign': 'Мамо! (vocative)', 'english': 'Mom! (directly addressing her — special vocative form)' },
                    { 'foreign': 'Я бачу книгу. (accusative)', 'english': 'I see the book. (книга → книгу)' }
                ]
            },
            {
                title: "Verb Aspect: Imperfective vs Perfective",
                text: "Like Russian, Ukrainian verbs come in imperfective (ongoing/repeated) and perfective (completed) pairs. Choosing the right aspect is fundamental to sounding natural in Ukrainian.",
                examples: [
                    { 'foreign': 'читати (impf.) / прочитати (pf.)', 'english': 'to read (ongoing) / to finish reading (completed)' },
                    { 'foreign': 'Я читав книгу. / Я прочитав книгу.', 'english': 'I was reading the book. / I read (finished) the book.' }
                ]
            },
            {
                title: "Adjective Agreement",
                text: "Ukrainian adjectives agree with the noun in gender, number, and case. Masculine adjectives end in -ий/-ій, feminine in -а/-я, neuter in -е/-є, and plural in -і.",
                examples: [
                    { 'foreign': 'новий дім (m), нова книга (f), нове місто (n)', 'english': 'new house (m), new book (f), new city (n)' }
                ]
            }
        ]
    },

    // ─────────────────────────── ITALIAN ────────────────────────────

    {
        id: "italian",
        name: "Italian",
        native: "Italiano",
        flag: "🇮🇹",

        vocab: [
            { foreign: "Ciao", english: "Hello / Bye (informal)", category: "Basics" },
            { foreign: "Buongiorno", english: "Good morning / Good day", category: "Basics" },
            { foreign: "Buonasera", english: "Good evening", category: "Basics" },
            { foreign: "Arrivederci", english: "Goodbye (formal)", category: "Basics" },
            { foreign: "Sì", english: "Yes", category: "Basics" },
            { foreign: "No", english: "No", category: "Basics" },
            { foreign: "Per favore", english: "Please", category: "Basics" },
            { foreign: "Grazie", english: "Thank you", category: "Basics" },
            { foreign: "Prego", english: "You're welcome", category: "Basics" },
            { foreign: "Scusi", english: "Excuse me (formal)", category: "Basics" },
            { foreign: "Mi dispiace", english: "I'm sorry", category: "Basics" },
            { foreign: "Io", english: "I", category: "Pronouns" },
            { foreign: "Tu", english: "You (informal)", category: "Pronouns" },
            { foreign: "Lui / Lei", english: "He / She", category: "Pronouns" },
            { foreign: "Noi", english: "We", category: "Pronouns" },
            { foreign: "Loro", english: "They", category: "Pronouns" },
            { foreign: "Sono", english: "I am", category: "Pronouns" },
            { foreign: "Ho", english: "I have", category: "Pronouns" },
            { foreign: "Voglio", english: "I want", category: "Pronouns" },
            { foreign: "Posso", english: "I can", category: "Pronouns" },
            { foreign: "Vado", english: "I go", category: "Pronouns" },
            { foreign: "Uno / Una", english: "One", category: "Numbers" },
            { foreign: "Due", english: "Two", category: "Numbers" },
            { foreign: "Tre", english: "Three", category: "Numbers" },
            { foreign: "Quattro", english: "Four", category: "Numbers" },
            { foreign: "Cinque", english: "Five", category: "Numbers" },
            { foreign: "Sei", english: "Six", category: "Numbers" },
            { foreign: "Sette", english: "Seven", category: "Numbers" },
            { foreign: "Otto", english: "Eight", category: "Numbers" },
            { foreign: "Nove", english: "Nine", category: "Numbers" },
            { foreign: "Dieci", english: "Ten", category: "Numbers" },
            { foreign: "Venti", english: "Twenty", category: "Numbers" },
            { foreign: "Cento", english: "One hundred", category: "Numbers" },
            { foreign: "La famiglia", english: "Family", category: "Family" },
            { foreign: "La madre", english: "Mother", category: "Family" },
            { foreign: "Il padre", english: "Father", category: "Family" },
            { foreign: "Il fratello", english: "Brother", category: "Family" },
            { foreign: "La sorella", english: "Sister", category: "Family" },
            { foreign: "Il figlio", english: "Son", category: "Family" },
            { foreign: "La figlia", english: "Daughter", category: "Family" },
            { foreign: "Il nonno", english: "Grandfather", category: "Family" },
            { foreign: "La nonna", english: "Grandmother", category: "Family" },
            { foreign: "Lo zio", english: "Uncle", category: "Family" },
            { foreign: "La zia", english: "Aunt", category: "Family" },
            { foreign: "L'amico / L'amica", english: "Friend (m/f)", category: "Family" },
            { foreign: "L'acqua", english: "Water", category: "Food & Drink" },
            { foreign: "Il caffè", english: "Coffee", category: "Food & Drink" },
            { foreign: "Il vino", english: "Wine", category: "Food & Drink" },
            { foreign: "La birra", english: "Beer", category: "Food & Drink" },
            { foreign: "Il pane", english: "Bread", category: "Food & Drink" },
            { foreign: "La carne", english: "Meat", category: "Food & Drink" },
            { foreign: "Il pollo", english: "Chicken", category: "Food & Drink" },
            { foreign: "Il pesce", english: "Fish", category: "Food & Drink" },
            { foreign: "Il riso", english: "Rice", category: "Food & Drink" },
            { foreign: "Le verdure", english: "Vegetables", category: "Food & Drink" },
            { foreign: "La frutta", english: "Fruit", category: "Food & Drink" },
            { foreign: "Il latte", english: "Milk", category: "Food & Drink" },
            { foreign: "Il formaggio", english: "Cheese", category: "Food & Drink" },
            { foreign: "L'uovo", english: "Egg", category: "Food & Drink" },
            { foreign: "La casa", english: "House", category: "Places" },
            { foreign: "L'albergo", english: "Hotel", category: "Places" },
            { foreign: "L'aeroporto", english: "Airport", category: "Places" },
            { foreign: "La stazione", english: "Train station", category: "Places" },
            { foreign: "Il negozio", english: "Shop / Store", category: "Places" },
            { foreign: "Il mercato", english: "Market", category: "Places" },
            { foreign: "L'ospedale", english: "Hospital", category: "Places" },
            { foreign: "La spiaggia", english: "Beach", category: "Places" },
            { foreign: "La banca", english: "Bank", category: "Places" },
            { foreign: "Il ristorante", english: "Restaurant", category: "Places" },
            { foreign: "La farmacia", english: "Pharmacy", category: "Places" },
            { foreign: "Oggi", english: "Today", category: "Time" },
            { foreign: "Domani", english: "Tomorrow", category: "Time" },
            { foreign: "Ieri", english: "Yesterday", category: "Time" },
            { foreign: "Adesso", english: "Now", category: "Time" },
            { foreign: "Presto", english: "Soon", category: "Time" },
            { foreign: "La mattina", english: "Morning", category: "Time" },
            { foreign: "Il pomeriggio", english: "Afternoon", category: "Time" },
            { foreign: "La notte", english: "Night", category: "Time" },
            { foreign: "La settimana", english: "Week", category: "Time" },
            { foreign: "Il mese", english: "Month", category: "Time" },
            { foreign: "L'anno", english: "Year", category: "Time" },
            { foreign: "Grande", english: "Big / Large", category: "Descriptions" },
            { foreign: "Piccolo", english: "Small", category: "Descriptions" },
            { foreign: "Buono", english: "Good", category: "Descriptions" },
            { foreign: "Cattivo", english: "Bad", category: "Descriptions" },
            { foreign: "Veloce", english: "Fast", category: "Descriptions" },
            { foreign: "Lento", english: "Slow", category: "Descriptions" },
            { foreign: "Bello", english: "Beautiful", category: "Descriptions" },
            { foreign: "Caro", english: "Expensive", category: "Descriptions" },
            { foreign: "Economico", english: "Cheap", category: "Descriptions" },
            { foreign: "Nuovo", english: "New", category: "Descriptions" },
            { foreign: "Vecchio", english: "Old", category: "Descriptions" },
            { foreign: "Felice", english: "Happy", category: "Descriptions" },
            { foreign: "Triste", english: "Sad", category: "Descriptions" },
            { foreign: "Stanco", english: "Tired", category: "Descriptions" },
            { foreign: "Caldo", english: "Hot", category: "Descriptions" },
            { foreign: "Freddo", english: "Cold", category: "Descriptions" }
        ],

        phrases: [
            { foreign: "Come si chiama?", english: "What is your name? (formal)", context: "Introductions" },
            { foreign: "Mi chiamo…", english: "My name is…", context: "Introductions" },
            { foreign: "Di dove è?", english: "Where are you from? (formal)", context: "Introductions" },
            { foreign: "Sono di…", english: "I am from…", context: "Introductions" },
            { foreign: "Piacere.", english: "Nice to meet you.", context: "Introductions" },
            { foreign: "Quanto costa?", english: "How much does it cost?", context: "Shopping" },
            { foreign: "Ha questo in un'altra taglia?", english: "Do you have this in another size?", context: "Shopping" },
            { foreign: "Vorrei comprare questo.", english: "I would like to buy this.", context: "Shopping" },
            { foreign: "Dov'è il bagno?", english: "Where is the bathroom?", context: "Travel" },
            { foreign: "Come arrivo a…?", english: "How do I get to…?", context: "Travel" },
            { foreign: "Un biglietto per…, per favore.", english: "A ticket to…, please.", context: "Travel" },
            { foreign: "Un tavolo per due, per favore.", english: "A table for two, please.", context: "Restaurant" },
            { foreign: "Il conto, per favore.", english: "The bill, please.", context: "Restaurant" },
            { foreign: "Cosa consiglia?", english: "What do you recommend?", context: "Restaurant" },
            { foreign: "Non capisco.", english: "I don't understand.", context: "Communication" },
            { foreign: "Può parlare più lentamente?", english: "Can you speak more slowly?", context: "Communication" },
            { foreign: "Parla inglese?", english: "Do you speak English?", context: "Communication" },
            { foreign: "Ho fame.", english: "I am hungry.", context: "Daily Life" },
            { foreign: "Sono stanco/a.", english: "I am tired (m/f).", context: "Daily Life" },
            { foreign: "Buon appetito!", english: "Enjoy your meal!", context: "Daily Life" }
        ],

        grammar: [
            {
                title: "Il / La / L' / Lo (The)",
                text: "Italian definite articles agree with the gender and first sound of the noun. Il is for most masculine nouns, la for feminine, l' before vowels, and lo before masculine nouns starting with s+consonant, z, or ps.",
                examples: [
                    { 'foreign': "il libro, la casa, l'amico, lo studente", 'english': 'the book (m), the house (f), the friend, the student' }
                ]
            },
            {
                title: "Essere — To Be",
                text: "Essere (to be) is irregular and essential. It describes identity, origin, profession, and permanent traits. It is also the auxiliary for many verbs in the past tense (passato prossimo).",
                examples: [
                    { 'foreign': 'sono, sei, è, siamo, siete, sono', 'english': 'I am, you are, he/she is, we are, you (pl) are, they are' },
                    { 'foreign': 'Sono italiano. / Sono a Roma.', 'english': 'I am Italian. / I am in Rome.' }
                ]
            },
            {
                title: "Avere — To Have",
                text: "Avere (to have) is used for possession and as the main auxiliary in the passato prossimo. Like French, many Italian expressions use avere where English uses 'to be'.",
                examples: [
                    { 'foreign': 'ho, hai, ha, abbiamo, avete, hanno', 'english': 'I have, you have, he has, we have, you (pl) have, they have' },
                    { 'foreign': "Ho fame. / Ho vent'anni.", 'english': 'I am hungry. / I am 20 years old. (lit: I have hunger/20 years)' }
                ]
            },
            {
                title: "Noun Gender & Plural",
                text: "Italian nouns are masculine or feminine. Masculine nouns usually end in -o (plural -i), feminine in -a (plural -e). Nouns ending in -e (plural -i) can be either gender.",
                examples: [
                    { 'foreign': 'il libro → i libri, la casa → le case', 'english': 'the book → the books, the house → the houses' },
                    { 'foreign': 'il padre → i padri (m), la madre → le madri (f)', 'english': 'father/fathers, mother/mothers (-e ending)' }
                ]
            },
            {
                title: "Adjective Agreement",
                text: "Italian adjectives agree with the noun in gender and number. Most end in -o (m. sg.), -a (f. sg.), -i (m. pl.), -e (f. pl.). Adjectives usually follow the noun, though some common ones precede it.",
                examples: [
                    { 'foreign': 'un ragazzo alto / una ragazza alta', 'english': 'a tall boy / a tall girl' },
                    { 'foreign': 'i ragazzi alti / le ragazze alte', 'english': 'the tall boys / the tall girls' }
                ]
            },
            {
                title: "Passato Prossimo (Past Tense)",
                text: "The most common past tense uses avere or essere + past participle. Verbs of motion and change of state use essere, and the participle must agree with the subject's gender and number.",
                examples: [
                    { 'foreign': 'Ho mangiato la pizza.', 'english': 'I ate the pizza. (avere)' },
                    { 'foreign': 'Sono andato/andata al mercato.', 'english': 'I went to the market. (essere + agreement m/f)' }
                ]
            }
        ],
    },

    // ─────────────────────────── FRAMEWORK ────────────────────────────

    {
        id: "languageFramweork",
        name: "framework",
        native: "framework",
        flag: "FW",

        vocab: [
            { foreign: "Example", english: "The English Translation", category: "Examples" },
        ],

        phrases: [
            { foreign: "Example", english: "The Same But A Sentence", context: "Examples" },
        ],

        grammar: [
            {
                title: "Example",
                text: "How Does The Grammar Of This Language Function?",
                examples: [
                    { foreign: "Example", english: "The English Translation" },
                    { foreign: "Example", english: "The English Translation" },
                ]
            },
        ]
    },
];

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let currentLang = null;
let vocabCatFilter = 'All';
let phrasesCatFilter = 'All';
let selectedQuizCats = new Set();
let quizPool = [], quizIndex = 0, quizScore = 0, quizAnswered = false;

let pathProgress = {};
try {
    const saved = localStorage.getItem('lingua_path_progress');
    if (saved) {
        const raw = JSON.parse(saved);
        for (const [k, v] of Object.entries(raw)) pathProgress[k] = new Set(v);
    }
} catch (e) { }

function savePathProgress() {
    try {
        const plain = {};
        for (const [k, v] of Object.entries(pathProgress)) plain[k] = [...v];
        localStorage.setItem('lingua_path_progress', JSON.stringify(plain));
    } catch (e) { }
}

function getNodeStatus(node, allNodes, completedSet) {
    if (completedSet.has(node.id)) return 'done';
    for (const n of allNodes) {
        if (!completedSet.has(n.id)) return n.id === node.id ? 'active' : 'locked';
    }
    return 'locked';
}

// ── BOOT ──────────────────────────────────────────────
function init() {
    renderLangPicker();
    renderNavLangs();
    document.querySelectorAll('.tab').forEach(t =>
        t.addEventListener('click', () => activateTab(t.dataset.tab))
    );
    initSettings();
    applySettings();
}

function renderLangPicker() {
    const el = document.getElementById('langPicker');
    el.innerHTML = '';
    LANGUAGES.forEach(lang => {
        if (lang.id == "languageFramweork") return;
        const card = document.createElement('div');
        card.className = 'lang-card';
        card.id = `langCard-${lang.id}`;
        card.innerHTML = `<span class="lang-flag">${lang.flag}</span>
      <div class="lang-name">${lang.name}</div>
      <div class="lang-native">${lang.native}</div>`;
        card.addEventListener('click', () => selectLang(lang.id));
        el.appendChild(card);
    });
}

function renderNavLangs() {
    const el = document.getElementById('navLangs');
    el.innerHTML = '';
    LANGUAGES.forEach(lang => {
        if (lang.id == "languageFramweork") return;
        const btn = document.createElement('button');
        btn.className = 'nav-lang-btn';
        btn.id = `navBtn-${lang.id}`;
        btn.textContent = `${lang.flag} ${lang.name}`;
        btn.addEventListener('click', () => selectLang(lang.id));
        el.appendChild(btn);
    });
}

function selectLang(id) {
    currentLang = LANGUAGES.find(l => l.id === id);
    if (!currentLang) return;
    vocabCatFilter = phrasesCatFilter = 'All';

    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.nav-lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`langCard-${id}`)?.classList.add('selected');
    document.getElementById(`navBtn-${id}`)?.classList.add('active');

    const area = document.getElementById('lesson-area');
    area.classList.add('visible', 'animate-in');
    setTimeout(() => area.classList.remove('animate-in'), 500);

    activateTab('vocab');
    renderVocab(); renderPhrases(); renderGrammar(); renderPath();
}

// ── TABS ───────────────────────────────────────────────
function activateTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${id}`));
    if (id === 'quiz') renderQuizSetup();
    if (id === 'path') renderPath();
}

// ── VOCAB ──────────────────────────────────────────────
function renderVocab() {
    const lang = currentLang;
    document.getElementById('vocabTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Vocabulary`;
    renderVocabGrid();
}

function renderVocabGrid() {
    const lang = currentLang;
    const cats = ['All', ...new Set(lang.vocab.map(w => w.category))];
    const filtered = vocabCatFilter === 'All' ? lang.vocab : lang.vocab.filter(w => w.category === vocabCatFilter);

    // Filter bar
    const bar = document.getElementById('vocabCatFilter');
    bar.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (cat === vocabCatFilter ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => { vocabCatFilter = cat; renderVocabGrid(); });
        bar.appendChild(btn);
    });

    document.getElementById('vocabCount').innerHTML =
        `Showing <strong>${filtered.length}</strong> of ${lang.vocab.length} words`;

    const grid = document.getElementById('vocabGrid');
    grid.innerHTML = '';
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card animate-in';
        card.innerHTML = `<div class="foreign">${item.foreign}</div>
      <div class="english">${item.english}</div>
      <div class="category-tag">${item.category}</div>`;
        card.addEventListener('click', () => card.classList.toggle('revealed'));
        grid.appendChild(card);
    });
}

// ── PHRASES ────────────────────────────────────────────
function renderPhrases() {
    const lang = currentLang;
    document.getElementById('phrasesTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Phrases`;
    renderPhrasesList();
}

function renderPhrasesList() {
    const lang = currentLang;
    const ctxs = ['All', ...new Set(lang.phrases.map(p => p.context))];
    const filtered = phrasesCatFilter === 'All' ? lang.phrases : lang.phrases.filter(p => p.context === phrasesCatFilter);

    const bar = document.getElementById('phrasesCatFilter');
    bar.innerHTML = '';
    ctxs.forEach(ctx => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (ctx === phrasesCatFilter ? ' active' : '');
        btn.textContent = ctx;
        btn.addEventListener('click', () => { phrasesCatFilter = ctx; renderPhrasesList(); });
        bar.appendChild(btn);
    });

    const list = document.getElementById('phrasesList');
    list.innerHTML = '';
    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = 'phrase-item animate-in';
        item.innerHTML = `<div class="phrase-foreign">${p.foreign}</div>
      <div class="phrase-english">${p.english}</div>
      <div class="phrase-context">${p.context}</div>`;
        list.appendChild(item);
    });
}

// ── GRAMMAR ────────────────────────────────────────────
function renderGrammar() {
    const lang = currentLang;
    document.getElementById('grammarTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Grammar`;
    const section = document.getElementById('grammarSection');
    section.innerHTML = '';
    lang.grammar.forEach(g => {
        const block = document.createElement('div');
        block.className = 'grammar-block animate-in';
        const examples = g.examples.map(e =>
            `<div class="grammar-example">${e.foreign}<span>→ ${e.english}</span></div>`
        ).join('');
        block.innerHTML = `<h3>${g.title}</h3><p>${g.text}</p>${examples}`;
        section.appendChild(block);
    });
}

// ── QUIZ SETUP ─────────────────────────────────────────
function renderQuizSetup() {
    const lang = currentLang;
    if (!lang) return;

    document.getElementById('quizTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Quiz`;
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizActive').classList.remove('running');
    document.getElementById('quizResult').classList.remove('visible');

    const cats = [...new Set(lang.vocab.map(w => w.category))];
    selectedQuizCats = new Set(cats);

    const grid = document.getElementById('quizCatGrid');
    grid.innerHTML = '';

    // "All" toggle button
    const allBtn = document.createElement('button');
    allBtn.className = 'quiz-cat-btn selected';
    allBtn.id = 'quizBtnAll';
    allBtn.textContent = '★ All Categories';
    allBtn.addEventListener('click', () => {
        if (selectedQuizCats.size === cats.length) selectedQuizCats.clear();
        else cats.forEach(c => selectedQuizCats.add(c));
        syncQuizButtons(cats);
    });
    grid.appendChild(allBtn);

    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'quiz-cat-btn selected';
        btn.dataset.cat = cat;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            selectedQuizCats.has(cat) ? selectedQuizCats.delete(cat) : selectedQuizCats.add(cat);
            syncQuizButtons(cats);
        });
        grid.appendChild(btn);
    });

    syncQuizButtons(cats);
}

function syncQuizButtons(cats) {
    cats.forEach(cat => {
        const btn = document.querySelector(`.quiz-cat-btn[data-cat="${cat}"]`);
        if (btn) btn.classList.toggle('selected', selectedQuizCats.has(cat));
    });
    const allBtn = document.getElementById('quizBtnAll');
    if (allBtn) allBtn.classList.toggle('selected', selectedQuizCats.size === cats.length);
    updateQuizMeta();
}

function updateQuizMeta() {
    const lang = currentLang;
    const count = lang.vocab.filter(w => selectedQuizCats.has(w.category)).length;
    document.getElementById('quizMeta').innerHTML =
        `<strong>${count}</strong> word${count !== 1 ? 's' : ''} selected across <strong>${selectedQuizCats.size}</strong> categor${selectedQuizCats.size !== 1 ? 'ies' : 'y'}`;
    const btn = document.getElementById('btnStartQuiz');
    btn.disabled = count < 4;
    btn.textContent = count < 4 ? 'Select at least 4 words to start' : `Start Quiz (${count} words) →`;
}

// ── QUIZ ACTIVE ────────────────────────────────────────
function startQuiz() {
    quizPool = currentLang.vocab
        .filter(w => selectedQuizCats.has(w.category))
        .sort(() => Math.random() - 0.5);
    quizIndex = quizScore = 0;
    quizAnswered = false;

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizResult').classList.remove('visible');
    document.getElementById('quizActive').classList.add('running');
    showQuestion();
}

function showQuestion() {
    if (quizIndex >= quizPool.length) { showResult(); return; }

    const current = quizPool[quizIndex];
    quizAnswered = false;

    const pct = Math.round((quizIndex / quizPool.length) * 100);
    document.getElementById('quizProgressText').textContent = `Question ${quizIndex + 1} of ${quizPool.length}`;
    document.getElementById('quizProgressFill').style.width = pct + '%';
    document.getElementById('quizScoreLive').textContent = `Score: ${quizScore}`;
    document.getElementById('quizWord').textContent = current.foreign;
    document.getElementById('quizCatBadge').textContent = current.category;
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('btnNext').style.display = 'none';

    // Distractors — prefer same category for harder quiz
    const rest = quizPool.filter((_, i) => i !== quizIndex);
    const sameCat = rest.filter(w => w.category === current.category).sort(() => Math.random() - 0.5);
    const diffCat = rest.filter(w => w.category !== current.category).sort(() => Math.random() - 0.5);
    const distractors = [...sameCat, ...diffCat].slice(0, 3);
    const answers = [...distractors, current].sort(() => Math.random() - 0.5);

    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = ans.english;
        btn.addEventListener('click', () => handleAnswer(btn, ans, current));
        opts.appendChild(btn);
    });
}

function handleAnswer(btn, chosen, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    const ok = chosen.english === correct.english;
    if (ok) { btn.classList.add('correct'); quizScore++; }
    else {
        btn.classList.add('wrong');
        document.querySelectorAll('.quiz-opt').forEach(b => {
            if (b.textContent === correct.english) b.classList.add('correct');
        });
    }
    document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
    document.getElementById('quizFeedback').textContent = ok ? '✓ Correct!' : `✗ The answer was: ${correct.english}`;
    document.getElementById('quizFeedback').className = 'quiz-feedback ' + (ok ? 'good' : 'bad');
    document.getElementById('quizScoreLive').textContent = `Score: ${quizScore}`;

    const nb = document.getElementById('btnNext');
    nb.style.display = 'block';
    nb.textContent = quizIndex + 1 >= quizPool.length ? 'See Results →' : 'Next →';
    nb.onclick = () => { quizIndex++; showQuestion(); };
}

function showResult() {
    document.getElementById('quizActive').classList.remove('running');
    const result = document.getElementById('quizResult');
    result.classList.add('visible');

    const total = quizPool.length;
    const pct = Math.round((quizScore / total) * 100);
    let emoji = '🌱', label = "Keep practising — you'll get there!";
    if (pct == 100) { emoji = '🎉🏆🎉'; label = 'Outstanding! A perfect score!'; }
    else if (pct >= 90) { emoji = '🏆'; label = 'Outstanding! Near-perfect score!'; }
    else if (pct >= 75) { emoji = '🎉'; label = "Great work! You're making real progress."; }
    else if (pct >= 50) { emoji = '👍'; label = 'Good effort — review the ones you missed.'; }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultScore').textContent = `${quizScore} / ${total}`;
    document.getElementById('resultLabel').textContent = label;
}

function backToSetup() {
    document.getElementById('quizResult').classList.remove('visible');
    document.getElementById('quizActive').classList.remove('running');
    renderQuizSetup();
}

// ── LEARNING PATH ──────────────────────────────────────
function renderPath() {
    const lang = currentLang;
    const container = document.getElementById('pathContent');
    container.innerHTML = '';

    document.getElementById('pathTitle').innerHTML =
        `<span>${lang.flag}</span> ${lang.name} — <span>Learning Path</span>`;

    if (!lang.learningPath || lang.learningPath.length === 0) {
        container.innerHTML = `
          <div class="path-empty">
            <div class="path-empty-icon">🗺️</div>
            <h3>No Learning Path Yet</h3>
            <p>Concact a devolper of <code>Lingua</code> to get a learning path for this language.</p>
          </div>`;
        return;
    }

    const completed = pathProgress[lang.id] || new Set();
    const allNodes = lang.learningPath.flatMap(s => s.nodes);
    const doneCount = allNodes.filter(n => completed.has(n.id)).length;
    const totalCount = allNodes.length;
    const pct = Math.round((doneCount / totalCount) * 100);

    // ── Overall progress bar ──
    const overallBar = document.createElement('div');
    overallBar.style.cssText = 'display:flex;flex-direction:column;align-items:center;';
    overallBar.innerHTML = `
        <div class="path-overall-bar animate-in">
          <div class="path-overall-emoji">${lang.flag}</div>
          <div class="path-overall-info">
            <div class="path-overall-title">Overall Progress</div>
            <div class="path-overall-track">
              <div class="path-overall-fill" style="width:${pct}%"></div>
            </div>
            <div class="path-overall-pct">${doneCount} of ${totalCount} skills complete · ${pct}%</div>
          </div>
        </div>`;
    container.appendChild(overallBar);

    // ── Legend ──
    const legendWrap = document.createElement('div');
    legendWrap.style.cssText = 'display:flex;justify-content:center;margin-bottom:2rem;';
    legendWrap.innerHTML = `
        <div class="path-legend">
          <div class="path-legend-item"><div class="legend-dot done"></div> Completed</div>
          <div class="path-legend-item"><div class="legend-dot active"></div> In Progress</div>
          <div class="path-legend-item"><div class="legend-dot locked"></div> Locked</div>
        </div>`;
    container.appendChild(legendWrap);

    // ── Track ──
    const track = document.createElement('div');
    track.className = 'path-track';

    const zigzag = ['offset-center', 'offset-right', 'offset-center', 'offset-left'];
    let nodeGlobalIndex = 0;

    lang.learningPath.forEach((section, sIdx) => {
        const secDone = section.nodes.filter(n => completed.has(n.id)).length;

        const banner = document.createElement('div');
        banner.className = 'path-section-banner animate-in';
        banner.innerHTML = `
          <div class="path-section-icon">${section.icon}</div>
          <div class="path-section-info">
            <div class="path-section-title">${section.section}</div>
            <div class="path-section-subtitle">${section.description}</div>
          </div>
          <div class="path-section-progress">${secDone}/${section.nodes.length}</div>`;
        track.appendChild(banner);

        section.nodes.forEach((node, nIdx) => {
            const status = getNodeStatus(node, allNodes, completed);

            if (nIdx > 0 || sIdx > 0) {
                const prevNode = nIdx > 0
                    ? section.nodes[nIdx - 1]
                    : lang.learningPath[sIdx - 1].nodes.slice(-1)[0];
                const prevStatus = getNodeStatus(prevNode, allNodes, completed);
                const conn = document.createElement('div');
                conn.className = 'path-connector' + (prevStatus === 'done' ? ' done' : '');
                track.appendChild(conn);
            }

            const offsetClass = zigzag[nodeGlobalIndex % zigzag.length];
            nodeGlobalIndex++;

            const row = document.createElement('div');
            row.className = `path-row ${offsetClass} animate-in`;

            const statusLabel = { done: '✓ Done', active: '▶ Current', locked: '🔒 Locked' }[status];

            row.innerHTML = `
            <button class="path-node-btn ${status}" data-node-id="${node.id}">
              ${status === 'done' ? '<div class="path-node-crown">⭐</div>' : ''}
              <span>${node.icon}</span>
              <div class="path-node-xp">+${node.xp} XP</div>
            </button>
            <div class="path-node-label">
              <div class="path-node-name">${node.name}</div>
              <div class="path-node-desc">${node.description}</div>
              <span class="path-node-tag ${status}">${statusLabel}</span>
            </div>`;

            row.querySelector('.path-node-btn').addEventListener('click', () => openPathModal(node, section, status));
            track.appendChild(row);
        });
    });

    container.appendChild(track);
}

// ── PATH MODAL ─────────────────────────────────────────
let _modalNode = null;
let _modalSection = null;

function openPathModal(node, section, status) {
    _modalNode = node;
    _modalSection = section;

    document.getElementById('pmIcon').textContent = node.icon;
    document.getElementById('pmTitle').textContent = node.name;
    document.getElementById('pmSection').textContent = section.section;
    document.getElementById('pmDesc').textContent = node.description;

    document.getElementById('pmSkills').innerHTML = node.skills
        .map(s => `<span class="path-modal-skill-tag">${s}</span>`).join('');

    const cta = document.getElementById('pmCta');
    if (status === 'done') {
        cta.textContent = '↩ Practice Again';
        cta.className = 'path-modal-cta';
        console.log(section)
        cta.onclick = () => { closePathModal(); startUnitQuiz(node, section); };
    } else if (status === 'active') {
        cta.textContent = `▶ Start Unit Quiz — +${node.xp} XP`;
        cta.className = 'path-modal-cta';
        cta.onclick = () => { closePathModal(); startUnitQuiz(node, section); };
    } else {
        cta.textContent = '🔒 Complete previous skills to unlock';
        cta.className = 'path-modal-cta locked-cta';
        cta.onclick = null;
    }

    document.getElementById('pathModalOverlay').classList.add('open');
}

function markNodeComplete(nodeId) {
    const langId = currentLang.id;
    if (!pathProgress[langId]) pathProgress[langId] = new Set();
    pathProgress[langId].add(nodeId);
    savePathProgress();
    closePathModal();
    renderPath();
}

function closePathModal() {
    document.getElementById('pathModalOverlay').classList.remove('open');
}

document.getElementById('pathModalOverlay').addEventListener('click', function (e) {
    if (e.target === this) closePathModal();
});

// ══════════════════════════════════════════════════════
//  UNIT QUIZ
// ══════════════════════════════════════════════════════
let uqNode = null, uqSection = null;
let uqPool = [], uqIndex = 0, uqScore = 0, uqAnswered = false;
const UQ_PASS_THRESHOLD = 0.75; // 75% to pass

function buildUnitQuizPool(node) {
    const lang = currentLang;

    const skillKeywords = node.skills.map(s =>
        normalize(s)
    );

    const pool = lang.vocab.filter(w =>
        skillKeywords.includes(normalize(w.foreign))
    );

    console.log("keywords:", skillKeywords);
    console.log("pool:", pool);

    return shuffleAndLimit(pool);
}

function normalize(str) {
    return str
        .toLowerCase()
        .trim()
        .normalize("NFD") // remove accents (ü → u)
        .replace(/[\u0300-\u036f]/g, "");
}

function shuffleAndLimit(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(10, shuffled.length));
}

function startUnitQuiz(node, section) {
    uqNode = node;
    uqSection = section;
    uqPool = buildUnitQuizPool(node);
    uqIndex = 0; uqScore = 0; uqAnswered = false;

    document.getElementById('uqIcon').textContent = node.icon;
    document.getElementById('uqTitle').textContent = node.name + ' — Unit Quiz';
    document.getElementById('uqSubtitle').textContent = `${uqPool.length} questions · Pass with ${Math.round(UQ_PASS_THRESHOLD * 100)}% or higher`;

    document.getElementById('uqResult').classList.remove('visible');
    document.getElementById('uqQuestionArea').style.display = 'block';

    document.getElementById('unitQuizOverlay').classList.add('open');
    showUQQuestion();
}

function showUQQuestion() {
    if (uqIndex >= uqPool.length) { showUQResult(); return; }

    const current = uqPool[uqIndex];
    uqAnswered = false;
    const pct = Math.round((uqIndex / uqPool.length) * 100);
    document.getElementById('uqProgressFill').style.width = pct + '%';
    document.getElementById('uqQLabel').textContent = `Question ${uqIndex + 1} of ${uqPool.length}`;
    document.getElementById('uqWord').textContent = current.foreign;
    document.getElementById('uqFeedback').textContent = '';
    document.getElementById('uqFeedback').className = 'uq-feedback';
    document.getElementById('uqNext').style.display = 'none';

    // Build distractors from full vocab pool
    const allVocab = currentLang.vocab;
    const others = allVocab.filter((_, i) => allVocab[i].foreign !== current.foreign);
    const sameCat = others.filter(w => w.category === current.category).sort(() => Math.random() - 0.5);
    const diffCat = others.filter(w => w.category !== current.category).sort(() => Math.random() - 0.5);
    const distractors = [...sameCat, ...diffCat].slice(0, 3);
    const answers = [...distractors, current].sort(() => Math.random() - 0.5);

    const opts = document.getElementById('uqOptions');
    opts.innerHTML = '';
    answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'uq-opt';
        btn.textContent = ans.english;
        btn.addEventListener('click', () => handleUQAnswer(btn, ans, current));
        opts.appendChild(btn);
    });
}

function handleUQAnswer(btn, chosen, correct) {
    if (uqAnswered) return;
    uqAnswered = true;
    const ok = chosen.english === correct.english;
    if (ok) { btn.classList.add('correct'); uqScore++; }
    else {
        btn.classList.add('wrong');
        document.querySelectorAll('.uq-opt').forEach(b => {
            if (b.textContent === correct.english) b.classList.add('correct');
        });
    }
    document.querySelectorAll('.uq-opt').forEach(b => b.disabled = true);
    const fb = document.getElementById('uqFeedback');
    fb.textContent = ok ? '✓ Correct!' : `✗ Answer: ${correct.english}`;
    fb.className = 'uq-feedback ' + (ok ? 'good' : 'bad');

    const nb = document.getElementById('uqNext');
    nb.style.display = 'block';
    nb.textContent = uqIndex + 1 >= uqPool.length ? 'See Results →' : 'Next →';
    nb.onclick = () => { uqIndex++; showUQQuestion(); };
}

function showUQResult() {
    document.getElementById('uqQuestionArea').style.display = 'none';
    document.getElementById('uqProgressFill').style.width = '100%';
    const result = document.getElementById('uqResult');
    result.classList.add('visible');

    const total = uqPool.length;
    const pct = uqScore / total;
    const passed = pct >= UQ_PASS_THRESHOLD;

    let emoji = pct === 1 ? '🎉🏆🎉' : pct >= 0.9 ? '🏆' : pct >= UQ_PASS_THRESHOLD ? '🎉' : '📚';
    let msg = pct === 1 ? 'Perfect score! This skill is yours.' :
        pct >= 0.9 ? 'Outstanding — you nailed it!' :
            passed ? "Great job! You've passed this unit." :
                `You need ${Math.round(UQ_PASS_THRESHOLD * 100)}% to pass. Review and try again!`;

    document.getElementById('uqResultEmoji').textContent = emoji;
    document.getElementById('uqResultScore').textContent = `${uqScore} / ${total}`;
    document.getElementById('uqResultMsg').textContent = msg;

    const passBtn = document.getElementById('uqBtnPass');
    const allNodes = currentLang.learningPath.flatMap(s => s.nodes);
    const completed = pathProgress[currentLang.id] || new Set();
    const status = getNodeStatus(uqNode, allNodes, completed);

    if (passed && status !== 'done') {
        passBtn.style.display = 'inline-block';
        passBtn.onclick = () => { markNodeCompleteFromQuiz(uqNode.id); };
    } else if (passed && status === 'done') {
        passBtn.style.display = 'none';
    } else {
        passBtn.style.display = 'none';
    }
}

function markNodeCompleteFromQuiz(nodeId) {
    const langId = currentLang.id;
    if (!pathProgress[langId]) pathProgress[langId] = new Set();
    pathProgress[langId].add(nodeId);
    savePathProgress();
    closeUnitQuiz();
    renderPath();
}

function retryUnitQuiz() {
    document.getElementById('uqResult').classList.remove('visible');
    document.getElementById('uqQuestionArea').style.display = 'block';
    uqPool = uqPool.sort(() => Math.random() - 0.5);
    uqIndex = 0; uqScore = 0; uqAnswered = false;
    showUQQuestion();
}

function closeUnitQuiz() {
    document.getElementById('unitQuizOverlay').classList.remove('open');
}

document.getElementById('unitQuizOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeUnitQuiz();
});

// ══════════════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════════════
const DEFAULTS = {
    fontSize: 1,
    font: "'DM Sans', sans-serif",
    highlightColor: '#e8c97a',
    accentColor: '#e8c97a',
};
let appSettings = { ...DEFAULTS };

try {
    const saved = localStorage.getItem('lingua_settings');
    if (saved) {
        const raw = JSON.parse(saved);
        if (raw.logoColor && !raw.highlightColor) raw.highlightColor = raw.logoColor;
        appSettings = { ...DEFAULTS, ...raw };
    }
} catch (e) { }

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function applySettings() {
    const root = document.documentElement;
    root.style.setProperty('--font-scale', appSettings.fontSize);
    root.style.setProperty('--body-font', appSettings.font);
    // Highlight color drives logo, hero em, AND the glow
    root.style.setProperty('--logo-color', appSettings.highlightColor);
    root.style.setProperty('--hero-em-color', appSettings.highlightColor);
    const { r, g, b } = hexToRgb(appSettings.highlightColor);
    root.style.setProperty('--hero-glow', `rgba(${r}, ${g}, ${b}, 0.12)`);
    root.style.setProperty('--accent', appSettings.accentColor);
    root.style.setProperty('--accent2', shadeColor(appSettings.accentColor, -20));

    // sync UI controls
    document.getElementById('fontSizeSlider').value = appSettings.fontSize;
    document.getElementById('highlightColorPicker').value = appSettings.highlightColor;
    document.getElementById('accentColorPicker').value = appSettings.accentColor;

    document.querySelectorAll('#fontChips .settings-chip').forEach(c =>
        c.classList.toggle('active', c.dataset.font === appSettings.font));
    syncSwatchActive('highlightSwatches', appSettings.highlightColor);
    syncSwatchActive('accentSwatches', appSettings.accentColor);
}

function syncSwatchActive(containerId, color) {
    document.querySelectorAll(`#${containerId} .settings-swatch`).forEach(s =>
        s.classList.toggle('active', s.dataset.color === color));
}

function saveSettings() {
    try { localStorage.setItem('lingua_settings', JSON.stringify(appSettings)); } catch (e) { }
}

function resetSettings() {
    appSettings = { ...DEFAULTS };
    applySettings();
    saveSettings();
}

function shadeColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, (num >> 8 & 0xff) + amt));
    const B = Math.min(255, Math.max(0, (num & 0xff) + amt));
    return '#' + ((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1);
}

function openSettings() { document.getElementById('settingsOverlay').classList.add('open'); }
function closeSettings() { document.getElementById('settingsOverlay').classList.remove('open'); }

document.getElementById('settingsOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeSettings();
});

function initSettings() {
    document.getElementById('settingsBtn').addEventListener('click', openSettings);

    document.getElementById('fontSizeSlider').addEventListener('input', e => {
        appSettings.fontSize = parseFloat(e.target.value);
        applySettings(); saveSettings();
    });

    document.querySelectorAll('#fontChips .settings-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            appSettings.font = btn.dataset.font;
            applySettings(); saveSettings();
        });
    });

    // Swatch clicks
    document.querySelectorAll('.settings-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
            const target = sw.dataset.target;
            const color = sw.dataset.color;
            if (target === 'highlight') appSettings.highlightColor = color;
            if (target === 'accent') appSettings.accentColor = color;
            applySettings(); saveSettings();
        });
    });

    // Custom color pickers
    document.getElementById('highlightColorPicker').addEventListener('input', e => {
        appSettings.highlightColor = e.target.value;
        syncSwatchActive('highlightSwatches', e.target.value);
        applySettings(); saveSettings();
    });
    document.getElementById('accentColorPicker').addEventListener('input', e => {
        appSettings.accentColor = e.target.value;
        syncSwatchActive('accentSwatches', e.target.value);
        applySettings(); saveSettings();
    });
}

init();
