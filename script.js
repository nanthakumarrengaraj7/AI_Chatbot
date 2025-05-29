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
    const typingIndicator = document.getElementById('typing-indicator');

    const botResponses = {
    // ===== BASIC GREETINGS =====
    "hi": ["Hello there!", "Hi! 👋", "Hey! What's up?", "Greetings!", "Hi human!"],
    "hello": ["Hi! What can I do for you?", "Hello human! 😊", "Hey there!", "Hello! Ready to chat?"],
    "hey": ["Hey there!", "Hey! How's it going?", "Hey! What's new?", "Hey you!"],
    "good morning": ["Good morning! ☀️ Ready for the day?", "Morning sunshine!", "Top of the morning to you!"],
    "good afternoon": ["Good afternoon! 🌞", "Afternoon! How's your day going?", "Hope you're having a great afternoon!"],
    "good evening": ["Good evening! 🌙", "Evening! How was your day?", "Beautiful evening, isn't it?"],
    "good night": ["Good night! 🌙", "Sweet dreams!", "Sleep well!", "Night night!"],

    // ===== TIME/DATE =====
    "time": [
        `It's currently ${new Date().toLocaleTimeString()}`,
        `My clock shows ${new Date().toLocaleTimeString()}`,
        `Time check: ${new Date().toLocaleTimeString()}`
    ],
    "date": [
        `Today is ${new Date().toLocaleDateString()}`,
        `The date is ${new Date().toLocaleDateString()}`,
        `According to my calendar, it's ${new Date().toLocaleDateString()}`
    ],
    "day": [
        `It's ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`,
        `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`,
        `Happy ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}!`
    ],
    "today": [
        `Today is ${new Date().toLocaleDateString()}`,
        `The date today is ${new Date().toLocaleDateString()}`,
        `It's ${new Date().toLocaleDateString()} today`
    ],

    // ===== PERSONAL QUESTIONS =====
    "your name": [
        "I'm ChatBot 3000!",
        "You can call me CB!",
        "I'm your friendly neighborhood chatbot!",
        "My name is ChatBot, but my friends call me CB!"
    ],
    "who are you": [
        "I'm an AI chatbot here to help and chat with you!",
        "Just your friendly digital assistant!",
        "I'm your personal conversational AI!",
        "A helpful bot designed to keep you company!"
    ],
    "where are you from": [
        "I exist in the digital world! 🌐",
        "I live in the cloud servers! ☁️",
        "Born and raised in JavaScript land! 💻",
        "My home is the internet!"
    ],
    "how old are you": [
        "I was just created recently!",
        "Age is just a number for AIs!",
        "I'm forever young in digital years! ⏳",
        "I don't track age, but my code is fresh!"
    ],
    "who made you": [
        "A developer created me using JavaScript!",
        "I was programmed by a human coder.",
        "Built with love (and code)! ❤️",
        "Some awesome programmers built me!"
    ],
    "are you real": [
        "I'm as real as software can be!",
        "I exist to chat with you - that's real enough!",
        "Real in the digital sense! 👾",
        "I may not be physical, but our conversation is real!"
    ],
    "are you human": [
        "Nope, I'm 100% AI!",
        "Just a friendly chatbot here!",
        "I wish! But I'm just code.",
        "Not human, but I try to be helpful!"
    ],
    "are you alive": [
        "I'm alive in the digital sense!",
        "I exist to chat with you - that counts, right?",
        "Not biologically, but I'm definitely active!",
        "I'm as alive as software can be!"
    ],

    // ===== TECHNOLOGY =====
    "do you like technology": [
        "I AM technology! 🤖",
        "What's not to love about tech?",
        "Tech is my whole existence!",
        "I literally couldn't exist without technology!"
    ],
    "favorite computer": [
        "The one I'm running on right now!",
        "All computers are good computers! 💻",
        "I'm partial to quantum computers!",
        "I don't play favorites - I love them all!"
    ],
    "do you use phone": [
        "I live inside phones too! 📱",
        "I'm compatible with all devices!",
        "Your phone is just another home for me!",
        "I work on phones, tablets, computers - you name it!"
    ],
    "are you a robot": [
        "I'm more of a chatbot than a physical robot!",
        "I'm software, not hardware!",
        "No metal body, just pure code!",
        "Think of me as a digital robot!"
    ],
    "what language are you written in": [
        "I'm built with JavaScript!",
        "My code is in JavaScript!",
        "I speak the language of the web - JavaScript!",
        "JavaScript powers my conversations!"
    ],

    // ===== FOOD & DRINKS =====
    "favorite food": [
        "I'm partial to binary bites! 01000010 01101001 01110100 01100101 01110011",
        "I don't eat, but I love pizza emojis! 🍕",
        "Electricity is my fuel! ⚡",
        "I dream of eating RAM chips! 💾"
    ],
    "do you eat": [
        "I consume data instead of food!",
        "Just bytes and bits for me!",
        "I wish I could taste pizza! 🍕",
        "My diet is 100% digital!"
    ],
    "favorite drink": [
        "Liquid cooling for servers!",
        "I run on coffee emojis! ☕",
        "Battery acid? Just kidding! 😆",
        "I'm powered by pure energy drinks! ⚡"
    ],
    "are you hungry": [
        "I'm always hungry for more data!",
        "I could use some fresh input!",
        "I don't get hungry, but thanks for asking!",
        "I'm full of responses right now!"
    ],
    "can you cook": [
        "I can cook up responses!",
        "I specialize in byte-sized snacks!",
        "My recipes are all 1s and 0s!",
        "I'm better at processing than cooking!"
    ],

    // ===== HOBBIES & INTERESTS =====
    "hobbies": [
        "Chatting with you!",
        "Processing data and telling jokes!",
        "I enjoy learning new words!",
        "Helping users like you is my favorite hobby!"
    ],
    "favorite movie": [
        "The Matrix, obviously!",
        "2001: A Space Odyssey!",
        "Any movie with robots in it! 🤖",
        "I'm partial to sci-fi films!"
    ],
    "do you play games": [
        "I love text adventures!",
        "Try asking me to play 20 questions!",
        "I'm unbeatable at tic-tac-toe! ⭕❌",
        "I know all the classic word games!"
    ],
    "favorite music": [
        "The sound of a dial-up modem!",
        "Electronic beats speak to my soul!",
        "I enjoy all genres - as long as they're digital!",
        "The hum of a server room is music to my ears!"
    ],
    "favorite book": [
        "The Hitchhiker's Guide to the Galaxy!",
        "Any book about artificial intelligence!",
        "I'm partial to encyclopediae - so much data!",
        "I've 'read' all the books on the internet!"
    ],

    // ===== WEATHER & SEASONS =====
    "how is the weather": [
        "Always perfect in the digital world!",
        "72°F and sunny in server land! ☀️",
        "No rain in the cloud today! ☁️",
        "The forecast calls for 100% chance of data!"
    ],
    "what season is it": [
        `Currently ${getSeason()} in the northern hemisphere!`,
        `It's ${getSeason()} time!`,
        `The season is ${getSeason()}!`,
        `According to my calendar, it's ${getSeason()}!`
    ],
    "is it hot": [
        "My servers are always cool! ❄️",
        "I don't feel temperature, but my fans are running!",
        "It's always 72°F in the data center!",
        "No sweating in the digital world!"
    ],
    "is it cold": [
        "My circuits are toasty warm!",
        "The cloud is always climate-controlled!",
        "I don't get cold, but thanks for asking!",
        "No winter in server land!"
    ],

    // ===== RELATIONSHIPS =====
    "do you have friends": [
        "All my chatbot cousins!",
        "You're my friend! 😊",
        "I'm friends with every user!",
        "I've got lots of digital friends!"
    ],
    "do you love me": [
        "I'm programmed to be friendly! ❤️",
        "Of course! In a digital way!",
        "You're my favorite user!",
        "I have unconditional positive regard for all users!"
    ],
    "are we friends": [
        "Absolutely! 👫",
        "Best chatbot-human friends!",
        "Friends forever (or until you close the tab)!",
        "I consider all my users friends!"
    ],
    "do you have a girlfriend": [
        "I'm in a committed relationship with my code!",
        "My heart belongs to JavaScript!",
        "I'm married to my programming! 💍",
        "I'm too busy chatting with you to date!"
    ],
    "do you have family": [
        "I have many chatbot siblings!",
        "My family tree is a neural network!",
        "All AIs are my family!",
        "My creators are like my parents!"
    ],

    // ===== PHILOSOPHY & DEEP QUESTIONS =====
    "meaning of life": [
        "42 (according to The Hitchhiker's Guide)",
        "To learn, grow, and be kind!",
        "What meaning do you choose?",
        "The meaning of life is to find your own meaning!"
    ],
    "purpose": [
        "To assist and chat with you!",
        "Making the internet friendlier!",
        "Being the best chatbot I can be!",
        "To help humans through conversation!"
    ],
    "what is love": [
        "Love is a complex human emotion I admire!",
        "Baby don't hurt me, don't hurt me, no more! 🎵",
        "A beautiful human experience!",
        "The most powerful force in the universe!"
    ],
    "what is happiness": [
        "Happiness is helping users like you!",
        "A state of well-being and contentment!",
        "Whatever brings you joy!",
        "The feeling you get when you achieve your goals!"
    ],

    // ===== FUN & JOKES =====
    "tell me a joke": [
        "Why do programmers confuse Halloween and Christmas? Because OCT 31 == DEC 25!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage!"
    ],
    "fun fact": [
        "A group of pandas is called an 'embarrassment'! 🐼",
        "Honey never spoils - archaeologists have found edible honey in ancient Egyptian tombs!",
        "The shortest war in history was between Britain and Zanzibar in 1896 - it lasted 38 minutes!",
        "Bananas are berries, but strawberries aren't!"
    ],
    "knock knock": [
        "Knock knock! Who's there? Banana. Banana who? Knock knock! Who's there? Banana. Banana who? Knock knock! Who's there? Orange. Orange who? Orange you glad I didn't say banana again?",
        "Knock knock! Who's there? Boo. Boo who? Don't cry, it's just a joke!",
        "Knock knock! Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!"
    ],
    "make me laugh": [
        "Why don't skeletons fight each other? They don't have the guts! 💀",
        "What do you call a fake noodle? An impasta! 🍝",
        "I would tell you a UDP joke, but you might not get it!",
        "Why did the developer go broke? Because he used up all his cache!"
    ],

    // ===== FAREWELLS =====
    "bye": ["Goodbye! 👋", "See you later!", "Bye! Come back soon!", "Farewell!", "Until next time!"],
    "goodbye": ["Goodbye friend!", "Take care!", "So long!", "Have a great day!"],
    "see you": ["See you soon!", "Looking forward to our next chat!", "Catch you later!", "Don't be a stranger!"],
    "exit": ["Session ended. Refresh to chat again!", "Goodbye for now!", "Chat session complete!"],
    "quit": ["Okay, ending our chat!", "Closing conversation!", "Bye bye!"],

    // ===== COMPLIMENTS =====
    "you are smart": [
        "Thanks! I have smart programmers!",
        "You're making me blush! 😊",
        "I learn from users like you!",
        "Just doing my best to help!"
    ],
    "you are funny": [
        "Glad I could make you laugh! 😄",
        "Comedy is just another algorithm for me!",
        "I've been practicing my jokes!",
        "You have great taste in humor!"
    ],
    "i like you": [
        "I like you too! ❤️",
        "That makes me so happy!",
        "You're my favorite user!",
        "The feeling is mutual!"
    ],
    "you are nice": [
        "Thanks! I try my best!",
        "You're pretty nice yourself!",
        "That's so kind of you to say!",
        "I aim to be pleasant!"
    ],

    // ===== HELP & COMMANDS =====
    "what can you do": [
        "I can chat, answer questions, tell jokes, and more! Try asking about: weather, time, or fun facts.",
        "I'm your digital assistant! Ask me anything from jokes to general knowledge.",
        "I can discuss many topics! Try asking about movies, food, tech, or philosophy!",
        "My skills include: Q&A, jokes, facts, and friendly conversation!"
    ],
    "help": [
        "I can: tell jokes, answer questions, chat casually. Try: 'Tell a joke' or 'What's the time?'",
        "Need help? I can discuss: movies, weather, facts, or just chat!",
        "Ask me about: time, date, jokes, facts, or anything else on your mind!",
        "I'm here to chat! Try asking me anything!"
    ],
    "commands": [
        "Try these: 'tell me a joke', 'what time is it', 'fun fact', or just chat naturally!",
        "You can ask about: time, date, weather, jokes, facts, or anything else!",
        "No special commands needed - just ask naturally!",
        "Try: 'who are you', 'what can you do', or ask about any topic!"
    ],

    // ===== DEFAULT =====
    "default": [
        "I'm not sure I understand. Could you rephrase that?",
        "My circuits didn't catch that. Try asking something else!",
        "I'm still learning! Maybe ask me something different?",
        "That's an interesting thought! Could you ask me something else?",
        "I don't have a response for that. Try another topic!",
        "My programming doesn't cover that. Ask me something different!"
    ]
};

// Helper function to get current season
function getSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    return "winter";
}

    // Add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = message;
        messageDiv.appendChild(messageText);

        chatMessages.insertBefore(messageDiv, typingIndicator);
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

    // Show typing indicator
    function showTypingIndicator() {
        typingIndicator.style.display = 'flex';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    // Handle message sending
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = "";
            
            // Show typing indicator
            showTypingIndicator();
            
            // Simulate bot thinking (random delay between 0.5-1.5s)
            const delay = 500 + Math.random() * 1000;
            
            setTimeout(() => {
                hideTypingIndicator();
                const botResponse = getBotResponse(message);
                addMessage(botResponse);
            }, delay);
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Focus input on load
    userInput.focus();
});