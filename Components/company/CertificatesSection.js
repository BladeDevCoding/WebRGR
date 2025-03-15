class CertificatesSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupLightbox();
        this.setupIntersectionObserver();
    }

    render() {
        this.innerHTML = `
            <section id="certificates" class="mb-12 scroll-mt-20">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                        <i class="fas fa-certificate text-xl text-indigo-600 dark:text-indigo-400"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Сертифікати та нагороди</h2>
                </div>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <!-- Декоративні елементи -->
                    <div class="absolute -left-10 -bottom-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50"></div>
                    <div class="absolute right-20 top-10 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30"></div>
                    
                    <div class="relative z-10">
                        <p class="mb-6 text-lg">
                            AutoPrime має всі необхідні сертифікати та дозволи для здійснення діяльності. 
                            Наша компанія неодноразово відзначалася нагородами за високу якість обслуговування та внесок у розвиток автомобільного ринку України.
                        </p>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 certificate-grid">
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 0ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Сертифікат офіційного дилера" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Сертифікат офіційного дилера</p>
                            </div>
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 100ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Нагорода 'Кращий дилер року'" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Нагорода 'Кращий дилер року'</p>
                            </div>
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 200ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Сертифікат якості ISO 9001" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Сертифікат якості ISO 9001</p>
                            </div>
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 300ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Відзнака за внесок у розвиток автомобільного ринку" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Відзнака за внесок у розвиток автомобільного ринку</p>
                            </div>
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 400ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Сертифікат авторизованого сервісного центру" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Сертифікат авторизованого сервісного центру</p>
                            </div>
                            <div class="certificate-item cursor-pointer transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-8" style="transition-delay: 500ms">
                                <div class="relative group">
                                    <img src="https://images.prom.ua/5353888551_w600_h600_5353888551.jpg" alt="Нагорода 'Вибір споживачів'" class="w-full h-40 object-cover rounded-lg shadow-md">
                                    <div class="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <i class="fas fa-search-plus text-indigo-600"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm font-medium text-center">Нагорода 'Вибір споживачів'</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Лайтбокс для перегляду сертифікатів -->
                <div id="certificate-lightbox" class="fixed inset-0 bg-black/90 z-50 hidden flex items-center justify-center">
                    <div class="max-w-4xl w-full p-4">
                        <img id="lightbox-image" src="" alt="Сертифікат" class="max-w-full max-h-[80vh] mx-auto">
                        <div class="text-white text-center mt-4">
                            <p id="lightbox-caption" class="text-lg"></p>
                        </div>
                        <button id="close-lightbox" class="absolute top-4 right-4 text-white text-2xl">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    setupLightbox() {
        setTimeout(() => {
            const certificateItems = this.querySelectorAll('.certificate-item');
            const lightbox = this.querySelector('#certificate-lightbox');
            const lightboxImage = this.querySelector('#lightbox-image');
            const lightboxCaption = this.querySelector('#lightbox-caption');
            const closeLightbox = this.querySelector('#close-lightbox');
            
            if (!certificateItems.length || !lightbox || !lightboxImage || !lightboxCaption || !closeLightbox) return;
            
            certificateItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    lightboxImage.src = img.src;
                    lightboxCaption.textContent = img.alt;
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            closeLightbox.addEventListener('click', () => {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Закриття по клавіші Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                    lightbox.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        }, 0);
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.certificate-item');
                    items.forEach(item => {
                        item.classList.remove('opacity-0', 'translate-y-8');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const certificateGrid = this.querySelector('.certificate-grid');
        if (certificateGrid) {
            observer.observe(certificateGrid);
        }
    }
}

customElements.define('certificates-section', CertificatesSection); 