class HomeAdvantages extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="advantages" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Чому обирають нас</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-medal text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Офіційний дилер</h3>
                            <p class="text-gray-600 dark:text-gray-400">
                                Гарантія від виробника та оригінальні запчастини
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-car text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Широкий вибір</h3>
                            <p class="text-gray-600 dark:text-gray-400">
                                Понад 200 автомобілів різних марок та моделей
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-tools text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Сучасний сервіс</h3>
                            <p class="text-gray-600 dark:text-gray-400">
                                Професійне обслуговування та ремонт
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-handshake text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Індивідуальний підхід</h3>
                            <p class="text-gray-600 dark:text-gray-400">
                                Персональний менеджер для кожного клієнта
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('home-advantages', HomeAdvantages); 