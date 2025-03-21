class HomeHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupSlider();
    }

    render() {
        this.innerHTML = `
            <section class="relative mb-12 h-screen w-full">
                <!-- Слайдер -->
                <div class="hero-slider h-full w-full">
                    <!-- Слайд 1 -->
                    <div class="hero-slide relative h-full w-full">
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-blue-900/60 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600" 
                             alt="Автомобільний салон" class="w-full h-full object-cover">
                        <div class="absolute inset-0 z-20 flex items-center">
                            <div class="container mx-auto px-6">
                                <div class="max-w-2xl text-white">
                                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Знайдіть автомобіль своєї мрії</h1>
                                    <p class="text-xl opacity-90 mb-8">Широкий вибір нових та вживаних автомобілів від провідних виробників</p>
                                    <div class="flex flex-wrap gap-4">
                                        <a href="catalog.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-car mr-2"></i> Переглянути каталог
                                        </a>
                                        <a href="test-drive.html" class="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-steering-wheel mr-2"></i> Записатися на тест-драйв
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Слайд 2 -->
                    <div class="hero-slide relative h-full w-full">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600" 
                             alt="Сервісний центр" class="w-full h-full object-cover">
                        <div class="absolute inset-0 z-20 flex items-center">
                            <div class="container mx-auto px-6">
                                <div class="max-w-2xl text-white">
                                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Професійне обслуговування</h1>
                                    <p class="text-xl opacity-90 mb-8">Сучасний технічний центр з кваліфікованими спеціалістами</p>
                                    <div class="flex flex-wrap gap-4">
                                        <a href="technical-center/service-appointment.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-tools mr-2"></i> Записатися на сервіс
                                        </a>
                                        <a href="technical-center/repair.html" class="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-wrench mr-2"></i> Ремонтні послуги
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Слайд 3 -->
                    <div class="hero-slide relative h-full w-full">
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/60 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1600" 
                             alt="Трейд-ін" class="w-full h-full object-cover">
                        <div class="absolute inset-0 z-20 flex items-center">
                            <div class="container mx-auto px-6">
                                <div class="max-w-2xl text-white">
                                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Вигідний трейд-ін</h1>
                                    <p class="text-xl opacity-90 mb-8">Обміняйте свій автомобіль на новий з мінімальною доплатою</p>
                                    <div class="flex flex-wrap gap-4">
                                        <a href="trade-in.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-exchange-alt mr-2"></i> Дізнатися більше
                                        </a>
                                        <a href="#form" class="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg transition-colors duration-200">
                                            <i class="fas fa-calculator mr-2"></i> Розрахувати вартість
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Навігація слайдера -->
                <div class="absolute left-0 right-0 bottom-10 z-30 flex justify-center items-center">
                    <div class="flex space-x-3">
                        <div class="slider-dot w-4 h-4 rounded-full bg-white opacity-50 cursor-pointer"></div>
                        <div class="slider-dot w-4 h-4 rounded-full bg-white opacity-50 cursor-pointer"></div>
                        <div class="slider-dot w-4 h-4 rounded-full bg-white opacity-50 cursor-pointer"></div>
                    </div>
                </div>
                
                <!-- Кнопки навігації -->
                <button class="slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slider-next absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200">
                    <i class="fas fa-chevron-right"></i>
                </button>
                
                <!-- Індикатор прокрутки -->
                <div class="absolute left-0 right-0 bottom-4 z-30 flex justify-center">
                    <a href="#catalog" class="flex flex-col items-center text-white animate-bounce">
                        <span class="text-sm mb-1 opacity-80">Прокрутіть вниз</span>
                        <i class="fas fa-chevron-down"></i>
                    </a>
                </div>
            </section>
        `;
    }

    setupSlider() {
        setTimeout(() => {
            const slides = this.querySelectorAll('.hero-slide');
            const dots = this.querySelectorAll('.slider-dot');
            const prevBtn = this.querySelector('.slider-prev');
            const nextBtn = this.querySelector('.slider-next');
            let currentSlide = 0;
            let interval;

            
            const showSlide = (index) => {
                
                slides.forEach(slide => {
                    slide.style.display = 'none';
                });
                
                
                dots.forEach(dot => {
                    dot.classList.remove('active');
                    dot.classList.remove('opacity-100');
                    dot.classList.add('opacity-50');
                });
                
                
                slides[index].style.display = 'block';
                
                
                dots[index].classList.add('active', 'opacity-100');
                dots[index].classList.remove('opacity-50');
                
                
                currentSlide = index;
            };

            
            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            };

            
            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            };

            
            showSlide(0);

            
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);
            if (nextBtn) nextBtn.addEventListener('click', nextSlide);

            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetInterval();
                });
            });

            
            const resetInterval = () => {
                clearInterval(interval);
                interval = setInterval(nextSlide, 5000);
            };

            
            resetInterval();
        }, 0);
    }
}

customElements.define('home-hero', HomeHero); 