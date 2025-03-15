class ServiceNavigation extends HTMLElement {
    constructor() {
        super();
        this.navItems = [
            { id: 'about', icon: 'info-circle', text: 'Про сервіс' },
            { id: 'types', icon: 'list-ul', text: 'Види послуг' },
            { id: 'advantages', icon: 'star', text: 'Переваги' },
            { id: 'appointment', icon: 'calendar-check', text: 'Запис' }
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
                    <div class="p-1 md:p-2">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
                            ${this.navItems.map(item => `
                                <a href="#${item.id}" class="nav-item flex items-center p-3 rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                    <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-${item.icon} text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <span>${item.text}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
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
                }
            });
        });
        
        // Підсвічування активного розділу при прокрутці
        window.addEventListener('scroll', () => this.highlightActiveSection());
    }

    highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        const sections = document.querySelectorAll('section[id]');
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

customElements.define('service-navigation', ServiceNavigation); 