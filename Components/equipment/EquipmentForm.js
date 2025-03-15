class EquipmentForm extends HTMLElement {
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
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Замовити встановлення</h2>
                
                <div id="repair-form" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Заповніть форму нижче, і наш спеціаліст зв'яжеться з вами для консультації та запису на встановлення:</p>
                    
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
                                <label for="car-model" class="block mb-2 font-medium">Марка та модель авто*</label>
                                <input type="text" id="car-model" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            </div>
                            <div>
                                <label for="equipment-type" class="block mb-2 font-medium">Тип обладнання*</label>
                                <select id="equipment-type" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <option value="">Виберіть тип обладнання</option>
                                    <option value="security">Системи безпеки</option>
                                    <option value="comfort">Комфорт</option>
                                    <option value="multimedia">Мультимедіа</option>
                                    <option value="exterior">Екстер'єр</option>
                                    <option value="tuning">Тюнінг</option>
                                    <option value="other">Інше</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="message" class="block mb-2 font-medium">Додаткова інформація</label>
                            <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="consent" required class="mr-2">
                            <label for="consent">Я даю згоду на обробку моїх персональних даних</label>
                        </div>
                        
                        <button type="submit" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            <i class="fas fa-paper-plane mr-2"></i> Відправити заявку
                        </button>
                    </form>
                </div>
                
                <div id="success-message" class="hidden bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                    <div class="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-check-circle text-3xl text-green-600 dark:text-green-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">Дякуємо за заявку!</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Ваша заявка успішно відправлена. Наш спеціаліст зв'яжеться з вами найближчим часом для уточнення деталей.
                    </p>
                    <button type="button" onclick="location.reload()" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-redo mr-2"></i> Відправити ще одну заявку
                    </button>
                </div>
            </section>
        `;
    }

    setupFormValidation() {
        const repairForm = document.getElementById('repair-form');
        const successMessage = document.getElementById('success-message');
        
        if (repairForm) {
            const form = repairForm.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Тут буде код для відправки даних на сервер
                
                // Імітуємо успішну відправку
                setTimeout(() => {
                    repairForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1000);
            });
        }
    }
}

customElements.define('equipment-form', EquipmentForm); 