class ContactForm extends HTMLElement {
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
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Залишити заявку</h2>
                <p class="text-lg mb-6">Заповніть форму, і наш фінансовий консультант зв'яжеться з вами протягом 1 робочого дня:</p>
                
                <form id="credit-form" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        ${this.renderFormFields()}
                    </div>
                    
                    <div class="mb-6">
                        <label for="comments" class="block mb-2 font-medium">Додаткова інформація</label>
                        <textarea id="comments" rows="4" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
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
                    <div class="ml-3 text-sm font-normal">
                        <div class="font-medium text-green-600 dark:text-green-400">Заявку успішно відправлено!</div>
                        <div class="mt-1">Наш консультант зателефонує вам протягом 10 хвилин з номера <span class="font-semibold">+38 (044) 123-45-67</span>.</div>
                        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">Будь ласка, не беріть трубку з незнайомих номерів.</div>
                    </div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    renderFormFields() {
        const fields = [
            { id: 'name', label: 'Ваше ім\'я*', type: 'text', required: true },
            { id: 'phone', label: 'Телефон*', type: 'tel', required: true },
            { id: 'email', label: 'Email', type: 'email', required: false },
            { id: 'car-model', label: 'Модель автомобіля', type: 'text', required: false },
            { 
                id: 'finance-type', 
                label: 'Тип фінансування*', 
                type: 'select', 
                required: true,
                options: [
                    { value: '', text: 'Виберіть тип' },
                    { value: 'credit', text: 'Кредит' },
                    { value: 'leasing', text: 'Лізинг' },
                    { value: 'not-sure', text: 'Не визначився' }
                ]
            },
            { 
                id: 'down-payment-percent', 
                label: 'Перший внесок (%)', 
                type: 'select', 
                required: false,
                options: [
                    { value: '', text: 'Виберіть %' },
                    { value: '10', text: '10%' },
                    { value: '20', text: '20%' },
                    { value: '30', text: '30%' },
                    { value: '40', text: '40%' },
                    { value: '50', text: '50% і більше' }
                ]
            }
        ];

        return fields.map(field => {
            if (field.type === 'select') {
                return `
                    <div>
                        <label for="${field.id}" class="block mb-2 font-medium">${field.label}</label>
                        <select id="${field.id}" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${field.required ? 'required' : ''}>
                            ${field.options.map(option => `
                                <option value="${option.value}">${option.text}</option>
                            `).join('')}
                        </select>
                    </div>
                `;
            } else {
                return `
                    <div>
                        <label for="${field.id}" class="block mb-2 font-medium">${field.label}</label>
                        <input type="${field.type}" id="${field.id}" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${field.required ? 'required' : ''}>
                    </div>
                `;
            }
        }).join('');
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('#credit-form');
            const toast = this.querySelector('#toast-success');
            const closeToastBtn = toast.querySelector('button[data-dismiss-target="#toast-success"]');
            
            if (!form || !toast) return;
            
            
            closeToastBtn.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
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
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправляємо...';
                    
                    
                    setTimeout(() => {
                        form.reset();
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Відправити заявку';
                        this.showToast(toast);
                        
                        
                        setTimeout(() => {
                            this.hideToast(toast);
                        }, 10000);
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

customElements.define('contact-form', ContactForm); 