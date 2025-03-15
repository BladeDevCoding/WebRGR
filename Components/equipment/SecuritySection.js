class SecuritySection extends HTMLElement {
    constructor() {
        super();
        this.items = [
            {
                title: 'Сигналізація',
                description: 'Сучасні системи охорони з різними рівнями захисту, включаючи GSM-модулі та GPS-трекери.',
                image: 'https://plus.unsplash.com/premium_photo-1663100847813-ae424dcd2154?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                price: 'від 3500 грн'
            },
            {
                title: 'Іммобілайзер',
                description: 'Електронні та механічні системи блокування двигуна для запобігання викраденню.',
                image: 'https://cdn.riastatic.com/photos/ria/news_text/10/1019/101957/101957.jpg',
                price: 'від 2000 грн'
            },
            {
                title: 'Механічні блокіратори',
                description: 'Замки на кермо, КПП та педалі для додаткового захисту від викрадення.',
                image: 'https://cdn.27.ua/sc--media--prod/default/be/14/1c/be141c0c-aec7-48a2-b812-4cebc368b74d.jpg',
                price: 'від 1500 грн'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="security" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Системи безпеки</h2>
                
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

customElements.define('security-section', SecuritySection); 