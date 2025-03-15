class PricesSection extends HTMLElement {
    constructor() {
        super();
        this.prices = [
            {
                service: 'Реєстрація нового автомобіля',
                price: '1500',
                includes: [
                    'Консультація',
                    'Підготовка документів',
                    'Супровід у сервісному центрі'
                ]
            },
            {
                service: 'Перереєстрація автомобіля',
                price: '1200',
                includes: [
                    'Консультація',
                    'Підготовка документів',
                    'Супровід у сервісному центрі'
                ]
            },
            {
                service: 'Реєстрація імпортованого авто',
                price: '2500',
                includes: [
                    'Консультація',
                    'Перевірка документів',
                    'Підготовка документів',
                    'Супровід у сервісному центрі'
                ]
            },
            {
                service: 'Зняття з обліку',
                price: '800',
                includes: [
                    'Консультація',
                    'Підготовка документів',
                    'Супровід у сервісному центрі'
                ]
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="prices" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Вартість послуг</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Послуга
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Вартість
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Включено
                                </th>
                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Дія
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            ${this.prices.map(item => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium">${item.service}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-xl font-bold text-indigo-600 dark:text-indigo-400">${item.price} грн</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <ul class="text-sm text-gray-600 dark:text-gray-400">
                                            ${item.includes.map(inc => `
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    ${inc}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#form" class="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                                            Замовити
                                        </a>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-100 dark:border-yellow-800">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <i class="fas fa-exclamation-circle text-yellow-500 text-xl mt-1 mr-3"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Примітка</h4>
                            <p class="text-gray-700 dark:text-gray-300">
                                Вказана вартість не включає офіційні платежі та збори, які сплачуються в сервісному центрі МВС. Точна вартість послуг може відрізнятися залежно від складності випадку та додаткових вимог.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('prices-section', PricesSection); 