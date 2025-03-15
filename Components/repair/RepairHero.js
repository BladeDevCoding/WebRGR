class RepairHero extends HTMLElement {
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
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Ремонтні роботи</h1>
                    <p class="text-xl opacity-90">Професійний ремонт будь-якої складності для вашого автомобіля</p>
                </div>
            </div>
        `;
    }
}

customElements.define('repair-hero', RepairHero); 