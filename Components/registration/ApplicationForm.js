class ApplicationForm extends HTMLElement {
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
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Замовити послугу</h2>
                
                <form id="registration-form" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="name" class="block mb-2 font-medium">Ваше ім'я*</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 font-medium">Телефон*</label>
                            <input type="tel" id="phone" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 font-medium">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        </div>
                        <div>
                            <label for="service-type" class="block mb-2 font-medium">Тип послуги*</label>
                            <select id="service-type" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                                <option value="">Оберіть послугу</option>
                                <option value="new-car">Реєстрація нового автомобіля</option>
                                <option value="re-registration">Перереєстрація автомобіля</option>
                                <option value="import">Реєстрація імпортованого авто</option>
                                <option value="deregistration">Зняття з обліку</option>
                                <option value="other">Інше</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <label for="car-info" class="block mb-2 font-medium">Інформація про автомобіль</label>
                        <textarea id="car-info" rows="3" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Марка, модель, рік випуску, VIN-код (за наявності)"></textarea>
                    </div>
                    
                    <div class="mb-6">
                        <label for="comments" class="block mb-2 font-medium">Додаткові коментарі</label>
                        <textarea id="comments" rows="3" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                    </div>
                    
                    <div class="flex items-center mb-6">
                        <input type="checkbox" id="consent" class="mr-2" required>
                        <label for="consent">Я даю згоду на обробку моїх персональних даних</label>
                    </div>
                    
                    <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                        Відправити заявку
                    </button>
                </form>
                
                <!-- Toast повідомлення (спочатку приховане) -->
                <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">Заявку успішно відправлено! Ми зв'яжемося з вами найближчим часом.</div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('#registration-form');
            const toast = this.querySelector('#toast-success');
            const closeToastBtn = toast?.querySelector('button[data-dismiss-target="#toast-success"]');
            
            if (!form || !toast) return;
            
            
            closeToastBtn?.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
                        isValid = false;
                        field.classList.add('border-red-500');
                        
                        
                        field.classList.add('animate-shake');
                        setTimeout(() => {
                            field.classList.remove('animate-shake');
                        }, 500);
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (isValid) {
                    
                    const submitButton = form.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправка...';
                    
                    setTimeout(() => {
                        
                        form.reset();
                        
                        
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Відправити заявку';
                        
                        
                        this.showToast(toast);
                        
                        
                        setTimeout(() => {
                            this.hideToast(toast);
                        }, 8000);
                    }, 1500);
                }
            });
            
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `;
            document.head.appendChild(style);
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

customElements.define('application-form', ApplicationForm); 