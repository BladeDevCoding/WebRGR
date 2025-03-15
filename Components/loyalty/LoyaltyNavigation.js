class LoyaltyNavigation extends HTMLElement {
    constructor() {
        super();
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
                            <li>
                                <a href="#about" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    <span>Про програму</span>
                                </a>
                            </li>
                            <li>
                                <a href="#levels" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-layer-group mr-2"></i>
                                    <span>Рівні участі</span>
                                </a>
                            </li>
                            <li>
                                <a href="#benefits" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-gift mr-2"></i>
                                    <span>Переваги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#how-to-join" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-user-plus mr-2"></i>
                                    <span>Як приєднатися</span>
                                </a>
                            </li>
                            <li>
                                <a href="#faq" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-question-circle mr-2"></i>
                                    <span>Часті питання</span>
                                </a>
                            </li>
                            <li>
                                <a href="#registration" class="nav-item inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
                                    <i class="fas fa-edit mr-2"></i>
                                    <span>Реєстрація</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Мобільна версія меню -->
                    <div class="md:hidden">
                        <div class="grid grid-cols-3 gap-1 p-2">
                            <a href="#about" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-info-circle text-xl mb-1"></i>
                                <span class="text-xs font-medium">Про програму</span>
                            </a>
                            <a href="#levels" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-layer-group text-xl mb-1"></i>
                                <span class="text-xs font-medium">Рівні участі</span>
                            </a>
                            <a href="#benefits" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-gift text-xl mb-1"></i>
                                <span class="text-xs font-medium">Переваги</span>
                            </a>
                            <a href="#how-to-join" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-user-plus text-xl mb-1"></i>
                                <span class="text-xs font-medium">Як приєднатися</span>
                            </a>
                            <a href="#faq" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-question-circle text-xl mb-1"></i>
                                <span class="text-xs font-medium">Часті питання</span>
                            </a>
                            <a href="#registration" class="flex flex-col items-center justify-center p-3 rounded-lg text-center transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <i class="fas fa-edit text-xl mb-1"></i>
                                <span class="text-xs font-medium">Реєстрація</span>
                            </a>
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

customElements.define('loyalty-navigation', LoyaltyNavigation); 