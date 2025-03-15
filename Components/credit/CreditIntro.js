class CreditIntro extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="mb-12">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Фінансові рішення для вас</h2>
                <p class="text-lg mb-6">Ми розуміємо, що придбання автомобіля — це важливе рішення, яке потребує ретельного планування. Саме тому AutoPrime пропонує різноманітні фінансові інструменти, які допоможуть вам стати власником омріяного автомобіля на найвигідніших умовах.</p>
                
                <div class="grid md:grid-cols-2 gap-8 mt-8">
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                        <div class="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-3">Автокредитування</h3>
                        <p class="mb-4">Придбайте новий або вживаний автомобіль у кредит з мінімальним початковим внеском та комфортними щомісячними платежами.</p>
                        <a href="#credit-section" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Дізнатися більше <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                        <div class="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                            <i class="fas fa-file-contract"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-3">Лізинг</h3>
                        <p class="mb-4">Оптимальне рішення для бізнесу — отримайте автомобіль у користування з можливістю подальшого викупу на вигідних умовах.</p>
                        <a href="#leasing-section" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Дізнатися більше <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('credit-intro', CreditIntro); 