class HowToJoinSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="how-to-join" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Як приєднатися до програми лояльності</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-3 gap-6">
                        <!-- Крок 1 -->
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Заповніть анкету</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Заповніть анкету учасника програми лояльності в нашому автосалоні або онлайн.
                            </p>
                        </div>
                        
                        <!-- Крок 2 -->
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Отримайте картку</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Отримайте персональну картку лояльності AutoPrime з унікальним номером.
                            </p>
                        </div>
                        
                        <!-- Крок 3 -->
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                <span class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Користуйтесь перевагами</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Пред'являйте картку при кожному візиті та користуйтесь перевагами програми.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <a href="#registration-form" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            <i class="fas fa-user-plus mr-2"></i> Приєднатися зараз
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('how-to-join-section', HowToJoinSection); 