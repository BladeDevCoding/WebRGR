class DiagnosticsProcess extends HTMLElement {
    constructor() {
        super();
        this.steps = [
            {
                number: '01',
                title: 'Запис на діагностику',
                description: 'Запишіться на зручний для вас час через форму на сайті або за телефоном.'
            },
            {
                number: '02',
                title: 'Первинна консультація',
                description: 'Наш спеціаліст проведе опитування щодо проблем, які вас турбують.'
            },
            {
                number: '03',
                title: 'Діагностика',
                description: 'Проведення комплексної діагностики з використанням спеціального обладнання.'
            },
            {
                number: '04',
                title: 'Аналіз результатів',
                description: 'Детальний аналіз отриманих даних та визначення проблемних зон.'
            },
            {
                number: '05',
                title: 'Рекомендації',
                description: 'Надання рекомендацій щодо необхідного ремонту або обслуговування.'
            },
            {
                number: '06',
                title: 'Ремонт (за потреби)',
                description: 'За вашим бажанням, проведення необхідних ремонтних робіт.'
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="process" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Процес діагностики</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${this.steps.map(step => `
                            <div class="flex">
                                <div class="mr-4 flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-400">
                                        ${step.number}
                                    </div>
                                </div>
                                <div>
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

customElements.define('diagnostics-process', DiagnosticsProcess); 