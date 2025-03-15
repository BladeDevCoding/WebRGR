class TradeInBenefits extends HTMLElement {
    constructor() {
        super();
        this.benefits = [
            {
                title: 'Економія часу',
                description: 'Не потрібно самостійно шукати покупця на ваш автомобіль та займатися його продажем.'
            },
            {
                title: 'Безпека угоди',
                description: 'Всі операції проводяться офіційно, з повним юридичним супроводом та гарантіями.'
            },
            {
                title: 'Вигідні умови',
                description: 'Спеціальні пропозиції та знижки для клієнтів, які користуються програмою трейд-ін.'
            },
            {
                title: 'Широкий вибір нових авто',
                description: 'У нашому автосалоні представлені найпопулярніші моделі від провідних світових виробників.'
            },
            {
                title: 'Професійний супровід',
                description: 'Наші спеціалісти допоможуть вам на кожному етапі угоди, від оцінки до оформлення документів.'
            },
            {
                title: 'Додаткові бонуси',
                description: 'Клієнти, які користуються послугою трейд-ін, отримують спеціальні пропозиції на сервісне обслуговування.'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="benefits" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Переваги трейд-ін</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    ${this.renderBenefits()}
                </div>
            </section>
        `;
    }

    renderBenefits() {
        return this.benefits.map(benefit => `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                <div class="flex space-x-4">
                    <div class="text-indigo-600 dark:text-indigo-400 text-2xl flex-shrink-0">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">${benefit.title}</h3>
                        <p class="text-gray-700 dark:text-gray-300">${benefit.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

customElements.define('trade-in-benefits', TradeInBenefits); 