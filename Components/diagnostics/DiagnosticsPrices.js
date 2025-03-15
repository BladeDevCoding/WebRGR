class DiagnosticsPrices extends HTMLElement {
    constructor() {
        super();
        this.prices = [
            {
                service: "Комп'ютерна діагностика",
                price: 500,
                description: 'Зчитування та аналіз помилок електронних систем автомобіля.'
            },
            {
                service: 'Діагностика двигуна',
                price: 800,
                description: 'Комплексна перевірка стану двигуна та його систем.'
            },
            {
                service: 'Діагностика ходової частини',
                price: 600,
                description: 'Перевірка стану підвіски, амортизаторів та рульового управління.'
            },
            {
                service: 'Діагностика гальмівної системи',
                price: 500,
                description: 'Перевірка ефективності гальм та стану гальмівних механізмів.'
            },
            {
                service: 'Діагностика трансмісії',
                price: 700,
                description: 'Перевірка стану коробки передач та інших елементів трансмісії.'
            },
            {
                service: 'Комплексна діагностика',
                price: 1500,
                description: 'Повна діагностика всіх систем автомобіля.'
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="prices" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Вартість послуг</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Послуга
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Опис
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Вартість
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                ${this.prices.map(item => `
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium">${item.service}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm text-gray-600 dark:text-gray-400">${item.description}</div>
                                        </td>
                                        <td class="px-6 py-4 text-right whitespace-nowrap">
                                            <div class="text-lg font-bold text-indigo-600 dark:text-indigo-400">${item.price} грн</div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="mt-6 text-center">
                    <a href="#form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-calendar-check mr-2"></i> Записатися на діагностику
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('diagnostics-prices', DiagnosticsPrices); 