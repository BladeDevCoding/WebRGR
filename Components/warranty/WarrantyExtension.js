class WarrantyExtension extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupModalEvents();
        this.setupBookingLinks();
    }

    render() {
        this.innerHTML = `
            <section id="warranty-extension" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Розширена гарантія</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6 text-gray-700 dark:text-gray-300">
                        Ми пропонуємо програми розширеної гарантії, які дозволяють продовжити стандартний гарантійний термін та отримати додатковий захист для вашого автомобіля.
                    </p>
                    
                    <div class="grid md:grid-cols-3 gap-6 mb-8">
                        <!-- Базовий пакет -->
                        <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <h3 class="text-xl font-bold">Базовий</h3>
                                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 my-2">5 000 грн</div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">+1 рік гарантії</p>
                            </div>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Покриття основних вузлів та агрегатів</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Технічна підтримка 24/7</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Евакуація до найближчого СТО</span>
                                </li>
                            </ul>
                            <div class="text-center">
                                <button class="open-modal px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200" data-target="basic-modal">
                                    Детальніше
                                </button>
                            </div>
                        </div>
                        
                        <!-- Оптимальний пакет -->
                        <div class="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800 hover:shadow-md transition-shadow duration-300 relative">
                            <div class="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                <span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Популярний
                                </span>
                            </div>
                            <div class="text-center mb-4">
                                <h3 class="text-xl font-bold">Оптимальний</h3>
                                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 my-2">8 500 грн</div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">+2 роки гарантії</p>
                            </div>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Все включено в Базовий пакет</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Розширене покриття електроніки</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Підмінний автомобіль на час ремонту</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Пріоритетне обслуговування</span>
                                </li>
                            </ul>
                            <div class="text-center">
                                <button class="open-modal px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200" data-target="optimal-modal">
                                    Детальніше
                                </button>
                            </div>
                        </div>
                        
                        <!-- Преміум пакет -->
                        <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <h3 class="text-xl font-bold">Преміум</h3>
                                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 my-2">12 000 грн</div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">+3 роки гарантії</p>
                            </div>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Все включено в Оптимальний пакет</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Повне покриття всіх систем</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Безкоштовна заміна витратних матеріалів</span>
                                </li>
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>VIP-обслуговування</span>
                                </li>
                            </ul>
                            <div class="text-center">
                                <button class="open-modal px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200" data-target="premium-modal">
                                    Детальніше
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <a href="#service-booking" class="service-booking-link inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            <i class="fas fa-calendar-check mr-2"></i> Записатися на консультацію
                        </a>
                    </div>
                </div>
                
                <!-- Модальні вікна з детальною інформацією -->
                <div id="basic-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center hidden z-50" data-modal>
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold">Базовий пакет розширеної гарантії</h3>
                            <button class="close-modal text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="mb-6">
                            <span class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5 000</span>
                            <span class="text-gray-600 dark:text-gray-400"> грн/рік</span>
                        </div>
                        
                        <h4 class="text-lg font-semibold">Що входить:</h4>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Покриття основних вузлів та агрегатів (двигун, трансмісія, гальмівна система)</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Технічна підтримка 24/7 по телефону</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Безкоштовна діагностика раз на рік</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Знижка 10% на запчастини</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Знижка 5% на роботи, не покриті гарантією</span>
                            </li>
                        </ul>
                        
                        <h4 class="text-lg font-semibold">Умови:</h4>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                <span>Автомобіль повинен бути не старше 5 років</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                <span>Пробіг не більше 100 000 км</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                <span>Обов'язкове проходження ТО згідно з регламентом</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                <span>Максимальна сума покриття: 50 000 грн на рік</span>
                            </li>
                        </ul>
                        
                        <div class="mt-8 flex justify-end">
                            <a href="#service-form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 close-modal">
                                Оформити
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Модальне вікно для пакету "Оптимальний" -->
                <div id="optimal-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden" data-modal="optimal-modal">
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                    <i class="fas fa-star text-lg text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <h3 class="text-xl font-bold">Пакет "Оптимальний"</h3>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 close-modal">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="mb-6">
                                <span class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8 500</span>
                                <span class="text-gray-600 dark:text-gray-400"> грн/рік</span>
                            </div>
                            
                            <h4 class="text-lg font-semibold">Що входить:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Все, що включено в пакет "Базовий"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Розширене покриття електроніки та електричних систем</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовна заміна масла та фільтрів (до 2 разів на рік)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Пріоритетне обслуговування в сервісному центрі</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Знижка 15% на запчастини</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Знижка 10% на роботи, не покриті гарантією</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовна евакуація до найближчого сервісного центру (до 100 км)</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-lg font-semibold">Умови:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Автомобіль повинен бути не старше 7 років</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Пробіг не більше 150 000 км</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Обов'язкове проходження ТО згідно з регламентом</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Максимальна сума покриття: 100 000 грн на рік</span>
                                </li>
                            </ul>
                            
                            <div class="mt-8 flex justify-end">
                                <a href="#service-form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 close-modal">
                                    Оформити
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Модальне вікно для пакету "Преміум" -->
                <div id="premium-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden" data-modal="premium-modal">
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                                    <i class="fas fa-crown text-lg text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <h3 class="text-xl font-bold">Пакет "Преміум"</h3>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 close-modal">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="mb-6">
                                <span class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12 000</span>
                                <span class="text-gray-600 dark:text-gray-400"> грн/рік</span>
                            </div>
                            
                            <h4 class="text-lg font-semibold">Що входить:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Все, що включено в пакет "Оптимальний"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Повне покриття всіх систем автомобіля без винятків</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовна евакуація з будь-якої точки країни</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовна сезонна заміна шин (2 рази на рік)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Знижка 25% на запчастини</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Знижка 20% на роботи, не покриті гарантією</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовний підмінний автомобіль на час ремонту</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Персональний менеджер</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Безкоштовна мийка автомобіля при кожному відвідуванні сервісу</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-lg font-semibold">Умови:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Автомобіль повинен бути не старше 10 років</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Пробіг не більше 200 000 км</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Обов'язкове проходження ТО згідно з регламентом</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                    <span>Максимальна сума покриття: 200 000 грн на рік</span>
                                </li>
                            </ul>
                            
                            <div class="mt-8 flex justify-end">
                                <a href="#service-form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 close-modal">
                                    Оформити
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupModalEvents() {
        // Додаємо обробники для відкриття модальних вікон
        const openButtons = this.querySelectorAll('.open-modal');
        openButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const modal = document.getElementById(targetId);
                if (modal) {
                    modal.classList.remove('hidden');
                    // Блокуємо прокрутку основного контенту
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Додаємо обробники для закриття модальних вікон
        const closeButtons = this.querySelectorAll('.close-modal');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('[data-modal]');
                if (modal) {
                    modal.classList.add('hidden');
                    // Відновлюємо прокрутку основного контенту
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Закриття модального вікна при кліку на затемнений фон
        const modals = this.querySelectorAll('[data-modal]');
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Закриття модального вікна при натисканні клавіші Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModals = this.querySelectorAll('[data-modal]:not(.hidden)');
                openModals.forEach(modal => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                });
            }
        });
    }

    setupBookingLinks() {
        // Додаємо обробник для кнопки запису на сервіс
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

customElements.define('warranty-extension', WarrantyExtension); 