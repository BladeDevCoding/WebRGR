import { getOffers } from '../../utils/offersService.js';

class CurrentOffers extends HTMLElement {
    constructor() {
        super();
        this.offers = [];
    }

    async connectedCallback() {
        console.log('CurrentOffers component connected');
        try {
            console.log('Trying to fetch offers...');
            
            // Спроба завантажити дані
            try {
                this.offers = await getOffers();
                console.log('Offers received:', this.offers);
            } catch (e) {
                console.error('Failed to load offers, using fallback data:', e);
                
                // Резервні тестові дані, якщо завантаження не вдалося
                this.offers = [
                    {
                        id: 1,
                        title: "Знижка 10% на всі автомобілі 2022 року",
                        description: "Скористайтеся унікальною можливістю придбати автомобіль з вигодою до 10%",
                        image: "/fs/images/offers/car1.jpg",
                        discount: "-10%",
                        validUntil: "2025-12-31",
                        views: 1245
                    },
                    {
                        id: 2,
                        title: "Кредит 0% на 12 місяців",
                        description: "Спеціальна кредитна програма з першим внеском від 30%",
                        image: "/fs/images/offers/card.jpg",
                        discount: "0%",
                        validUntil: "2025-11-30",
                        views: 987
                    },
                    {
                        id: 3,
                        title: "Зимовий сервіс -20%",
                        description: "Підготуйте свій автомобіль до зими з вигодою",
                        image: "/fs/images/offers/service.jpg",
                        discount: "-20%",
                        validUntil: "2025-10-31",
                        views: 1532
                    }
                ];
            }
            
            this.render();
            this.setupIntersectionObserver();
        } catch (error) {
            console.error('Error in component:', error);
            this.innerHTML = '<p class="text-center text-red-500">Помилка завантаження пропозицій</p>';
        }
    }

    render() {
        this.innerHTML = `
            <section class="py-8">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                    Актуальні пропозиції
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${this.offers.slice(0, 3).map((offer, index) => `
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
                    `).join('')}
                </div>
            </section>
        `;
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

customElements.define('current-offers', CurrentOffers); 