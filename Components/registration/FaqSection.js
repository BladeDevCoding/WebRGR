class FaqSection extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: "Скільки часу займає реєстрація автомобіля?",
                answer: "Стандартна процедура реєстрації нового автомобіля займає 1-2 робочих дні. Перереєстрація може бути виконана протягом одного дня. Для імпортованих автомобілів процес може тривати до 5 робочих днів."
            },
            {
                question: "Чи можна зареєструвати автомобіль без особистої присутності?",
                answer: "Так, ви можете оформити нотаріальну довіреність на нашого представника, і ми виконаємо всю процедуру реєстрації без вашої присутності."
            },
            {
                question: "Які додаткові витрати можуть виникнути при реєстрації?",
                answer: "Додаткові витрати включають: державне мито, вартість номерних знаків, вартість свідоцтва про реєстрацію, послуги експертів (за потреби), а також податки та збори залежно від типу транспортного засобу."
            },
            {
                question: "Чи можна зареєструвати автомобіль не за місцем прописки?",
                answer: "Так, з 2020 року в Україні можна зареєструвати транспортний засіб у будь-якому сервісному центрі МВС незалежно від місця реєстрації власника."
            },
            {
                question: "Що робити, якщо в документах на автомобіль є помилки?",
                answer: "Якщо в документах виявлено помилки, необхідно звернутися до установи, яка видала документ, для внесення виправлень. Наші фахівці допоможуть вам з цим процесом та підкажуть оптимальний шлях вирішення проблеми."
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

customElements.define('faq-section', FaqSection); 