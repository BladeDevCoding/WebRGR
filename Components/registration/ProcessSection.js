class ProcessSection extends HTMLElement {
    constructor() {
        super();
        this.steps = [
            {
                number: '01',
                title: 'Консультація',
                description: 'Безкоштовна консультація з нашим фахівцем щодо процедури реєстрації та необхідних документів.'
            },
            {
                number: '02',
                title: 'Підготовка документів',
                description: 'Збір та підготовка всіх необхідних документів для реєстрації автомобіля.'
            },
            {
                number: '03',
                title: 'Перевірка автомобіля',
                description: 'Огляд транспортного засобу експертом та перевірка відповідності документів.'
            },
            {
                number: '04',
                title: 'Подання документів',
                description: 'Подання документів до сервісного центру МВС та оплата необхідних зборів.'
            },
            {
                number: '05',
                title: 'Отримання результату',
                description: 'Отримання свідоцтва про реєстрацію та номерних знаків.'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="process" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Процес реєстрації</h2>
                
                <div class="relative">
                    <!-- Вертикальна лінія для десктопу -->
                    <div class="hidden md:block absolute left-[45px] top-10 bottom-10 w-1 bg-indigo-100 dark:bg-indigo-900/30"></div>
                    
                    <div class="space-y-8">
                        ${this.steps.map(step => `
                            <div class="flex flex-col md:flex-row">
                                <div class="flex-shrink-0 flex items-start">
                                    <div class="w-[90px] h-[90px] rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl font-bold text-indigo-600 dark:text-indigo-400 relative z-10">
                                        ${step.number}
                                    </div>
                                </div>
                                <div class="mt-4 md:mt-0 md:ml-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 flex-grow">
                                    <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                                    <p class="text-gray-700 dark:text-gray-300">${step.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mt-8 text-center">
                    <a href="#form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-paper-plane mr-2"></i> Замовити послугу
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('process-section', ProcessSection); 