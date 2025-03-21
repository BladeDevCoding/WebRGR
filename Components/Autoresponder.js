class Autoresponder extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.messages = [];
        this.faqExpanded = false;
        this.typingTimeout = null;
        this.isTyping = false;
        this.userInfo = {
            name: '',
            phone: '',
            carInterest: ''
        };
        this.conversationStage = 'greeting';
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.darkMode = document.documentElement.classList.contains('dark');
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    this.darkMode = document.documentElement.classList.contains('dark');
                    this.updateTheme();
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
        
        this.messages = [
            { sender: 'bot', text: 'Вітаю! Я віртуальний асистент AutoPrime. Як я можу допомогти вам сьогодні?', time: this.getCurrentTime() }
        ];

        this.faq = [
            { 
                question: 'Як оформити кредит на автомобіль?', 
                answer: 'Для оформлення кредиту потрібен паспорт, ІПН та довідка про доходи. Ми працюємо з багатьма банками та пропонуємо вигідні умови від 0.01% річних. Хочете, щоб наш фінансовий консультант зв\'язався з вами?',
                followUp: true,
                options: ['Так, хочу консультацію', 'Ні, просто цікавлюсь']
            },
            { 
                question: 'Чи можна записатись на тест-драйв?', 
                answer: 'Так, ви можете записатись на тест-драйв будь-якого автомобіля з нашого автопарку. Яка модель вас цікавить?',
                followUp: true,
                expectInput: true
            },
            { 
                question: 'Які гарантії ви надаєте?', 
                answer: 'Ми надаємо гарантію на всі нові автомобілі від 3 до 5 років або 100 000 км пробігу. Детальні умови гарантії залежать від виробника. Вас цікавить конкретна марка?',
                followUp: true,
                options: ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Інша марка']
            },
            { 
                question: 'Як відбувається процес купівлі авто?', 
                answer: 'Процес купівлі включає вибір авто, тест-драйв, оформлення документів та оплату. Весь процес займає від 1 до 3 днів. На якому етапі вибору ви зараз?',
                followUp: true,
                options: ['Тільки починаю шукати', 'Вже обрав модель', 'Готовий до покупки']
            },
            {
                question: 'Які зараз є акційні пропозиції?',
                answer: 'Зараз у нас діють кілька акцій: знижка 10% на нові автомобілі BMW, спеціальні умови кредитування для Toyota та подарунок при купівлі Mercedes. Яка з цих пропозицій вас зацікавила?',
                followUp: true,
                options: ['BMW зі знижкою', 'Кредит на Toyota', 'Подарунок до Mercedes', 'Інші акції']
            }
        ];

        this.render();
        this.setupEventListeners();
        
        this.updateTheme();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --primary-color: #4F46E5;
                    --primary-hover: #4338CA;
                    --light-bg: #F9FAFB;
                    --dark-bg: #111827;
                    --border-color-light: #E5E7EB;
                    --border-color-dark: #374151;
                    --text-color-light: #1F2937;
                    --text-color-dark: #F9FAFB;
                    --text-light-light: #6B7280;
                    --text-light-dark: #9CA3AF;
                    --white: #FFFFFF;
                    --black: #111827;
                    --success: #10B981;
                    --warning: #F59E0B;
                    --error: #EF4444;
                    --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    --shadow-dark: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18);
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }

                .chat-button {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 60px;
                    height: 60px;
                    background-color: var(--primary-color);
                    color: var(--white);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    box-shadow: var(--shadow-light);
                    transition: all 0.3s;
                    z-index: 999;
                }

                .chat-button:hover {
                    background-color: var(--primary-hover);
                    transform: scale(1.05);
                }

                .chat-button svg {
                    width: 28px;
                    height: 28px;
                }

                .chat-window {
                    position: fixed;
                    bottom: 90px;
                    right: 20px;
                    width: 350px;
                    height: 500px;
                    background-color: var(--white);
                    border-radius: 16px;
                    box-shadow: var(--shadow-light);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    z-index: 1000;
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                    pointer-events: none;
                    transition: all 0.3s ease;
                }

                .chat-window.dark {
                    background-color: var(--dark-bg);
                    color: var(--text-color-dark);
                    box-shadow: var(--shadow-dark);
                }

                .chat-window.open {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    pointer-events: all;
                }

                .chat-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px;
                    background-color: var(--primary-color);
                    color: var(--white);
                    border-top-left-radius: 16px;
                    border-top-right-radius: 16px;
                }

                .chat-title {
                    font-weight: bold;
                    font-size: 18px;
                }

                .chat-controls {
                    display: flex;
                    gap: 12px;
                }

                .chat-control-button {
                    background: none;
                    border: none;
                    color: var(--white);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }

                .chat-control-button:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }

                .chat-control-button svg {
                    width: 18px;
                    height: 18px;
                }

                .chat-body {
                    flex: 1;
                    padding: 16px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    background-color: var(--light-bg);
                }

                .chat-window.dark .chat-body {
                    background-color: var(--dark-bg);
                }

                .message {
                    max-width: 80%;
                    padding: 12px;
                    border-radius: 12px;
                    position: relative;
                    word-wrap: break-word;
                    line-height: 1.4;
                }

                .message.bot {
                    align-self: flex-start;
                    background-color: var(--white);
                    color: var(--text-color-light);
                    border-bottom-left-radius: 4px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                }

                .chat-window.dark .message.bot {
                    background-color: #2D3748;
                    color: var(--text-color-dark);
                }

                .message.user {
                    align-self: flex-end;
                    background-color: var(--primary-color);
                    color: var(--white);
                    border-bottom-right-radius: 4px;
                }

                .message-time {
                    font-size: 10px;
                    color: var(--text-light-light);
                    margin-top: 4px;
                    text-align: right;
                }

                .chat-window.dark .message-time {
                    color: var(--text-light-dark);
                }

                .typing-indicator {
                    align-self: flex-start;
                    background-color: var(--white);
                    padding: 12px 16px;
                    border-radius: 12px;
                    border-bottom-left-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .chat-window.dark .typing-indicator {
                    background-color: #2D3748;
                }

                .typing-indicator span {
                    width: 8px;
                    height: 8px;
                    background-color: var(--text-light-light);
                    border-radius: 50%;
                    display: inline-block;
                    animation: typing 1.4s infinite both;
                }

                .chat-window.dark .typing-indicator span {
                    background-color: var(--text-light-dark);
                }

                .typing-indicator span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .typing-indicator span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes typing {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0); }
                }

                .options-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 8px;
                    align-self: flex-start;
                }

                .option-button {
                    background-color: var(--white);
                    color: var(--primary-color);
                    border: 1px solid var(--primary-color);
                    border-radius: 16px;
                    padding: 8px 12px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .chat-window.dark .option-button {
                    background-color: #2D3748;
                    color: var(--text-color-dark);
                    border-color: #4A5568;
                }

                .option-button:hover {
                    background-color: var(--primary-color);
                    color: var(--white);
                }

                .chat-window.dark .option-button:hover {
                    background-color: var(--primary-color);
                    color: var(--white);
                }

                .chat-footer {
                    padding: 12px;
                    border-top: 1px solid var(--border-color-light);
                    background-color: var(--white);
                }

                .chat-window.dark .chat-footer {
                    border-top-color: var(--border-color-dark);
                    background-color: #2D3748;
                }

                .chat-form {
                    display: flex;
                    gap: 8px;
                }

                .chat-input {
                    flex: 1;
                    padding: 10px 16px;
                    border: 1px solid var(--border-color-light);
                    border-radius: 24px;
                    outline: none;
                    font-size: 14px;
                    transition: border-color 0.2s;
                }

                .chat-window.dark .chat-input {
                    background-color: #4A5568;
                    border-color: var(--border-color-dark);
                    color: var(--text-color-dark);
                }

                .chat-input:focus {
                    border-color: var(--primary-color);
                }

                .send-button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: var(--primary-color);
                    color: var(--white);
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .send-button:hover {
                    background-color: var(--primary-hover);
                }

                .send-button svg {
                    width: 20px;
                    height: 20px;
                }

                .notification {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: var(--success);
                    color: var(--white);
                    padding: 12px 16px;
                    border-radius: 8px;
                    box-shadow: var(--shadow-light);
                    z-index: 1001;
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.3s, transform 0.3s;
                }

                .pulse {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
                }

                .unread-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: var(--error);
                    color: var(--white);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                }

                /* Стилі для FAQ */
                .faq-toggle {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--primary-color);
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    margin-top: 8px;
                    padding: 0;
                }

                .chat-window.dark .faq-toggle {
                    color: #A3BFFA;
                }

                .faq-section {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    margin-top: 8px;
                }

                .faq-section.expanded {
                    max-height: 200px;
                    overflow-y: auto;
                }

                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .faq-item {
                    background-color: var(--white);
                    border: 1px solid var(--border-color-light);
                    border-radius: 8px;
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 14px;
                }

                .chat-window.dark .faq-item {
                    background-color: #2D3748;
                    border-color: var(--border-color-dark);
                }

                .faq-item:hover {
                    background-color: var(--light-bg);
                    border-color: var(--primary-color);
                }

                .chat-window.dark .faq-item:hover {
                    background-color: #4A5568;
                    border-color: #A3BFFA;
                }
            </style>

            <button class="chat-button pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>

            <div class="chat-window">
                <div class="chat-header">
                    <div class="chat-title">Чат з менеджером</div>
                    <div class="chat-controls">
                        <button class="chat-control-button theme-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </button>
                        <button class="chat-control-button close-chat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="chat-body">
                    ${this.renderMessages()}
                </div>
                <div class="chat-footer">
                    <button class="faq-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Часті питання
                    </button>
                    <div class="faq-section">
                        <div class="faq-list">
                            ${this.faq.map(item => `
                                <div class="faq-item" data-question="${item.question}" data-answer="${item.answer}">
                                    ${item.question}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <form class="chat-form">
                        <input type="text" class="chat-input" placeholder="Введіть ваше повідомлення...">
                        <button type="submit" class="send-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        `;
    }

    renderMessages() {
        let html = '';
        
        this.messages.forEach(message => {
            html += `
                <div class="message ${message.sender}">
                    ${message.text}
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        });
        
        if (this.isTyping) {
            html += `
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
        }
        
        if (this.currentOptions && this.currentOptions.length > 0) {
            html += `
                <div class="options-container">
                    ${this.currentOptions.map(option => `
                        <button class="option-button" data-value="${option}">${option}</button>
                    `).join('')}
                </div>
            `;
        }
        
        return html;
    }

    setupEventListeners() {
        const chatButton = this.shadowRoot.querySelector('.chat-button');
        const chatWindow = this.shadowRoot.querySelector('.chat-window');
        const closeButton = this.shadowRoot.querySelector('.close-chat');
        const themeToggle = this.shadowRoot.querySelector('.theme-toggle');
        const chatForm = this.shadowRoot.querySelector('.chat-form');
        const chatInput = this.shadowRoot.querySelector('.chat-input');
        const faqToggle = this.shadowRoot.querySelector('.faq-toggle');
        const faqSection = this.shadowRoot.querySelector('.faq-section');
        const faqItems = this.shadowRoot.querySelectorAll('.faq-item');

        chatButton.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            chatWindow.classList.toggle('open', this.isOpen);
            chatButton.classList.remove('pulse');
            
            const unreadBadge = chatButton.querySelector('.unread-badge');
            if (unreadBadge) {
                unreadBadge.remove();
            }
            
            if (this.isOpen) {
                this.scrollToBottom();
                chatInput.focus();
            }
        });

        closeButton.addEventListener('click', () => {
            this.isOpen = false;
            chatWindow.classList.remove('open');
        });

        themeToggle.addEventListener('click', () => {
            this.darkMode = !this.darkMode;
            this.updateTheme();
            
            if (window.toggleTheme) {
                window.toggleTheme();
            }
        });

        faqToggle.addEventListener('click', () => {
            this.faqExpanded = !this.faqExpanded;
            faqSection.classList.toggle('expanded', this.faqExpanded);
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                this.sendMessage(message);
                chatInput.value = '';
            }
        });

        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const question = item.getAttribute('data-question');
                const answer = item.getAttribute('data-answer');
                
                this.addMessage('user', question);
                
                this.showTypingIndicator();
                
                setTimeout(() => {
                    this.hideTypingIndicator();
                    this.addMessage('bot', answer);
                    
                    const faqItem = this.faq.find(f => f.question === question);
                    
                    if (faqItem && faqItem.followUp) {
                        if (faqItem.options) {
                            this.showOptions(faqItem.options);
                        } else if (faqItem.expectInput) {
                        }
                    }
                }, 1500);
                
                this.faqExpanded = false;
                faqSection.classList.remove('expanded');
            });
        });

        this.shadowRoot.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-button')) {
                const value = e.target.getAttribute('data-value');
                this.handleOptionClick(value);
            }
        });
    }

    handleOptionClick(value) {
        this.addMessage('user', value);
        
        this.currentOptions = null;
        this.updateChatBody();
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            if (value === 'Так, хочу консультацію') {
                this.addMessage('bot', 'Чудово! Для організації консультації, будь ласка, залиште свій номер телефону, і наш фінансовий консультант зв\'яжеться з вами протягом робочого дня.');
                this.conversationStage = 'collecting-info';
            } else if (value === 'Ні, просто цікавлюсь') {
                this.addMessage('bot', 'Зрозуміло! Якщо у вас виникнуть додаткові питання щодо кредитування, не соромтеся звертатися. Чим ще я можу допомогти?');
            } else if (value === 'BMW зі знижкою') {
                this.addMessage('bot', 'Зараз діє знижка 10% на всі моделі BMW 2023 року. Це дозволяє заощадити до 10 000$. Яка модель BMW вас цікавить?');
                this.showOptions(['BMW X5', 'BMW 5 Series', 'BMW 3 Series', 'Інша модель']);
            } else if (value === 'Кредит на Toyota') {
                this.addMessage('bot', 'Для Toyota у нас спеціальна кредитна програма: 0.01% на перший рік та 9.9% на наступні роки. Також доступна розстрочка до 7 років. Хочете дізнатися більше?');
                this.showOptions(['Так, розкажіть детальніше', 'Ні, дякую']);
            } else if (value === 'Подарунок до Mercedes') {
                this.addMessage('bot', 'При купівлі будь-якого Mercedes ви отримуєте комплект зимової гуми та 3 ТО в подарунок. Акція діє до кінця місяця. Яка модель Mercedes вас цікавить?');
            } else if (value === 'Інші акції') {
                this.addMessage('bot', 'Також у нас є акції на Audi (кешбек 5%), Volkswagen (додаткове обладнання в подарунок) та Volvo (спеціальна ціна на страхування). Яка з цих пропозицій вас зацікавила?');
                this.showOptions(['Audi з кешбеком', 'Volkswagen з подарунками', 'Volvo зі страхуванням', 'Жодна з перелічених']);
            } else if (['BMW', 'Audi', 'Mercedes', 'Toyota'].includes(value)) {
                this.addMessage('bot', `Для ${value} ми надаємо гарантію 5 років або 150 000 км пробігу. Також доступне розширене гарантійне обслуговування. Хочете дізнатися більше про умови гарантії?`);
                this.showOptions(['Так, розкажіть детальніше', 'Ні, дякую']);
            } else if (value === 'Інша марка') {
                this.addMessage('bot', 'Яка саме марка автомобіля вас цікавить? Ми працюємо з більшістю популярних брендів і можемо надати детальну інформацію про гарантійні умови.');
            } else if (value === 'Тільки починаю шукати') {
                this.addMessage('bot', 'Чудово! На початковому етапі рекомендую визначитися з бюджетом та типом автомобіля. Який тип авто вас цікавить: седан, кросовер, позашляховик чи інший?');
                this.showOptions(['Седан', 'Кросовер', 'Позашляховик', 'Інший тип']);
            } else if (value === 'Вже обрав модель') {
                this.addMessage('bot', 'Чудово! Яку саме модель ви обрали? Я можу надати детальну інформацію про наявність, комплектації та ціни.');
            } else if (value === 'Готовий до покупки') {
                this.addMessage('bot', 'Відмінно! Для завершення покупки вам потрібно відвідати наш автосалон з документами (паспорт та ІПН). Також можна заздалегідь забронювати автомобіль. Хочете, щоб наш менеджер зв\'язався з вами для бронювання?');
                this.showOptions(['Так, хочу забронювати', 'Ні, приїду особисто']);
            } else if (['Седан', 'Кросовер', 'Позашляховик', 'Інший тип'].includes(value)) {
                this.addMessage('bot', `${value} - гарний вибір! У нас є багато моделей цього типу в різних цінових категоріях. Який ваш бюджет на покупку автомобіля?`);
                this.showOptions(['До 20 000$', '20 000$ - 40 000$', '40 000$ - 60 000$', 'Більше 60 000$']);
            } else if (['До 20 000$', '20 000$ - 40 000$', '40 000$ - 60 000$', 'Більше 60 000$'].includes(value)) {
                this.addMessage('bot', `У бюджеті ${value} ми маємо кілька цікавих пропозицій. Хочете, щоб наш консультант підібрав для вас найкращі варіанти?`);
                this.showOptions(['Так, хочу консультацію', 'Ні, сам перегляну каталог']);
            } else if (value === 'Так, хочу забронювати' || value === 'Так, розкажіть детальніше') {
                this.addMessage('bot', 'Для організації дзвінка від менеджера, будь ласка, залиште свій номер телефону:');
                this.conversationStage = 'collecting-info';
            } else {
                this.addMessage('bot', 'Дякую за ваш вибір! Чим ще я можу допомогти?');
            }
        }, 1000);
    }

    sendMessage(text) {
        this.addMessage('user', text);
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            if (this.conversationStage === 'collecting-info') {
                if (/^\+?\d{10,13}$/.test(text.replace(/\s+/g, ''))) {
                    this.userInfo.phone = text;
                    this.addMessage('bot', 'Дякую! Наш менеджер зв\'яжеться з вами найближчим часом. Чи є у вас ще якісь питання?');
                    this.conversationStage = 'answering';
                } else {
                    this.addMessage('bot', 'Будь ласка, введіть коректний номер телефону у форматі +380XXXXXXXXX або 0XXXXXXXXX');
                }
            } else {
                let botResponse = "Дякую за ваше повідомлення! Наш менеджер зв'яжеться з вами найближчим часом.";
                let showOptions = false;
                
                const lowerText = text.toLowerCase();
                
                if (lowerText.includes('ціна') || lowerText.includes('вартість') || lowerText.includes('коштує')) {
                    botResponse = "Ціни на наші автомобілі починаються від 10 000$. Для отримання детальної інформації, будь ласка, вкажіть модель, яка вас цікавить.";
                } else if (lowerText.includes('кредит') || lowerText.includes('розстрочка')) {
                    botResponse = "Ми пропонуємо кредитування від 0.01% річних. Для оформлення кредиту потрібен паспорт, ІПН та довідка про доходи. Хочете дізнатися більше про кредитні програми?";
                    this.showOptions(['Так, розкажіть детальніше', 'Ні, дякую']);
                    showOptions = true;
                } else if (lowerText.includes('тест') || lowerText.includes('драйв')) {
                    botResponse = "Ви можете записатись на тест-драйв будь-якого автомобіля з нашого автопарку. Яка модель вас цікавить?";
                } else if (lowerText.includes('знижк') || lowerText.includes('акці') || lowerText.includes('пропозиц')) {
                    botResponse = "Зараз у нас діють кілька акцій: знижка 10% на нові автомобілі BMW, спеціальні умови кредитування для Toyota та подарунок при купівлі Mercedes. Яка з цих пропозицій вас зацікавила?";
                    this.showOptions(['BMW зі знижкою', 'Кредит на Toyota', 'Подарунок до Mercedes', 'Інші акції']);
                    showOptions = true;
                } else if (lowerText.includes('гарант')) {
                    botResponse = "Ми надаємо гарантію на всі нові автомобілі від 3 до 5 років або 100 000 км пробігу. Детальні умови гарантії залежать від виробника. Вас цікавить конкретна марка?";
                    this.showOptions(['BMW', 'Audi', 'Mercedes', 'Toyota', 'Інша марка']);
                    showOptions = true;
                } else if (lowerText.includes('страхув')) {
                    botResponse = "Ми пропонуємо вигідні умови страхування КАСКО та ОСЦПВ. Також доступні спеціальні програми з розстрочкою платежу. Хочете дізнатися більше?";
                    this.showOptions(['Так, розкажіть детальніше', 'Ні, дякую']);
                    showOptions = true;
                } else if (lowerText.includes('trade-in') || lowerText.includes('трейд-ін') || lowerText.includes('обмін')) {
                    botResponse = "Ми пропонуємо послугу Trade-in: ви можете обміняти свій автомобіль на новий з доплатою. Для оцінки вашого авто потрібно приїхати в автосалон. Хочете записатися на оцінку?";
                    this.showOptions(['Так, хочу записатися', 'Ні, дякую']);
                    showOptions = true;
                } else if (lowerText.includes('bmw') || lowerText.includes('бмв')) {
                    botResponse = "У нас представлений повний модельний ряд BMW. Особливою популярністю користуються моделі X5, 5 Series та 3 Series. Яка модель вас цікавить?";
                    this.showOptions(['BMW X5', 'BMW 5 Series', 'BMW 3 Series', 'Інша модель BMW']);
                    showOptions = true;
                } else if (lowerText.includes('audi') || lowerText.includes('ауді')) {
                    botResponse = "У нас представлений повний модельний ряд Audi. Особливою популярністю користуються моделі Q5, A6 та A4. Яка модель вас цікавить?";
                    this.showOptions(['Audi Q5', 'Audi A6', 'Audi A4', 'Інша модель Audi']);
                    showOptions = true;
                } else if (lowerText.includes('mercedes') || lowerText.includes('мерседес')) {
                    botResponse = "У нас представлений повний модельний ряд Mercedes. Особливою популярністю користуються моделі GLE, E-Class та C-Class. Яка модель вас цікавить?";
                    this.showOptions(['Mercedes GLE', 'Mercedes E-Class', 'Mercedes C-Class', 'Інша модель Mercedes']);
                    showOptions = true;
                } else if (lowerText.includes('toyota') || lowerText.includes('тойота')) {
                    botResponse = "У нас представлений повний модельний ряд Toyota. Особливою популярністю користуються моделі RAV4, Camry та Land Cruiser. Яка модель вас цікавить?";
                    this.showOptions(['Toyota RAV4', 'Toyota Camry', 'Toyota Land Cruiser', 'Інша модель Toyota']);
                    showOptions = true;
                } else if (lowerText.includes('привіт') || lowerText.includes('добрий день') || lowerText.includes('доброго дня') || lowerText.includes('вітаю')) {
                    botResponse = "Вітаю! Радий вас бачити в AutoPrime. Як я можу допомогти вам сьогодні?";
                } else if (lowerText.includes('дякую') || lowerText.includes('спасибі')) {
                    botResponse = "Завжди радий допомогти! Якщо у вас виникнуть ще питання, не соромтеся звертатися.";
                }
                
                this.addMessage('bot', botResponse);
                
                if (!showOptions) {
                    setTimeout(() => {
                        this.showOptions(['Дізнатися про акції', 'Записатися на тест-драйв', 'Розрахувати кредит', 'Зв\'язатися з менеджером']);
                    }, 1000);
                }
            }
        }, 1500);
    }

    addMessage(sender, text) {
        this.messages.push({
            sender,
            text,
            time: this.getCurrentTime()
        });
        
        const chatBody = this.shadowRoot.querySelector('.chat-body');
        chatBody.innerHTML = this.renderMessages();
        
        this.scrollToBottom();
    }

    scrollToBottom() {
        const chatBody = this.shadowRoot.querySelector('.chat-body');
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    getCurrentTime() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        this.shadowRoot.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(10px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showTypingIndicator() {
        this.isTyping = true;
        this.updateChatBody();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        this.updateChatBody();
    }

    showOptions(options) {
        this.currentOptions = options;
        this.updateChatBody();
    }

    updateChatBody() {
        const chatBody = this.shadowRoot.querySelector('.chat-body');
        chatBody.innerHTML = this.renderMessages();
        this.scrollToBottom();
    }

    updateTheme() {
        const chatWindow = this.shadowRoot.querySelector('.chat-window');
        if (chatWindow) {
            if (this.darkMode) {
                chatWindow.classList.add('dark');
            } else {
                chatWindow.classList.remove('dark');
            }
        }
        
        const themeToggle = this.shadowRoot.querySelector('.theme-toggle svg');
        if (themeToggle) {
            if (this.darkMode) {
                themeToggle.innerHTML = `
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            } else {
                themeToggle.innerHTML = `
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            }
        }
    }
}

customElements.define('auto-responder', Autoresponder); 