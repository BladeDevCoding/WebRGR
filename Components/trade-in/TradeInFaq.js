class TradeInFaq extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: "Які автомобілі приймаються за програмою трейд-ін?",
                answer: "Ми приймаємо автомобілі будь-яких марок та моделей, віком до 10 років. Автомобіль повинен бути в технічно справному стані, без серйозних пошкоджень кузова та мати повний комплект документів."
            },
            {
                question: "Скільки часу займає процедура трейд-ін?",
                answer: "Стандартна процедура трейд-ін займає від 2 до 4 годин, включаючи оцінку вашого автомобіля, оформлення документів та видачу нового автомобіля."
            },
            {
                question: "Чи можна оформити кредит на доплату?",
                answer: "Так, ви можете скористатися нашими кредитними програмами для оплати різниці між вартістю вашого автомобіля та нового. Наші фінансові консультанти допоможуть підібрати оптимальні умови кредитування."
            },
            {
                question: "Які документи потрібні для трейд-ін?",
                answer: "Для оформлення трейд-ін необхідні: паспорт власника, свідоцтво про реєстрацію транспортного засобу, сервісна книжка (за наявності), комплект ключів та документи, що підтверджують право власності на автомобіль."
            },
            {
                question: "Чи можна здати автомобіль з кредитом?",
                answer: "Так, але спочатку необхідно погасити залишок кредиту. У деяких випадках ми можемо допомогти з погашенням кредиту, включивши його суму в загальну вартість нового автомобіля."
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="faq-section" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Часті запитання</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    ${this.faqItems.map((item, index) => `
                        <div class="faq-item border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                            <div class="faq-question p-4 cursor-pointer flex justify-between items-center">
                                <h3 class="text-lg font-medium">${item.question}</h3>
                                <div class="faq-icon ml-4 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                                </div>
                            </div>
                            <div class="faq-answer px-4 pb-4 hidden">
                                <div class="pt-2 pb-3 text-gray-700 dark:text-gray-300">
                                    ${item.answer}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        setTimeout(() => {
            const faqItems = this.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon i');
                
                question.addEventListener('click', () => {
                    
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherIcon = otherItem.querySelector('.faq-icon i');
                            
                            otherAnswer.classList.add('hidden');
                            otherIcon.classList.remove('transform', 'rotate-180');
                        }
                    });
                    
                    
                    answer.classList.toggle('hidden');
                    
                    
                    if (answer.classList.contains('hidden')) {
                        icon.classList.remove('transform', 'rotate-180');
                    } else {
                        icon.classList.add('transform', 'rotate-180');
                    }
                });
            });
        }, 0);
    }
}

customElements.define('trade-in-faq', TradeInFaq); 