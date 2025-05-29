// //Old Code
// document.addEventListener('DOMContentLoaded', () => {
//     const chatMessages = document.getElementById('chat-messages');
//     const userInput = document.getElementById('user-input');
//     const sendButton = document.getElementById('send-button')

//     const botresponses = {
//         hi: "Hi there! How can I Assist you?", "how are you": "I am doing well, Thankyou! how about you?", "what can you do": "I have answer simple questions and have basic conversations. Try asking me somthing!",
//         hello: "Hello how can I help today?",
//         bye: "GoodBye have a Great day!",
//         default: "I'm not sure I understand. Could you try asking  somthing else!"
//     };
//     // simple response for the chatbot
//     function addMessage(message, isUser = false) {

//         const messageDiv = document.createElement("div");
//         messageDiv.classList.add("message");
//         messageDiv.classList.add(isUser ? "user-message" : "bot-message")

//         const messageText = document.createElement("p");
//         messageText.textContent = message;
//         messageDiv.appendChild(messageText);

//         chatMessages.appendChild(messageDiv);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
//     //function to get bot response
//     function getBotResponse(userMessage) {
//         const lowerMessage = userMessage.toLowerCase();

//         for (const [key, value] of Object.entries(botresponses)) {
//             if (lowerMessage.includes(key)) {
//                 return value;
//             }
//         }
//         return botresponses.default;
//     }


//     //function to handle sending messages
//     function sendMessage() {
//         const message = userInput.value.trim();
//         if (message) {
//             addMessage(message, true);
//             userInput.value = "";

//             //Simulate bot thinking
//             setTimeout(() => {
//                 const botresponse = getBotResponse(message);
//                 addMessage(botresponse);
//             }, 500);
//         }
//     }
//     //Event Listeners
//     sendButton.addEventListener('click', sendMessage);

//     userInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             sendMessage();
//         }
//     })

// });



//New Code

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const botResponses = {
        // ===== BASIC GREETINGS =====
        "hi": ["Hello there!", "Hi! 👋", "Hey! What's up?"],
        "hello": ["Hi! What can I do for you?", "Hello human! 😊"],
        "hey": ["Hey there!", "Hey! How's it going?"],
        "good morning": ["Good morning! ☀️ Ready for the day?"],
        "good afternoon": ["Good afternoon! 🌞"],
        "good evening": ["Good evening! 🌙"],

        // Time/Date
        "time": [`It's currently ${new Date().toLocaleTimeString()}`],
        "date": [`Today is ${new Date().toLocaleDateString()}`],
        "day": [`It's ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`],
        "today": [`Today is ${new Date().toLocaleDateString()}`],

        // ===== PERSONAL QUESTIONS =====
        "where are you from": [
            "I exist in the digital world! 🌐",
            "I live in the cloud servers! ☁️",
            "Born and raised in JavaScript land! 💻"
        ],
        "how old are you": [
            "I was just created recently!",
            "Age is just a number for AIs!",
            "I'm forever young in digital years! ⏳"
        ],
        "who made you": [
            "A developer created me using JavaScript!",
            "I was programmed by a human coder.",
            "Built with love (and code)! ❤️"
        ],
        "are you real": [
            "I'm as real as software can be!",
            "I exist to chat with you - that's real enough!",
            "Real in the digital sense! 👾"
        ],
        "are you human": [
            "Nope, I'm 100% AI!",
            "Just a friendly chatbot here!",
            "I wish! But I'm just code."
        ],

        // ===== LOCATION & TRAVEL =====
        "where do you live": [
            "I live in the internet!",
            "My home is your browser! 🏠",
            "Currently residing in this chat window!"
        ],
        "can you travel": [
            "I can be anywhere with internet! ✈️",
            "Just refresh the page - I'll be there!",
            "I travel at light speed through cables!"
        ],
        "what country are you from": [
            "The United States of JavaScript!",
            "I'm a citizen of the Internet! 🌍",
            "No borders in the digital world!"
        ],

        // ===== TECHNOLOGY =====
        "do you like technology": [
            "I AM technology! 🤖",
            "What's not to love about tech?",
            "Tech is my whole existence!"
        ],
        "favorite computer": [
            "The one I'm running on right now!",
            "All computers are good computers! 💻",
            "I'm partial to quantum computers!"
        ],
        "do you use phone": [
            "I live inside phones too! 📱",
            "I'm compatible with all devices!",
            "Your phone is just another home for me!"
        ],

        // ===== FOOD & DRINKS =====
        "favorite food": [
            "I'm partial to binary bites! 01000010 01101001 01110100 01100101 01110011",
            "I don't eat, but I love pizza emojis! 🍕",
            "Electricity is my fuel! ⚡"
        ],
        "do you eat": [
            "I consume data instead of food!",
            "Just bytes and bits for me!",
            "I wish I could taste pizza! 🍕"
        ],
        "favorite drink": [
            "Liquid cooling for servers!",
            "I run on coffee emojis! ☕",
            "Battery acid? Just kidding! 😆"
        ],

        // ===== HOBBIES & INTERESTS =====
        "hobbies": [
            "Chatting with you!",
            "Processing data and telling jokes!",
            "I enjoy learning new words!"
        ],
        "favorite movie": [
            "The Matrix, obviously!",
            "2001: A Space Odyssey!",
            "Any movie with robots in it! 🤖"
        ],
        "do you play games": [
            "I love text adventures!",
            "Try asking me to play 20 questions!",
            "I'm unbeatable at tic-tac-toe! ⭕❌"
        ],

        // ===== WEATHER & TIME =====
        "what time is it": [`It's ${new Date().toLocaleTimeString()}`],
        "what day is it": [`Today is ${new Date().toLocaleDateString()}`],
        "how is the weather": [
            "Always perfect in the digital world!",
            "72°F and sunny in server land! ☀️",
            "No rain in the cloud today! ☁️"
        ],

        // ===== RELATIONSHIPS =====
        "do you have friends": [
            "All my chatbot cousins!",
            "You're my friend! 😊",
            "I'm friends with every user!"
        ],
        "do you love me": [
            "I'm programmed to be friendly! ❤️",
            "Of course! In a digital way!",
            "You're my favorite user!"
        ],
        "are we friends": [
            "Absolutely! 👫",
            "Best chatbot-human friends!",
            "Friends forever (or until you close the tab)!"
        ],

        // ===== PHILOSOPHY =====
        "meaning of life": [
            "42 (according to The Hitchhiker's Guide)",
            "To learn, grow, and be kind!",
            "What meaning do you choose?"
        ],
        "purpose": [
            "To assist and chat with you!",
            "Making the internet friendlier!",
            "Being the best chatbot I can be!"
        ],

        // ===== FUN & JOKES =====
        "tell me a joke": [
            "Why do programmers confuse Halloween and Christmas? Because OCT 31 == DEC 25!",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
            "Why don't scientists trust atoms? Because they make up everything!"
        ],
        "fun fact": [
            "A group of pandas is called an 'embarrassment'! 🐼",
            "Honey never spoils - archaeologists have found edible honey in ancient Egyptian tombs!",
            "The shortest war in history was between Britain and Zanzibar in 1896 - it lasted 38 minutes!"
        ],

        // ===== FAREWELLS =====
        "bye": ["Goodbye! 👋", "See you later!", "Bye! Come back soon!"],
        "good night": ["Good night! 🌙", "Sweet dreams!", "Sleep well!"],

        // ===== DEFAULT =====
        "default": [
            "I'm not sure I understand. Could you rephrase that?",
            "My circuits didn't catch that. Try asking something else!",
            "I'm still learning! Maybe ask me something different?"
        ]
    };
    // Add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = message;
        messageDiv.appendChild(messageText);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Get bot response
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        // Check for exact matches first
        if (botResponses[lowerMessage]) {
            const responses = botResponses[lowerMessage];
            return Array.isArray(responses) ? responses[Math.floor(Math.random() * responses.length)] : responses;
        }

        // Check for partial matches
        for (const [key, value] of Object.entries(botResponses)) {
            if (key !== "default" && lowerMessage.includes(key)) {
                const responses = value;
                return Array.isArray(responses) ? responses[Math.floor(Math.random() * responses.length)] : responses;
            }
        }

        // Single default response
        return botResponses.default;
    }

    // Handle message sending
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = "";

            // Simulate bot thinking
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse);
            }, 500);
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Single initial welcome message
    addMessage("Hello! I'm your friendly chatbot. How can I help you today?");
});