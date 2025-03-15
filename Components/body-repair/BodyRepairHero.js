class BodyRepairHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <!-- Заголовок сторінки -->
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Кузовний ремонт</h1>
                    <p class="text-xl opacity-90">Професійне відновлення кузова вашого автомобіля</p>
                </div>
            </div>
        `;
    }
}

customElements.define('body-repair-hero', BodyRepairHero); 