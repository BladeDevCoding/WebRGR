class LevelsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="levels" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Рівні участі</h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <!-- Стандарт -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div class="p-6">
                            <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-star text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Стандарт</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4">Початковий рівень для всіх нових учасників програми</p>
                            <div class="border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Умови:</span>
                                    <span class="text-sm font-medium">Реєстрація в програмі</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Знижка на сервіс:</span>
                                    <span class="text-sm font-medium">5%</span>
                                </div>
                            </div>
                            <ul class="space-y-2 mb-4">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Базові знижки на сервісне обслуговування</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Участь у сезонних акціях</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Інформування про спеціальні пропозиції</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Срібний -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform md:scale-105 z-10">
                        <div class="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                            Найпопулярніший
                        </div>
                        <div class="p-6">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-medal text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Срібний</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4">Для постійних клієнтів з історією обслуговування</p>
                            <div class="border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Умови:</span>
                                    <span class="text-sm font-medium">3+ візити на сервіс</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Знижка на сервіс:</span>
                                    <span class="text-sm font-medium">10%</span>
                                </div>
                            </div>
                            <ul class="space-y-2 mb-4">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Всі переваги рівня "Стандарт"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Підвищені знижки на запчастини</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Пріоритетний запис на сервіс</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Безкоштовна діагностика раз на рік</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Золотий -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div class="p-6">
                            <div class="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-crown text-2xl text-yellow-600 dark:text-yellow-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Золотий</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4">Преміальний рівень для найвідданіших клієнтів</p>
                            <div class="border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Умови:</span>
                                    <span class="text-sm font-medium">Покупка авто або 10+ візитів</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Знижка на сервіс:</span>
                                    <span class="text-sm font-medium">15%</span>
                                </div>
                            </div>
                            <ul class="space-y-2 mb-4">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Всі переваги рівня "Срібний"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Максимальні знижки на всі послуги</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Персональний менеджер</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Безкоштовний підмінний автомобіль</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span class="text-sm">Ексклюзивні запрошення на події</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('levels-section', LevelsSection); 