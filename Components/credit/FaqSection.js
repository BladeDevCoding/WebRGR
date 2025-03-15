class FaqSection extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: 'Чи можна оформити кредит без першого внеску?',
                answer: 'У деяких випадках можливе оформлення кредиту без першого внеску, але це залежить від вашої кредитної історії та фінансового стану. Такі кредити зазвичай мають вищу відсоткову ставку.'
            },
            {
                question: 'Які фактори впливають на схвалення кредиту?',
                answer: 'Основними факторами є ваша кредитна історія, стабільність доходу, розмір першого внеску, вартість автомобіля та термін кредитування. Також враховується ваш вік, сімейний стан та наявність інших кредитних зобов\'язань.'
            },
            {
                question: 'Чи можна достроково погасити кредит?',
                answer: 'Так, всі наші кредитні програми передбачають можливість дострокового погашення без штрафних санкцій. Ви можете погасити кредит повністю або частково в будь-який момент.'
            },
            {
                question: 'Чим відрізняється лізинг від кредиту?',
                answer: 'При кредиті ви стаєте власником автомобіля одразу, а при лізингу — тільки після виплати всіх платежів. Лізинг часто має податкові переваги для бізнесу, а також може включати обслуговування та страхування в щомісячний платіж.'
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
                
                <div class="space-y-4">
                    ${this.renderFaqItems()}
                </div>
            </section>
        `;
    }

    renderFaqItems() {
        return this.faqItems.map((item, index) => `
            <div class="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                <button class="faq-button flex justify-between items-center w-full px-6 py-4 text-left font-medium text-lg focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span>${item.question}</span>
                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                </button>
                <div class="faq-content bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out, opacity 0.3s ease-out; opacity: 0;">
                    <div class="px-6 py-4">
                        <p>${item.answer}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        setTimeout(() => {
            const faqButtons = this.querySelectorAll('.faq-button');
            const faqContents = this.querySelectorAll('.faq-content');
            
            faqButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const icon = this.querySelector('i');
                    
                    const isVisible = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                    
                    // Закриваємо всі відкриті FAQ
                    faqContents.forEach(div => {
                        div.style.maxHeight = '0';
                        div.style.opacity = '0';
                    });
                    
                    // Повертаємо всі іконки в початковий стан
                    faqButtons.forEach(btn => {
                        btn.querySelector('i').style.transform = 'rotate(0deg)';
                        btn.classList.remove('bg-gray-50', 'dark:bg-gray-800');
                    });
                    
                    // Якщо елемент був закритий, відкриваємо його
                    if (!isVisible) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                        icon.style.transform = 'rotate(180deg)';
                        button.classList.add('bg-gray-50', 'dark:bg-gray-800');
                    }
                });
            });
        }, 0);
    }
}

customElements.define('faq-section', FaqSection); 