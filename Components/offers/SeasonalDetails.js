import SeasonalService from '../../utils/seasonalService.js';

class SeasonalDetails extends HTMLElement {
    constructor() {
        super();
        this.offer = null;
    }

    async connectedCallback() {
        await this.loadOfferDetails();
        this.setupEventListeners();
    }

    async loadOfferDetails() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const slug = urlParams.get('slug');

            if (!slug) {
                this.showError('Пропозицію не знайдено');
                return;
            }

            const offer = await SeasonalService.getSeasonalOfferBySlug(slug);
            
            if (!offer) {
                this.showError('Пропозицію не знайдено');
                return;
            }

            this.offer = offer;
            this.render();

        } catch (error) {
            console.error('Error loading seasonal offer details:', error);
            this.showError('Помилка завантаження даних');
        }
    }

    setupEventListeners() {
        const contactBtn = this.querySelector('#contact-btn');
        const modal = this.querySelector('#contact-modal');
        const closeBtn = this.querySelector('#close-modal');
        const form = this.querySelector('#service-form');

        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Відправляємо...';

                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Відправити';
                    this.showSuccessMessage();
                }, 1500);
            });
        }

        // Закриття модального вікна при кліку поза ним
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    showSuccessMessage() {
        const modal = this.querySelector('#contact-modal');
        const modalContent = this.querySelector('#modal-content');
        
        modalContent.innerHTML = `
            <div class="text-center py-8">
                <div class="text-green-500 text-6xl mb-4">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">Дякуємо за запис!</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                    Наш менеджер зв'яжеться з вами для підтвердження запису
                </p>
                <button id="close-success" class="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200">
                    Закрити
                </button>
            </div>
        `;

        const closeSuccessBtn = this.querySelector('#close-success');
        closeSuccessBtn?.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                this.render();
            }, 300);
        });
    }

    render() {
        this.innerHTML = `
            <div>
                <!-- Навігаційний ланцюжок -->
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <a href="../index.html" class="hover:text-indigo-600 dark:hover:text-indigo-400">Головна</a>
                    <i class="fas fa-chevron-right mx-2 text-xs"></i>
                    <a href="special-offers.html" class="hover:text-indigo-600 dark:hover:text-indigo-400">Акції</a>
                    <i class="fas fa-chevron-right mx-2 text-xs"></i>
                    <span>${this.offer.title}</span>
                </div>

                <!-- Основний контент -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="relative h-64 md:h-96">
                        <img src="${this.offer.image}" alt="${this.offer.title}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                            <div class="absolute bottom-0 p-8">
                                <div class="flex items-center mb-2">
                                    <span class="bg-${this.offer.badge.color}-100 dark:bg-${this.offer.badge.color}-900/30 text-${this.offer.badge.color}-800 dark:text-${this.offer.badge.color}-300 text-sm font-semibold px-3 py-1 rounded-full">
                                        ${this.offer.badge.text}
                                    </span>
                                </div>
                                <h1 class="text-4xl font-bold text-white mb-2">${this.offer.title}</h1>
                                <p class="text-lg text-white/90">Діє до ${this.offer.endDate}</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-8">
                        <!-- Ціна -->
                        <div class="flex items-baseline mb-6">
                            <span class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">${this.offer.price} ₴</span>
                            ${this.offer.oldPrice ? `
                                <span class="ml-2 text-xl text-gray-500 line-through">${this.offer.oldPrice} ₴</span>
                                <span class="ml-2 text-sm text-green-500">Економія ${parseInt(this.offer.oldPrice) - parseInt(this.offer.price)} ₴</span>
                            ` : ''}
                        </div>

                        <div class="prose dark:prose-invert max-w-none mb-8">
                            ${this.offer.fullDescription}
                        </div>

                        <div class="flex flex-wrap gap-4 mb-8">
                            ${this.offer.features.map(feature => `
                                <div class="flex items-center bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                                    <i class="fas fa-check-circle text-indigo-600 dark:text-indigo-400 mr-2"></i>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="flex flex-wrap gap-4">
                            <button id="contact-btn" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-calendar-check mr-2"></i> Записатись на сервіс
                            </button>
                            <a href="special-offers.html" class="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200 border border-gray-200 dark:border-gray-600">
                                <i class="fas fa-arrow-left mr-2"></i> До всіх пропозицій
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Модальне вікно -->
                ${this.renderModal()}
            </div>
        `;
    }

    renderModal() {
        return `
            <div id="contact-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center hidden z-50">
                <div id="modal-content" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h3 class="text-xl font-bold">Записатись на сервіс</h3>
                        <button id="close-modal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <div class="p-6">
                        <form id="service-form" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Ваше ім'я*</label>
                                <input type="text" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Телефон*</label>
                                <input type="tel" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Бажана дата візиту</label>
                                <input type="date" class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Марка та модель автомобіля*</label>
                                <input type="text" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Коментар</label>
                                <textarea class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
                            </div>
                            <button type="submit" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                Відправити
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    // ... Додайте інші методи з OfferDetails.js (setupEventListeners, showSuccessMessage, тощо)
}

customElements.define('seasonal-details', SeasonalDetails); 