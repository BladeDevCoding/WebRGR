class CorporateHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Корпоративним клієнтам</h1>
                    <p class="text-xl opacity-90">Спеціальні пропозиції та комплексні рішення для вашого бізнесу</p>
                </div>
            </div>
        `;
    }
}

customElements.define('corporate-hero', CorporateHero); 