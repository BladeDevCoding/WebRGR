class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="bg-gray-900 text-white pt-16 pb-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <!-- Про компанію -->
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-blue-400">Про AutoPrime</h3>
                            <p class="text-gray-400 mb-4">
                                Офіційний дилер преміальних автомобілів в Україні. 
                                Продаж, сервіс, trade-in та фінансові послуги.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i class="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i class="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i class="fab fa-youtube text-xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i class="fab fa-telegram text-xl"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Швидкі посилання -->
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-blue-400">Швидкі посилання</h3>
                            <ul class="space-y-2">
                                <li>
                                    <a href="catalog/new-cars.html" class="text-gray-400 hover:text-white transition-colors">
                                        Каталог автомобілів
                                    </a>
                                </li>
                                <li>
                                    <a href="catalog/special-offers.html" class="text-gray-400 hover:text-white transition-colors">
                                        Спеціальні пропозиції
                                    </a>
                                </li>
                                <li>
                                    <a href="technical-center/service-appointment.html" class="text-gray-400 hover:text-white transition-colors">
                                        Запис на сервіс
                                    </a>
                                </li>
                                <li>
                                    <a href="catalog/test-drive.html" class="text-gray-400 hover:text-white transition-colors">
                                        Тест-драйв
                                    </a>
                                </li>
                                <li>
                                    <a href="company.html" class="text-gray-400 hover:text-white transition-colors">
                                        Про компанію
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Контакти -->
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-blue-400">Контакти</h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i class="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                                    <span class="text-gray-400">
                                        м. Київ, вул. Автомобільна, 123
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-phone-alt text-blue-400 mt-1 mr-3"></i>
                                    <span class="text-gray-400">
                                        +38 (044) 123-45-67
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-envelope text-blue-400 mt-1 mr-3"></i>
                                    <span class="text-gray-400">
                                        info@autoprime.ua
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-clock text-blue-400 mt-1 mr-3"></i>
                                    <span class="text-gray-400">
                                        Пн-Пт: 9:00-19:00<br>
                                        Сб: 9:00-17:00<br>
                                        Нд: вихідний
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Підписка -->
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-blue-400">Підписка на новини</h3>
                            <p class="text-gray-400 mb-4">
                                Підпишіться на наші новини та отримуйте інформацію про акції та спеціальні пропозиції.
                            </p>
                            <form class="flex">
                                <input type="email" 
                                       placeholder="Ваш email" 
                                       class="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <button type="submit" 
                                        class="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 
                                               text-white px-4 py-2 rounded-r-lg transition-colors">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Нижній футер -->
                    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-500 text-sm mb-4 md:mb-0">
                            © 2025 AutoPrime. Всі права захищені. РОЗРОБНИК: Пелих Ігор, КН-22
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                                Політика конфіденційності
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                                Умови використання
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                                Карта сайту
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter); 