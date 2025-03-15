class DiagnosticsTypes extends HTMLElement {
    constructor() {
        super();
        this.types = [
            {
                icon: 'laptop-code',
                title: "Комп'ютерна діагностика",
                description: 'Перевірка електронних систем автомобіля за допомогою спеціального обладнання, зчитування та аналіз помилок.'
            },
            {
                icon: 'engine',
                title: 'Діагностика двигуна',
                description: 'Комплексна перевірка стану двигуна, включаючи компресію, тиск масла, стан паливної системи та систему запалювання.'
            },
            {
                icon: 'car',
                title: 'Діагностика ходової частини',
                description: 'Перевірка стану підвіски, амортизаторів, рульового управління та інших елементів ходової частини.'
            },
            {
                icon: 'brake-system',
                title: 'Діагностика гальмівної системи',
                description: 'Перевірка ефективності гальм, стану гальмівних дисків, колодок, супортів та гальмівної рідини.'
            },
            {
                icon: 'cogs',
                title: 'Діагностика трансмісії',
                description: 'Перевірка стану коробки передач, зчеплення, приводних валів та інших елементів трансмісії.'
            },
            {
                icon: 'car-battery',
                title: 'Діагностика електрообладнання',
                description: 'Перевірка акумулятора, генератора, стартера, системи освітлення та інших електричних компонентів.'
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="types" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Види діагностики</h2>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.types.map(type => `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                            <div class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <i class="fas fa-${type.icon} text-2xl text-indigo-600 dark:text-indigo-400"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">${type.title}</h3>
                            <p class="text-gray-700 dark:text-gray-300">${type.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

customElements.define('diagnostics-types', DiagnosticsTypes); 