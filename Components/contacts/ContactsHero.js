class ContactsHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-10 text-white shadow-lg">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Контакти</h1>
                    <p class="text-xl opacity-90">Зв'яжіться з нами або відвідайте наш автосалон</p>
                </div>
            </div>
        `;
    }
}

customElements.define('contacts-hero', ContactsHero); 