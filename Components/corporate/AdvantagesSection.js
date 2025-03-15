class AdvantagesSection extends HTMLElement {
    constructor() {
        super();
        this.advantages = [
            {
                icon: 'handshake',
                title: 'Індивідуальний підхід',
                description: 'Персональний менеджер для кожного корпоративного клієнта та індивідуальні умови співпраці'
            },
            {
                icon: 'percentage',
                title: 'Спеціальні ціни',
                description: 'Ексклюзивні знижки на придбання автомобілів та сервісне обслуговування для корпоративних клієнтів'
            },
            {
                icon: 'file-contract',
                title: 'Гнучкі умови лізингу',
                description: 'Вигідні лізингові програми з мінімальним авансом та можливістю дострокового викупу'
            },
            {
                icon: 'tools',
                title: 'Пріоритетне обслуговування',
                description: 'Першочерговий запис на сервіс та виділена лінія підтримки для корпоративних клієнтів'
            },
            {
                icon: 'car',
                title: 'Широкий вибір моделей',
                description: 'Повний модельний ряд автомобілів для будь-яких бізнес-потреб'
            },
            {
                icon: 'shield-alt',
                title: 'Розширена гарантія',
                description: 'Спеціальні умови гарантійного обслуговування для корпоративних автопарків'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="advantages" class="mb-16 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Переваги для корпоративних клієнтів</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.advantages.map(advantage => this.renderAdvantageCard(advantage)).join('')}
                </div>
            </section>
        `;
    }

    renderAdvantageCard(advantage) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="bg-indigo-100 dark:bg-indigo-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-${advantage.icon} text-xl text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${advantage.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">${advantage.description}</p>
            </div>
        `;
    }
}

customElements.define('advantages-section', AdvantagesSection); 