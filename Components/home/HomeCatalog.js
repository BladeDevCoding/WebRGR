class HomeCatalog extends HTMLElement {
    constructor() {
        super();
        this.cars = [
            {
                name: "Volkswagen Tiguan",
                category: "Кросовер",
                fuel: "Бензин",
                price: "1 200 000",
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800",
                link: "catalog/new-cars.html",
                badge: {
                    text: "Новинка",
                    color: "bg-indigo-600"
                }
            },
            {
                name: "Skoda Kodiaq",
                category: "Кросовер",
                fuel: "Дизель",
                price: "1 100 000",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800",
                link: "catalog/new-cars.html",
                badge: {
                    text: "В наявності",
                    color: "bg-green-600"
                }
            },
            {
                name: "Audi Q5",
                category: "Кросовер",
                fuel: "Бензин",
                price: "1 500 000",
                image: "https://images.unsplash.com/photo-1590216255831-05e9541dd22a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "catalog/new-cars.html",
                badge: {
                    text: "Спецпропозиція",
                    color: "bg-blue-600"
                }
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="catalog" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Популярні моделі</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.cars.map(car => this.renderCarCard(car)).join('')}
                </div>
                
                <div class="text-center mt-8">
                    <a href="catalog/new-cars.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        Переглянути всі моделі
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </section>
        `;
    }

    renderCarCard(car) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img src="${car.image}" alt="${car.name}" class="w-full h-56 object-cover">
                    <div class="absolute top-0 right-0 ${car.badge.color} text-white px-3 py-1 rounded-bl-lg font-bold">
                        ${car.badge.text}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${car.name}</h3>
                    <div class="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <span class="mr-4"><i class="fas fa-car-side mr-1"></i> ${car.category}</span>
                        <span><i class="fas fa-gas-pump mr-1"></i> ${car.fuel}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            від ${car.price} грн
                        </div>
                        <a href="${car.link}" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Детальніше
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('home-catalog', HomeCatalog); 