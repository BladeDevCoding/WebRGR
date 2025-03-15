class TestDriveModels extends HTMLElement {
    constructor() {
        super();
        this.models = [
            {
                name: "Volkswagen Tiguan",
                specs: ["2.0 TSI", "220 к.с.", "4Motion", "DSG-7"],
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
                status: "available",
                trim: "Elegance"
            },
            {
                name: "Skoda Kodiaq",
                specs: ["2.0 TDI", "190 к.с.", "4x4", "DSG-7"],
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
                status: "available",
                trim: "Style"
            },
            {
                name: "Audi Q5",
                specs: ["2.0 TFSI", "245 к.с.", "quattro", "S tronic"],
                image: "https://images.unsplash.com/photo-1590216255831-05e9541dd22a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                status: "available",
                trim: "Premium"
            }
            // Можна додати інші моделі...
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="models" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Доступні моделі для тест-драйву</h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    ${this.models.map(model => this.renderModel(model)).join('')}
                </div>
            </section>
        `;
    }

    renderModel(model) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div class="relative">
                    <img src="${model.image}" alt="${model.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                        ${model.status === 'available' ? 'Доступно' : 'За запитом'}
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold mb-1">${model.name}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Комплектація ${model.trim}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${model.specs.map(spec => `
                            <span class="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">${spec}</span>
                        `).join('')}
                    </div>
                    <a href="#booking" class="block text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        Записатися на тест-драйв
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('test-drive-models', TestDriveModels); 