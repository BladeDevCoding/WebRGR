class BenefitsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="benefits" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Переваги програми</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Знижки на сервіс -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <i class="fas fa-percent text-xl text-green-600 dark:text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Знижки на сервіс</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Отримуйте знижки до 15% на всі види сервісного обслуговування та ремонту вашого автомобіля.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Знижки на запчастини -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <i class="fas fa-cog text-xl text-blue-600 dark:text-blue-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Знижки на запчастини</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Економте до 10% при купівлі оригінальних запчастин та аксесуарів для вашого автомобіля.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Пріоритетний запис -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    <i class="fas fa-calendar-check text-xl text-purple-600 dark:text-purple-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Пріоритетний запис</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Отримуйте пріоритет при записі на сервіс та можливість обрати зручний для вас час обслуговування.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Безкоштовна діагностика -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <i class="fas fa-search text-xl text-red-600 dark:text-red-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Безкоштовна діагностика</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Регулярна безкоштовна діагностика вашого автомобіля для підтримки його в ідеальному стані.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Спеціальні пропозиції -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                    <i class="fas fa-gift text-xl text-yellow-600 dark:text-yellow-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Спеціальні пропозиції</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Ексклюзивний доступ до спеціальних пропозицій, акцій та розпродажів для учасників програми.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Персональний менеджер -->
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                    <i class="fas fa-user-tie text-xl text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Персональний менеджер</h3>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Для учасників вищих рівнів — персональний менеджер, який допоможе з будь-якими питаннями.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('benefits-section', BenefitsSection); 