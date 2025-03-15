class ServiceTypes extends HTMLElement {
    constructor() {
        super();
        this.services = [
            {
                icon: 'oil-can',
                title: 'Технічне обслуговування',
                description: 'Регулярне ТО згідно з рекомендаціями виробника: заміна масла, фільтрів, технічних рідин'
            },
            {
                icon: 'tools',
                title: 'Ремонтні роботи',
                description: 'Діагностика та ремонт двигуна, трансмісії, ходової частини, гальмівної системи'
            },
            {
                icon: 'car-crash',
                title: 'Кузовний ремонт',
                description: 'Відновлення геометрії кузова, рихтування, фарбування, полірування'
            },
            {
                icon: 'laptop-code',
                title: 'Комп\'ютерна діагностика',
                description: 'Діагностика електронних систем автомобіля, виявлення та усунення несправностей'
            },
            {
                icon: 'tint',
                title: 'Шиномонтаж',
                description: 'Заміна шин, балансування, ремонт проколів, сезонна заміна коліс'
            },
            {
                icon: 'car-battery',
                title: 'Електрика',
                description: 'Діагностика та ремонт електричних систем, заміна акумуляторів, стартерів, генераторів'
            }
        ];
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="types" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Види послуг</h2>
                
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

customElements.define('service-types', ServiceTypes); 