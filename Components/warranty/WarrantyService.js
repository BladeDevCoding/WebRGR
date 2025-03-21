class WarrantyService extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="warranty-service" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Гарантійне обслуговування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://an.net.ua/userfiles/image/garantii_na_avto.jpg" alt="Гарантійне обслуговування" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Регулярне обслуговування</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Для збереження гарантії необхідно проходити регулярне технічне обслуговування згідно з графіком, вказаним у сервісній книжці вашого автомобіля.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                Наш сервісний центр оснащений найсучаснішим обладнанням та використовує лише оригінальні запчастини, що гарантує високу якість обслуговування.
                            </p>
                            
                            <h4 class="text-xl font-semibold mb-3">Переваги обслуговування у нас:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Сертифіковані спеціалісти з багаторічним досвідом</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Оригінальні запчастини та матеріали</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Сучасне діагностичне обладнання</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Прозора система ціноутворення</span>
                                </li>
                            </ul>
                            
                            <div class="flex flex-wrap gap-4">
                                <a href="#service-booking" class="service-booking-link inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-calendar-check mr-2"></i> Записатися на сервіс
                                </a>
                                <a href="#warranty-faq" class="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-question-circle mr-2"></i> Часті питання
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        
        const bookingLink = this.querySelector('.service-booking-link');
        if (bookingLink) {
            bookingLink.addEventListener('click', (e) => {
                e.preventDefault();
                const bookingSection = document.getElementById('service-booking');
                if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }
}

customElements.define('warranty-service', WarrantyService); 