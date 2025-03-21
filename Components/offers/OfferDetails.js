import { getOfferDetails } from '../../utils/offersService.js';

class OfferDetails extends HTMLElement {
    constructor() {
        super();
        this.offer = null;
    }

    async connectedCallback() {
        try {
            
            const urlParams = new URLSearchParams(window.location.search);
            const offerId = urlParams.get('id');
            
            if (!offerId) {
                this.showError('ID пропозиції не вказано');
                return;
            }
            
            
            this.offer = await getOfferDetails(offerId);
            
            if (!this.offer) {
                this.showError('Пропозицію не знайдено');
                return;
            }
            
            this.render();
        } catch (error) {
            console.error('Error loading offer details:', error);
            this.showError('Помилка завантаження деталей пропозиції');
        }
    }
    
    showError(message) {
        this.innerHTML = `
            <div class="max-w-4xl mx-auto py-12 px-4">
                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                    <h2 class="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Помилка</h2>
                    <p class="text-red-500 dark:text-red-300">${message}</p>
                    <a href="special-offers.html" class="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <i class="fas fa-arrow-left mr-2"></i> Повернутися до пропозицій
                    </a>
                </div>
            </div>
        `;
    }

    render() {
        this.innerHTML = `
            <div class="max-w-4xl mx-auto py-8">
                <a href="special-offers.html" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i> Назад до всіх пропозицій
                </a>
                
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                    <div class="relative">
                        <img src="${this.offer.image || '/fs/images/placeholder.jpg'}" 
                             alt="${this.offer.title}" 
                             class="w-full h-80 object-cover">
                        <div class="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium shadow-md">
                            ${this.offer.discount || 'Спеціальна пропозиція'}
                        </div>
                    </div>
                    
                    <div class="p-8">
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                <i class="far fa-calendar-alt mr-2"></i>
                                Дійсно до: ${this.offer.validUntil ? new Date(this.offer.validUntil).toLocaleDateString('uk-UA') : 'Необмежено'}
                            </span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                <i class="far fa-eye mr-2"></i>
                                ${this.offer.views || 0} переглядів
                            </span>
                        </div>
                        
                        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                            ${this.offer.title}
                        </h1>
                        
                        <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>${this.offer.description}</p>
                            ${this.offer.fullDescription ? `<div>${this.offer.fullDescription}</div>` : ''}
                        </div>
                        
                        ${this.offer.conditions ? `
                            <div class="mb-8">
                                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Умови пропозиції</h3>
                                <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    ${this.offer.conditions.map(condition => `<li>${condition}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        <div class="flex flex-col sm:flex-row gap-4 mt-8">
                            <button id="contactBtn" 
                                   class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white 
                                          bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 
                                          rounded-xl transition-all duration-300 shadow-md flex-1 text-center">
                                <i class="fas fa-phone-alt mr-2"></i>
                                Зв'язатися з нами
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Додаємо обробники подій для кнопок
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Кнопка "Зв'язатися з нами"
        const contactBtn = this.querySelector('#contactBtn');
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                const contactModal = document.getElementById('contactModal');
                if (contactModal) {
                    contactModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        // Кнопка "Записатися на тест-драйв"
        const testDriveBtn = this.querySelector('#testDriveBtn');
        if (testDriveBtn) {
            testDriveBtn.addEventListener('click', () => {
                const testDriveModal = document.getElementById('testDriveModal');
                if (testDriveModal) {
                    testDriveModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    }
}

customElements.define('offer-details', OfferDetails); 