class LeasingSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="leasing" class="mb-16 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Лізинг для бізнесу</h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center mb-4">
                            <div class="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-file-contract text-xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold">Фінансовий лізинг</h3>
                        </div>
                        
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Авансовий платіж від 10%</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Термін лізингу до 5 років</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Можливість дострокового викупу</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Включення додаткових послуг у лізинговий платіж</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Оптимізація оподаткування</span>
                            </li>
                        </ul>
                        
                        <div class="text-center">
                            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                Розрахувати лізинг
                            </a>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center mb-4">
                            <div class="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-sync-alt text-xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold">Оперативний лізинг</h3>
                        </div>
                        
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Фіксований щомісячний платіж</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Відсутність витрат на придбання автомобіля</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Включення всіх витрат на обслуговування</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Можливість заміни автомобіля на новий після закінчення терміну</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>Відсутність ризиків, пов'язаних з володінням автомобілем</span>
                            </li>
                        </ul>
                        
                        <div class="text-center">
                            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                Отримати пропозицію
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('leasing-section', LeasingSection); 