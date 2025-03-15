class OsagoSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="osago" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">ОСЦПВ (автоцивілка)</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://porady.org.ua/sites/default/files/2022-02/OSAGO%20-%20UA_0.jpg" alt="ОСЦПВ" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Що таке ОСЦПВ?</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                ОСЦПВ (Обов'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів) — це обов'язковий вид страхування в Україні, який захищає вас від фінансових втрат у разі, якщо ви стали винуватцем ДТП.
                            </p>
                            
                            <h4 class="text-xl font-semibold mb-3">Що покриває ОСЦПВ:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Відшкодування шкоди, заподіяної життю та здоров'ю потерпілих</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Відшкодування шкоди, заподіяної майну потерпілих</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Витрати на юридичну допомогу</span>
                                </li>
                            </ul>
                            
                            <div class="flex flex-wrap gap-4">
                                <a href="#calculator" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-calculator mr-2"></i> Розрахувати вартість
                                </a>
                                <a href="#faq" class="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-question-circle mr-2"></i> Часті питання
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('osago-section', OsagoSection); 