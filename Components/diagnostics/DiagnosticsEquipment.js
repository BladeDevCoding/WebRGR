class DiagnosticsEquipment extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="equipment" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наше обладнання</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <img src="https://plus.unsplash.com/premium_photo-1661602000626-823fa4256b06?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Діагностичне обладнання" class="rounded-lg w-full h-auto mb-4">
                            <h3 class="text-xl font-bold mb-2">Сучасне діагностичне обладнання</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Наш технічний центр оснащений найсучаснішим діагностичним обладнанням від провідних світових виробників.
                            </p>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-laptop text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Діагностичні сканери</h4>
                                    <p class="text-gray-700 dark:text-gray-300">Професійні сканери для зчитування та аналізу помилок електронних систем автомобіля.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-tachometer-alt text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Стенди для перевірки гальм</h4>
                                    <p class="text-gray-700 dark:text-gray-300">Обладнання для точного вимірювання ефективності гальмівної системи.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-car-side text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Стенди розвал-сходження</h4>
                                    <p class="text-gray-700 dark:text-gray-300">3D-стенди для точного вимірювання та регулювання кутів установки коліс.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-battery-full text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Тестери акумуляторів</h4>
                                    <p class="text-gray-700 dark:text-gray-300">Обладнання для перевірки стану акумуляторної батареї та системи заряду.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('diagnostics-equipment', DiagnosticsEquipment); 