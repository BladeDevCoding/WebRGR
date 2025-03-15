class KaskoSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="kasko" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">КАСКО</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex flex-row-reverse">
                        <div class="md:w-1/2">
                            <img src="https://quasa.io/storage/images/news/xeveBT68lNxXXZpRCwzdG3ctWnJL9B3TQA2mmIS9.jpg" alt="КАСКО" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Що таке КАСКО?</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                КАСКО — це добровільне страхування автомобіля, яке захищає ваш транспортний засіб від різноманітних ризиків, незалежно від того, хто є винуватцем події.
                            </p>
                            
                            <h4 class="text-xl font-semibold mb-3">Що покриває КАСКО:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Пошкодження внаслідок ДТП</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Викрадення автомобіля</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Пошкодження внаслідок стихійних лих</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Пошкодження внаслідок пожежі або вибуху</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Протиправні дії третіх осіб</span>
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

customElements.define('kasko-section', KaskoSection); 