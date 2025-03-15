class HistorySection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupAnimations();
    }

    render() {
        this.innerHTML = `
            <section id="history" class="mb-12 scroll-mt-20">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                        <i class="fas fa-history text-xl text-indigo-600 dark:text-indigo-400"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Історія компанії</h2>
                </div>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <!-- Декоративний елемент -->
                    <div class="absolute -right-16 -top-16 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50"></div>
                    
                    <div class="relative z-10">
                        <!-- Часова шкала -->
                        <div class="flex items-center mb-8 history-timeline">
                            <div class="timeline-item active" data-year="2005">
                                <div class="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                    <span class="text-lg font-bold">2005</span>
                                </div>
                                <div class="text-center mt-2 text-sm font-medium">Заснування</div>
                            </div>
                            <div class="flex-1 h-1 bg-gray-200 dark:bg-gray-700"></div>
                            <div class="timeline-item" data-year="2010">
                                <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                    <span class="text-lg font-bold">2010</span>
                                </div>
                                <div class="text-center mt-2 text-sm font-medium">Розширення</div>
                            </div>
                            <div class="flex-1 h-1 bg-gray-200 dark:bg-gray-700"></div>
                            <div class="timeline-item" data-year="2025">
                                <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                    <span class="text-lg font-bold">2025</span>
                                </div>
                                <div class="text-center mt-2 text-sm font-medium">Сьогодні</div>
                            </div>
                        </div>
                        
                        <!-- Контент історії -->
                        <div class="space-y-8">
                            <div class="history-content" id="history-2005">
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="md:w-1/2">
                                        <h3 class="text-xl font-semibold mb-3">Заснування та перші кроки</h3>
                                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                                            Компанія AutoPrime була заснована в 2005 році групою ентузіастів автомобільного бізнесу. 
                                            Перший автосалон був відкритий у Києві та спеціалізувався на продажу преміальних автомобілів.
                                        </p>
                                        <p class="text-gray-700 dark:text-gray-300">
                                            Вже за перший рік роботи компанія здобула репутацію надійного партнера та отримала 
                                            офіційне представництво кількох європейських автомобільних брендів.
                                        </p>
                                    </div>
                                    <div class="md:w-1/2 relative">
                                        <img src="https://changan-newton.com.ua/cache/cache_image/f/f44e2dbfd1075ae34cd7458618b1a095.webp" alt="Перший автосалон AutoPrime" class="w-full h-64 object-cover rounded-lg shadow-md">
                                        <div class="absolute -bottom-3 -right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                                            2005
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="history-content hidden" id="history-2010">
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="md:w-1/2 relative order-2 md:order-1">
                                        <img src="https://storage.googleapis.com/go-to-u-site.appspot.com/news/50128.900406116794.jpg" alt="Розширення мережі AutoPrime" class="w-full h-64 object-cover rounded-lg shadow-md">
                                        <div class="absolute -bottom-3 -left-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                                            2010
                                        </div>
                                    </div>
                                    <div class="md:w-1/2 order-1 md:order-2">
                                        <h3 class="text-xl font-semibold mb-3">Розширення мережі</h3>
                                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                                            У 2010 році компанія почала активно розширюватися. Були відкриті нові автосалони 
                                            в Одесі, Львові та Дніпрі. Це дозволило значно збільшити клієнтську базу та 
                                            підвищити впізнаваність бренду.
                                        </p>
                                        <p class="text-gray-700 dark:text-gray-300">
                                            У цей період AutoPrime також розширила свій портфель брендів та почала пропонувати 
                                            клієнтам повний спектр послуг: від продажу нових автомобілів до сервісного обслуговування, 
                                            кредитування та страхування.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="history-content hidden" id="history-2025">
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="md:w-1/2">
                                        <h3 class="text-xl font-semibold mb-3">Сучасний етап</h3>
                                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                                            Сьогодні AutoPrime — це мережа сучасних автосалонів по всій Україні, 
                                            де представлені найкращі автомобільні бренди світу.
                                        </p>
                                        <p class="text-gray-700 dark:text-gray-300">
                                            Компанія продовжує розвиватися, впроваджуючи інноваційні технології та 
                                            підвищуючи якість обслуговування клієнтів. Наша місія — зробити процес 
                                            вибору та придбання автомобіля максимально комфортним та приємним.
                                        </p>
                                        <div class="mt-4 flex gap-2">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                                    <i class="fas fa-store text-green-600 dark:text-green-400"></i>
                                                </div>
                                                <span class="font-bold">15+ салонів</span>
                                            </div>
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                                    <i class="fas fa-car text-blue-600 dark:text-blue-400"></i>
                                                </div>
                                                <span class="font-bold">20+ брендів</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md:w-1/2 relative">
                                        <img src="https://cdn.riastatic.com/photosnewr/auto/salon_photos/38-ra__33189-620x465x70.jpg" alt="Сучасний автосалон AutoPrime" class="w-full h-64 object-cover rounded-lg shadow-md">
                                        <div class="absolute -bottom-3 -right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                                            2025
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupAnimations() {
        setTimeout(() => {
            const timelineItems = this.querySelectorAll('.timeline-item');
            
            timelineItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Оновлюємо активний елемент часової шкали
                    timelineItems.forEach(i => {
                        i.classList.remove('active');
                        const circle = i.querySelector('div:first-child');
                        circle.classList.remove('bg-indigo-600', 'text-white');
                        circle.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
                    });
                    
                    item.classList.add('active');
                    const circle = item.querySelector('div:first-child');
                    circle.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
                    circle.classList.add('bg-indigo-600', 'text-white');
                    
                    // Показуємо відповідний контент
                    const year = item.getAttribute('data-year');
                    const contents = this.querySelectorAll('.history-content');
                    
                    contents.forEach(content => {
                        content.classList.add('hidden');
                    });
                    
                    const activeContent = this.querySelector(`#history-${year}`);
                    if (activeContent) {
                        activeContent.classList.remove('hidden');
                        
                        // Додаємо анімацію появи
                        activeContent.classList.add('animate-fade-in');
                        setTimeout(() => {
                            activeContent.classList.remove('animate-fade-in');
                        }, 500);
                    }
                });
            });
            
            // Додаємо стилі для анімації
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .timeline-item.active div:first-child {
                    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
                }
            `;
            document.head.appendChild(style);
        }, 0);
    }
}

customElements.define('history-section', HistorySection); 