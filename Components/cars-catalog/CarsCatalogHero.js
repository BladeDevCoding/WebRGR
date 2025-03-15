class CarsCatalogHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto relative overflow-hidden">
                    <div class="relative z-10">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Нові автомобілі</h1>
                        <p class="text-xl opacity-90">Знайдіть ідеальний автомобіль для себе серед широкого вибору нових моделей</p>
                    </div>
                    <div class="absolute top-0 right-0 opacity-10 hidden md:block">
                        <i class="fas fa-car text-9xl transform -rotate-12"></i>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('cars-catalog-hero', CarsCatalogHero); 