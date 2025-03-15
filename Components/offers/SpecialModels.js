import OffersService from '../../utils/offersService.js';

class SpecialModels extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const models = await OffersService.getModelOffers();
        this.render(models);
    }

    render(models) {
        this.innerHTML = `
            <section id="special-models" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Спецпропозиції на моделі</h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    ${models.map(model => this.renderModel(model)).join('')}
                </div>
                
                <div class="mt-8 text-center">
                    <a href="../catalog/all-offers.html?category=models" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-car mr-2"></i> Переглянути всі моделі
                    </a>
                </div>
            </section>`;
    }

    renderModel(model) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img src="${model.image}" alt="${model.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        -${model.discount}
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-bold mb-2">${model.name}</h3>
                    <div class="flex items-center mb-3">
                        <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${model.newPrice} грн</span>
                        <span class="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">${model.oldPrice} грн</span>
                    </div>
                    <ul class="space-y-1 mb-4">
                        ${model.features.map(feature => `
                            <li class="flex items-start text-sm">
                                <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <a href="../catalog/offer-details.html?slug=${model.slug}" 
                       class="inline-flex items-center w-full justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        Детальніше
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('special-models', SpecialModels); 