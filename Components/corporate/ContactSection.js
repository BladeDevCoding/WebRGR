class ContactSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="contact" class="mb-16 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Зв'язатися з нами</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
                    <p class="text-lg mb-6">Залиште заявку, і наш менеджер з корпоративних продажів зв'яжеться з вами протягом 24 годин для обговорення деталей співпраці.</p>
                    
                    <form id="corporate-form" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="company-name" class="block text-sm font-medium mb-1">Назва компанії*</label>
                                <input type="text" id="company-name" name="company-name" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="contact-person" class="block text-sm font-medium mb-1">Контактна особа*</label>
                                <input type="text" id="contact-person" name="contact-person" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-medium mb-1">Телефон*</label>
                                <input type="tel" id="phone" name="phone" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-medium mb-1">Email*</label>
                                <input type="email" id="email" name="email" required
                                       class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                            </div>
                            
                            <div>
                                <label for="cars-count" class="block text-sm font-medium mb-1">Кількість автомобілів</label>
                                <select id="cars-count" name="cars-count"
                                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                    <option value="1-5">1-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="11-20">11-20</option>
                                    <option value="21-50">21-50</option>
                                    <option value="50+">Більше 50</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-1">Послуги, що цікавлять</label>
                                
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="service-fleet" name="service-fleet" class="mr-2">
                                        <label for="service-fleet">Корпоративний автопарк</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="service-leasing" name="service-leasing" class="mr-2">
                                        <label for="service-leasing">Лізинг</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="service-maintenance" name="service-maintenance" class="mr-2">
                                        <label for="service-maintenance">Сервісне обслуговування</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium mb-1">Додаткова інформація</label>
                            <textarea id="message" name="message" rows="4"
                                      class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700"></textarea>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="privacy" name="privacy" required class="mr-2">
                            <label for="privacy">Я даю згоду на обробку моїх персональних даних</label>
                        </div>
                        
                        <div>
                            <button type="submit" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-paper-plane mr-2"></i> Надіслати запит
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Toast повідомлення (спочатку приховане) -->
                <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">
                        <div class="font-medium text-green-600 dark:text-green-400">Запит успішно відправлено!</div>
                        <div class="mt-1">Наш менеджер зв'яжеться з вами протягом 24 годин.</div>
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
            const form = this.querySelector('#corporate-form');
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
                
                if (isValid) {
                    // Імітуємо відправку форми
                    const submitButton = form.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправляємо...';
                    
                    // Через 1.5 секунди показуємо toast і скидаємо форму
                    setTimeout(() => {
                        form.reset();
                        submitButton.disabled = false;
                        submitButton.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Надіслати запит';
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

customElements.define('contact-section', ContactSection); 