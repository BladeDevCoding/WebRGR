class RepairForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="form" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Залишити заявку</h2>
                
                <div id="repair-form" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Заповніть форму нижче, і наш спеціаліст зв'яжеться з вами для консультації та запису на ремонт:</p>
                    
                    <form class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block mb-2 font-medium">Ваше ім'я*</label>
                                <input type="text" id="name" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 font-medium">Телефон*</label>
                                <input type="tel" id="phone" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="car-model" class="block mb-2 font-medium">Марка та модель авто*</label>
                                <input type="text" id="car-model" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="year" class="block mb-2 font-medium">Рік випуску</label>
                                <input type="number" id="year" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div class="md:col-span-2">
                                <label for="repair-type" class="block mb-2 font-medium">Тип ремонту*</label>
                                <select id="repair-type" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <option value="">Виберіть тип ремонту</option>
                                    <option value="engine">Ремонт двигуна</option>
                                    <option value="transmission">Ремонт трансмісії</option>
                                    <option value="electrical">Електрика та електроніка</option>
                                    <option value="suspension">Ходова частина</option>
                                    <option value="cooling">Система охолодження</option>
                                    <option value="fuel">Паливна система</option>
                                    <option value="other">Інше</option>
                                </select>
                            </div>
                            <div class="md:col-span-2">
                                <label for="description" class="block mb-2 font-medium">Опис проблеми</label>
                                <textarea id="description" rows="4" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="consent" required class="mr-2">
                            <label for="consent">Я даю згоду на обробку моїх персональних даних</label>
                        </div>
                        
                        <button type="submit" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Відправити заявку
                        </button>
                    </form>
                </div>
                
                <div id="success-message" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-green-200 dark:border-green-800 hidden">
                    <div class="text-center">
                        <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-check text-2xl text-green-600 dark:text-green-400"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Заявка успішно відправлена!</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-6">
                            Дякуємо за звернення! Наш спеціаліст зв'яжеться з вами найближчим часом для уточнення деталей та запису на ремонт.
                        </p>
                        <button onclick="location.reload()" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Відправити ще одну заявку
                        </button>
                    </div>
                </div>
                
                <!-- Toast повідомлення -->
                <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">Заявка успішно відправлена!</div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('form');
            const repairForm = this.querySelector('#repair-form');
            const successMessage = this.querySelector('#success-message');
            const toast = this.querySelector('#toast-success');
            const closeToastBtn = toast?.querySelector('button[data-dismiss-target="#toast-success"]');
            
            if (!form || !repairForm || !successMessage || !toast) return;
            
            // Закриття toast при кліку на кнопку закриття
            closeToastBtn?.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Базова валідація
                const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (field.value.trim() === '') {
                        isValid = false;
                        field.classList.add('border-red-500');
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (!isValid) return;
                
                // Додаткова валідація
                // ...
                
                // Відправка форми
                // ...
            });
        }, 0);
    }

    hideToast(toast) {
        toast.classList.add('opacity-0', 'invisible');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }
}

customElements.define('repair-form', RepairForm); 