class MaintenanceNavigation extends HTMLElement {
    constructor() {
        super();
        this.navItems = [
            { id: 'regular-maintenance', icon: 'tools', text: 'Регулярне ТО' },
            { id: 'maintenance-types', icon: 'list-ul', text: 'Види ТО' },
            { id: 'maintenance-intervals', icon: 'calendar-alt', text: 'Інтервали ТО' },
            { id: 'maintenance-benefits', icon: 'check-circle', text: 'Переваги' },
            { id: 'maintenance-form', icon: 'paper-plane', text: 'Запис на ТО' }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <div class="max-w-4xl mx-auto mb-10">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div class="text-sm text-gray-500 dark:text-gray-400 p-3 border-b border-gray-100 dark:border-gray-700 flex items-center">
                        <i class="fas fa-map-signs mr-2"></i> Навігація по сторінці
                    </div>

                    <div class="hidden md:block p-3">
                        <ul class="flex flex-wrap gap-2">
                            ${this.renderDesktopNavItems()}
                        </ul>
                    </div>
                    
                    <div class="md:hidden p-3">
                        <select id="mobile-nav" class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            ${this.renderMobileNavItems()}
                        </select>
                    </div>
                </div>
            </div>
        `;
    }

    renderDesktopNavItems() {
        return this.navItems.map(item => `
            <li>
                <a href="#${item.id}" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent">
                    <i class="fas fa-${item.icon} mr-2"></i>
                    ${item.text}
                </a>
            </li>
        `).join('');
    }

    renderMobileNavItems() {
        return this.navItems.map(item => `
            <option value="${item.id}">${item.text}</option>
        `).join('');
    }

    setupEventListeners() {
        // Плавна прокрутка при кліку на посилання
        this.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    history.pushState(null, null, '#' + targetId);
                }
            });
        });
        
        // Обробка вибору в мобільному селекті
        const mobileNav = this.querySelector('#mobile-nav');
        if (mobileNav) {
            mobileNav.addEventListener('change', function() {
                const targetId = this.value;
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    history.pushState(null, null, '#' + targetId);
                }
            });
        }
        
        // Підсвічування активного розділу при прокрутці
        window.addEventListener('scroll', () => this.highlightActiveSection());
        window.addEventListener('load', () => this.highlightActiveSection());
    }

    highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = null;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section;
            }
        });
        
        this.querySelectorAll('.nav-item').forEach(link => {
            link.classList.remove('bg-indigo-50', 'dark:bg-indigo-900/30', 'text-indigo-600', 
                                 'dark:text-indigo-400', 'border-indigo-200', 'dark:border-indigo-800');
            link.classList.add('border-transparent');
            
            if (currentSection && link.getAttribute('href') === '#' + currentSection.getAttribute('id')) {
                link.classList.add('bg-indigo-50', 'dark:bg-indigo-900/30', 'text-indigo-600', 
                                  'dark:text-indigo-400', 'border-indigo-200', 'dark:border-indigo-800');
                link.classList.remove('border-transparent');
            }
        });
        
        // Оновлення мобільного селекта
        const mobileNav = this.querySelector('#mobile-nav');
        if (mobileNav && currentSection) {
            mobileNav.value = currentSection.getAttribute('id');
        }
    }
}

customElements.define('maintenance-navigation', MaintenanceNavigation); 