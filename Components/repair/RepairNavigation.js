class RepairNavigation extends HTMLElement {
    constructor() {
        super();
        this.navItems = [
            { id: 'about', icon: 'info-circle', text: 'Про ремонт' },
            { id: 'services', icon: 'tools', text: 'Послуги' },
            { id: 'advantages', icon: 'star', text: 'Переваги' },
            { id: 'process', icon: 'cogs', text: 'Процес' },
            { id: 'form', icon: 'paper-plane', text: 'Заявка' }
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
                <a href="#${item.id}" class="nav-item flex items-center px-4 py-2 rounded-lg border border-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <i class="fas fa-${item.icon} mr-2 text-indigo-600 dark:text-indigo-400"></i>
                    <span>${item.text}</span>
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
        // Обробка вибору в мобільній навігації
        const mobileNav = this.querySelector('#mobile-nav');
        if (mobileNav) {
            mobileNav.addEventListener('change', () => {
                const targetId = mobileNav.value;
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
    }
}

customElements.define('repair-navigation', RepairNavigation); 