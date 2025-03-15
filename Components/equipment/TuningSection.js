class TuningSection extends HTMLElement {
    constructor() {
        super();
        this.items = [
            {
                title: 'Чіп-тюнінг',
                description: 'Оптимізація програмного забезпечення двигуна для підвищення потужності та крутного моменту.',
                image: 'https://zauto.com.ua/wp-content/uploads/chip-tuning-zauto.jpg',
                price: 'від 5000 грн'
            },
            {
                title: 'Спортивні вихлопні системи',
                description: 'Встановлення спортивних глушників та вихлопних систем для покращення звуку та продуктивності.',
                image: 'https://demimotors.ua/wp-content/uploads/2024/03/cover-dm4-1-1.png',
                price: 'від 8000 грн'
            },
            {
                title: 'Заниження підвіски',
                description: 'Встановлення спортивних пружин або регульованої підвіски для покращення керованості.',
                image: 'https://cmscontent.intercars.eu/gc-webshop-ua.intercars.eu/media/images/Obnizenie-zawieszenia-3.jpeg',
                price: 'від 6000 грн'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="tuning" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Тюнінг</h2>
                
                <div class="space-y-6">
                    ${this.items.map(item => this.renderItem(item)).join('')}
                </div>
            </section>
        `;
    }

    renderItem(item) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div class="md:flex">
                    <div class="md:w-1/3">
                        <img src="${item.image}" alt="${item.title}" class="h-full w-full object-cover">
                    </div>
                    <div class="p-6 md:w-2/3">
                        <div class="flex justify-between items-start">
                            <h3 class="text-2xl font-bold mb-3">${item.title}</h3>
                            <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold">
                                ${item.price}
                            </span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">${item.description}</p>
                        <a href="#form" class="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Замовити <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('tuning-section', TuningSection); 