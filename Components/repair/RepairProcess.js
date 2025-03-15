class RepairProcess extends HTMLElement {
    constructor() {
        super();
        this.steps = [
            {
                number: '01',
                title: 'Діагностика',
                description: 'Проводимо детальну діагностику автомобіля для виявлення всіх несправностей'
            },
            {
                number: '02',
                title: 'Консультація',
                description: 'Обговорюємо з клієнтом виявлені проблеми, необхідні роботи та їх вартість'
            },
            {
                number: '03',
                title: 'Ремонт',
                description: 'Виконуємо всі необхідні ремонтні роботи з використанням якісних запчастин'
            },
            {
                number: '04',
                title: 'Перевірка',
                description: 'Проводимо контрольну перевірку для підтвердження якості виконаних робіт'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="process" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Процес ремонту</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${this.steps.map(step => `
                            <div class="text-center">
                                <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                                    <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${step.number}</span>
                                </div>
                                <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                                <p class="text-gray-700 dark:text-gray-300">${step.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('repair-process', RepairProcess); 