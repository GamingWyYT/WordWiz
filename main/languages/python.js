LANGUAGE_REGISTRY.register({
    id: "python",
    name: "Python",
    native: "high-level",
    flag: ".py",

    learningPath: [
        {
            section: "Foundations",
            icon: "🌱",
            description: "Build your first programs in python.",
            nodes: [
                {
                    id: "sp-print",
                    name: "Print Statements",
                    icon: "🖨️",
                    description: "Use print statements, learn data types, and variables.",
                    skills: ["data types", "variables", "print()"],
                    xp: 20,
                    status: "done"
                },
                {
                    id: "sp-numbers",
                    name: "DICKS",
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
});
