class GreenCardSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="green-card" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Зелена картка</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://visitukraine.today/media/blog/previews/IFeIEYKwTIAPG3507NiKYqRjmnKrtgg4tTLy1epy.jpg" alt="Зелена картка" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Що таке Зелена картка?</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Зелена картка — це міжнародний сертифікат страхування автоцивільної відповідальності, який діє в країнах-учасницях міжнародної системи автострахування "Зелена картка".
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                Цей документ є обов'язковим при перетині кордону на автомобілі та захищає вас від фінансових втрат у разі ДТП за кордоном.
                            </p>
                            
                            <h4 class="text-xl font-semibold mb-3">Переваги Зеленої картки:</h4>
                            <ul class="space-y-2 mb-6">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Дійсна у всіх країнах-учасницях системи "Зелена картка"</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Покриває відповідальність перед третіми особами згідно з законодавством країни перебування</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Можливість вибору території дії (всі країни або лише окремі)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>Термін дії від 15 днів до 1 року</span>
                                </li>
                            </ul>
                            
                            <div class="flex flex-wrap gap-4">
                                <a href="#calculator" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-calculator mr-2"></i> Розрахувати вартість
                                </a>
                                <a href="#faq" class="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                                    <i class="fas fa-question-circle mr-2"></i> Часті питання
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('green-card-section', GreenCardSection); 