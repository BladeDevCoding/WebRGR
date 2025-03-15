class InsuranceTypesSection extends HTMLElement {
    constructor() {
        super();
        this.insuranceTypes = [
            {
                icon: 'file-contract',
                title: 'ОСЦПВ',
                description: 'Обов\'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів',
                link: '#osago'
            },
            {
                icon: 'car-crash',
                title: 'КАСКО',
                description: 'Добровільне страхування автомобіля від ризиків пошкодження, знищення та викрадення',
                link: '#kasko'
            },
            {
                icon: 'globe-europe',
                title: 'Зелена картка',
                description: 'Міжнародний сертифікат страхування автоцивільної відповідальності при виїзді за кордон',
                link: '#green-card'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="insurance-types" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Види страхування</h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    ${this.insuranceTypes.map(type => this.renderInsuranceCard(type)).join('')}
                </div>
            </section>
        `;
    }

    renderInsuranceCard(type) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="bg-indigo-100 dark:bg-indigo-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-${type.icon} text-xl text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${type.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${type.description}</p>
                <a href="${type.link}" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                    Дізнатися більше <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        `;
    }
}

customElements.define('insurance-types-section', InsuranceTypesSection); 