class HomeTestimonials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="testimonials" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Відгуки наших клієнтів</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Відгук 1 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 flex mr-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 dark:text-gray-400">5.0</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            "Дуже задоволений обслуговуванням в AutoPrime. Професійний підхід, швидке оформлення документів та чудові умови кредитування. Рекомендую!"
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                <i class="fas fa-user text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">Олександр Петренко</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Volkswagen Tiguan</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Відгук 2 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 flex mr-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 dark:text-gray-400">5.0</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            "Скористалася послугою трейд-ін. Все пройшло швидко та без зайвих клопотів. Отримала хорошу оцінку за свій старий автомобіль та вигідну пропозицію на новий."
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                <i class="fas fa-user text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">Марина Коваленко</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Skoda Kodiaq</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Відгук 3 -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 flex mr-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="text-gray-600 dark:text-gray-400">4.5</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            "Регулярно обслуговую свій автомобіль в технічному центрі AutoPrime. Висока якість робіт, оригінальні запчастини та адекватні ціни. Завжди залишаюся задоволеним."
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                <i class="fas fa-user text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">Віктор Савченко</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Volkswagen Tiguan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('home-testimonials', HomeTestimonials); 