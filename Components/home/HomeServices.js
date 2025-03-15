class HomeServices extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="services" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наші послуги</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Картка послуги 1 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-car text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Продаж автомобілів</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Широкий вибір нових та вживаних автомобілів від провідних світових виробників
                        </p>
                        <a href="catalog.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Картка послуги 2 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-tools text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Сервісне обслуговування</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Професійне обслуговування та ремонт автомобілів з використанням оригінальних запчастин
                        </p>
                        <a href="technical-center.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Картка послуги 3 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-exchange-alt text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Трейд-ін</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Обміняйте свій автомобіль на новий з вигідною доплатою та мінімальними формальностями
                        </p>
                        <a href="trade-in.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Картка послуги 4 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-credit-card text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Кредитування та лізинг</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Вигідні умови кредитування та лізингу для фізичних та юридичних осіб
                        </p>
                        <a href="financing.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Картка послуги 5 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-shield-alt text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Гарантійне обслуговування</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Повна підтримка та обслуговування автомобілів протягом гарантійного періоду
                        </p>
                        <a href="warranty.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Картка послуги 6 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                            <i class="fas fa-car-crash text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Страхування</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Комплексні страхові програми для вашого автомобіля від провідних страхових компаній
                        </p>
                        <a href="insurance.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                            Дізнатися більше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('home-services', HomeServices); 