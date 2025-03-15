class CarsCatalogGrid extends HTMLElement {
    constructor() {
        super();
        this.cars = [];
        this.filteredCars = [];
        this.filters = {};
        this.sortOption = 'price-asc'; // За замовчуванням сортуємо за зростанням ціни
    }

    async connectedCallback() {
        await this.loadCars();
        this.render();
        this.setupEventListeners();
    }

    async loadCars() {
        if (window.carsService && typeof window.carsService.getCars === 'function') {
            try {
                this.cars = await window.carsService.getCars();
                console.log('Завантажено автомобілів:', this.cars.length);
                this.filteredCars = [...this.cars];
                this.sortCars();
            } catch (error) {
                console.error('Помилка при завантаженні автомобілів:', error);
                this.cars = [];
                this.filteredCars = [];
            }
        } else {
            console.error('Сервіс carsService не знайдено або метод getCars відсутній');
            this.cars = [];
            this.filteredCars = [];
        }
    }

    render() {
        console.log('Відображення автомобілів:', this.filteredCars.length);
        const carsHTML = this.filteredCars.map(car => this.renderCarCard(car)).join('');
        
        this.innerHTML = `
            <div class="mb-4">
                <p class="text-gray-600 dark:text-gray-400">Знайдено автомобілів: <span class="font-bold">${this.filteredCars.length}</span></p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${carsHTML.length ? carsHTML : `
                    <div class="col-span-3 py-12 text-center">
                        <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                            <i class="fas fa-search text-4xl text-gray-400"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Автомобілі не знайдено</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">Спробуйте змінити параметри фільтрації</p>
                        <button id="reset-search" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Скинути фільтри
                        </button>
                    </div>
                `}
            </div>
        `;
        
        // Додаємо обробник для кнопки скидання фільтрів
        const resetBtn = this.querySelector('#reset-search');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const event = new CustomEvent('filters-changed', { detail: {} });
                document.dispatchEvent(event);
            });
        }
    }

    setupEventListeners() {
        document.addEventListener('filters-changed', (event) => {
            console.log('Отримано нові фільтри:', event.detail);
            this.filters = event.detail;
            this.applyFilters();
            this.sortCars();
            this.render();
        });
    }

    applyFilters() {
        console.log('Застосування фільтрів:', this.filters);
        this.filteredCars = this.cars.filter(car => {
            // Фільтр за брендом
            if (this.filters.brand && car.brand !== this.filters.brand) {
                return false;
            }
            
            // Фільтр за моделлю
            if (this.filters.model && car.model !== this.filters.model) {
                return false;
            }
            
            // Фільтр за ціною
            if (this.filters.price) {
                const priceStr = car.price?.replace(/\s+/g, '').replace(/[^\d]/g, '') || '0';
                const price = parseInt(priceStr);
                
                if (!isNaN(price)) {
                    const [min, max] = this.filters.price.split('-').map(p => parseInt(p));
                    
                    if (price < min || (max && price > max)) {
                        return false;
                    }
                }
            }
            
            // Фільтр за роком
            if (this.filters.year) {
                const year = parseInt(car.year) || 0;
                
                if (year) {
                    const [min, max] = this.filters.year.split('-').map(y => parseInt(y));
                    
                    if (year < min || (max && year > max)) {
                        return false;
                    }
                }
            }
            
            // Фільтр за потужністю двигуна
            if (this.filters.power) {
                const powerMatch = car.enginePower?.match(/(\d+)/);
                const power = powerMatch ? parseInt(powerMatch[1]) : 0;
                
                if (power) {
                    const [min, max] = this.filters.power.split('-').map(p => parseInt(p));
                    
                    if (power < min || (max && power > max)) {
                        return false;
                    }
                }
            }
            
            // Фільтр за типом палива
            if (this.filters.fuel && this.filters.fuel.length) {
                if (!car.fuel || !this.filters.fuel.includes(car.fuel)) {
                    return false;
                }
            }
            
            // Фільтр за типом трансмісії
            if (this.filters.transmission && this.filters.transmission.length) {
                if (!car.transmission || !this.filters.transmission.includes(car.transmission)) {
                    return false;
                }
            }
            
            // Фільтр за типом приводу
            if (this.filters.drive && this.filters.drive.length) {
                if (!car.drive || !this.filters.drive.includes(car.drive)) {
                    return false;
                }
            }
            
            return true;
        });
        
        console.log('Після фільтрації залишилось автомобілів:', this.filteredCars.length);
    }

    sortCars() {
        switch (this.sortOption) {
            case 'price-asc':
                this.filteredCars.sort((a, b) => {
                    const priceA = parseInt(a.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    const priceB = parseInt(b.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    return priceA - priceB;
                });
                break;
            case 'price-desc':
                this.filteredCars.sort((a, b) => {
                    const priceA = parseInt(a.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    const priceB = parseInt(b.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    return priceB - priceA;
                });
                break;
            case 'year-desc':
                this.filteredCars.sort((a, b) => (b.year || 0) - (a.year || 0));
                break;
            case 'year-asc':
                this.filteredCars.sort((a, b) => (a.year || 0) - (b.year || 0));
                break;
            default:
                // За замовчуванням сортуємо за зростанням ціни
                this.filteredCars.sort((a, b) => {
                    const priceA = parseInt(a.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    const priceB = parseInt(b.price.replace(/\s+/g, '').replace(/[^\d]/g, '')) || 0;
                    return priceA - priceB;
                });
        }
    }

    renderCarCard(car) {
        // Отримуємо дані автомобіля
        const { 
            brand, model, year, title, configuration, 
            mileage, engine, fuel, transmission, drive, 
            price, oldPrice, discount, image, slug, 
            priceUSD, priceEUR, enginePower, acceleration, maxSpeed 
        } = car;
        
        // Форматуємо заголовок
        const cardTitle = title || `${brand} ${model}`;
        
        // Форматуємо ціни
        const currentPrice = price || 'Ціна за запитом';
        const formattedOldPrice = oldPrice || '';
        const discountBadge = discount ? `<span class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">${discount}</span>` : '';
        
        // Форматуємо пробіг
        const formattedMileage = mileage && parseInt(mileage) > 0 ? `${mileage} км` : 'Новий';
        
        // Форматуємо конфігурацію
        const formattedConfig = configuration ? configuration.replace(/_/g, ' ') : '';
        
        // Перевіряємо наявність зображення
        const imageUrl = image || 'https://via.placeholder.com/400x300?text=Немає+фото';
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-48">
                    <img src="${imageUrl}" alt="${cardTitle}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Помилка+завантаження'">
                    ${year ? `<div class="absolute top-2 left-2 bg-indigo-600 text-white px-2 py-1 rounded-md text-sm">${year}</div>` : ''}
                    ${discountBadge}
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-bold mb-1">${cardTitle}</h3>
                    ${formattedConfig ? `<p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${formattedConfig}</p>` : ''}
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${formattedMileage}</span>
                        ${engine ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${engine}</span>` : ''}
                        ${enginePower ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${enginePower}</span>` : ''}
                        ${drive ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${drive}</span>` : ''}
                        ${fuel ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${fuel}</span>` : ''}
                        ${transmission ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">${transmission}</span>` : ''}
                    </div>
                    
                    <div class="mb-4">
                        <div class="flex items-baseline">
                            <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">${currentPrice}</span>
                            ${formattedOldPrice ? `<span class="ml-2 text-sm line-through text-gray-500">${formattedOldPrice}</span>` : ''}
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">${priceUSD || ''}</p>
                    </div>
                    
                    <a href="/catalog/car-details.html?slug=${slug}" class="block w-full text-center py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Детальніше
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('cars-catalog-grid', CarsCatalogGrid); 