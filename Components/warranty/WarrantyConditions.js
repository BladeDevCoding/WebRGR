class WarrantyConditions extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="warranty-conditions" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Умови гарантії</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i class="fas fa-shield-alt text-indigo-500 mr-3"></i>
                                Стандартна гарантія
                            </h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-calendar-alt text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Термін дії</h4>
                                        <p class="text-gray-700 dark:text-gray-300">3 роки або 100 000 км пробігу (що настане раніше)</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-car text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Покриття</h4>
                                        <p class="text-gray-700 dark:text-gray-300">Всі механічні, електричні та електронні компоненти автомобіля</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-paint-brush text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Гарантія на лакофарбове покриття</h4>
                                        <p class="text-gray-700 dark:text-gray-300">3 роки без обмеження пробігу</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-shield-virus text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Гарантія від наскрізної корозії</h4>
                                        <p class="text-gray-700 dark:text-gray-300">6 років без обмеження пробігу</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i class="fas fa-exclamation-triangle text-amber-500 mr-3"></i>
                                Обмеження гарантії
                            </h3>
                            
                            <div class="space-y-3">
                                <p class="text-gray-700 dark:text-gray-300">
                                    Гарантія не поширюється на:
                                </p>
                                
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span>Витратні матеріали (фільтри, рідини, свічки запалювання, гальмівні колодки тощо)</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span>Пошкодження внаслідок ДТП або неправильної експлуатації</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span>Природний знос деталей</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span>Пошкодження внаслідок використання неоригінальних запчастин</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span>Пошкодження внаслідок несвоєчасного обслуговування</span>
                                    </li>
                                </ul>
                                
                                <div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                    <p class="text-amber-800 dark:text-amber-300 text-sm">
                                        <i class="fas fa-info-circle mr-2"></i>
                                        Для збереження гарантії необхідно проходити регулярне технічне обслуговування в офіційних сервісних центрах згідно з рекомендованим графіком.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h3 class="text-xl font-bold mb-3">Документи для гарантійного обслуговування</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-file-alt text-indigo-500 mt-1 mr-3"></i>
                                <span>Сервісна книжка з відмітками про проходження ТО</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-file-alt text-indigo-500 mt-1 mr-3"></i>
                                <span>Гарантійний талон</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-file-alt text-indigo-500 mt-1 mr-3"></i>
                                <span>Документ, що підтверджує право власності на автомобіль</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('warranty-conditions', WarrantyConditions); 