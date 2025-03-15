class BodyRepairAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про послугу</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="../images/body-repair/about.jpg" alt="Кузовний ремонт" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Професійний кузовний ремонт</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Наш технічний центр спеціалізується на кузовному ремонті будь-якої складності. Ми відновлюємо автомобілі після ДТП, усуваємо пошкодження від граду, корозії та інших факторів.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                Використовуємо сучасне обладнання та технології, що дозволяє нам виконувати роботи з високою точністю та якістю. Наші фахівці мають багаторічний досвід та постійно підвищують свою кваліфікацію.
                            </p>
                            
                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-check text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <span>Гарантія на роботи</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-check text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <span>Оригінальні деталі</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-check text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <span>Сучасне обладнання</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-check text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <span>Досвідчені майстри</span>
                                </div>
                            </div>
                            
                            <a href="#form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-paper-plane mr-2"></i> Залишити заявку
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('body-repair-about', BodyRepairAbout); 