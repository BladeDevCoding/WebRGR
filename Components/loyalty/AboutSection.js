class AboutSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про програму лояльності</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-8">
                            <h3 class="text-2xl font-bold mb-4">Що таке програма лояльності AutoPrime?</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Програма лояльності AutoPrime — це спеціальна програма для наших постійних клієнтів, яка дозволяє отримувати додаткові переваги та знижки на послуги нашого автосалону та сервісного центру.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Учасники програми отримують персональну картку лояльності, яка надає доступ до ексклюзивних пропозицій, спеціальних цін на сервісне обслуговування, пріоритетного запису на сервіс та багатьох інших переваг.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300">
                                Чим більше ви користуєтесь нашими послугами, тим вищий рівень лояльності ви отримуєте і тим більше переваг стає доступно для вас.
                            </p>
                        </div>
                        <div class="md:w-1/2">
                            <img src="https://100card.ua/wp-content/uploads/2021/07/karti-lojalnosti-01.jpg" alt="Картка лояльності AutoPrime" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('about-section', AboutSection); 