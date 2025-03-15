class PhonesSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="phones" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Телефони</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Відділ продажу</h3>
                            <ul class="space-y-3">
                                <li class="flex items-center">
                                    <i class="fas fa-phone-alt text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="tel:+380441234567" class="hover:text-indigo-600 dark:hover:text-indigo-400">+38 (044) 123-45-67</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-mobile-alt text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="tel:+380671234567" class="hover:text-indigo-600 dark:hover:text-indigo-400">+38 (067) 123-45-67</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="far fa-envelope text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="mailto:sales@autoprime.ua" class="hover:text-indigo-600 dark:hover:text-indigo-400">sales@autoprime.ua</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Сервісний центр</h3>
                            <ul class="space-y-3">
                                <li class="flex items-center">
                                    <i class="fas fa-phone-alt text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="tel:+380442345678" class="hover:text-indigo-600 dark:hover:text-indigo-400">+38 (044) 234-56-78</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-mobile-alt text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="tel:+380672345678" class="hover:text-indigo-600 dark:hover:text-indigo-400">+38 (067) 234-56-78</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="far fa-envelope text-indigo-600 dark:text-indigo-400 mr-3"></i>
                                    <a href="mailto:service@autoprime.ua" class="hover:text-indigo-600 dark:hover:text-indigo-400">service@autoprime.ua</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('phones-section', PhonesSection); 