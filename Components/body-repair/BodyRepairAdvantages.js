class BodyRepairAdvantages extends HTMLElement {
    constructor() {
        super();
        this.advantages = [
            {
                icon: 'certificate',
                title: 'Сертифіковані спеціалісти',
                description: 'Наші майстри мають високу кваліфікацію та регулярно проходять навчання'
            },
            {
                icon: 'tools',
                title: 'Сучасне обладнання',
                description: 'Використовуємо передове обладнання для діагностики та ремонту'
            },
            {
                icon: 'check-double',
                title: 'Гарантія якості',
                description: 'Надаємо гарантію на всі види виконаних робіт'
            },
            {
                icon: 'clock',
                title: 'Оптимальні терміни',
                description: 'Виконуємо роботи в найкоротші терміни без втрати якості'
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
                
                <div class="grid md:grid-cols-2 gap-6">
                    ${this.advantages.map(advantage => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 flex">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex-shrink-0 flex items-center justify-center mr-4">
                                <i class="fas fa-${advantage.icon} text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">${advantage.title}</h3>
                                <p class="text-gray-700 dark:text-gray-300">${advantage.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

customElements.define('body-repair-advantages', BodyRepairAdvantages); 