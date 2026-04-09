LANGUAGE_REGISTRY.register({
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
        { foreign: "Nicht", english: "Not", category: "Basics"},
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
        { foreign: "Ein", english: "A (masc.)", category: "Basics" },
        { foreign: "Eine", english: "A (fem.)", category: "Basics" },
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
        { foreign: "Eins", english: "One", category: "Numbers" },
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
        { foreign: "Zwölf", english: "Twelve", category: "Numbers" },
        { foreign: "Dreizehn", english: "Thirteen", category: "Numbers" },
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
        { foreign: "Klüg", english: "Smart", category: "Descriptions" },
        { foreign: "Nett", english: "Nice / Kind", category: "Descriptions" },
        { foreign: "Mein (m/n)", english: "My (masc./neuter)", category: "Descriptions" },
        { foreign: "Meine (f/pl)", english: "My (fem./plural)", category: "Descriptions" },
        // Vehicles
        { foreign: "Krankenwagon", english: "Ambulance (lit: sick vehicle)", category: "Vehicle" },
        { foreign: "Flugzeug", english: "Airplane (lit: flying thing)", category: "Vehicle" },
        { foreign: "Boot", english: "Boat", category: "Vehicle" },
        { foreign: "Unterseeboot", english: "Submarine (lit: Undersea boat)", category: "Vehicle" },
        { foreign: "Auto", english: "car", category: "Vehicle" },
        { foreign: "Last-kraft-wagon/LKW", english: "Truck (lit: load-power-vehicle)", category: "Vehicle" },
        { foreign: "Hubschrauber", english: "helicopter", category: "Vehicle" },
        // Sentences,
        { foreign: "Ich bin nett", english: "I am nice", context: "Sentences" },
        { foreign: "Du bist klüg", english: "You are smart", category: "Sentences" },
        { foreign: "", english: "", category: "Sentences" },
        { foreign: "", english: "", category: "Sentences" },
        { foreign: "", english: "", category: "Sentences" },
        { foreign: "", english: "", category: "Sentences" },
    ],

    phrases: [
        // Introductions
        { foreign: "Wie heißen Sie?", english: "What is your name? (formal)", context: "Introductions" },
        { foreign: "Ich heiße…", english: "My name is…", context: "Introductions" },
        { foreign: "Woher kommen Sie?", english: "Where are you from? (formal)", context: "Introductions" },
        { foreign: "Ich komme aus…", english: "I come from…", context: "Introductions" },
        { foreign: "Freut mich.", english: "Nice to meet you.", context: "Introductions" },
        // Shopping
        { foreign: "Was kostet das?", english: "How much does it cost?", context: "Shopping" },
        { foreign: "Haben Sie das in einer anderen Größe?", english: "Do you have this in another size?", context: "Shopping" },
        { foreign: "Ich möchte das kaufen.", english: "I would like to buy this.", context: "Shopping" },
        // Travel
        { foreign: "Wo ist die Toilette?", english: "Where is the bathroom?", context: "Travel" },
        { foreign: "Wie komme ich nach…?", english: "How do I get to…?", context: "Travel" },
        { foreign: "Eine Fahrkarte nach…, bitte.", english: "A ticket to…, please.", context: "Travel" },
        // Restaurant
        { foreign: "Einen Tisch für zwei, bitte.", english: "A table for two, please.", context: "Restaurant" },
        { foreign: "Die Rechnung, bitte.", english: "The bill, please.", context: "Restaurant" },
        { foreign: "Was empfehlen Sie?", english: "What do you recommend?", context: "Restaurant" },
        // Communication
        { foreign: "Ich verstehe nicht.", english: "I don't understand.", context: "Communication" },
        { foreign: "Können Sie langsamer sprechen?", english: "Can you speak more slowly?", context: "Communication" },
        { foreign: "Sprechen Sie Englisch?", english: "Do you speak English?", context: "Communication" },
        // Daily Life
        { foreign: "Ich habe Hunger.", english: "I am hungry.", context: "Daily Life" },
        { foreign: "Ich bin müde.", english: "I am tired.", context: "Daily Life" },
        { foreign: "Guten Appetit!", english: "Enjoy your meal!", context: "Daily Life" },
        // Being Mean
        { foreign: "Du bist ein Idiot.", english: "You are an idiot.", context: "Being Mean" },
        { foreign: "Du bist nicht klüg.", english: "You are not smart.", context: "Being Mean" },
        // Oddly Descriptive                                     
        { foreign: "Backpfeifengesicht", english: "A face that begs to be slapped", context: "Oddly Descriptive" },
        { foreign: "Kummerspeck", english: "Excess weight gained from emotional eating", context: "Oddly Descriptive" },
        { foreign: "Schadenfreude", english: "The feeling of pleasure gained from seeing anothers misfortune", context: "Oddly Descriptive" },
        { foreign: "Lebensabschnittpartner", english: "Temporary lover or partner", context: "Oddly Descriptive" },
        { foreign: "Schnapsidee", english: "An idea you have while drunk that you will regret in the morning", context: "Oddly Descriptive" },
        { foreign: "Verschlimmbessern", english: "To make something worse while trying to make it better", context: "Oddly Descriptive" },
        { foreign: "Dreikäsehoch", english: "Small child (literaly: three cheeses high)", context: "Oddly Descriptive" },
        { foreign: "Unbaumtraurigkeit", english: "Sadness when taking down a christmas tree", context: "Oddly Descriptive" },
        { foreign: "Klugscheißer", english: "A know-it-all", context: "Oddly Descriptive" },
        { foreign: "Wunschkleidungsbehalten", english: "The act of keeping old clothes in hope one day they will fit again", context: "Oddly Descriptive" },
        { foreign: "Luxusproblem", english: "A problem that arises in a priviliged situation and is therefore not really serious", context: "Oddly Descriptive" },
        { foreign: "Hexenschuss", english: "A sudden and severe back pain", context: "Oddly Descriptive" },
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
                    description: "Hallo und Tschüss.",
                    skills: ["Hallo", "Tschüss", "Auf Wiedersehen", "Und", "Mit"],
                    xp: 20,
                    status: "active"
                },
                {
                    id: "de-the",
                    name: "Das, Die, Der, Dem, Den, Des",
                    icon: "🗃️",
                    description: "The, The, The, The, The, & The.",
                    skills: ["Das (n)", "Die (f)", "Der (m)", "Dem (d)", "Den (a-m)", "Des (p)"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-responding",
                    name: "Responding",
                    icon: "🙂‍↔️",
                    description: "Responding To People",
                    skills: ["Bis bald", "Bitte", "Bitte schön", "Danke", "Danke schön", "Entschuldigung", "Es tut mir leid"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-basicsQuiz",
                    name: "Responding To People",
                    icon: "📄",
                    description: "Responding To People",
                    skills: [
                        "Hallo", "Tschüss", "Auf Wiedersehen", "Und", "Mit",                                            // de-greetings
                        "Das (n)", "Die (f)", "Der (f)", "Dem (d)", "Den (a-m)", "Des (p)",                             // de-the
                        "Bis bald", "Bitte", "Bitte schön", "Danke", "Danke schön", "Entschuldigung", "Es tut mir leid" // de-responding
                    ],
                    xp: 40,
                    status: "locked"
                },
            ],
        },
        {
            section: "Die Family Or Smth",
            icon: "👨‍👩‍👧‍👦",
            description: "Learn how to talk about people",
            nodes: [
                {
                    id: "de-siblings",
                    name: "Mein bruder ist nicht nett",
                    icon: "🧒",
                    description: "Mein Bruder ist sehr klüg",
                    skills: ["Familie", "Bruder", "Schwester"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-parents",
                    name: "Meine mutter ist sehr nett",
                    icon: "👨‍👩",
                    description: "Mein Familie ist sehr klüg",
                    skills: ["Familie", "Mutter", "Vater"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-familyQuiz1",
                    name: "Famil Quiz #1",
                    icon: "📄",
                    description: "Das Bruder ist sehr klüg und die Schwester is sehr nett",
                    skills: [
                        "Familie",               // de-everyFamily
                        "Bruder", "Schwester",  // de-siblings
                        "Mutter", "Vater"       // de-parents
                    ],
                    xp: 40,
                    status: "locked"
                },
                {
                    id: "de-kids",
                    name: "Die Kider",
                    icon: "👶",
                    description: "Learn about kids",
                    skills: ["Familie", "Tochter", "Sohn" ],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-grandParents",
                    name: "Großvater und Großmutter",
                    icon: "👨‍👩",
                    description: "Parents, but more",
                    skills: ["Familie", "Vater", "Großvater", "Mutter", "Großmutter" ],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-familyQuiz2",
                    name: "Full Family Quiz",
                    icon: "📄",
                    description: "Das Bruder ist sehr klüg und die Schwester is sehr nett",
                    skills: [
                        "Familie",                                      // de-everyFamily
                        "Bruder", "Schwester",                          // de-siblings
                        "Tochter", "Sohn",                              // de-kids
                        "Vater", "Großvater", "Mutter", "Großmutter"    // de-grandParents
                    ],
                    xp: 40,
                    status: "locked"
                },
            ]
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
                    status: "locked"
                },
                {
                    id: "de-food",
                    name: "Food",
                    icon: "🥪",
                    description: "Brot und Fisch, bitte",
                    skills: ["Sandwich", "Brot", "Hähnchen", "Fisch", "Reis", "Gemüse", "Obst", "Käse", "Ei", "Mit", "Und"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-foodquiz",
                    name: "Food & Drinks",
                    icon: "📄",
                    description: "Brot und Kaffee mit Milch, bitte",
                    skills: [
                        "Tee", "Milch", "Kaffee", "Wein", "Bier", "Mit", "Und",                             // de-drinks
                        "Sandwich", "Brot", "Hähnchen", "Fisch", "Reis", "Gemüse", "Obst", "Käse", "Ei",    // de-food
                    ],
                    xp: 40,
                    status: "locked"
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
                    skills: ["Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-numbers2",
                    name: "Counting From 11 To 20",
                    icon: "🔢",
                    description: "Learn to count from 11 to 20",
                    skills: ["Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechszehn", "Siebenzehn", "Achtzehn", "Neunzehn", "Zwanzig"],
                    xp: 20,
                    status: "locked"
                },
                {
                    id: "de-numbersQuiz",
                    name: "Counting Up To 20",
                    icon: "🔢",
                    description: "Learn to count from 1 to 20",
                    skills: [
                        "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn",                                  // de-numbers
                        "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechszehn", "Siebenzehn", "Achtzehn", "Neunzehn", "Zwanzig"    // de-numbers2
                    ],
                    xp: 40,
                    status: "locked"
                },
            ],
        },
    ],
});
