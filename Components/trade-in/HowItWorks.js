class HowItWorks extends HTMLElement {
    constructor() {
        super();
        this.steps = [
            {
                icon: 'car',
                title: 'Оцінка вашого автомобіля',
                description: 'Наші експерти проведуть детальну оцінку технічного стану та ринкової вартості вашого автомобіля.'
            },
            {
                icon: 'search',
                title: 'Вибір нового автомобіля',
                description: 'Оберіть новий автомобіль з нашого автопарку, який відповідає вашим потребам та бюджету.'
            },
            {
                icon: 'calculator',
                title: 'Розрахунок доплати',
                description: 'Ми розрахуємо суму доплати як різницю між вартістю нового автомобіля та оціночною вартістю вашого.'
            },
            {
                icon: 'file-signature',
                title: 'Оформлення документів',
                description: 'Підготуємо всі необхідні документи для переоформлення права власності на обидва автомобілі.'
            },
            {
                icon: 'exchange-alt',
                title: 'Обмін автомобілями',
                description: 'Ви залишаєте свій автомобіль, вносите доплату та отримуєте ключі від нового авто.'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="how-it-works" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Як працює трейд-ін</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="relative">
                        ${this.renderSteps()}
                    </div>
                </div>
            </section>
        `;
    }

    renderSteps() {
        return `
            <div class="space-y-8 relative">
                ${this.steps.map((step, index) => `
                    <div class="flex">
                        <div class="flex flex-col items-center mr-6">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xl">
                                <i class="fas fa-${step.icon}"></i>
                            </div>
                            ${index < this.steps.length - 1 ? `
                                <div class="w-0.5 h-full bg-indigo-200 dark:bg-indigo-800 mt-2"></div>
                            ` : ''}
                        </div>
                        <div class="pt-2">
                            <h3 class="text-xl font-semibold mb-2">${step.title}</h3>
                            <p class="text-gray-700 dark:text-gray-300">${step.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('how-it-works', HowItWorks); 