class TestDriveAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про тест-драйв</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 mb-6">
                    <p class="text-lg mb-4">Тест-драйв — це найкращий спосіб переконатися, що автомобіль відповідає вашим очікуванням. Ми пропонуємо вам можливість особисто відчути всі переваги обраної моделі на дорозі.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-3">Що включає тест-драйв:</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Детальна презентація автомобіля від експерта</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Тестове керування автомобілем у місті</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Можливість випробувати різні режими руху</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Консультація щодо технічних характеристик</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Інформація про варіанти придбання та фінансування</span>
                                </li>
                            </ul>
                        </div>
                        <div class="relative rounded-xl overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537" 
                                 alt="Тест-драйв автомобіля" class="absolute inset-0 w-full h-full object-cover">
                        </div>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div class="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                            <i class="fas fa-stopwatch"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Тривалість</h3>
                        <p>Тест-драйв триває близько 30-40 хвилин, включаючи презентацію та поїздку</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div class="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                            <i class="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Маршрут</h3>
                        <p>Спеціально розроблений маршрут дозволяє відчути автомобіль у різних умовах руху</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div class="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Супровід</h3>
                        <p>Професійний консультант супроводжуватиме вас протягом всього тест-драйву</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('test-drive-about', TestDriveAbout); 