class DiagnosticsAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="about" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про діагностику</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://plus.unsplash.com/premium_photo-1661510636744-0510eca3cd46?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Комп'ютерна діагностика" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Сучасна діагностика автомобіля</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Діагностика автомобіля — це комплекс процедур, спрямованих на виявлення несправностей та оцінку технічного стану транспортного засобу.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Наш технічний центр оснащений найсучаснішим діагностичним обладнанням, яке дозволяє з високою точністю визначати стан усіх систем автомобіля.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                Регулярна діагностика допомагає виявити проблеми на ранній стадії, що дозволяє уникнути серйозних поломок та зекономити на ремонті.
                            </p>
                            
                            <div class="flex flex-wrap gap-4">
                                <a href="#types" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-list-ul mr-2"></i> Види діагностики
                                </a>
                                <a href="#form" class="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-calendar-check mr-2"></i> Записатися
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('diagnostics-about', DiagnosticsAbout); 