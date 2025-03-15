class ServiceSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="service" class="mb-16 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Сервісне обслуговування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex flex-row-reverse">
                        <div class="md:w-1/2">
                            <img src="https://aquapolymer.com.ua/wp-content/uploads/2019/07/servis-ochysnyh-sporud-1.jpg" alt="Сервісне обслуговування" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Пріоритетне обслуговування корпоративних клієнтів</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">
                                Ми розуміємо, наскільки важливо для бізнесу мінімізувати простої автомобілів. Тому для корпоративних клієнтів ми пропонуємо спеціальні умови сервісного обслуговування.
                            </p>
                            
                            <div class="space-y-4 mb-6">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                                        <i class="fas fa-clock text-green-600 dark:text-green-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Пріоритетний запис</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Першочерговий запис на сервіс без черг</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                                        <i class="fas fa-percentage text-green-600 dark:text-green-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Спеціальні ціни</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Знижки на запчастини та роботи для корпоративних клієнтів</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                                        <i class="fas fa-tools text-green-600 dark:text-green-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Виїзний сервіс</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Можливість обслуговування автомобілів на території клієнта</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                                        <i class="fas fa-file-alt text-green-600 dark:text-green-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Сервісні контракти</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Довгострокові контракти на обслуговування з фіксованими цінами</p>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-calendar-alt mr-2"></i> Записатися на сервіс
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('service-section', ServiceSection); 