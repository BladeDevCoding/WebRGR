class PartnersSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="partners-section" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наші фінансові партнери</h2>
                <p class="text-lg mb-6">Ми співпрацюємо з провідними банками та лізинговими компаніями України, щоб запропонувати вам найкращі умови фінансування:</p>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    ${this.renderPartners()}
                </div>
            </section>
        `;
    }

    renderPartners() {
        const partners = [
            'ПриватБанк',
            'Укрсиббанк',
            'ОТП Лізинг',
            'Альфа-Банк'
        ];

        return partners.map(partner => `
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center h-24 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200 dark:hover:border-indigo-700">
                <div class="text-center text-xl font-bold text-gray-700 dark:text-gray-300">${partner}</div>
            </div>
        `).join('');
    }
}

customElements.define('partners-section', PartnersSection); 