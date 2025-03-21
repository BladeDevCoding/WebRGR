class CarsCatalogFilters extends HTMLElement {
    constructor() {
        super();
        this.brands = [];
        this.models = [];
        this.fuelTypes = [];
        this.transmissionTypes = [];
        this.driveTypes = [];
        this.priceRanges = [];
        this.yearRanges = [];
        this.enginePowerRanges = [];
        this.selectedBrand = '';
        this.isFilterOpen = false; 
        this.activeFilters = {};
    }

    async connectedCallback() {
        await this.loadFilterData();
        this.render();
        this.setupEventListeners();
    }

    async loadFilterData() {
        if (window.carsService) {
            
            this.brands = await window.carsService.getBrands();
            this.fuelTypes = await window.carsService.getFuelTypes();
            this.transmissionTypes = await window.carsService.getTransmissionTypes();
            this.driveTypes = await window.carsService.getDriveTypes();
            this.priceRanges = await window.carsService.getPriceRanges();
            this.yearRanges = await window.carsService.getYearRanges();
            this.enginePowerRanges = await window.carsService.getEnginePowerRanges();
        } else {
            console.error('Сервіс carsService не знайдено');
            this.brands = [];
            this.fuelTypes = [];
            this.transmissionTypes = [];
            this.driveTypes = [];
            this.priceRanges = [];
            this.yearRanges = [];
            this.enginePowerRanges = [];
        }
    }

    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    render() {
        this.innerHTML = `
            <!-- Мобільна кнопка фільтрів -->
            <div class="lg:hidden mb-4">
                <button id="mobile-filter-toggle" class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <i class="fas fa-filter"></i>
                    <span>Фільтри</span>
                </button>
            </div>
            
            <!-- Контейнер для фільтрів -->
            <div class="lg:block ${this.isFilterOpen ? 'block' : 'hidden'}">
                <div class="filter-container">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="filter-title">Фільтри</h2>
                        <button id="close-filters" class="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Активні фільтри -->
                    <div id="active-filters" class="mb-6 ${Object.keys(this.activeFilters).length ? '' : 'hidden'}">
                        <h3 class="filter-group-title">Активні фільтри:</h3>
                        <div class="flex flex-wrap gap-2" id="active-filters-list">
                            ${this.renderActiveFilters()}
                        </div>
                        <button id="clear-all-filters" class="mt-2 text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Скинути всі фільтри
                        </button>
                    </div>
                    
                    <!-- Фільтр за брендом -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Марка</h3>
                        <select id="brand-filter" class="filter-select">
                            <option value="">Всі марки</option>
                            ${this.brands.map(brand => `<option value="${brand}" ${this.selectedBrand === brand ? 'selected' : ''}>${brand}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- Фільтр за моделлю (з'являється після вибору бренду) -->
                    <div id="model-filter-container" class="filter-group ${this.models.length ? '' : 'hidden'}">
                        <h3 class="filter-group-title">Модель</h3>
                        <select id="model-filter" class="filter-select">
                            <option value="">Всі моделі</option>
                            ${this.models.map(model => `<option value="${model}">${model}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- Фільтр за ціною -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Ціна</h3>
                        <select id="price-filter" class="filter-select">
                            <option value="">Будь-яка ціна</option>
                            ${this.priceRanges.map(range => `<option value="${range.value}">${range.label}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- Фільтр за роком випуску -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Рік випуску</h3>
                        <select id="year-filter" class="filter-select">
                            <option value="">Будь-який рік</option>
                            ${this.yearRanges.map(range => `<option value="${range.value}">${range.label}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- Фільтр за типом палива -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Тип палива</h3>
                        <div class="filter-checkbox-group">
                            ${this.fuelTypes.map(fuel => `
                                <div class="flex items-center">
                                    <input type="checkbox" id="fuel-${this.slugify(fuel)}" value="${fuel}" class="fuel-filter-checkbox filter-checkbox">
                                    <label for="fuel-${this.slugify(fuel)}" class="filter-label">${fuel}</label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Фільтр за типом трансмісії -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Коробка передач</h3>
                        <div class="filter-checkbox-group">
                            ${this.transmissionTypes.map(transmission => `
                                <div class="flex items-center">
                                    <input type="checkbox" id="transmission-${this.slugify(transmission)}" value="${transmission}" class="transmission-filter-checkbox filter-checkbox">
                                    <label for="transmission-${this.slugify(transmission)}" class="filter-label">${transmission}</label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Фільтр за типом приводу -->
                    <div class="filter-group">
                        <h3 class="filter-group-title">Привід</h3>
                        <div class="filter-checkbox-group">
                            ${this.driveTypes.map(drive => `
                                <div class="flex items-center">
                                    <input type="checkbox" id="drive-${this.slugify(drive)}" value="${drive}" class="drive-filter-checkbox filter-checkbox">
                                    <label for="drive-${this.slugify(drive)}" class="filter-label">${drive}</label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Кнопки застосування/скидання фільтрів -->
                    <div class="mt-6">
                        <button id="apply-filters" class="filter-button mb-2">
                            Застосувати фільтри
                        </button>
                        
                        <button id="reset-filters" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            Скинути фільтри
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderActiveFilters() {
        if (Object.keys(this.activeFilters).length === 0) {
            return '';
        }

        let html = '';
        
        // Відображення фільтра за брендом
        if (this.activeFilters.brand) {
            html += `
                <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                    <span class="text-indigo-800 dark:text-indigo-200">Марка: ${this.activeFilters.brand}</span>
                    <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="brand" data-value="${this.activeFilters.brand}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
        
        // Відображення фільтра за моделлю
        if (this.activeFilters.model) {
            html += `
                <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                    <span class="text-indigo-800 dark:text-indigo-200">Модель: ${this.activeFilters.model}</span>
                    <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="model" data-value="${this.activeFilters.model}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
        
        // Відображення фільтра за ціною
        if (this.activeFilters.price) {
            const priceRange = this.priceRanges.find(range => range.value === this.activeFilters.price);
            const label = priceRange ? priceRange.label : this.activeFilters.price;
            
            html += `
                <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                    <span class="text-indigo-800 dark:text-indigo-200">Ціна: ${label}</span>
                    <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="price" data-value="${this.activeFilters.price}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
        
        // Відображення фільтра за роком
        if (this.activeFilters.year) {
            const yearRange = this.yearRanges.find(range => range.value === this.activeFilters.year);
            const label = yearRange ? yearRange.label : this.activeFilters.year;
            
            html += `
                <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                    <span class="text-indigo-800 dark:text-indigo-200">Рік: ${label}</span>
                    <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="year" data-value="${this.activeFilters.year}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
        
        // Відображення фільтрів за типом палива
        if (this.activeFilters.fuel && this.activeFilters.fuel.length) {
            this.activeFilters.fuel.forEach(fuel => {
                html += `
                    <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                        <span class="text-indigo-800 dark:text-indigo-200">Паливо: ${fuel}</span>
                        <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="fuel" data-value="${fuel}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            });
        }
        
        // Відображення фільтрів за типом трансмісії
        if (this.activeFilters.transmission && this.activeFilters.transmission.length) {
            this.activeFilters.transmission.forEach(transmission => {
                html += `
                    <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                        <span class="text-indigo-800 dark:text-indigo-200">КПП: ${transmission}</span>
                        <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="transmission" data-value="${transmission}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            });
        }
        
        // Відображення фільтрів за типом приводу
        if (this.activeFilters.drive && this.activeFilters.drive.length) {
            this.activeFilters.drive.forEach(drive => {
                html += `
                    <div class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-sm flex items-center gap-1">
                        <span class="text-indigo-800 dark:text-indigo-200">Привід: ${drive}</span>
                        <button class="remove-filter text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200" data-key="drive" data-value="${drive}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            });
        }
        
        return html;
    }

    setupEventListeners() {
        // Мобільна кнопка відкриття фільтрів
        const mobileFilterToggle = this.querySelector('#mobile-filter-toggle');
        if (mobileFilterToggle) {
            mobileFilterToggle.addEventListener('click', () => {
                this.isFilterOpen = true;
                this.render();
                this.setupEventListeners();
            });
        }
        
        // Кнопка закриття фільтрів на мобільних
        const closeFiltersBtn = this.querySelector('#close-filters');
        if (closeFiltersBtn) {
            closeFiltersBtn.addEventListener('click', () => {
                this.isFilterOpen = false;
                this.render();
                this.setupEventListeners();
            });
        }
        
        // Фільтр за брендом з динамічним оновленням моделей
        const brandFilter = this.querySelector('#brand-filter');
        if (brandFilter) {
            brandFilter.addEventListener('change', async () => {
                const brand = brandFilter.value;
                this.selectedBrand = brand;
                
                if (brand) {
                    this.models = await window.carsService.getModelsByBrand(brand);
                } else {
                    this.models = [];
                }
                
                this.render();
                this.setupEventListeners();
            });
        }
        
        // Кнопка застосування фільтрів
        const applyFiltersBtn = this.querySelector('#apply-filters');
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => {
                this.collectAndApplyFilters();
            });
        }
        
        // Кнопка скидання фільтрів
        const resetFiltersBtn = this.querySelector('#reset-filters');
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', () => {
                this.resetFilters();
            });
        }
        
        // Встановлюємо стан чекбоксів відповідно до активних фільтрів
        if (this.activeFilters.fuel && this.activeFilters.fuel.length) {
            this.activeFilters.fuel.forEach(fuel => {
                const checkbox = this.querySelector(`#fuel-${this.slugify(fuel)}`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        if (this.activeFilters.transmission && this.activeFilters.transmission.length) {
            this.activeFilters.transmission.forEach(transmission => {
                const checkbox = this.querySelector(`#transmission-${this.slugify(transmission)}`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        if (this.activeFilters.drive && this.activeFilters.drive.length) {
            this.activeFilters.drive.forEach(drive => {
                const checkbox = this.querySelector(`#drive-${this.slugify(drive)}`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        // Видалення окремих активних фільтрів
        const removeFilterBtns = this.querySelectorAll('.remove-filter');
        removeFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.dataset.key;
                const value = btn.dataset.value;
                
                if (Array.isArray(this.activeFilters[key])) {
                    this.activeFilters[key] = this.activeFilters[key].filter(v => v !== value);
                    if (this.activeFilters[key].length === 0) {
                        delete this.activeFilters[key];
                    }
                } else {
                    delete this.activeFilters[key];
                }
                
                this.applyActiveFilters();
                this.render();
                this.setupEventListeners();
            });
        });
    }

    collectAndApplyFilters() {
        console.log('Збираємо фільтри...');
        
        // Збираємо всі значення фільтрів
        const brandFilter = this.querySelector('#brand-filter')?.value || '';
        const modelFilter = this.querySelector('#model-filter')?.value || '';
        const priceFilter = this.querySelector('#price-filter')?.value || '';
        const yearFilter = this.querySelector('#year-filter')?.value || '';
        
        // Перевіряємо наявність елемента перед отриманням значення
        const powerFilterElement = this.querySelector('#power-filter');
        const powerFilter = powerFilterElement ? powerFilterElement.value : '';
        
        // Збираємо значення чекбоксів
        const fuelFilters = Array.from(this.querySelectorAll('.fuel-filter-checkbox:checked')).map(cb => cb.value);
        const transmissionFilters = Array.from(this.querySelectorAll('.transmission-filter-checkbox:checked')).map(cb => cb.value);
        const driveFilters = Array.from(this.querySelectorAll('.drive-filter-checkbox:checked')).map(cb => cb.value);
        
        console.log('Зібрані фільтри:', {
            brand: brandFilter,
            model: modelFilter,
            price: priceFilter,
            year: yearFilter,
            power: powerFilter,
            fuel: fuelFilters,
            transmission: transmissionFilters,
            drive: driveFilters
        });
        
        // Створюємо об'єкт з активними фільтрами
        this.activeFilters = {};
        
        if (brandFilter) this.activeFilters.brand = brandFilter;
        if (modelFilter) this.activeFilters.model = modelFilter;
        if (priceFilter) this.activeFilters.price = priceFilter;
        if (yearFilter) this.activeFilters.year = yearFilter;
        if (powerFilter) this.activeFilters.power = powerFilter;
        
        if (fuelFilters.length) this.activeFilters.fuel = fuelFilters;
        if (transmissionFilters.length) this.activeFilters.transmission = transmissionFilters;
        if (driveFilters.length) this.activeFilters.drive = driveFilters;
        
        
        this.isFilterOpen = false;
        
        
        this.applyActiveFilters();
        
        
        this.render();
        this.setupEventListeners();
    }

    applyActiveFilters() {
        console.log('Застосовуємо фільтри:', this.activeFilters);
        
        
        const event = new CustomEvent('filters-changed', { 
            detail: this.activeFilters
        });
        
        
        document.dispatchEvent(event);
    }

    resetFilters() {
        
        this.activeFilters = {};
        this.selectedBrand = '';
        this.models = [];
        
        
        this.applyActiveFilters();
        
        
        this.render();
        this.setupEventListeners();
    }
}

customElements.define('cars-catalog-filters', CarsCatalogFilters); 