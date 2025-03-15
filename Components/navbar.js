class Navbar extends HTMLElement {
    constructor() {
        super();
        this.currentPath = window.location.pathname;
        this.icons = this.defineIcons();
        this.menuStructure = this.defineMenuStructure();
        this.render();
    }

    defineIcons() {
        return {
            car: `<i class="fas fa-car-side text-lg"></i>`,
            service: `<i class="fas fa-wrench text-lg"></i>`,
            services: `<i class="fas fa-concierge-bell text-lg"></i>`,
            company: `<i class="fas fa-building text-lg"></i>`,
            contacts: `<i class="fas fa-address-book text-lg"></i>`,
            logo: `<i class="fas fa-car text-2xl"></i>`,
            accessibility: `<i class="fas fa-universal-access text-lg"></i>`,
            theme: `<i class="fas fa-moon text-lg"></i>`,
            
            newCars: `<i class="fas fa-car text-lg"></i>`,
            usedCars: `<i class="fas fa-car-crash text-lg"></i>`,
            tradeIn: `<i class="fas fa-exchange-alt text-lg"></i>`,
            credit: `<i class="fas fa-credit-card text-lg"></i>`,
            testDrive: `<i class="fas fa-road text-lg"></i>`,
            special: `<i class="fas fa-percentage text-lg"></i>`,

            diagnostics: `<i class="fas fa-stethoscope text-lg"></i>`,
            maintenance: `<i class="fas fa-tools text-lg"></i>`,
            repair: `<i class="fas fa-screwdriver text-lg"></i>`,
            bodyRepair: `<i class="fas fa-spray-can text-lg"></i>`,
            equipment: `<i class="fas fa-cogs text-lg"></i>`,
            appointment: `<i class="far fa-calendar-check text-lg"></i>`,

            insurance: `<i class="fas fa-shield-alt text-lg"></i>`,
            registration: `<i class="fas fa-clipboard-list text-lg"></i>`,
            warranty: `<i class="fas fa-award text-lg"></i>`,
            loyalty: `<i class="fas fa-gem text-lg"></i>`,
            corporate: `<i class="fas fa-briefcase text-lg"></i>`,

            history: `<i class="fas fa-history text-lg"></i>`,
            certificates: `<i class="fas fa-certificate text-lg"></i>`,
            partners: `<i class="fas fa-handshake text-lg"></i>`,
            jobs: `<i class="fas fa-user-tie text-lg"></i>`,
            news: `<i class="far fa-newspaper text-lg"></i>`,

            map: `<i class="fas fa-map-marked-alt text-lg"></i>`,
            workingHours: `<i class="far fa-clock text-lg"></i>`,
            phones: `<i class="fas fa-phone-alt text-lg"></i>`,
            feedback: `<i class="far fa-comment-dots text-lg"></i>`
        };
    }

    defineMenuStructure() {
        const basePath = this.getBasePath();
        
        return {
            autosalon: {
                title: 'Автосалон',
                icon: this.icons.car,
                items: [
                    { href: basePath + 'catalog/new-cars.html', text: 'Каталог нових авто', icon: this.icons.newCars },
                    { href: basePath + 'catalog/used-cars.html', text: 'Вживані авто', icon: this.icons.usedCars },
                    { href: basePath + 'catalog/trade-in.html', text: 'Трейд-ін', icon: this.icons.tradeIn },
                    { href: basePath + 'catalog/credit.html', text: 'Кредит і лізинг', icon: this.icons.credit },
                    { href: basePath + 'catalog/test-drive.html', text: 'Тест-драйв', icon: this.icons.testDrive },
                    { href: basePath + 'catalog/special-offers.html', text: 'Спецпропозиції', icon: this.icons.special }
                ]
            },
            technical: {
                title: 'Технічний центр',
                icon: this.icons.service,
                items: [
                    { href: basePath + 'technical-center/diagnostics.html', text: 'Діагностика', icon: this.icons.diagnostics },
                    { href: basePath + 'technical-center/maintenance.html', text: 'Технічне обслуговування', icon: this.icons.maintenance },
                    { href: basePath + 'technical-center/repair.html', text: 'Ремонтні роботи', icon: this.icons.repair },
                    { href: basePath + 'technical-center/body-repair.html', text: 'Кузовний ремонт', icon: this.icons.bodyRepair },
                    { href: basePath + 'technical-center/equipment.html', text: 'Додаткове обладнання', icon: this.icons.equipment },
                    { href: basePath + 'technical-center/service-appointment.html', text: 'Запис на сервіс', icon: this.icons.appointment }
                ]
            },
            services: {
                title: 'Послуги',
                icon: this.icons.services,
                items: [
                    { href: basePath + 'services/insurance.html', text: 'Страхування', icon: this.icons.insurance },
                    { href: basePath + 'services/registration.html', text: 'Реєстрація авто', icon: this.icons.registration },
                    { href: basePath + 'services/warranty.html', text: 'Гарантійне обслуговування', icon: this.icons.warranty },
                    { href: basePath + 'services/loyalty.html', text: 'Програма лояльності', icon: this.icons.loyalty },
                    { href: basePath + 'services/corporate.html', text: 'Корпоративним клієнтам', icon: this.icons.corporate }
                ]
            },
            company: {
                title: 'Про компанію',
                icon: this.icons.company,
                items: [
                    { href: basePath + 'company.html#history', text: 'Історія', icon: this.icons.history },
                    { href: basePath + 'company.html#certificates', text: 'Сертифікати', icon: this.icons.certificates },
                    { href: basePath + 'company.html#partners', text: 'Партнери', icon: this.icons.partners },
                    { href: basePath + 'company.html#jobs', text: 'Вакансії', icon: this.icons.jobs },
                    { href: basePath + 'company.html#news', text: 'Новини', icon: this.icons.news }
                ]
            },
            contacts: {
                title: 'Контакти',
                icon: this.icons.contacts,
                items: [
                    { href: basePath + 'contacts.html#map', text: 'Карта', icon: this.icons.map },
                    { href: basePath + 'contacts.html#working-hours', text: 'Години роботи', icon: this.icons.workingHours },
                    { href: basePath + 'contacts.html#phones', text: 'Телефони', icon: this.icons.phones },
                    { href: basePath + 'contacts.html#feedback', text: 'Форма зворотного зв`язку', icon: this.icons.feedback }
                ]
            }
        };
    }

    getBasePath() {
        const path = window.location.pathname;
        
        const depth = path.split('/').filter(Boolean).length;
        
        if (depth === 0 || path === '/' || path.endsWith('index.html')) {
            return './';
        }
        
        if (depth === 1) {
            return '../';
        }
        
        return '../'.repeat(depth);
    }

    render() {
        const basePath = this.getBasePath();
        
        this.innerHTML = `
            <nav class="bg-white dark:bg-gray-800 border-b shadow-sm dark:border-gray-700">
                <!-- Desktop Navigation -->
                <div class="hidden lg:block">
                    <div class="max-w-7xl mx-auto px-4">
                        <div class="flex justify-between items-center h-16">
                            <!-- Left Menu -->
                            <div class="flex space-x-8">
                                ${Object.entries(this.menuStructure)
                                    .slice(0, 2)
                                    .map(([key, section]) => `
                                        <div class="relative group">
                                            ${this.createMenuButton(section.title, section.icon)}
                                            <div class="hidden group-hover:block absolute left-0 top-full bg-white dark:bg-gray-800 rounded-xl shadow-xl 
                                                 dark:shadow-gray-900 w-64 py-2 z-50 border dark:border-gray-700 transform transition-all duration-200">
                                                ${section.items.map(item => 
                                                    this.createMenuItem(item.href, item.icon, item.text, this.currentPath === item.href)
                                                ).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                            </div>

                            <!-- Logo -->
                            <a href="${basePath}index.html" class="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 text-xl font-bold 
                               transform hover:scale-105 transition-transform duration-200">
                                ${this.icons.logo}
                                <span>AutoPrime</span>
                            </a>

                            <!-- Right Menu -->
                            <div class="flex items-center space-x-8">
                                ${Object.entries(this.menuStructure)
                                    .slice(2)
                                    .map(([key, section]) => `
                                        <div class="relative group">
                                            ${this.createMenuButton(section.title, section.icon)}
                                            <div class="hidden group-hover:block absolute right-0 top-full bg-white dark:bg-gray-800 rounded-xl shadow-xl 
                                                 dark:shadow-gray-900 w-64 py-2 z-50 border dark:border-gray-700">
                                                ${section.items.map(item => 
                                                    this.createMenuItem(item.href, item.icon, item.text, this.currentPath === item.href)
                                                ).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                
                                <!-- Utility Buttons -->
                                <div class="flex items-center space-x-4">
                                    ${this.createUtilityButtons()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                ${this.createMobileNavigation(basePath)}
            </nav>
        `;
        
        this._initThemeToggle();
        this._initMobileMenu();
        this._initAccessibilityToggle();
    }

    createMenuButton(title, icon) {
        return `
            <button class="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                    font-medium transition-all duration-200 rounded-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                ${icon}
                <span>${title}</span>
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        `;
    }

    createMenuItem(href, icon, text, isActive = false) {
        return `
            <a href="${href}" 
               class="flex items-center space-x-3 px-4 py-3 mx-2 text-gray-700 dark:text-gray-300 
               hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 
               transition-all duration-200 rounded-xl
               ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : ''}">
                ${icon}
                <span class="font-medium">${text}</span>
            </a>
        `;
    }

    createUtilityButtons() {
        const isDark = document.documentElement.classList.contains('dark');
        return `
            <button id="theme-toggle" 
                    class="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                    rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200
                    w-10 h-10 flex items-center justify-center">
                ${isDark ? '<i class="fas fa-sun text-lg"></i>' : '<i class="fas fa-moon text-lg"></i>'}
            </button>
            <button id="accessibility-toggle" 
                    class="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                    rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200
                    w-10 h-10 flex items-center justify-center">
                ${this.icons.accessibility}
            </button>
        `;
    }

    createMobileNavigation(basePath) {
        return `
            <div class="lg:hidden">
                <!-- Mobile Header -->
                <div class="flex items-center justify-between p-4">
                    <button id="mobile-menu-button" 
                            class="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 
                            hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                    
                    <a href="${basePath}index.html" class="text-indigo-600 dark:text-indigo-400 text-xl font-bold flex items-center space-x-2">
                        ${this.icons.logo}
                        <span>AutoPrime</span>
                    </a>
                    
                    <div class="flex items-center">
                        <button id="mobile-accessibility-toggle" 
                                class="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 
                                hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-1">
                            ${this.icons.accessibility}
                        </button>
                        <button id="mobile-theme-toggle" 
                                class="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 
                                hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                            ${document.documentElement.classList.contains('dark') ? 
                                '<i class="fas fa-sun text-lg"></i>' : 
                                '<i class="fas fa-moon text-lg"></i>'}
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu Panel -->
                <div id="mobile-menu" class="hidden fixed inset-0 bg-gray-900/50 dark:bg-black/50 backdrop-blur-sm z-50">
                    <div class="flex flex-col h-full w-[90vw] max-w-md ml-auto bg-white dark:bg-gray-800 shadow-xl">
                        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <span class="text-xl font-semibold text-gray-900 dark:text-white">Меню</span>
                            <button id="mobile-menu-close" 
                                    class="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 
                                    hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full 
                                    hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        
                        <div class="flex-1 overflow-y-auto p-4 space-y-4">
                            ${Object.entries(this.menuStructure).map(([key, section]) => `
                                <div class="mobile-menu-section bg-gray-50 dark:bg-gray-900/30 rounded-2xl overflow-hidden">
                                    <button class="mobile-menu-button w-full flex justify-between items-center p-4 
                                        text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                                        <div class="flex items-center space-x-3">
                                            ${section.icon}
                                            <span class="text-lg font-medium">${section.title}</span>
                                        </div>
                                        <i class="fas fa-chevron-down transition-transform duration-200"></i>
                                    </button>
                                    <div class="mobile-submenu hidden">
                                        <div class="space-y-1 p-2">
                                            ${section.items.map(item => `
                                                <a href="${item.href}" 
                                                   class="flex items-center space-x-3 p-3
                                                   text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800
                                                   rounded-xl transition-all duration-200
                                                   ${this.currentPath === item.href ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : ''}">
                                                    ${item.icon}
                                                    <span>${item.text}</span>
                                                </a>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    _initThemeToggle() {
        console.log('Theme toggle initialized from navbar');
    }

    _initMobileMenu() {
        const mobileMenuButton = this.querySelector('#mobile-menu-button');
        const mobileMenuClose = this.querySelector('#mobile-menu-close');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (mobileMenuClose && mobileMenu) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            });
        }
        
        const menuButtons = this.querySelectorAll('.mobile-menu-button');
        
        const allSubmenus = this.querySelectorAll('.mobile-submenu');
        allSubmenus.forEach(submenu => {
            submenu.style.display = 'none';
            submenu.classList.add('hidden');
        });
        
        menuButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            if (button.parentNode) {
                button.parentNode.replaceChild(newButton, button);
            }
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const section = this.closest('.mobile-menu-section');
                if (!section) return;
                
                const submenu = section.querySelector('.mobile-submenu');
                if (!submenu) return;
                
                const icon = this.querySelector('.fa-chevron-down');
                
                const isVisible = submenu.style.display === 'block';
                
                allSubmenus.forEach(sm => {
                    sm.style.display = 'none';
                    sm.classList.add('hidden');
                });
                
                const allIcons = document.querySelectorAll('.mobile-menu-button .fa-chevron-down');
                allIcons.forEach(ic => {
                    ic.style.transform = 'rotate(0deg)';
                });
                
                if (!isVisible) {
                    submenu.style.display = 'block';
                    submenu.classList.remove('hidden');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    _initAccessibilityToggle() {
        const accessibilityToggle = this.querySelector('#accessibility-toggle');
        const mobileAccessibilityToggle = this.querySelector('#mobile-accessibility-toggle');
        
        const toggleAccessibility = () => {
            console.log('Accessibility toggle clicked');
            document.dispatchEvent(new CustomEvent('accessibility-toggle'));
        };
        
        if (accessibilityToggle) {
            console.log('Desktop accessibility button found');
            accessibilityToggle.addEventListener('click', toggleAccessibility);
        }
        
        if (mobileAccessibilityToggle) {
            console.log('Mobile accessibility button found');
            mobileAccessibilityToggle.addEventListener('click', toggleAccessibility);
        }
    }

    connectedCallback() {
        if (!this._initialized) {
            this._initThemeToggle();
            this._initMobileMenu();
            this._initAccessibilityToggle();
            this._initialized = true;
        }
    }

    updateTheme() {
    }
}

customElements.define('nav-bar', Navbar); 