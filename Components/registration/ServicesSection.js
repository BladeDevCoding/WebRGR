class ServicesSection extends HTMLElement {
    constructor() {
        super();
        this.services = [
            {
                icon: 'car',
                title: 'Реєстрація нових автомобілів',
                description: 'Повний комплекс послуг з реєстрації нових транспортних засобів у сервісних центрах МВС.'
            },
            {
                icon: 'exchange-alt',
                title: 'Перереєстрація автомобілів',
                description: 'Швидка перереєстрація автомобіля при зміні власника або інших даних.'
            },
            {
                icon: 'file-signature',
                title: 'Оформлення документів',
                description: 'Підготовка та оформлення всіх необхідних документів для реєстрації.'
            },
            {
                icon: 'globe-europe',
                title: 'Реєстрація імпортованих авто',
                description: 'Допомога з реєстрацією автомобілів, ввезених з-за кордону.'
            },
            {
                icon: 'id-card',
                title: 'Заміна посвідчення водія',
                description: 'Допомога з оформленням та заміною посвідчення водія.'
            },
            {
                icon: 'clipboard-check',
                title: 'Зняття з обліку',
                description: 'Повний супровід процедури зняття автомобіля з обліку.'
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
                            <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-${service.icon} text-xl text-indigo-600 dark:text-indigo-400"></i>
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

customElements.define('services-section', ServicesSection); 