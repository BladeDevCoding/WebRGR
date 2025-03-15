class WarrantyInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="warranty-info" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про гарантійне обслуговування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-6">
                            <h3 class="text-2xl font-bold mb-4">Надійний захист вашого автомобіля</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Гарантійне обслуговування AutoPrime — це комплексна програма підтримки, яка забезпечує безперебійну роботу вашого автомобіля протягом гарантійного періоду.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Ми пропонуємо повний спектр послуг з технічного обслуговування та ремонту, що виконуються сертифікованими спеціалістами з використанням оригінальних запчастин та сучасного обладнання.
                            </p>
                            
                            <div class="mt-6">
                                <h4 class="text-lg font-semibold mb-3">Переваги гарантійного обслуговування:</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>Безкоштовний ремонт або заміна деталей при виявленні виробничих дефектів</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>Обслуговування у всіх офіційних сервісних центрах мережі</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>Використання тільки оригінальних запчастин та матеріалів</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>Можливість продовження гарантії на вигідних умовах</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="md:w-1/2">
                            <img src="https://an.net.ua/userfiles/image/garantii_na_avto.jpg" alt="Гарантійне обслуговування" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
                    <div class="p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#warranty-conditions" class="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-file-contract mr-2"></i> Умови гарантії
                            </a>
                            <a href="#service-form" class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-tools mr-2"></i> Записатись на сервіс
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('warranty-info', WarrantyInfo); 