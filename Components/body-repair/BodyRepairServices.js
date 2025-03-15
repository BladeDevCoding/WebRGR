class BodyRepairServices extends HTMLElement {
    constructor() {
        super();
        this.services = [
            {
                icon: 'hammer',
                title: 'Рихтування',
                description: 'Відновлення геометрії кузова та усунення вм\'ятин різної складності'
            },
            {
                icon: 'spray-can',
                title: 'Фарбування',
                description: 'Високоякісне фарбування з підбором кольору та захисним покриттям'
            },
            {
                icon: 'car-crash',
                title: 'Ремонт після ДТП',
                description: 'Комплексне відновлення автомобіля після аварій будь-якої складності'
            },
            {
                icon: 'exchange-alt',
                title: 'Заміна деталей',
                description: 'Заміна пошкоджених елементів кузова на нові оригінальні деталі'
            },
            {
                icon: 'shield-alt',
                title: 'Антикорозійна обробка',
                description: 'Захист кузова від корозії та продовження терміну його служби'
            },
            {
                icon: 'tint',
                title: 'Полірування',
                description: 'Відновлення блиску та захист лакофарбового покриття'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="services" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Види робіт</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.services.map(service => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                            <div class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-${service.icon} text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                            <p class="text-gray-700 dark:text-gray-300">${service.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

customElements.define('body-repair-services', BodyRepairServices); 