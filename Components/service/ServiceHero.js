class ServiceHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto relative overflow-hidden">
                    <div class="relative z-10">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Запис на сервіс</h1>
                        <p class="text-xl opacity-90">Зручний онлайн-запис на технічне обслуговування та ремонт</p>
                    </div>
                    <div class="absolute top-0 right-0 opacity-10 hidden md:block">
                        <i class="fas fa-tools text-9xl transform -rotate-12"></i>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('service-hero', ServiceHero); 