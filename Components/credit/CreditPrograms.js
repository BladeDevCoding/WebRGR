class CreditPrograms extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="credit-section" class="mb-12 scroll-mt-20">
                <div class="flex items-center mb-6">
                    <div class="text-indigo-600 dark:text-indigo-400 text-3xl mr-4">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Автокредитування</h2>
                </div>
                
                <p class="text-lg mb-6">Автокредит — це цільовий кредит на придбання автомобіля, при якому транспортний засіб виступає заставою. Це дозволяє отримати більш вигідні умови порівняно зі споживчим кредитом.</p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                    <h3 class="text-xl font-semibold mb-4">Переваги автокредитування в AutoPrime:</h3>
                    <ul class="space-y-3">
                        ${this.renderAdvantages()}
                    </ul>
                </div>
                
                <h3 class="text-2xl font-semibold mb-4">Наші кредитні програми</h3>
                
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    ${this.renderCreditPrograms()}
                </div>
                
                <h3 class="text-2xl font-semibold mb-4">Необхідні документи</h3>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                    <ul class="space-y-3">
                        ${this.renderRequiredDocuments()}
                    </ul>
                </div>
            </section>
        `;
    }

    renderAdvantages() {
        const advantages = [
            'Швидке оформлення — рішення за 1 годину',
            'Мінімальний початковий внесок від 10%',
            'Термін кредитування до 7 років',
            'Можливість дострокового погашення без штрафів',
            'Спеціальні програми з пониженою відсотковою ставкою'
        ];

        return advantages.map(advantage => `
            <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>${advantage}</span>
            </li>
        `).join('');
    }

    renderCreditPrograms() {
        const programs = [
            {
                name: 'Стандарт',
                features: ['Ставка від 12% річних', 'Перший внесок від 20%', 'Термін до 5 років'],
                description: 'Ідеально для більшості клієнтів',
                isPopular: false
            },
            {
                name: 'Оптимальний',
                features: ['Ставка від 9.9% річних', 'Перший внесок від 30%', 'Термін до 6 років'],
                description: 'Найкраще співвідношення умов',
                isPopular: true
            },
            {
                name: 'Преміум',
                features: ['Ставка від 7.5% річних', 'Перший внесок від 40%', 'Термін до 7 років'],
                description: 'Для преміальних автомобілів',
                isPopular: false
            }
        ];

        return programs.map(program => `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border ${program.isPopular ? 'border-indigo-200 dark:border-indigo-800' : 'border-gray-100 dark:border-gray-700'} relative hover:shadow-md transition-shadow duration-300">
                ${program.isPopular ? '<div class="absolute -top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Популярно</div>' : ''}
                <div class="text-indigo-600 dark:text-indigo-400 text-xl font-bold mb-3">${program.name}</div>
                <ul class="space-y-2 mb-4">
                    ${program.features.map(feature => `
                        <li class="flex items-start text-sm">
                            <i class="fas fa-circle text-xs text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                <div class="text-sm text-gray-600 dark:text-gray-400">${program.description}</div>
            </div>
        `).join('');
    }

    renderRequiredDocuments() {
        const documents = [
            'Паспорт громадянина України',
            'Ідентифікаційний код',
            'Довідка про доходи за останній рік',
            'Документи, що підтверджують додаткові доходи (за наявності)'
        ];

        return documents.map(document => `
            <li class="flex items-start">
                <i class="fas fa-file-alt text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                <span>${document}</span>
            </li>
        `).join('');
    }
}

customElements.define('credit-programs', CreditPrograms); 