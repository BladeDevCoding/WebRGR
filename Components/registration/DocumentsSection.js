class DocumentsSection extends HTMLElement {
    constructor() {
        super();
        this.documents = [
            {
                title: 'Для реєстрації нового автомобіля',
                items: [
                    'Паспорт громадянина України',
                    'Ідентифікаційний код',
                    'Посвідчення водія',
                    'Документ, що підтверджує правомірність придбання (договір купівлі-продажу, рахунок-фактура)',
                    'Митна декларація (для імпортованих авто)',
                    'Сертифікат відповідності'
                ]
            },
            {
                title: 'Для перереєстрації автомобіля',
                items: [
                    'Паспорт громадянина України',
                    'Ідентифікаційний код',
                    'Посвідчення водія',
                    'Свідоцтво про реєстрацію ТЗ',
                    'Документ, що підтверджує правомірність придбання (договір купівлі-продажу)',
                    'Акт технічного огляду (за потреби)'
                ]
            },
            {
                title: 'Для зняття з обліку',
                items: [
                    'Паспорт громадянина України',
                    'Ідентифікаційний код',
                    'Свідоцтво про реєстрацію ТЗ',
                    'Номерні знаки (за потреби)',
                    'Документ, що підтверджує відчуження ТЗ (за наявності)'
                ]
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="documents" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Необхідні документи</h2>
                
                <div class="space-y-6">
                    ${this.documents.map(doc => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 class="text-xl font-bold mb-4">${doc.title}</h3>
                            <ul class="space-y-2">
                                ${doc.items.map(item => `
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <i class="fas fa-info-circle text-blue-500 text-xl mt-1 mr-3"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Важлива інформація</h4>
                            <p class="text-gray-700 dark:text-gray-300">
                                Перелік документів може змінюватися залежно від конкретної ситуації. Рекомендуємо заздалегідь проконсультуватися з нашими фахівцями для уточнення необхідного пакету документів у вашому випадку.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('documents-section', DocumentsSection); 