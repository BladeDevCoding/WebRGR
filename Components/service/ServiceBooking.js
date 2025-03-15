class ServiceBooking extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="service-booking" class="py-12 bg-gray-50 dark:bg-gray-800 rounded-2xl my-12">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Запис на гарантійне обслуговування
                    </h2>
                    <p class="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                        Заповніть форму нижче, щоб записатися на гарантійне обслуговування вашого автомобіля. 
                        Наші спеціалісти зв'яжуться з вами для підтвердження запису.
                    </p>
                    
                    <form id="serviceBookingForm" class="space-y-6 max-w-2xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Ваше ім'я та прізвище*
                                </label>
                                <input type="text" id="fullName" name="fullName" required
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Номер телефону*
                                </label>
                                <input type="tel" id="phone" name="phone" required
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="carModel" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Модель автомобіля*
                                </label>
                                <input type="text" id="carModel" name="carModel" required
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            </div>
                            
                            <div>
                                <label for="carYear" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Рік випуску*
                                </label>
                                <input type="number" id="carYear" name="carYear" min="1900" max="2099" required
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            </div>
                        </div>
                        
                        <div>
                            <label for="vinCode" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                VIN-код автомобіля*
                            </label>
                            <input type="text" id="vinCode" name="vinCode" required
                                   class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                VIN-код знаходиться в технічному паспорті або на кузові автомобіля
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="preferredDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Бажана дата*
                                </label>
                                <input type="date" id="preferredDate" name="preferredDate" required
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                            </div>
                            
                            <div>
                                <label for="preferredTime" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Бажаний час*
                                </label>
                                <select id="preferredTime" name="preferredTime" required
                                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                                    <option value="" disabled selected>Оберіть час</option>
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
                            <label for="issueDescription" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Опис проблеми*
                            </label>
                            <textarea id="issueDescription" name="issueDescription" rows="4" required
                                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                      placeholder="Опишіть проблему, з якою ви зіткнулися"></textarea>
                        </div>
                        
                        <div class="flex items-start">
                            <input type="checkbox" id="consent" name="consent" required
                                   class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1">
                            <label for="consent" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                Я погоджуюсь на обробку моїх персональних даних та приймаю умови 
                                <a href="#" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                    політики конфіденційності
                                </a>
                            </label>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" 
                                    class="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 
                                           text-white font-medium rounded-xl transition-all duration-300 shadow-md inline-flex items-center">
                                <i class="fas fa-calendar-check mr-2"></i>
                                Записатися на гарантійне обслуговування
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Toast повідомлення -->
                <div id="serviceToast" class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-500 z-50 flex items-center">
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>Ваш запит на гарантійне обслуговування успішно надіслано!</span>
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        const form = this.querySelector('#serviceBookingForm');
        const toast = this.querySelector('#serviceToast');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Тут можна додати код для відправки даних на сервер
                console.log('Форма запису на гарантійне обслуговування відправлена:', {
                    fullName: form.fullName.value,
                    phone: form.phone.value,
                    carModel: form.carModel.value,
                    carYear: form.carYear.value,
                    vinCode: form.vinCode.value,
                    preferredDate: form.preferredDate.value,
                    preferredTime: form.preferredTime.value,
                    issueDescription: form.issueDescription.value,
                    consent: form.consent.checked
                });
                
                // Показуємо toast повідомлення
                if (toast) {
                    toast.classList.remove('translate-y-20', 'opacity-0');
                    toast.classList.add('translate-y-0', 'opacity-100');
                    
                    // Ховаємо toast через 5 секунд
                    setTimeout(() => {
                        toast.classList.remove('translate-y-0', 'opacity-100');
                        toast.classList.add('translate-y-20', 'opacity-0');
                    }, 5000);
                }
                
                // Очищаємо форму
                form.reset();
            });
        }
    }
}

customElements.define('service-booking', ServiceBooking); 