class TestDriveFaq extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: "Скільки коштує тест-драйв?",
                answer: "Тест-драйв проводиться безкоштовно для всіх потенційних покупців. Ви можете протестувати автомобіль, який вас цікавить, без жодних зобов'язань."
            },
            {
                question: "Яка тривалість тест-драйву?",
                answer: "Стандартна тривалість тест-драйву становить 30-40 хвилин. Цього часу достатньо, щоб відчути автомобіль у різних режимах руху та оцінити його характеристики."
            },
            {
                question: "Чи можна взяти з собою пасажирів?",
                answer: "Так, ви можете взяти з собою до трьох пасажирів, якщо вони досягли повноліття. Це допоможе оцінити комфорт автомобіля для всієї родини."
            },
            {
                question: "Що робити, якщо немає бажаної моделі?",
                answer: "Якщо цікава вам модель тимчасово недоступна для тест-драйву, ви можете залишити заявку, і ми повідомимо вас, коли автомобіль буде доступний."
            },
            {
                question: "Чи потрібно мати досвід водіння?",
                answer: "Так, для участі в тест-драйві необхідно мати водійське посвідчення категорії B та стаж водіння не менше 2 років."
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
                
                <div class="space-y-4">
                    ${this.faqItems.map((item, index) => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <button class="w-full text-left px-6 py-4 flex items-center justify-between" data-faq-toggle>
                                <span class="font-medium">${item.question}</span>
                                <svg class="w-5 h-5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <div class="p-4 bg-white dark:bg-gray-800 hidden">
                                <p class="text-gray-600 dark:text-gray-400">${item.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        this.querySelectorAll('[data-faq-toggle]').forEach(button => {
            button.addEventListener('click', () => {
                // Закриваємо всі відкриті FAQ
                const allFAQContents = this.querySelectorAll('.p-4.bg-white');
                const allFAQArrows = this.querySelectorAll('svg');
                
                allFAQContents.forEach(content => {
                    if (content !== button.nextElementSibling) {
                        content.classList.add('hidden');
                    }
                });
                
                allFAQArrows.forEach(arrow => {
                    if (arrow !== button.querySelector('svg')) {
                        arrow.classList.remove('rotate-180');
                    }
                });
                
                // Перемикаємо поточний FAQ
                const content = button.nextElementSibling;
                const arrow = button.querySelector('svg');
                
                content.classList.toggle('hidden');
                arrow.classList.toggle('rotate-180');
            });
        });
    }
}

customElements.define('test-drive-faq', TestDriveFaq); 