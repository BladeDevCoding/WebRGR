class CarDetails extends HTMLElement {
    constructor() {
        super();
        this.car = null;
        this.isLoading = true;
        this.error = null;
        this.activeModal = null; // Для відстеження активного модального вікна
        this.creditAmount = 0;
        this.creditDownPayment = 0;
        this.creditTerm = 60; // 5 років за замовчуванням
        this.creditRate = 12.9; // Фіксована ставка
        this.monthlyPayment = 0;
        this.toastTimeout = null; // Для відстеження таймера toast-повідомлення
    }

    async connectedCallback() {
        this.render(); // Показуємо завантажувач
        await this.loadCarDetails();
        this.render(); // Оновлюємо з даними
        if (this.car) {
            this.initializeSwiper();
            this.setupEventListeners();
            this.calculateCredit(); // Розраховуємо кредит одразу
            this.updateCreditUI(); // Оновлюємо UI кредитного калькулятора
        }
    }

    async loadCarDetails() {
        try {
            // Отримуємо slug з URL
            const urlParams = new URLSearchParams(window.location.search);
            const slug = urlParams.get('slug');
            
            if (!slug) {
                throw new Error('Не вказано ідентифікатор автомобіля');
            }
            
            // Завантажуємо всі автомобілі
            const cars = await window.carsService.getCars();
            
            // Знаходимо потрібний автомобіль за slug
            const car = cars.find(car => car.slug === slug);
            
            if (!car) {
                throw new Error('Автомобіль не знайдено');
            }
            
            this.car = car;
            this.isLoading = false;
            
            // Встановлюємо заголовок сторінки
            document.title = `${car.title || `${car.brand} ${car.model}`} | AutoPrime`;
            
            // Встановлюємо початкову суму кредиту
            const priceStr = car.price?.replace(/\s+/g, '').replace(/[^\d]/g, '') || '0';
            this.creditAmount = parseInt(priceStr);
            this.creditDownPayment = Math.round(this.creditAmount * 0.2); // 20% початковий внесок
            
        } catch (error) {
            console.error('Помилка при завантаженні деталей автомобіля:', error);
            this.error = error.message;
            this.isLoading = false;
        }
    }

    setupEventListeners() {
        // Обробник для форми зв'язку з менеджером
        const contactForm = this.querySelector('#contact-form-element');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
        
        // Обробник для кнопки "Поділитися"
        const shareButton = this.querySelector('#share-button');
        if (shareButton) {
            shareButton.addEventListener('click', this.handleShare.bind(this));
        }
        
        // Обробники для модальних вікон
        const creditButton = this.querySelector('#credit-button');
        if (creditButton) {
            creditButton.addEventListener('click', () => this.openModal('credit'));
        }
        
        const testDriveButton = this.querySelector('#test-drive-button');
        if (testDriveButton) {
            testDriveButton.addEventListener('click', () => this.openModal('test-drive'));
        }
        
        // Обробники для закриття модальних вікон
        const closeButtons = this.querySelectorAll('.modal-close');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => this.closeModal());
        });
        
        // Закриття модального вікна при кліку на фон
        const modals = this.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        });
        
        // Обробники для форми тест-драйву
        const testDriveForm = this.querySelector('#test-drive-form');
        if (testDriveForm) {
            testDriveForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showToast('Запит на тест-драйв надіслано! Наш менеджер зв\'яжеться з вами найближчим часом.');
            });
        }
        
        // Обробники для калькулятора кредиту
        const downPaymentInput = this.querySelector('#down-payment');
        const downPaymentSlider = this.querySelector('#down-payment-slider');
        const termSelect = this.querySelector('#credit-term');
        const calculateCreditButton = this.querySelector('#calculate-credit-button');
        
        if (downPaymentInput) {
            downPaymentInput.value = this.creditDownPayment.toLocaleString();
            downPaymentInput.addEventListener('input', (e) => {
                const value = parseInt(e.target.value.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                this.creditDownPayment = value;
                
                // Оновлюємо слайдер
                if (downPaymentSlider) {
                    const maxDownPayment = this.creditAmount * 0.7; // Максимальний внесок 70%
                    const percentage = (this.creditDownPayment / maxDownPayment) * 100;
                    downPaymentSlider.value = Math.min(percentage, 100);
                }
                
                this.calculateCredit();
                this.updateCreditUI();
            });
        }
        
        if (downPaymentSlider) {
            const maxDownPayment = this.creditAmount * 0.7; // Максимальний внесок 70%
            const initialPercentage = (this.creditDownPayment / maxDownPayment) * 100;
            downPaymentSlider.value = Math.min(initialPercentage, 100);
            
            downPaymentSlider.addEventListener('input', (e) => {
                const percentage = parseFloat(e.target.value);
                const maxDownPayment = this.creditAmount * 0.7; // Максимальний внесок 70%
                this.creditDownPayment = Math.round((percentage / 100) * maxDownPayment);
                
                // Оновлюємо поле вводу
                if (downPaymentInput) {
                    downPaymentInput.value = this.creditDownPayment.toLocaleString();
                }
                
                this.calculateCredit();
                this.updateCreditUI();
            });
        }
        
        if (termSelect) {
            termSelect.value = this.creditTerm;
            termSelect.addEventListener('change', (e) => {
                this.creditTerm = parseInt(e.target.value);
                this.calculateCredit();
                this.updateCreditUI();
            });
        }
        
        if (calculateCreditButton) {
            calculateCreditButton.addEventListener('click', () => {
                this.showToast('Заявку на кредит відправлено! Наш менеджер зв\'яжеться з вами найближчим часом.');
            });
        }
    }

    render() {
        if (this.isLoading) {
            this.innerHTML = this.renderLoader();
            return;
        }
        
        if (this.error) {
            this.innerHTML = this.renderError();
            return;
        }
        
        if (!this.car) {
            this.innerHTML = this.renderNotFound();
            return;
        }
        
        // Отримуємо дані автомобіля
        const { 
            brand, model, year, title, configuration, 
            mileage, engine, fuel, transmission, drive, 
            price, oldPrice, discount, gallery, 
            priceUSD, priceEUR, enginePower, acceleration, maxSpeed 
        } = this.car;
        
        // Форматуємо заголовок
        const carTitle = title || `${brand} ${model}`;
        
        // Форматуємо ціни
        const currentPrice = price || 'Ціна за запитом';
        const formattedOldPrice = oldPrice ? `<span class="line-through text-gray-500 dark:text-gray-400">${oldPrice}</span>` : '';
        const discountBadge = discount ? `<span class="ml-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">${discount}</span>` : '';
        
        // Форматуємо пробіг
        const formattedMileage = mileage && parseInt(mileage) > 0 ? `${mileage} км` : 'Новий';
        
        // Форматуємо конфігурацію
        const formattedConfig = configuration ? configuration.replace(/_/g, ' ') : '';
        
        this.innerHTML = `
            <div class="mb-8">
                <a href="/catalog/new-cars.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-4">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Повернутися до каталогу
                </a>
                
                <h1 class="text-3xl md:text-4xl font-bold mb-2">${carTitle}</h1>
                ${formattedConfig ? `<p class="text-lg text-gray-600 dark:text-gray-400 mb-4">${formattedConfig}</p>` : ''}
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <!-- Галерея (займає 2 колонки на великих екранах) -->
                <div class="lg:col-span-2">
                    <!-- Головний слайдер -->
                    <div class="swiper main-swiper mb-4 rounded-xl overflow-hidden shadow-lg">
                        <div class="swiper-wrapper">
                            ${gallery.map(img => `
                                <div class="swiper-slide">
                                    <img src="${img}" alt="${carTitle}" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    
                    <!-- Мініатюри -->
                    <div class="swiper thumbs-swiper">
                        <div class="swiper-wrapper">
                            ${gallery.map(img => `
                                <div class="swiper-slide">
                                    <img src="${img}" alt="${carTitle}" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Основні характеристики -->
                    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${enginePower ? this.renderFeatureCard('Потужність', enginePower, 'fa-bolt', 'indigo') : ''}
                        ${engine ? this.renderFeatureCard('Двигун', engine, 'fa-engine', 'blue') : ''}
                        ${fuel ? this.renderFeatureCard('Паливо', fuel, 'fa-gas-pump', 'green') : ''}
                        ${transmission ? this.renderFeatureCard('Трансмісія', transmission, 'fa-cogs', 'purple') : ''}
                        ${drive ? this.renderFeatureCard('Привід', drive, 'fa-car', 'orange') : ''}
                        ${acceleration ? this.renderFeatureCard('Розгін 0-100', acceleration, 'fa-tachometer-alt', 'red') : ''}
                        ${maxSpeed ? this.renderFeatureCard('Макс. швидкість', maxSpeed, 'fa-gauge-high', 'pink') : ''}
                        ${formattedMileage ? this.renderFeatureCard('Пробіг', formattedMileage, 'fa-road', 'gray') : ''}
                    </div>
                </div>
                
                <!-- Інформація про ціну та форма зв'язку (займає 1 колонку) -->
                <div>
                    <!-- Ціна -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
                        <div class="flex items-baseline mb-4">
                            <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">${currentPrice}</h2>
                            ${formattedOldPrice}
                            ${discountBadge}
                        </div>
                        
                        <div class="space-y-2 mb-6">
                            ${priceUSD ? `<p class="text-gray-600 dark:text-gray-400">${priceUSD}</p>` : ''}
                            ${priceEUR ? `<p class="text-gray-600 dark:text-gray-400">${priceEUR}</p>` : ''}
                        </div>
                        
                        <div class="flex flex-col gap-3">
                            <button id="share-button" class="action-button secondary-button">
                                <i class="fas fa-share-alt mr-2"></i>
                                Поділитися
                            </button>
                        </div>
                    </div>
                    
                    <!-- Форма зв'язку з менеджером -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
                        <h2 class="text-xl font-bold mb-4">Зв'язатися з менеджером</h2>
                        
                        <form id="contact-form-element" class="space-y-4">
                            <div>
                                <label for="contact-name" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Ваше ім'я</label>
                                <input type="text" id="contact-name" name="name" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                            </div>
                            
                            <div>
                                <label for="contact-phone" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Номер телефону</label>
                                <input type="tel" id="contact-phone" name="phone" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                            </div>
                            
                            <div>
                                <label for="contact-message" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Повідомлення</label>
                                <textarea id="contact-message" name="message" rows="3" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"></textarea>
                            </div>
                            
                            <div class="pt-2">
                                <button type="submit" class="action-button primary-button w-full">
                                    <i class="fas fa-paper-plane mr-2"></i>
                                    Надіслати запит
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <!-- Кредитний калькулятор та тест-драйв -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- Кредитний калькулятор -->
                <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg text-white">
                    <h2 class="text-2xl font-bold mb-6">Розрахувати кредит</h2>
                    
                    <div class="space-y-6">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Вартість автомобіля</label>
                                <input type="text" class="form-input w-full border border-indigo-300 bg-indigo-700/30 text-white" value="${this.creditAmount.toLocaleString()} грн" disabled>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-1">Перший внесок</label>
                                <input type="text" id="down-payment" class="form-input w-full border border-indigo-300 bg-indigo-700/30 text-white">
                            </div>
                            
                            <div>
                                <input type="range" id="down-payment-slider" min="0" max="100" class="w-full accent-indigo-300">
                                <div class="flex justify-between text-xs mt-1">
                                    <span>0%</span>
                                    <span>70%</span>
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-1">Термін кредиту</label>
                                <select id="credit-term" class="form-input w-full border border-indigo-300 bg-indigo-700/30 text-white">
                                    <option value="12">1 рік</option>
                                    <option value="24">2 роки</option>
                                    <option value="36">3 роки</option>
                                    <option value="48">4 роки</option>
                                    <option value="60" selected>5 років</option>
                                    <option value="72">6 років</option>
                                    <option value="84">7 років</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-1">Процентна ставка</label>
                                <div class="flex items-center gap-4">
                                    <input type="text" class="form-input w-full border border-indigo-300 bg-indigo-700/30 text-white" value="12.9%" disabled>
                                </div>
                                <p class="text-xs mt-1 text-indigo-200">Фіксована ставка</p>
                            </div>
                        </div>
                        
                        <div class="bg-white/10 p-4 rounded-lg mb-6 backdrop-blur-sm">
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="text-sm text-indigo-100">Щомісячний платіж</p>
                                    <p id="monthly-payment" class="text-2xl font-bold">${this.monthlyPayment.toLocaleString()} грн</p>
                                </div>
                                <div>
                                    <p class="text-sm text-indigo-100">Сума кредиту</p>
                                    <p id="loan-amount" class="text-lg font-semibold">${(this.creditAmount - this.creditDownPayment).toLocaleString()} грн</p>
                                </div>
                            </div>
                        </div>
                        
                        <button id="calculate-credit-button" class="w-full py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                            Оформити кредит
                        </button>
                        
                        <div class="text-sm text-indigo-200">
                            <p>* Розрахунок є орієнтовним. Для отримання точної інформації зверніться до менеджера.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Запис на тест-драйв -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h2 class="text-2xl font-bold mb-6">Запис на тест-драйв</h2>
                    
                    <form id="test-drive-form" class="space-y-4">
                        <div>
                            <label for="test-drive-name" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Ваше ім'я</label>
                            <input type="text" id="test-drive-name" name="name" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                        </div>
                        
                        <div>
                            <label for="test-drive-phone" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Номер телефону</label>
                            <input type="tel" id="test-drive-phone" name="phone" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                        </div>
                        
                        <div>
                            <label for="test-drive-date" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Бажана дата</label>
                            <input type="date" id="test-drive-date" name="date" min="${new Date().toISOString().split('T')[0]}" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                        </div>
                        
                        <div>
                            <label for="test-drive-time" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Бажаний час</label>
                            <select id="test-drive-time" name="time" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required>
                                <option value="">Оберіть час</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="test-drive-comment" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Коментар (необов'язково)</label>
                            <textarea id="test-drive-comment" name="comment" rows="3" class="form-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"></textarea>
                        </div>
                        
                        <div class="pt-4">
                            <button type="submit" class="action-button primary-button w-full">
                                <i class="fas fa-car mr-2"></i>
                                Записатися на тест-драйв
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <!-- Технічні характеристики -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Технічні характеристики</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Двигун -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-engine"></i> Двигун</h3>
                        ${this.renderSpecifications(this.getEngineSpecifications())}
                    </div>
                    
                    <!-- Динамічні характеристики -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-tachometer-alt"></i> Динамічні характеристики</h3>
                        ${this.renderSpecifications(this.getPerformanceSpecifications())}
                    </div>
                    
                    <!-- Трансмісія -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-cogs"></i> Трансмісія</h3>
                        ${this.renderSpecifications(this.getTransmissionSpecifications())}
                    </div>
                    
                    <!-- Кузов -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-car-side"></i> Кузов</h3>
                        ${this.renderSpecifications(this.getBodySpecifications())}
                    </div>
                    
                    <!-- Шасі -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-car"></i> Шасі</h3>
                        ${this.renderSpecifications(this.getChassisSpecifications())}
                    </div>
                    
                    <!-- Рульове керування -->
                    <div class="spec-card">
                        <h3 class="spec-title"><i class="fas fa-steering-wheel"></i> Рульове керування</h3>
                        ${this.renderSpecifications(this.getSteeringSpecifications())}
                    </div>
                </div>
            </div>
            
            <!-- Toast повідомлення -->
            <div id="toast" class="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 hidden">
                <div class="flex items-center gap-3">
                    <i class="fas fa-check-circle text-2xl"></i>
                    <p id="toast-message"></p>
                </div>
            </div>
        `;
    }

    calculateCredit() {
        // Розрахунок кредиту за формулою аннуїтетного платежу
        const loanAmount = this.creditAmount - this.creditDownPayment;
        const monthlyRate = this.creditRate / 100 / 12;
        const termInMonths = this.creditTerm;
        
        // Формула аннуїтетного платежу: P = (PV * r * (1 + r)^n) / ((1 + r)^n - 1)
        // де P - щомісячний платіж, PV - сума кредиту, r - місячна ставка, n - кількість місяців
        const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termInMonths);
        const denominator = Math.pow(1 + monthlyRate, termInMonths) - 1;
        
        this.monthlyPayment = Math.round(numerator / denominator);
        
        // Перевірка на коректність розрахунку
        if (isNaN(this.monthlyPayment) || !isFinite(this.monthlyPayment) || this.monthlyPayment < 0) {
            this.monthlyPayment = 0;
        }
    }

    updateCreditUI() {
        const monthlyPaymentElement = this.querySelector('#monthly-payment');
        const loanAmountElement = this.querySelector('#loan-amount');
        
        if (monthlyPaymentElement) {
            monthlyPaymentElement.textContent = `${this.monthlyPayment.toLocaleString()} грн`;
        }
        
        if (loanAmountElement) {
            loanAmountElement.textContent = `${(this.creditAmount - this.creditDownPayment).toLocaleString()} грн`;
        }
    }

    showToast(message) {
        // Видаляємо попередній toast, якщо він є
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Очищаємо попередній таймер
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        
        // Створюємо новий toast
        const toast = document.createElement('div');
        toast.className = 'toast-notification fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in';
        toast.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-check-circle text-2xl"></i>
                <p>${message}</p>
            </div>
        `;
        
        // Додаємо toast до body
        document.body.appendChild(toast);
        
        // Встановлюємо таймер для видалення toast
        this.toastTimeout = setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }

    initializeSwiper() {
        // Ініціалізуємо головний слайдер
        const mainSwiper = new Swiper('.main-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: {
                    el: '.thumbs-swiper',
                    slidesPerView: 4,
                    spaceBetween: 10,
                    watchSlidesProgress: true,
                    breakpoints: {
                        640: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 8,
                        },
                    },
                }
            }
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.showToast('Ваше повідомлення надіслано! Наш менеджер зв\'яжеться з вами найближчим часом.');
    }

    handleShare() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Копіюємо URL в буфер обміну
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            
            this.showToast('Посилання скопійовано в буфер обміну');
        }
    }

    renderFeatureCard(title, value, icon, color) {
        return `
            <div class="bg-${color}-100 dark:bg-${color}-900/50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-${color}-200 dark:border-${color}-800">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-${color}-500 text-white">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">${title}</div>
                        <div class="font-semibold">${value}</div>
                    </div>
                </div>
            </div>
        `;
    }

    renderSpecifications(specs) {
        if (!specs || Object.keys(specs).length === 0) {
            return '<p class="text-gray-500 dark:text-gray-400">Немає даних</p>';
        }
        
        return `
            <div class="space-y-2">
                ${Object.entries(specs).map(([key, value]) => `
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">${key}:</span>
                        <span class="font-medium">${value || 'Немає даних'}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderLoader() {
        return `
            <div class="flex flex-col justify-center items-center h-96">
                <div class="w-16 h-16 relative">
                    <div class="absolute top-0 left-0 w-full h-full border-4 border-indigo-200 dark:border-indigo-900 rounded-full"></div>
                    <div class="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
                </div>
                <p class="mt-4 text-gray-600 dark:text-gray-400">Завантаження інформації про автомобіль...</p>
            </div>
        `;
    }

    renderError() {
        return `
            <div class="text-center py-16 animate-fade-in">
                <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <i class="fas fa-exclamation-triangle text-4xl text-red-600 dark:text-red-400"></i>
                </div>
                <h2 class="text-2xl font-bold mb-2">Помилка завантаження</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">${this.error}</p>
                <a href="/catalog/new-cars.html" class="action-button primary-button">
                    <i class="fas fa-arrow-left"></i>
                    Повернутися до каталогу
                </a>
            </div>
        `;
    }

    renderNotFound() {
        return `
            <div class="text-center py-16 animate-fade-in">
                <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <i class="fas fa-search text-4xl text-gray-400"></i>
                </div>
                <h2 class="text-2xl font-bold mb-2">Автомобіль не знайдено</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Перевірте правильність URL або перегляньте інші автомобілі в нашому каталозі</p>
                <a href="/catalog/new-cars.html" class="action-button primary-button">
                    <i class="fas fa-arrow-left"></i>
                    Повернутися до каталогу
                </a>
            </div>
        `;
    }

    getEngineSpecifications() {
        const engine = this.car.specifications?.engine;
        if (!engine) return {};
        
        return {
            'Тип палива': engine.fuel,
            'Об\'єм двигуна': engine.capacity,
            'Потужність': engine.engine_power,
            'Крутний момент': engine.max_torque,
            'Кількість циліндрів': engine.cylinders,
            'Кількість клапанів': engine.valves,
            'Розташування циліндрів': engine.cylinders_arrangement,
            'Турбонаддув': engine.turbo,
            'Екологічний стандарт': engine.euro_standard,
            'Викиди CO2': engine.co2_emission
        };
    }

    getPerformanceSpecifications() {
        const performance = this.car.specifications?.performance;
        if (!performance) return {};
        
        return {
            'Максимальна швидкість': performance.max_speed,
            'Розгін 0-100 км/год': performance.acceleration_0_100,
            'Максимальна швидкість на електротязі': performance.max_speed_electric
        };
    }

    getTransmissionSpecifications() {
        const transmission = this.car.specifications?.transmission;
        if (!transmission) return {};
        
        return {
            'Коробка передач': transmission.gearbox,
            'Кількість передач': transmission.gears,
            'Привід': transmission.drive
        };
    }

    getBodySpecifications() {
        const body = this.car.specifications?.body;
        if (!body) return {};
        
        return {
            'Кількість дверей': body.doors,
            'Кількість місць': body.seats
        };
    }

    getChassisSpecifications() {
        const chassis = this.car.specifications?.chassis;
        if (!chassis) return {};
        
        return {
            'Передня підвіска': chassis.front_suspension,
            'Задня підвіска': chassis.rear_suspension,
            'Передні гальма': chassis.front_brakes,
            'Задні гальма': chassis.rear_brakes
        };
    }

    getSteeringSpecifications() {
        const steering = this.car.specifications?.steering;
        if (!steering) return {};
        
        return {
            'Підсилювач керма': steering.power_steering,
            'Діаметр розвороту': steering.turning_diameter
        };
    }
}

customElements.define('car-details', CarDetails); 