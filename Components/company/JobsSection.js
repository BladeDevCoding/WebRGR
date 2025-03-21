class JobsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupAccordion();
        this.setupApplyModal();
    }

    render() {
        this.innerHTML = `
            <section id="jobs" class="mb-12 scroll-mt-20">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                        <i class="fas fa-user-tie text-xl text-indigo-600 dark:text-indigo-400"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Вакансії</h2>
                </div>
                
                <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl shadow-md p-6 border border-indigo-100 dark:border-indigo-800/30">
                    <p class="mb-6 text-lg">
                        AutoPrime постійно розвивається та шукає талановитих спеціалістів до своєї команди. 
                        Ми пропонуємо конкурентну заробітну плату, офіційне працевлаштування, можливості для професійного росту та дружній колектив.
                    </p>
                    
                    <div class="space-y-4">
                        <!-- Вакансія 1 -->
                        <div class="job-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                            <div class="job-header flex items-center justify-between p-4 cursor-pointer">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-car text-blue-600 dark:text-blue-400"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Менеджер з продажу автомобілів</h3>
                                        <div class="text-green-600 dark:text-green-400 text-sm font-medium">25 000 - 45 000 грн</div>
                                    </div>
                                </div>
                                <div class="job-icon transition-transform duration-300">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="job-content hidden p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                                <div class="pl-13">
                                    <p class="mb-3">Ми шукаємо енергійного та цілеспрямованого менеджера з продажу автомобілів, який допоможе нашим клієнтам знайти ідеальний автомобіль.</p>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Обов'язки:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Консультування клієнтів щодо модельного ряду та характеристик автомобілів</li>
                                            <li>Проведення тест-драйвів</li>
                                            <li>Оформлення документів на продаж</li>
                                            <li>Підтримка зв'язку з клієнтами після продажу</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Вимоги:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Досвід роботи в продажах від 1 року</li>
                                            <li>Наявність водійських прав категорії B</li>
                                            <li>Комунікабельність та клієнтоорієнтованість</li>
                                            <li>Бажання розвиватися в автомобільній сфері</li>
                                        </ul>
                                    </div>
                                    
                                    <button class="apply-btn mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200" data-position="Менеджер з продажу автомобілів">
                                        Відправити заявку
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Вакансія 2 -->
                        <div class="job-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                            <div class="job-header flex items-center justify-between p-4 cursor-pointer">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-tools text-indigo-600 dark:text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Автомеханік</h3>
                                        <div class="text-green-600 dark:text-green-400 text-sm font-medium">20 000 - 35 000 грн</div>
                                    </div>
                                </div>
                                <div class="job-icon transition-transform duration-300">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="job-content hidden p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                                <div class="pl-13">
                                    <p class="mb-3">Запрошуємо до команди досвідченого автомеханіка для діагностики та ремонту автомобілів.</p>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Обов'язки:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Діагностика та ремонт автомобілів різних марок</li>
                                            <li>Технічне обслуговування автомобілів</li>
                                            <li>Заміна запчастин та комплектуючих</li>
                                            <li>Консультування клієнтів щодо технічного стану автомобіля</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Вимоги:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Досвід роботи автомеханіком від 2 років</li>
                                            <li>Знання будови автомобіля та принципів роботи його систем</li>
                                            <li>Вміння працювати з діагностичним обладнанням</li>
                                            <li>Відповідальність та уважність до деталей</li>
                                        </ul>
                                    </div>
                                    
                                    <button class="apply-btn mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200" data-position="Автомеханік">
                                        Відправити заявку
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Вакансія 3 -->
                        <div class="job-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                            <div class="job-header flex items-center justify-between p-4 cursor-pointer">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                                        <i class="fas fa-bullhorn text-purple-600 dark:text-purple-400"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Маркетолог</h3>
                                        <div class="text-green-600 dark:text-green-400 text-sm font-medium">18 000 - 30 000 грн</div>
                                    </div>
                                </div>
                                <div class="job-icon transition-transform duration-300">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="job-content hidden p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                                <div class="pl-13">
                                    <p class="mb-3">Шукаємо креативного маркетолога для розробки та реалізації маркетингової стратегії компанії.</p>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Обов'язки:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Розробка та реалізація маркетингової стратегії</li>
                                            <li>Ведення соціальних мереж компанії</li>
                                            <li>Організація рекламних кампаній</li>
                                            <li>Аналіз ефективності маркетингових заходів</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <h4 class="font-medium mb-2">Вимоги:</h4>
                                        <ul class="list-disc pl-5 space-y-1">
                                            <li>Вища освіта в сфері маркетингу або реклами</li>
                                            <li>Досвід роботи від 1 року</li>
                                            <li>Знання основ SMM та SEO</li>
                                            <li>Креативність та аналітичне мислення</li>
                                        </ul>
                                    </div>
                                    
                                    <button class="apply-btn mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200" data-position="Маркетолог">
                                        Відправити заявку
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Модальне вікно для відправки заявки -->
                <div id="apply-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center hidden z-50">
                    <div id="modal-content" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 transform transition-all duration-300 scale-95 opacity-0">
                        <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h3 id="modal-title" class="text-xl font-bold">Відгук на вакансію</h3>
                            <button id="close-modal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div class="p-4 max-h-[70vh] overflow-y-auto">
                            <form id="apply-form" class="space-y-4">
                                <input type="hidden" id="job-position" name="position">
                                
                                <div>
                                    <label for="applicant-name" class="block mb-1 font-medium">Ваше ім'я*</label>
                                    <input type="text" id="applicant-name" name="name" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                </div>
                                
                                <div>
                                    <label for="applicant-phone" class="block mb-1 font-medium">Телефон*</label>
                                    <input type="tel" id="applicant-phone" name="phone" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                </div>
                                
                                <div>
                                    <label for="applicant-email" class="block mb-1 font-medium">Email*</label>
                                    <input type="email" id="applicant-email" name="email" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                </div>
                                
                                <div>
                                    <label for="applicant-experience" class="block mb-1 font-medium">Досвід роботи*</label>
                                    <select id="applicant-experience" name="experience" required class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <option value="">Виберіть досвід</option>
                                        <option value="no-experience">Немає досвіду</option>
                                        <option value="less-than-1">Менше 1 року</option>
                                        <option value="1-3">1-3 роки</option>
                                        <option value="3-5">3-5 років</option>
                                        <option value="more-than-5">Більше 5 років</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="applicant-message" class="block mb-1 font-medium">Супровідний лист</label>
                                    <textarea id="applicant-message" name="message" rows="3" class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                                </div>
                                
                                <div>
                                    <label for="applicant-resume" class="block mb-1 font-medium">Резюме (PDF, DOC, DOCX)</label>
                                    <div class="relative">
                                        <input type="file" id="applicant-resume" name="resume" accept=".pdf,.doc,.docx" class="hidden">
                                        <label for="applicant-resume" class="flex items-center justify-center w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                                            <i class="fas fa-upload mr-2"></i>
                                            <span id="file-name">Завантажити файл</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <input type="checkbox" id="privacy-consent" name="consent" required class="mr-2">
                                    <label for="privacy-consent">Я даю згоду на обробку моїх персональних даних</label>
                                </div>
                                
                                <div class="pt-2">
                                    <button type="submit" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        <i class="fas fa-paper-plane mr-2"></i> Відправити заявку
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <!-- Toast повідомлення (спочатку приховане) -->
                <div id="toast-success" class="fixed bottom-4 right-4 flex items-center p-4 mb-4 w-full max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-300 transform translate-y-16 opacity-0 invisible z-50" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="ml-3 text-sm font-normal">
                        <div class="font-medium text-green-600 dark:text-green-400">Заявку успішно відправлено!</div>
                        <div class="mt-1">Ми розглянемо вашу кандидатуру та зв'яжемося з вами найближчим часом.</div>
                    </div>
                    <button type="button" id="close-toast" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupAccordion() {
        setTimeout(() => {
            const jobHeaders = this.querySelectorAll('.job-header');
            
            jobHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const icon = header.querySelector('.job-icon');
                    
                    
                    content.classList.toggle('hidden');
                    
                    
                    if (content.classList.contains('hidden')) {
                        icon.classList.remove('transform', 'rotate-180');
                    } else {
                        icon.classList.add('transform', 'rotate-180');
                    }
                });
            });
        }, 0);
    }

    setupApplyModal() {
        setTimeout(() => {
            const applyButtons = this.querySelectorAll('.apply-btn');
            const modal = this.querySelector('#apply-modal');
            const modalContent = this.querySelector('#modal-content');
            const closeModal = this.querySelector('#close-modal');
            const modalTitle = this.querySelector('#modal-title');
            const jobPositionInput = this.querySelector('#job-position');
            const applyForm = this.querySelector('#apply-form');
            const fileInput = this.querySelector('#applicant-resume');
            const fileName = this.querySelector('#file-name');
            const toast = this.querySelector('#toast-success');
            const closeToast = this.querySelector('#close-toast');
            
            if (!applyButtons.length || !modal || !closeModal || !applyForm) return;
            
            
            applyButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const position = button.getAttribute('data-position');
                    modalTitle.textContent = `Відгук на вакансію: ${position}`;
                    jobPositionInput.value = position;
                    
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                    
                    
                    setTimeout(() => {
                        modalContent.classList.remove('scale-95', 'opacity-0');
                        modalContent.classList.add('scale-100', 'opacity-100');
                    }, 10);
                });
            });
            
            
            closeModal.addEventListener('click', () => {
                modalContent.classList.remove('scale-100', 'opacity-100');
                modalContent.classList.add('scale-95', 'opacity-0');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                    applyForm.reset();
                    fileName.textContent = 'Завантажити файл';
                }, 300);
            });
            
            
            fileInput?.addEventListener('change', function() {
                if (this.files.length > 0) {
                    fileName.textContent = this.files[0].name;
                } else {
                    fileName.textContent = 'Завантажити файл';
                }
            });
            
            
            applyForm?.addEventListener('submit', (e) => {
                e.preventDefault();
                
                
                const requiredFields = applyForm.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if ((field.type === 'checkbox' && !field.checked) || 
                        (field.type !== 'checkbox' && !field.value.trim())) {
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
                    
                    const submitButton = applyForm.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Відправляємо...';
                    
                    
                    setTimeout(() => {
                        
                        modalContent.classList.remove('scale-100', 'opacity-100');
                        modalContent.classList.add('scale-95', 'opacity-0');
                        
                        setTimeout(() => {
                            modal.classList.add('hidden');
                            document.body.style.overflow = 'auto';
                            
                            
                            this.showToast(toast);
                            
                            
                            setTimeout(() => {
                                this.hideToast(toast);
                            }, 5000);
                            
                            
                            applyForm.reset();
                            fileName.textContent = 'Завантажити файл';
                            submitButton.disabled = false;
                            submitButton.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Відправити заявку';
                        }, 300);
                    }, 1500);
                }
            });
            
            
            closeToast?.addEventListener('click', () => {
                this.hideToast(toast);
            });
            
            
            modal?.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal.click();
                }
            });
            
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    if (!modal.classList.contains('hidden')) {
                        closeModal.click();
                    }
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
        if (!toast) return;
        toast.classList.remove('translate-y-16', 'opacity-0', 'invisible');
        toast.classList.add('translate-y-0', 'opacity-100', 'visible');
    }
    
    hideToast(toast) {
        if (!toast) return;
        toast.classList.remove('translate-y-0', 'opacity-100', 'visible');
        toast.classList.add('translate-y-16', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('invisible');
        }, 300);
    }
}

customElements.define('jobs-section', JobsSection); 