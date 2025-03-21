class TradeInForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="form-section" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Заявка на трейд-ін</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <form id="trade-in-form" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-xl font-semibold mb-4">Ваші контактні дані</h3>
                                
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Ваше ім'я*</label>
                                        <input type="text" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Телефон*</label>
                                        <input type="tel" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-semibold mb-4">Інформація про ваш автомобіль</h3>
                                
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Марка та модель*</label>
                                        <input type="text" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Рік випуску*</label>
                                        <input type="number" required min="1990" max="2025" class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Пробіг (км)*</label>
                                        <input type="number" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Додаткова інформація</label>
                            <textarea rows="4" class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"></textarea>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="consent" required class="mr-2">
                            <label for="consent">Я даю згоду на обробку моїх персональних даних</label>
                        </div>
                        
                        <button type="submit" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Відправити заявку
                        </button>
                    </form>
                </div>
                
                <!-- Toast повідомлення (спочатку приховане) -->
                <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">
                        <div class="font-medium text-green-600 dark:text-green-400">Заявку успішно відправлено!</div>
                        <div class="mt-1">Наш консультант зв'яжеться з вами найближчим часом для уточнення деталей.</div>
                    </div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('#trade-in-form');
            const toast = this.querySelector('#toast-success');
            
            if (!form || !toast) return;
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
                        isValid = false;
                        field.classList.add('border-red-500');
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (isValid) {
                    
                    const submitButton = form.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправляємо...';
                    
                    
                    setTimeout(() => {
                        form.reset();
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Відправити заявку';
                        this.showToast(toast);
                        
                        
                        setTimeout(() => {
                            this.hideToast(toast);
                        }, 5000);
                    }, 1500);
                }
            });
            
            
            const closeToastBtn = toast.querySelector('button[data-dismiss-target="#toast-success"]');
            closeToastBtn?.addEventListener('click', () => {
                this.hideToast(toast);
            });
        }, 0);
    }
    
    showToast(toast) {
        toast.classList.remove('translate-y-16', 'opacity-0', 'invisible');
        toast.classList.add('translate-y-0', 'opacity-100', 'visible');
    }
    
    hideToast(toast) {
        toast.classList.remove('translate-y-0', 'opacity-100', 'visible');
        toast.classList.add('translate-y-16', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('invisible');
        }, 300);
    }
}

customElements.define('trade-in-form', TradeInForm); 