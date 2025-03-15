class MaintenanceTypes extends HTMLElement {
    constructor() {
        super();
        this.types = [
            {
                icon: 'oil-can',
                title: 'ТО-1 (Мале ТО)',
                description: 'Заміна моторного масла та фільтрів, перевірка основних систем автомобіля.',
                interval: 'Кожні 10 000 - 15 000 км'
            },
            {
                icon: 'cogs',
                title: 'ТО-2 (Середнє ТО)',
                description: 'Включає роботи ТО-1, а також заміну свічок запалювання, повітряного фільтра та детальну діагностику.',
                interval: 'Кожні 20 000 - 30 000 км'
            },
            {
                icon: 'tools',
                title: 'ТО-3 (Велике ТО)',
                description: 'Комплексне обслуговування з заміною всіх технічних рідин, ременів, перевіркою та регулюванням всіх систем.',
                interval: 'Кожні 40 000 - 60 000 км'
            },
            {
                icon: 'snowflake',
                title: 'Сезонне ТО',
                description: 'Підготовка автомобіля до зимового або літнього сезону з урахуванням особливостей експлуатації.',
                interval: 'Двічі на рік'
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="maintenance-types" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Види технічного обслуговування</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    ${this.types.map(type => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start">
                                <div class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-${type.icon} text-2xl text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold mb-2">${type.title}</h3>
                                    <p class="text-gray-700 dark:text-gray-300 mb-3">${type.description}</p>
                                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <i class="fas fa-calendar-alt mr-2"></i>
                                        <span>${type.interval}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

customElements.define('maintenance-types', MaintenanceTypes); 