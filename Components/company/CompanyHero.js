class CompanyHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupAnimation();
    }

    render() {
        this.innerHTML = `
            <div class="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto relative z-10">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4 opacity-0 transform translate-y-8 transition-all duration-700" id="hero-title">Про компанію</h1>
                    <p class="text-xl opacity-0 transform translate-y-8 transition-all duration-700 delay-300" id="hero-subtitle">Дізнайтеся більше про AutoPrime та нашу історію</p>
                    <div class="mt-6 opacity-0 transform translate-y-8 transition-all duration-700 delay-500" id="hero-button">
                        <a href="#history" class="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
                            <span>Дізнатися більше</span>
                            <i class="fas fa-arrow-down ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Декоративні елементи -->
                <div class="absolute top-0 right-0 opacity-10 hidden md:block">
                    <i class="fas fa-car-side text-9xl transform -rotate-12"></i>
                </div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                <div class="absolute top-10 right-20 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                <div class="absolute bottom-10 right-40 w-16 h-16 bg-white opacity-10 rounded-full"></div>
            </div>
        `;
    }

    setupAnimation() {
        setTimeout(() => {
            const title = this.querySelector('#hero-title');
            const subtitle = this.querySelector('#hero-subtitle');
            const button = this.querySelector('#hero-button');
            
            if (title) title.classList.remove('opacity-0', 'translate-y-8');
            if (subtitle) subtitle.classList.remove('opacity-0', 'translate-y-8');
            if (button) button.classList.remove('opacity-0', 'translate-y-8');
        }, 100);
    }
}

customElements.define('company-hero', CompanyHero); 