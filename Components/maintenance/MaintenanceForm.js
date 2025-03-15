class MaintenanceForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="maintenance-form" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Запис на технічне обслуговування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Заповніть форму нижче, щоб записатися на технічне обслуговування вашого автомобіля:</p>
                    
                    <form id="maintenance-form" class="space-y-6">
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
                                <label for="car-model" class="block mb-2 font-medium">Марка та модель автомобіля*</label>
                                <input type="text" id="car-model" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="car-year" class="block mb-2 font-medium">Рік випуску*</label>
                                <input type="number" id="car-year" min="1900" max="2099" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="maintenance-type" class="block mb-2 font-medium">Тип ТО*</label>
                                <select id="maintenance-type" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <option value="">Виберіть тип ТО</option>
                                    <option value="to-1">ТО-1 (Мале ТО)</option>
                                    <option value="to-2">ТО-2 (Середнє ТО)</option>
                                    <option value="to-3">ТО-3 (Велике ТО)</option>
                                    <option value="seasonal">Сезонне ТО</option>
                                    <option value="warranty">Гарантійне ТО</option>
                                    <option value="other">Інше</option>
                                </select>
                            </div>
                            <div>
                                <label for="preferred-date" class="block mb-2 font-medium">Бажана дата*</label>
                                <input type="date" id="preferred-date" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                        </div>
                        
                        <div>
                            <label for="comments" class="block mb-2 font-medium">Додаткова інформація</label>
                            <textarea id="comments" rows="4" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                        </div>
                        
                        <div class="flex items-center">
                            <input id="consent" type="checkbox" required class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                            <label for="consent" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                Я погоджуюсь на обробку моїх персональних даних*
                            </label>
                        </div>
                        
                        <button type="submit" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            <i class="fas fa-calendar-check mr-2"></i> Записатися на ТО
                        </button>
                    </form>
                    
                    <!-- Toast повідомлення про успіх -->
                    <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="ml-3 text-sm font-normal">Заявка успішно відправлена!</div>
                        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                            <span class="sr-only">Закрити</span>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('#maintenance-form');
            const toast = this.querySelector('#toast-success');
            const closeToastBtn = toast?.querySelector('button[data-dismiss-target="#toast-success"]');
            
            if (!form || !toast) return;
            
            // Закриття toast при кліку на кнопку закриття
            closeToastBtn?.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Базова валідація
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
                        isValid = false;
                        field.classList.add('border-red-500');
                        
                        // Додаємо анімацію струшування для невалідних полів
                        field.classList.add('animate-shake');
                        setTimeout(() => {
                            field.classList.remove('animate-shake');
                        }, 500);
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (!isValid) {
                    return;
                }
                
                // Імітація відправки форми
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправка...';
                
                setTimeout(() => {
                    // Очищаємо форму
                    form.reset();
                    
                    // Відновлюємо кнопку
                    submitButton.disabled = false;
                    submitButton.innerHTML = '<i class="fas fa-calendar-check mr-2"></i> Записатися на ТО';
                    
                    // Показуємо повідомлення про успіх
                    this.showToast(toast);
                    
                    // Автоматично ховаємо повідомлення через 5 секунд
                    setTimeout(() => {
                        this.hideToast(toast);
                    }, 5000);
                }, 1500);
            });
            
            // Додаємо стилі для анімації
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

customElements.define('maintenance-form', MaintenanceForm); 