class RegularMaintenance extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="regular-maintenance" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Регулярне технічне обслуговування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://plus.unsplash.com/premium_photo-1674375346314-bfc33dd9cadd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Регулярне технічне обслуговування" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Чому регулярне ТО важливе?</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Регулярне технічне обслуговування є ключовим фактором для забезпечення надійності, безпеки та довговічності вашого автомобіля. Своєчасне проведення ТО дозволяє:
                            </p>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Запобігти серйозним поломкам та дорогому ремонту</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Підтримувати оптимальну продуктивність двигуна</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Зменшити витрати палива</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Забезпечити безпеку під час експлуатації</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Зберегти гарантію виробника</span>
                                </li>
                            </ul>
                            <div class="flex flex-wrap gap-4">
                                <a href="#maintenance-types" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-list-ul mr-2"></i> Види ТО
                                </a>
                                <a href="#maintenance-form" class="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-calendar-check mr-2"></i> Записатися на ТО
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('regular-maintenance', RegularMaintenance); 