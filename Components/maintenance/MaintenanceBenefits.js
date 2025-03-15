class MaintenanceBenefits extends HTMLElement {
    constructor() {
        super();
        this.benefits = [
            {
                icon: 'shield-alt',
                title: 'Безпека',
                description: 'Регулярне ТО забезпечує надійну роботу всіх систем безпеки автомобіля.'
            },
            {
                icon: 'coins',
                title: 'Економія',
                description: 'Своєчасне обслуговування запобігає дорогому ремонту та зменшує витрати палива.'
            },
            {
                icon: 'tachometer-alt',
                title: 'Продуктивність',
                description: 'Підтримка оптимальної продуктивності двигуна та інших систем автомобіля.'
            },
            {
                icon: 'chart-line',
                title: 'Збереження вартості',
                description: 'Автомобілі з повною історією обслуговування мають вищу ринкову вартість.'
            },
            {
                icon: 'leaf',
                title: 'Екологічність',
                description: 'Правильно обслуговуваний автомобіль виділяє менше шкідливих речовин.'
            },
            {
                icon: 'clock',
                title: 'Довговічність',
                description: 'Регулярне ТО значно подовжує термін служби автомобіля.'
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="maintenance-benefits" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Переваги регулярного ТО</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.benefits.map(benefit => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                            <div class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-${benefit.icon} text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">${benefit.title}</h3>
                            <p class="text-gray-700 dark:text-gray-300">${benefit.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

customElements.define('maintenance-benefits', MaintenanceBenefits); 