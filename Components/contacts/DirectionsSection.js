class DirectionsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="directions" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Як до нас дістатися</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-medium text-lg mb-2">Громадським транспортом</h4>
                            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-subway text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>Метро "Хрещатик", вихід до Майдану Незалежності</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-bus text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>Автобуси №24, №114 до зупинки "Майдан Незалежності"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-tram text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>Трамвай №18 до зупинки "Європейська площа"</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-medium text-lg mb-2">На автомобілі</h4>
                            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-car text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>З боку Подолу: через вул. Сагайдачного та Володимирський узвіз</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-car text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>З боку Печерська: через бульвар Лесі Українки та вул. Інститутську</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-parking text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                    <span>Паркування: підземний паркінг ТЦ "Глобус" або наземна парковка на Європейській площі</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('directions-section', DirectionsSection); 