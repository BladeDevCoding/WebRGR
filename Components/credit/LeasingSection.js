class LeasingSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="leasing-section" class="mb-12 scroll-mt-20">
                <div class="flex items-center mb-6">
                    <div class="text-indigo-600 dark:text-indigo-400 text-3xl mr-4">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Лізинг</h2>
                </div>
                
                <p class="text-lg mb-6">Лізинг — це довгострокова оренда автомобіля з правом подальшого викупу. Це оптимальне рішення для бізнесу, яке дозволяє отримати автомобіль у користування без значних початкових витрат.</p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                    <h3 class="text-xl font-semibold mb-4">Переваги лізингу в AutoPrime:</h3>
                    <ul class="space-y-3">
                        ${this.renderLeasingAdvantages()}
                    </ul>
                </div>
                
                <h3 class="text-2xl font-semibold mb-4">Лізингові програми</h3>
                
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    ${this.renderLeasingPrograms()}
                </div>
                
                <h3 class="text-2xl font-semibold mb-4">Необхідні документи для лізингу</h3>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        ${this.renderLeasingDocuments()}
                    </div>
                </div>
            </section>
        `;
    }

    renderLeasingAdvantages() {
        const advantages = [
            'Мінімальний авансовий платіж від 15%',
            'Термін лізингу до 5 років',
            'Можливість включення страхування та сервісного обслуговування в лізинговий платіж',
            'Податкові переваги для юридичних осіб',
            'Спрощена процедура оформлення порівняно з кредитом'
        ];

        return advantages.map(advantage => `
            <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>${advantage}</span>
            </li>
        `).join('');
    }

    renderLeasingPrograms() {
        const programs = [
            {
                name: 'Фінансовий лізинг',
                description: 'Класичний варіант лізингу з правом викупу автомобіля після закінчення терміну договору. Ідеально підходить для компаній, які планують довгострокове використання транспортного засобу.',
                features: ['Авансовий платіж від 20%', 'Термін від 1 до 5 років', 'Залишкова вартість від 0%']
            },
            {
                name: 'Оперативний лізинг',
                description: 'Короткострокова оренда автомобіля без права викупу. Підходить для компаній, які потребують транспортний засіб на обмежений період або регулярно оновлюють автопарк.',
                features: ['Авансовий платіж від 15%', 'Термін від 1 до 3 років', 'Включає повне обслуговування']
            }
        ];

        return programs.map(program => `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div class="text-indigo-600 dark:text-indigo-400 text-xl font-bold mb-3">${program.name}</div>
                <p class="mb-4 text-sm">${program.description}</p>
                <ul class="space-y-2 mb-4">
                    ${program.features.map(feature => `
                        <li class="flex items-start text-sm">
                            <i class="fas fa-circle text-xs text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderLeasingDocuments() {
        const documentGroups = [
            {
                title: 'Для юридичних осіб:',
                documents: [
                    'Установчі документи компанії',
                    'Фінансова звітність за останній рік',
                    'Документи, що підтверджують повноваження керівника'
                ]
            },
            {
                title: 'Для фізичних осіб-підприємців:',
                documents: [
                    'Паспорт та ідентифікаційний код',
                    'Свідоцтво про реєстрацію ФОП',
                    'Декларація про доходи за останній рік'
                ]
            }
        ];

        return documentGroups.map(group => `
            <div>
                <h4 class="font-semibold mb-3">${group.title}</h4>
                <ul class="space-y-2">
                    ${group.documents.map(document => `
                        <li class="flex items-start">
                            <i class="fas fa-file-alt text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                            <span>${document}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }
}

customElements.define('leasing-section', LeasingSection); 