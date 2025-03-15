class RepairAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Про ремонтні роботи</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="https://plus.unsplash.com/premium_photo-1677009541899-28700f6c20a8?q=80&w=1695&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ремонтна майстерня" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4">Професійний ремонт автомобілів</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                Наш технічний центр пропонує повний спектр ремонтних робіт для автомобілів будь-яких марок та моделей. Ми використовуємо сучасне обладнання та оригінальні запчастини для забезпечення найвищої якості ремонту.
                            </p>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                Наші кваліфіковані механіки мають багаторічний досвід роботи та постійно підвищують свою кваліфікацію, щоб відповідати найвищим стандартам автомобільної індустрії.
                            </p>
                            
                            <div class="flex flex-wrap gap-4">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-tools text-xl text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Сучасне обладнання</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Діагностика та ремонт</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-user-cog text-xl text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Досвідчені фахівці</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Експерти своєї справи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('repair-about', RepairAbout); 