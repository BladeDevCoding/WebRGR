class EquipmentHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Додаткове обладнання</h1>
                    <p class="text-xl opacity-90">Професійне встановлення додаткового обладнання для вашого комфорту та безпеки</p>
                </div>
            </div>
        `;
    }
}

customElements.define('equipment-hero', EquipmentHero); 