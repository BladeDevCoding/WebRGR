class SubscribeForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="subscribe-section" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Підписка на акції</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="md:flex">
                        <div class="p-6 md:w-3/5">
                            <h3 class="text-2xl font-bold mb-4">Отримуйте найкращі пропозиції першими</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">Підпишіться на нашу розсилку, щоб першими дізнаватися про нові акції, спеціальні пропозиції та ексклюзивні знижки.</p>
                            
                            <form id="subscribe-form" class="space-y-4">
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="subscribe-name" class="block text-sm font-medium mb-1">Ваше ім'я *</label>
                                        <input type="text" id="subscribe-name" name="name" required
                                               class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 dark:text-white">
                                    </div>
                                    <div>
                                        <label for="subscribe-email" class="block text-sm font-medium mb-1">Email *</label>
                                        <input type="email" id="subscribe-email" name="email" required
                                               class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 dark:text-white">
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="subscribe-interests" class="block text-sm font-medium mb-1">Які пропозиції вас цікавлять?</label>
                                    <select id="subscribe-interests" name="interests" 
                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 dark:text-white">
                                        <option value="all">Всі пропозиції</option>
                                        <option value="new-cars">Нові автомобілі</option>
                                        <option value="used-cars">Вживані автомобілі</option>
                                        <option value="service">Сервісні акції</option>
                                        <option value="parts">Запчастини та аксесуари</option>
                                    </select>
                                </div>
                                
                                <div class="flex items-center">
                                    <input type="checkbox" id="subscribe-consent" name="consent" required
                                           class="mr-2 accent-indigo-600">
                                    <label for="subscribe-consent" class="text-sm">
                                        Я погоджуюсь отримувати email-розсилку та даю згоду на обробку персональних даних *
                                    </label>
                                </div>
                                
                                <div>
                                    <button type="submit" 
                                            class="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        Підписатися
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        <div class="md:w-2/5 bg-indigo-600 p-6 text-white flex items-center">
                            <div>
                                <div class="text-4xl mb-4">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                                <h4 class="text-xl font-bold mb-3">Переваги підписки</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle mt-1 mr-2"></i>
                                        <span>Ексклюзивні пропозиції тільки для підписників</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle mt-1 mr-2"></i>
                                        <span>Першими дізнавайтесь про нові акції</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle mt-1 mr-2"></i>
                                        <span>Персоналізовані пропозиції під ваші інтереси</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle mt-1 mr-2"></i>
                                        <span>Можливість відписатися в будь-який момент</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Toast повідомлення (спочатку приховане) -->
                <div id="subscribe-toast" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">
                        <div class="font-medium text-green-600 dark:text-green-400">Підписку оформлено!</div>
                        <div class="mt-1">Дякуємо за підписку на наші акції та спеціальні пропозиції.</div>
                        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">Перевірте вашу електронну пошту для підтвердження.</div>
                    </div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#subscribe-toast" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            const form = this.querySelector('#subscribe-form');
            const toast = this.querySelector('#subscribe-toast');
            const closeToastBtn = toast?.querySelector('button[data-dismiss-target="#subscribe-toast"]');
            
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
                
                if (isValid) {
                    // Імітуємо відправку форми
                    const submitButton = form.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Обробка...';
                    
                    // Через 1.5 секунди показуємо toast і скидаємо форму
                    setTimeout(() => {
                        form.reset();
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Підписатися';
                        this.showToast(toast);
                        
                        // Автоматично ховаємо toast через 8 секунд
                        setTimeout(() => {
                            this.hideToast(toast);
                        }, 8000);
                    }, 1500);
                }
            });
            
            // Додаємо стилі для анімації струшування
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

customElements.define('subscribe-form', SubscribeForm); 