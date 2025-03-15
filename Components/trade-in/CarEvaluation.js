class CarEvaluation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="evaluation" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Оцінка вашого автомобіля</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-6">
                            <h3 class="text-2xl font-semibold mb-4">Як ми оцінюємо автомобілі</h3>
                            <p class="mb-4">Оцінка автомобіля проводиться за кількома ключовими параметрами, які впливають на його ринкову вартість:</p>
                            
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Марка, модель, рік випуску та комплектація</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Технічний стан двигуна, трансмісії та ходової частини</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Стан кузова, наявність пошкоджень та слідів ремонту</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Пробіг та історія обслуговування</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Комплектність та стан салону</span>
                                </li>
                            </ul>
                            
                            <a href="#form-section" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-clipboard-list mr-2"></i> Заповнити заявку на оцінку
                            </a>
                        </div>
                        
                        <div class="md:w-1/2 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
                            <div class="text-center">
                                <div class="text-6xl text-indigo-600 dark:text-indigo-400 mb-4">
                                    <i class="fas fa-car"></i>
                                </div>
                                <h4 class="text-xl font-semibold mb-2">Безкоштовна оцінка</h4>
                                <p class="mb-4">Ми проведемо оцінку вашого автомобіля абсолютно безкоштовно</p>
                                <div class="flex justify-center space-x-4">
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">15+</div>
                                        <div class="text-sm">Років досвіду</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5000+</div>
                                        <div class="text-sm">Оцінених авто</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">30</div>
                                        <div class="text-sm">Хвилин на оцінку</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('car-evaluation', CarEvaluation); 