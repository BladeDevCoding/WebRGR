class FeedbackForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="feedback" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Зворотний зв'язок</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Якщо у вас виникли запитання або пропозиції, заповніть форму нижче, і ми зв'яжемося з вами найближчим часом:</p>
                    
                    <form id="contact-form" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block mb-2 font-medium">Ваше ім'я*</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                            </div>
                            
                            <div>
                                <label for="phone" class="block mb-2 font-medium">Телефон*</label>
                                <input type="tel" id="phone" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                            </div>
                            
                            <div>
                                <label for="email" class="block mb-2 font-medium">Email*</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                            </div>
                            
                            <div>
                                <label for="subject" class="block mb-2 font-medium">Тема*</label>
                                <select id="subject" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                                    <option value="" disabled selected>Оберіть тему</option>
                                    <option value="purchase">Купівля автомобіля</option>
                                    <option value="service">Сервісне обслуговування</option>
                                    <option value="parts">Запчастини та аксесуари</option>
                                    <option value="credit">Кредит і лізинг</option>
                                    <option value="complaint">Скарга</option>
                                    <option value="other">Інше</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="message" class="block mb-2 font-medium">Повідомлення</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" required></textarea>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="privacy" type="checkbox" class="w-4 h-4 border rounded dark:bg-gray-700 dark:border-gray-600" required>
                            </div>
                            <label for="privacy" class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Я погоджуюсь з <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:underline">політикою конфіденційності</a> та даю згоду на обробку персональних даних
                            </label>
                        </div>

                        <div>
                            <button type="submit" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="far fa-paper-plane mr-2"></i> Надіслати повідомлення
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
                        <div class="font-medium text-green-600 dark:text-green-400">Повідомлення успішно відправлено!</div>
                        <div class="mt-1">Дякуємо за ваше звернення. Ми зв'яжемося з вами найближчим часом.</div>
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
            const form = this.querySelector('#contact-form');
            const toast = this.querySelector('#toast-success');
            const closeToastBtn = toast?.querySelector('button[data-dismiss-target="#toast-success"]');
            
            if (!form || !toast) return;
            
            // Закриття toast при кліку на кнопку закриття
            closeToastBtn?.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Отримуємо значення полів
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                const privacy = document.getElementById('privacy').checked;
                
                // Перевіряємо заповнення обов'язкових полів
                if (!name || !phone || !email || !subject || !message || !privacy) {
                    // Додаємо анімацію струшування для невалідних полів
                    const requiredFields = form.querySelectorAll('[required]');
                    requiredFields.forEach(field => {
                        if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
                            field.classList.add('border-red-500', 'animate-shake');
                            setTimeout(() => {
                                field.classList.remove('animate-shake');
                            }, 500);
                        } else {
                            field.classList.remove('border-red-500');
                        }
                    });
                    return;
                }
                
                // Імітуємо відправку форми
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправляємо...';
                
                // Через 1.5 секунди показуємо toast і скидаємо форму
                setTimeout(() => {
                    form.reset();
                    submitButton.disabled = false;
                    submitButton.innerHTML = '<i class="far fa-paper-plane mr-2"></i> Надіслати повідомлення';
                    this.showToast(toast);
                    
                    // Автоматично ховаємо toast через 8 секунд
                    setTimeout(() => {
                        this.hideToast(toast);
                    }, 8000);
                }, 1500);
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

customElements.define('feedback-form', FeedbackForm); 