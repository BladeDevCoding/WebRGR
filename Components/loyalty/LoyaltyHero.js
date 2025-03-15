class LoyaltyHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Програма лояльності</h1>
                    <p class="text-xl opacity-90">Отримуйте більше переваг з кожним візитом до AutoPrime</p>
                </div>
            </div>
        `;
    }
}

customElements.define('loyalty-hero', LoyaltyHero); 