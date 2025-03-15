class DiagnosticsForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
        this.setupFormSubmission();
    }

    render() {
        this.innerHTML = `
            <section id="form" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Запис на діагностику</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Заповніть форму нижче, і наш спеціаліст зв'яжеться з вами для підтвердження запису:</p>
                    
                    <form id="diagnostics-form" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-medium mb-1">Ваше ім'я *</label>
                                <input type="text" id="name" name="name" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-medium mb-1">Телефон *</label>
                                <input type="tel" id="phone" name="phone" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="car-model" class="block text-sm font-medium mb-1">Марка та модель автомобіля *</label>
                                <input type="text" id="car-model" name="car-model" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="year" class="block text-sm font-medium mb-1">Рік випуску</label>
                                <input type="number" id="year" name="year" min="1900" max="2099"
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="diagnostics-type" class="block text-sm font-medium mb-1">Тип діагностики *</label>
                                <select id="diagnostics-type" name="diagnostics-type" required
                                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                    <option value="">Оберіть тип діагностики</option>
                                    <option value="computer">Комп'ютерна діагностика</option>
                                    <option value="engine">Діагностика двигуна</option>
                                    <option value="suspension">Діагностика ходової частини</option>
                                    <option value="brake">Діагностика гальмівної системи</option>
                                    <option value="transmission">Діагностика трансмісії</option>
                                    <option value="complex">Комплексна діагностика</option>
                                </select>
                            </div>
                            
                            <div class="md:col-span-2">
                                <label for="comments" class="block text-sm font-medium mb-1">Додаткові коментарі</label>
                                <textarea id="comments" name="comments" rows="4"
                                          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700"></textarea>
                            </div>
                        </div>
                        
                        <div class="flex justify-end">
                            <button type="submit" id="submit-form" 
                                    class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Записатися на діагностику
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Toast notification -->
                <div id="toast" class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 z-50 hidden">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ваш запит успішно надіслано! Ми зв'яжемося з вами найближчим часом.</span>
                    </div>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        // Implementation of form validation logic
        const form = this.querySelector('#diagnostics-form');
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', () => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    field.classList.remove('border-gray-300', 'dark:border-gray-600');
                } else {
                    field.classList.remove('border-red-500');
                    field.classList.add('border-gray-300', 'dark:border-gray-600');
                }
            });
        });
    }
    
    setupFormSubmission() {
        const form = this.querySelector('#diagnostics-form');
        const toast = this.querySelector('#toast');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate form
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Show toast notification
                toast.classList.remove('hidden');
                setTimeout(() => {
                    toast.classList.remove('translate-y-20', 'opacity-0');
                }, 100);
                
                // Hide toast after 5 seconds
                setTimeout(() => {
                    toast.classList.add('translate-y-20', 'opacity-0');
                    setTimeout(() => {
                        toast.classList.add('hidden');
                    }, 300);
                }, 5000);
                
                // Reset form
                form.reset();
                
                // Here you would typically send the form data to a server
                // For demonstration purposes, we're just showing the toast
            }
        });
    }
}

customElements.define('diagnostics-form', DiagnosticsForm); 