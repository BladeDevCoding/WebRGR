class ComfortSection extends HTMLElement {
    constructor() {
        super();
        this.items = [
            {
                title: 'Підігрів сидінь',
                description: 'Встановлення систем підігріву передніх та задніх сидінь з регулюванням температури.',
                image: 'https://auto.24tv.ua/resources/photos/news/201810/7677__690d14dd-2776-4d85-8a9f-8aeac9d38e77.jpg?1538952914000',
                price: 'від 2500 грн'
            },
            {
                title: 'Клімат-контроль',
                description: 'Модернізація системи кондиціонування до повноцінного клімат-контролю.',
                image: 'https://www.tts.ru/upload/blog/kak-rabotaet-klimat-kontrol-v-avtomobile.jpg',
                price: 'від 8000 грн'
            },
            {
                title: 'Парктроніки',
                description: 'Встановлення передніх та задніх парктроніків з звуковим та візуальним сповіщенням.',
                image: 'https://cdn.riastatic.com/photosnewr/ria/news_common/neprikasaemye-kak-parktronik-pomogaet-na-parkovke__221145-620x0.jpg',
                price: 'від 3000 грн'
            },
            {
                title: 'Камера заднього виду',
                description: 'Встановлення камер з виведенням зображення на штатний або додатковий монітор.',
                image: 'https://130.com.ua/images/banner-rear-cameras-article-2.jpg',
                price: 'від 3500 грн'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="comfort" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Комфорт</h2>
                
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

customElements.define('comfort-section', ComfortSection); 