import ServiceOffersService from '../../utils/serviceOffersService.js';

class ServiceOffers extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const offers = await ServiceOffersService.getActiveServiceOffers();
        this.render(offers);
    }

    render(offers) {
        this.innerHTML = `
            <section id="service-offers" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Акції на сервіс</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    ${offers.map(offer => this.renderOffer(offer)).join('')}
                </div>

            </section>
        `;
    }

    renderOffer(offer) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4">
                            <i class="fas fa-tools text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 class="text-xl font-bold">${offer.title}</h3>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">${offer.description}</p>
                    <div class="flex justify-between items-center">
                        <div>
                            ${offer.price === "0" 
                                ? `<span class="text-2xl font-bold text-green-600 dark:text-green-400">Безкоштовно</span>` 
                                : `<span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${offer.price} ₴</span>
                                   ${offer.oldPrice ? `<span class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">${offer.oldPrice} ₴</span>` : ''}`
                            }
                        </div>
                        <a href="../catalog/service-details.html?slug=${offer.slug}" 
                           class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                            Детальніше <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('service-offers', ServiceOffers); 