class RepairServices extends HTMLElement {
    constructor() {
        super();
        this.services = [
            {
                icon: 'engine',
                title: 'Ремонт двигуна',
                description: 'Діагностика та ремонт двигунів будь-якої складності, від заміни прокладок до капітального ремонту'
            },
            {
                icon: 'cogs',
                title: 'Ремонт трансмісії',
                description: 'Ремонт та обслуговування коробок передач, зчеплення та інших елементів трансмісії'
            },
            {
                icon: 'car-battery',
                title: 'Електрика та електроніка',
                description: 'Діагностика та ремонт електричних систем, електроніки та комп\'ютерних систем автомобіля'
            },
            {
                icon: 'tachometer-alt',
                title: 'Ходова частина',
                description: 'Ремонт підвіски, амортизаторів, рульового управління та інших елементів ходової частини'
            },
            {
                icon: 'oil-can',
                title: 'Система охолодження',
                description: 'Ремонт радіаторів, заміна помп, термостатів та інших елементів системи охолодження'
            },
            {
                icon: 'gas-pump',
                title: 'Паливна система',
                description: 'Діагностика та ремонт паливних систем, форсунок, насосів та інших компонентів'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="services" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наші послуги</h2>
                
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

customElements.define('repair-services', RepairServices); 