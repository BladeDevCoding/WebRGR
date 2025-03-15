class TestDriveConditions extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="conditions" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Умови тест-драйву</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <h3 class="text-xl font-semibold mb-4">Необхідні документи</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-id-card text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Паспорт громадянина України</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-car text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Посвідчення водія категорії B</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-clock text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Стаж водіння від 2 років</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <h3 class="text-xl font-semibold mb-4">Важлива інформація</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-calendar-alt text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Попередній запис обов'язковий</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-user-friends text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Можлива присутність пасажирів</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-shield-alt text-indigo-600 dark:text-indigo-400 mt-1 mr-3"></i>
                                <span>Автомобіль застрахований</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-6 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
                    <div class="flex items-start">
                        <i class="fas fa-exclamation-circle text-yellow-600 dark:text-yellow-500 text-xl mt-1 mr-4"></i>
                        <div>
                            <h4 class="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Важливо знати</h4>
                            <ul class="space-y-2 text-yellow-800 dark:text-yellow-300">
                                <li>• Тест-драйв проводиться тільки в межах визначеного маршруту</li>
                                <li>• Необхідно дотримуватися правил дорожнього руху</li>
                                <li>• У разі порушення умов тест-драйв може бути припинено</li>
                                <li>• Рекомендуємо приходити за 10-15 хвилин до початку</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('test-drive-conditions', TestDriveConditions); 