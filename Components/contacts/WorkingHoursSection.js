class WorkingHoursSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="working-hours" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Години роботи</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Автосалон</h3>
                            <ul class="space-y-3">
                                <li class="flex justify-between">
                                    <span>Понеділок - П'ятниця:</span>
                                    <span class="font-medium">9:00 - 20:00</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Субота:</span>
                                    <span class="font-medium">10:00 - 18:00</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Неділя:</span>
                                    <span class="font-medium">10:00 - 16:00</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Сервісний центр</h3>
                            <ul class="space-y-3">
                                <li class="flex justify-between">
                                    <span>Понеділок - П'ятниця:</span>
                                    <span class="font-medium">8:00 - 20:00</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Субота:</span>
                                    <span class="font-medium">9:00 - 17:00</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Неділя:</span>
                                    <span class="font-medium">Вихідний</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('working-hours-section', WorkingHoursSection); 