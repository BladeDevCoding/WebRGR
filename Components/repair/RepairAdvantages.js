class RepairAdvantages extends HTMLElement {
    constructor() {
        super();
        this.advantages = [
            {
                icon: 'check-circle',
                title: 'Гарантія на роботи',
                description: 'Надаємо гарантію на всі виконані роботи та встановлені запчастини'
            },
            {
                icon: 'tools',
                title: 'Сучасне обладнання',
                description: 'Використовуємо найновіше діагностичне та ремонтне обладнання'
            },
            {
                icon: 'user-tie',
                title: 'Кваліфіковані фахівці',
                description: 'Наші механіки мають високу кваліфікацію та багаторічний досвід'
            },
            {
                icon: 'clock',
                title: 'Дотримання термінів',
                description: 'Виконуємо роботи в обумовлені терміни без затримок'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="advantages" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наші переваги</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        ${this.advantages.map(advantage => `
                            <div class="flex">
                                <div class="flex-shrink-0 mr-4">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                        <i class="fas fa-${advantage.icon} text-xl text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold mb-2">${advantage.title}</h3>
                                    <p class="text-gray-700 dark:text-gray-300">${advantage.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('repair-advantages', RepairAdvantages); 