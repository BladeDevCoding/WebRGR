class AppointmentForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupFormValidation();
    }

    render() {
        this.innerHTML = `
            <section id="appointment" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Запис на сервіс</h2>
                
                <div id="appointment-form" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Заповніть форму нижче, і наш спеціаліст зв'яжеться з вами для підтвердження запису:</p>
                    
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
                                <label for="email" class="block mb-2 font-medium">Email</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="car-model" class="block mb-2 font-medium">Марка та модель автомобіля*</label>
                                <input type="text" id="car-model" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="year" class="block mb-2 font-medium">Рік випуску</label>
                                <input type="number" id="year" min="1900" max="2099" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="vin" class="block mb-2 font-medium">VIN-код (за наявності)</label>
                                <input type="text" id="vin" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="service-type" class="block mb-2 font-medium">Тип обслуговування*</label>
                                <select id="service-type" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <option value="">Оберіть тип обслуговування</option>
                                    <option value="maintenance">Технічне обслуговування</option>
                                    <option value="repair">Ремонтні роботи</option>
                                    <option value="body-repair">Кузовний ремонт</option>
                                    <option value="diagnostics">Комп'ютерна діагностика</option>
                                    <option value="tire">Шиномонтаж</option>
                                    <option value="electrical">Електрика</option>
                                    <option value="other">Інше</option>
                                </select>
                            </div>
                            <div>
                                <label for="preferred-date" class="block mb-2 font-medium">Бажана дата*</label>
                                <input type="date" id="preferred-date" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="preferred-time" class="block mb-2 font-medium">Бажаний час</label>
                                <select id="preferred-time" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <option value="">Оберіть час</option>
                                    <option value="9:00">9:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="comments" class="block mb-2 font-medium">Опис проблеми або додаткова інформація</label>
                            <textarea id="comments" rows="4" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="privacy" type="checkbox" required class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600">
                            </div>
                            <label for="privacy" class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Я погоджуюсь з <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:underline">політикою конфіденційності</a> та даю згоду на обробку персональних даних*
                            </label>
                        </div>
                        
                        <button type="submit" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            <i class="fas fa-calendar-check mr-2"></i> Записатися на сервіс
                        </button>
                    </form>
                </div>
                
                <div id="success-message" class="hidden bg-green-50 dark:bg-green-900/30 rounded-xl shadow-md p-6 border border-green-200 dark:border-green-800 text-center">
                    <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-check-circle text-4xl text-green-600 dark:text-green-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Запис успішно створено!</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">
                        Дякуємо за ваш запит! Наш спеціаліст зв'яжеться з вами протягом 2 годин для підтвердження запису.
                    </p>
                    <a href="../index.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-home mr-2"></i> Повернутися на головну
                    </a>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        setTimeout(() => {
            // Обробка форми
            const appointmentForm = this.querySelector('#appointment-form');
            const successMessage = this.querySelector('#success-message');
            
            if (appointmentForm) {
                const form = appointmentForm.querySelector('form');
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Базова валідація
                    const requiredFields = form.querySelectorAll('[required]');
                    let isValid = true;
                    
                    requiredFields.forEach(field => {
                        if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
                            field.classList.add('border-red-500');
                            isValid = false;
                        } else {
                            field.classList.remove('border-red-500');
                        }
                    });
                    
                    if (!isValid) return;
                    
                    // Імітуємо успішну відправку
                    setTimeout(() => {
                        appointmentForm.classList.add('hidden');
                        successMessage.classList.remove('hidden');
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 1000);
                });
            }
        }, 0);
    }
}

customElements.define('appointment-form', AppointmentForm); 