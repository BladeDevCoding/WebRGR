class WarrantyFaq extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: "Що входить у стандартну гарантію?",
                answer: "Стандартна гарантія покриває ремонт або заміну деталей автомобіля, які вийшли з ладу внаслідок виробничого дефекту або дефекту матеріалу. Вона включає більшість механічних та електричних компонентів автомобіля."
            },
            {
                question: "Який термін стандартної гарантії?",
                answer: "Стандартна гарантія на нові автомобілі становить 3 роки або 100 000 км пробігу (залежно від того, що настане раніше). На окремі компоненти можуть діяти спеціальні умови гарантії."
            },
            {
                question: "Чи можна обслуговувати автомобіль не в офіційному сервісному центрі?",
                answer: "Для збереження гарантії рекомендується проходити регулярне технічне обслуговування в офіційних сервісних центрах. Обслуговування в неавторизованих сервісах може призвести до втрати гарантії, якщо буде встановлено, що несправність виникла внаслідок неякісного обслуговування або використання неоригінальних запчастин."
            },
            {
                question: "Що не покривається гарантією?",
                answer: "Гарантія не поширюється на: нормальний знос деталей; регулярне технічне обслуговування; пошкодження внаслідок аварій або неправильної експлуатації; пошкодження внаслідок використання неоригінальних запчастин; модифікації автомобіля, не схвалені виробником."
            },
            {
                question: "Як продовжити гарантію?",
                answer: "Для продовження гарантії необхідно звернутися до офіційного дилера не пізніше ніж за 30 днів до закінчення стандартного гарантійного терміну. Автомобіль повинен пройти технічний огляд, і за результатами огляду вам буде запропоновано один із пакетів продовження гарантії."
            },
            {
                question: "Чи переходить гарантія до нового власника при продажу автомобіля?",
                answer: "Так, гарантія на автомобіль зберігається при зміні власника за умови дотримання всіх гарантійних умов. Новому власнику необхідно повідомити офіційного дилера про зміну власника для оновлення даних у системі."
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="warranty-faq" class="mb-12 scroll-mt-20">
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

customElements.define('warranty-faq', WarrantyFaq); 