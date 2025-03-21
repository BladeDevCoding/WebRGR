import { getAllOffers } from '../../utils/offersService.js';

class AllOffers extends HTMLElement {
    constructor() {
        super();
        this.offers = [];
        this.filteredOffers = [];
        this.activeCategory = 'all';
    }

    async connectedCallback() {
        try {
            
            this.offers = await getAllOffers();
            this.filteredOffers = [...this.offers];
            
            this.render();
            this.setupEventListeners();
            this.setupIntersectionObserver();
        } catch (error) {
            console.error('Error loading offers:', error);
            this.innerHTML = '<p class="text-center text-red-500 py-12">Помилка завантаження пропозицій</p>';
        }
    }
    
    setupEventListeners() {
        
        this.querySelectorAll('[data-category]').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                this.activeCategory = category;
                
                
                this.querySelectorAll('[data-category]').forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-800', 'dark:bg-gray-800', 'dark:text-gray-200');
                });
                
                button.classList.remove('bg-gray-100', 'text-gray-800', 'dark:bg-gray-800', 'dark:text-gray-200');
                button.classList.add('bg-blue-600', 'text-white');
                
                
                if (category === 'all') {
                    this.filteredOffers = [...this.offers];
                } else {
                    this.filteredOffers = this.offers.filter(offer => offer.category === category);
                }
                
                
                this.renderOffers();
            });
        });
    }
    
    renderOffers() {
        const offersContainer = this.querySelector('#offers-container');
        
        if (this.filteredOffers.length === 0) {
            offersContainer.innerHTML = `
                <div class="col-span-full py-12 text-center">
                    <p class="text-gray-500 dark:text-gray-400">Немає пропозицій у цій категорії</p>
                </div>
            `;
            return;
        }
        
        offersContainer.innerHTML = this.filteredOffers.map((offer, index) => `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden opacity-0 translate-y-4 transition-all duration-500 ease-out group hover:shadow-xl flex flex-col h-full" 
                 data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="relative overflow-hidden">
                    <img src="${offer.image || '/fs/images/placeholder.jpg'}" 
                         alt="${offer.title || 'Спеціальна пропозиція'}" 
                         class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium shadow-md">
                        ${offer.discount || 'Спеціальна пропозиція'}
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <i class="far fa-calendar-alt mr-2"></i>
                            до ${offer.validUntil ? new Date(offer.validUntil).toLocaleDateString('uk-UA') : 'Необмежено'}
                        </span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <i class="far fa-eye mr-2"></i>
                            ${offer.views || 0}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        ${offer.title || 'Спеціальна пропозиція'}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                        ${offer.description || 'Деталі пропозиції уточнюйте у менеджера'}
                    </p>
                    <div class="mt-auto">
                        <a href="offer-details.html?id=${offer.id || index}" 
                           class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white 
                                  bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 
                                  rounded-xl transition-all duration-300 group-hover:scale-[1.02] shadow-md">
                            <span>Дізнатись більше</span>
                            <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        this.setupIntersectionObserver();
    }

    render() {
        this.innerHTML = `
            <section class="py-12">
                <div class="max-w-7xl mx-auto px-4">
                    <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Всі спеціальні пропозиції
                    </h1>
                    
                    <div class="flex flex-wrap justify-center gap-4 mb-12">
                        <button data-category="all" class="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-colors">
                            Всі пропозиції
                        </button>
                        <button data-category="cars" class="px-6 py-3 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-medium transition-colors">
                            Автомобілі
                        </button>
                        <button data-category="service" class="px-6 py-3 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-medium transition-colors">
                            Сервіс
                        </button>
                        <button data-category="finance" class="px-6 py-3 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-medium transition-colors">
                            Фінансування
                        </button>
                    </div>
                    
                    <div id="offers-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Тут будуть відображатися пропозиції -->
                    </div>
                </div>
            </section>
        `;
        
        this.renderOffers();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.querySelectorAll('[data-aos]').forEach(card => {
            observer.observe(card);
        });
    }
}

customElements.define('all-offers', AllOffers); 