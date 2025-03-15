class BodyRepairProcess extends HTMLElement {
    constructor() {
        super();
        this.steps = [
            {
                number: '01',
                title: 'Діагностика',
                description: 'Проводимо детальну діагностику пошкоджень та визначаємо обсяг необхідних робіт'
            },
            {
                number: '02',
                title: 'Оцінка вартості',
                description: 'Розраховуємо точну вартість ремонту та узгоджуємо її з клієнтом'
            },
            {
                number: '03',
                title: 'Замовлення деталей',
                description: 'За необхідності замовляємо оригінальні запчастини для заміни пошкоджених елементів'
            },
            {
                number: '04',
                title: 'Рихтування',
                description: 'Відновлюємо геометрію кузова та усуваємо деформації'
            },
            {
                number: '05',
                title: 'Фарбування',
                description: 'Проводимо підготовку поверхні та фарбування з точним підбором кольору'
            },
            {
                number: '06',
                title: 'Контроль якості',
                description: 'Перевіряємо якість виконаних робіт та передаємо автомобіль клієнту'
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
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${this.steps.map(step => `
                            <div class="relative">
                                <div class="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                                    ${step.number}
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 pt-8 ml-2 mt-2">
                                    <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                                    <p class="text-gray-700 dark:text-gray-300">${step.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('body-repair-process', BodyRepairProcess); 