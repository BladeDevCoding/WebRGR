class ExteriorSection extends HTMLElement {
    constructor() {
        super();
        this.items = [
            {
                title: 'Тонування скла',
                description: 'Професійне тонування скла автомобіля з використанням якісних плівок різних відтінків.',
                image: 'https://vitavto.kiev.ua/wp-content/uploads/2023/02/%D1%82%D0%BE%D0%BD3.webp',
                price: 'від 2500 грн'
            },
            {
                title: 'Захисні плівки',
                description: 'Нанесення захисних плівок на кузов для захисту від подряпин та сколів.',
                image: 'https://lh3.googleusercontent.com/proxy/lAZQvJtJvfnUdmzVryostn5jEozPAwrS6YPZBph0VxIB0_QQuvKU-Ar9xOe87VZEhQlm8NxkBMRG9snAbb7Vegm_oFcukGrnKNt5Xfrq-iWgRlEjAf5N6qPJGGwcvLlY3CIECI6iY_9jAogS',
                price: 'від 5000 грн'
            },
            {
                title: 'Ксенонове та LED освітлення',
                description: 'Модернізація штатного освітлення з використанням ксенонових та LED технологій.',
                image: 'https://xenon.ua/images/blog/259/ledxenon.jpg',
                price: 'від 3500 грн'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="exterior" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Екстер'єр</h2>
                
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

customElements.define('exterior-section', ExteriorSection); 