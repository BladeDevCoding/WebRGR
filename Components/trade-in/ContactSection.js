class ContactSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="contact-section" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Контакти</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Наші контакти</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="text-indigo-600 dark:text-indigo-400 text-xl mr-4">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Адреса</h4>
                                        <p class="text-gray-700 dark:text-gray-300">м. Київ, вул. Хрещатик, 1</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="text-indigo-600 dark:text-indigo-400 text-xl mr-4">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Телефон</h4>
                                        <p class="text-gray-700 dark:text-gray-300">+38 (044) 123-45-67</p>
                                        <p class="text-gray-700 dark:text-gray-300">+38 (067) 987-65-43</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="text-indigo-600 dark:text-indigo-400 text-xl mr-4">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Email</h4>
                                        <p class="text-gray-700 dark:text-gray-300">trade-in@autoprime.ua</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="text-indigo-600 dark:text-indigo-400 text-xl mr-4">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Графік роботи</h4>
                                        <p class="text-gray-700 dark:text-gray-300">Пн-Пт: 9:00 - 19:00</p>
                                        <p class="text-gray-700 dark:text-gray-300">Сб: 10:00 - 17:00</p>
                                        <p class="text-gray-700 dark:text-gray-300">Нд: вихідний</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                <h4 class="font-medium mb-2">Соціальні мережі</h4>
                                <div class="flex space-x-3">
                                    <a href="#" class="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-xl">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-xl">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-xl">
                                        <i class="fab fa-telegram"></i>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-xl">
                                        <i class="fab fa-viber"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Як нас знайти</h3>
                            <div id="map" class="rounded-lg overflow-hidden h-64 bg-gray-200 dark:bg-gray-700">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4642458421096!2d30.519904776687!3d50.44979308794582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c3%3A0xb528dc4d6dadc4f8!2z0JrRgNC10YnQsNGC0LjQuiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1689245188339!5m2!1suk!2sua" 
                                    width="100%" 
                                    height="100%" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy">
                                </iframe>
                            </div>
                            
                            <div class="mt-4">
                                <h4 class="font-medium mb-2">Як дістатися</h4>
                                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li class="flex items-start">
                                        <i class="fas fa-subway text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                        <span>Метро "Хрещатик", вихід до Майдану Незалежності</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-bus text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                        <span>Автобуси №24, №114 до зупинки "Майдан Незалежності"</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-car text-indigo-600 dark:text-indigo-400 mt-1 mr-2"></i>
                                        <span>Зручний заїзд з вулиці Хрещатик</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('contact-section', ContactSection); 