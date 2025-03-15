import SeasonalService from '../../utils/seasonalService.js';

class SeasonOffers extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const offers = await SeasonalService.getActiveSeasonalOffers();
        this.render(offers);
    }

    render(offers) {
        this.innerHTML = `
            <section id="season-offers" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Сезонні пропозиції</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    ${offers.map(offer => this.renderOffer(offer)).join('')}
                </div>
                
            </section>
        `;
    }

    renderOffer(offer) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div class="relative h-48">
                    <img src="${offer.image}" alt="${offer.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div class="p-4 text-white">
                            <h3 class="text-2xl font-bold">${offer.title}</h3>
                            <span class="inline-block mt-1 text-sm bg-${offer.badge.color}-600 px-2 py-1 rounded">
                                ${offer.badge.text}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="p-5">
                    <p class="text-gray-700 dark:text-gray-300 mb-4">${offer.description}</p>
                    <ul class="space-y-2 mb-4">
                        ${offer.features.map(feature => `
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="flex justify-between items-center">
                        <div class="flex items-baseline">
                            <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${offer.price} ₴</span>
                            ${offer.oldPrice ? `
                                <span class="ml-2 text-sm text-gray-500 line-through">${offer.oldPrice} ₴</span>
                            ` : ''}
                        </div>
                        <a href="../catalog/seasonal-details.html?slug=${offer.slug}" 
                           class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                            Детальніше <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('season-offers', SeasonOffers); 