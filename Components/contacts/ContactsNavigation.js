class ContactsNavigation extends HTMLElement {
    constructor() {
        super();
        this.navItems = [
            { id: 'map', icon: 'map-marked-alt', text: 'Карта' },
            { id: 'working-hours', icon: 'clock', text: 'Години роботи' },
            { id: 'phones', icon: 'phone-alt', text: 'Телефони' },
            { id: 'directions', icon: 'route', text: 'Як дістатися' },
            { id: 'feedback', icon: 'comment-dots', text: 'Зворотний зв\'язок' }
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
                    
                    <!-- Десктопна версія меню -->
                    <div class="hidden md:block p-3">
                        <ul class="flex flex-wrap gap-2">
                            ${this.navItems.map(item => `
                                <li>
                                    <a href="#${item.id}" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                        <i class="fas fa-${item.icon} mr-2"></i>
                                        <span>${item.text}</span>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Мобільна версія меню -->
                    <div class="md:hidden">
                        <div class="grid grid-cols-3 gap-1 p-2">
                            ${this.navItems.map(item => `
                                <a href="#${item.id}" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-${item.icon} text-xl mb-1"></i>
                                    <span class="text-xs font-medium">${item.text}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        window.addEventListener('scroll', () => this.highlightActiveSection());
        window.addEventListener('load', () => this.highlightActiveSection());
        
        // Плавна прокрутка при кліку
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

customElements.define('contacts-navigation', ContactsNavigation); 