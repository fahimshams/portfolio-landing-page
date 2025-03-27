// Chatbot data
const chatbotData = {
    greetings: ['hi', 'hello', 'hey', 'greetings'],
    skills: ['skills', 'technologies', 'expertise', 'what can you do'],
    experience: ['experience', 'work', 'background', 'history'],
    projects: ['projects', 'portfolio', 'work samples', 'what have you built'],
    contact: ['contact', 'email', 'reach out', 'get in touch'],
    default: ['I\'m not sure about that. Could you please rephrase your question?']
};

// Chatbot responses
const responses = {
    greeting: 'Hello! I\'m Fahim\'s chatbot. How can I help you today?',
    skills: 'Fahim is skilled in:\n- Frontend: HTML5, CSS3, JavaScript, Angular, React\n- Backend: ASP.NET Core, C#, Python, PHP\n- Tools: Git, Docker, SQL\n- AI/ML\nFeel free to ask about any specific technology!',
    experience: 'Fahim is currently working as a Community College Instructor, teaching technology and programming. He combines technical expertise with a passion for teaching.',
    projects: 'Fahim has worked on various projects including web applications, AI/ML solutions, and educational platforms. Would you like to know more about any specific project?',
    contact: 'You can reach Fahim at pranjolfahim@gmail.com or connect with him on LinkedIn: https://www.linkedin.com/in/fis/'
};

// DOM Elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const closeChatbot = document.getElementById('close-chatbot');
const messagesContainer = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-message');

// Event Listeners
chatbotToggle.addEventListener('click', toggleChatbot);
closeChatbot.addEventListener('click', toggleChatbot);
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Functions
function toggleChatbot() {
    chatbotBox.classList.toggle('active');
    if (chatbotBox.classList.contains('active') && messagesContainer.children.length === 0) {
        addMessage(responses.greeting, 'bot');
    }
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        const response = getBotResponse(message);
        setTimeout(() => addMessage(response, 'bot'), 500);
        userInput.value = '';
    }
}

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    
    // Check for greetings
    if (chatbotData.greetings.some(greeting => message.includes(greeting))) {
        return responses.greeting;
    }
    
    // Check for skills
    if (chatbotData.skills.some(skill => message.includes(skill))) {
        return responses.skills;
    }
    
    // Check for experience
    if (chatbotData.experience.some(exp => message.includes(exp))) {
        return responses.experience;
    }
    
    // Check for projects
    if (chatbotData.projects.some(project => message.includes(project))) {
        return responses.projects;
    }
    
    // Check for contact
    if (chatbotData.contact.some(contact => message.includes(contact))) {
        return responses.contact;
    }
    
    // Default response
    return responses.default[0];
} 