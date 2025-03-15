class FaqSection extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: "Скільки коштує участь у програмі лояльності?",
                answer: "Участь у програмі лояльності AutoPrime абсолютно безкоштовна. Ви отримуєте всі переваги без додаткових платежів."
            },
            {
                question: "Як довго діє картка лояльності?",
                answer: "Картка лояльності діє безстроково. Однак рівень лояльності може змінюватися залежно від вашої активності протягом року."
            },
            {
                question: "Чи можу я передати свою картку лояльності іншій особі?",
                answer: "Ні, картка лояльності є персональною і не може бути передана іншій особі. Вона прив'язана до ваших даних та історії обслуговування."
            },
            {
                question: "Як підвищити свій рівень лояльності?",
                answer: "Рівень лояльності підвищується автоматично при досягненні певної суми покупок або кількості відвідувань сервісу протягом року. Детальні умови переходу між рівнями можна дізнатися у наших менеджерів."
            },
            {
                question: "Що робити, якщо я втратив картку лояльності?",
                answer: "У разі втрати картки, зверніться до нашого менеджера з обслуговування клієнтів. Ми відновимо вашу картку зі збереженням усіх накопичених переваг."
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="faq" class="mb-12 scroll-mt-20">
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
                    // Закриваємо всі інші відповіді
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherIcon = otherItem.querySelector('.faq-icon i');
                            
                            otherAnswer.classList.add('hidden');
                            otherIcon.classList.remove('transform', 'rotate-180');
                        }
                    });
                    
                    // Перемикаємо поточну відповідь
                    answer.classList.toggle('hidden');
                    
                    // Обертаємо іконку
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

customElements.define('faq-section', FaqSection); 