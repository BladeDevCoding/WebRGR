class FleetSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="fleet" class="mb-16 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Корпоративний автопарк</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://bessarabiainform.com/wp-content/uploads/2023/07/1655359292_6-celes-club-p-mnogo-avto-mashini-krasivo-foto-10.jpg" alt="Корпоративний автопарк" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Комплексні рішення для вашого бізнесу</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">
                                Ми пропонуємо повний спектр послуг з формування та обслуговування корпоративного автопарку будь-якого розміру. Наші спеціалісти допоможуть підібрати оптимальні моделі автомобілів відповідно до потреб вашого бізнесу та бюджету.
                            </p>
                            
                            <div class="space-y-4 mb-6">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <i class="fas fa-check-circle text-green-500"></i>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-semibold">Підбір автомобілів</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Індивідуальний підбір моделей під специфіку вашого бізнесу</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <i class="fas fa-check-circle text-green-500"></i>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-semibold">Спеціальні умови придбання</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Корпоративні знижки та програми лояльності</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <i class="fas fa-check-circle text-green-500"></i>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-semibold">Фінансові рішення</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Кредитування, лізинг та інші фінансові інструменти</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <i class="fas fa-check-circle text-green-500"></i>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-semibold">Комплексне обслуговування</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Сервіс, страхування, технічна підтримка</p>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-envelope mr-2"></i> Отримати консультацію
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('fleet-section', FleetSection); 