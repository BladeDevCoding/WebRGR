class CalculatorSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupCalculator();
    }

    render() {
        this.innerHTML = `
            <section id="calculator" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Калькулятор страхування</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">Розрахуйте приблизну вартість страхового поліса для вашого автомобіля:</p>
                    
                    <form id="insurance-calculator" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="insurance-type" class="block text-sm font-medium mb-1">Тип страхування</label>
                                <select id="insurance-type" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                    <option value="osago">ОСЦПВ (автоцивілка)</option>
                                    <option value="kasko">КАСКО</option>
                                    <option value="green-card">Зелена картка</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="car-type" class="block text-sm font-medium mb-1">Тип транспортного засобу</label>
                                <select id="car-type" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                    <option value="car">Легковий автомобіль</option>
                                    <option value="truck">Вантажний автомобіль</option>
                                    <option value="bus">Автобус</option>
                                    <option value="moto">Мотоцикл</option>
                                </select>
                            </div>
                        </div>
                        
                        <!-- Опції для ОСЦПВ -->
                        <div id="osago-options">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="zone" class="block text-sm font-medium mb-1">Зона реєстрації</label>
                                    <select id="zone" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="kyiv">Київ</option>
                                        <option value="oblast">Обласні центри</option>
                                        <option value="other">Інші населені пункти</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="period" class="block text-sm font-medium mb-1">Термін страхування</label>
                                    <select id="period" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="6">6 місяців</option>
                                        <option value="12" selected>1 рік</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Опції для КАСКО -->
                        <div id="kasko-options" class="hidden">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="car-price" class="block text-sm font-medium mb-1">Вартість автомобіля (грн)</label>
                                    <input type="number" id="car-price" min="100000" step="10000" value="500000" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                </div>
                                
                                <div>
                                    <label for="car-year" class="block text-sm font-medium mb-1">Вік автомобіля</label>
                                    <select id="car-year" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="new">Новий (до 1 року)</option>
                                        <option value="1to3">1-3 роки</option>
                                        <option value="3to5">3-5 років</option>
                                        <option value="more5">Більше 5 років</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="kasko-program" class="block text-sm font-medium mb-1">Програма страхування</label>
                                    <select id="kasko-program" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="basic">Базова</option>
                                        <option value="standard">Стандарт</option>
                                        <option value="premium">Преміум</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="franchise" class="block text-sm font-medium mb-1">Франшиза (%)</label>
                                    <select id="franchise" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="0">0% (без франшизи)</option>
                                        <option value="1">1%</option>
                                        <option value="2">2%</option>
                                        <option value="3">3%</option>
                                        <option value="5">5%</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Опції для Зеленої картки -->
                        <div id="green-card-options" class="hidden">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="countries" class="block text-sm font-medium mb-1">Країни відвідування</label>
                                    <select id="countries" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="all">Всі країни системи "Зелена картка"</option>
                                        <option value="europe">Країни Європи</option>
                                        <option value="belarus">Білорусь, Молдова, Росія</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="green-card-period" class="block text-sm font-medium mb-1">Термін дії</label>
                                    <select id="green-card-period" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700">
                                        <option value="15">15 днів</option>
                                        <option value="30">1 місяць</option>
                                        <option value="60">2 місяці</option>
                                        <option value="90">3 місяці</option>
                                        <option value="180">6 місяців</option>
                                        <option value="365">1 рік</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button type="button" id="calculate-button" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                <i class="fas fa-calculator mr-2"></i> Розрахувати вартість
                            </button>
                        </div>
                    </form>
                    
                    <!-- Результат розрахунку -->
                    <div class="mt-8">
                        <div id="result-placeholder" class="text-center py-8 text-gray-500 dark:text-gray-400">
                            <i class="fas fa-calculator text-4xl mb-2"></i>
                            <p>Заповніть форму та натисніть "Розрахувати вартість" для отримання результату</p>
                        </div>
                        
                        <div id="calculation-result" class="hidden">
                            <div class="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6">
                                <h3 class="text-xl font-bold mb-4 text-center">Результат розрахунку</h3>
                                
                                <div class="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Тип страхування:</p>
                                        <p class="font-medium text-lg" id="result-type">ОСЦПВ (автоцивілка)</p>
                                    </div>
                                    
                                    <div>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Термін дії:</p>
                                        <p class="font-medium text-lg" id="result-period">1 рік</p>
                                    </div>
                                    
                                    <div>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Вартість страхування:</p>
                                        <p class="font-bold text-2xl text-indigo-600 dark:text-indigo-400" id="result-price">1 250 грн</p>
                                    </div>
                                    
                                    <div>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Страхове покриття:</p>
                                        <p class="font-medium text-lg" id="result-coverage">До 260 000 грн</p>
                                    </div>
                                </div>
                                
                                <div class="mt-6 pt-4 border-t border-indigo-200 dark:border-indigo-800">
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        * Розрахунок є орієнтовним. Для отримання точної інформації та оформлення поліса зверніться до наших консультантів.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupCalculator() {
        setTimeout(() => {
            const insuranceType = this.querySelector('#insurance-type');
            const osagoOptions = this.querySelector('#osago-options');
            const kaskoOptions = this.querySelector('#kasko-options');
            const greenCardOptions = this.querySelector('#green-card-options');
            const calculateButton = this.querySelector('#calculate-button');
            const resultPlaceholder = this.querySelector('#result-placeholder');
            const calculationResult = this.querySelector('#calculation-result');
            
            
            const toggleOptions = () => {
                const selectedType = insuranceType.value;
                
                
                osagoOptions.classList.add('hidden');
                kaskoOptions.classList.add('hidden');
                greenCardOptions.classList.add('hidden');
                
                
                if (selectedType === 'osago') {
                    osagoOptions.classList.remove('hidden');
                } else if (selectedType === 'kasko') {
                    kaskoOptions.classList.remove('hidden');
                } else if (selectedType === 'green-card') {
                    greenCardOptions.classList.remove('hidden');
                }
            };
            
            
            toggleOptions();
            
            
            insuranceType.addEventListener('change', toggleOptions);
            
            
            calculateButton.addEventListener('click', () => {
                
                calculateButton.disabled = true;
                calculateButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Розрахунок...';
                
                setTimeout(() => {
                    
                    const selectedType = insuranceType.value;
                    const resultType = this.querySelector('#result-type');
                    const resultPeriod = this.querySelector('#result-period');
                    const resultPrice = this.querySelector('#result-price');
                    const resultCoverage = this.querySelector('#result-coverage');
                    
                    if (selectedType === 'osago') {
                        resultType.textContent = 'ОСЦПВ (автоцивілка)';
                        resultPeriod.textContent = this.querySelector('#period').value === '6' ? '6 місяців' : '1 рік';
                        resultPrice.textContent = this.querySelector('#period').value === '6' ? '650 грн' : '1 250 грн';
                        resultCoverage.textContent = 'До 260 000 грн';
                    } else if (selectedType === 'kasko') {
                        resultType.textContent = 'КАСКО';
                        resultPeriod.textContent = '1 рік';
                        
                        const carPrice = parseFloat(this.querySelector('#car-price').value);
                        const carYear = this.querySelector('#car-year').value;
                        const franchise = parseFloat(this.querySelector('#franchise').value);
                        
                        
                        let rate = 0.05; 
                        
                        
                        if (carYear === 'new') rate -= 0.005;
                        else if (carYear === '3to5') rate += 0.01;
                        else if (carYear === 'more5') rate += 0.02;
                        
                        
                        rate -= franchise * 0.005;
                        
                        const price = Math.round(carPrice * rate);
                        resultPrice.textContent = price.toLocaleString() + ' грн';
                        resultCoverage.textContent = 'До ' + carPrice.toLocaleString() + ' грн';
                    } else if (selectedType === 'green-card') {
                        resultType.textContent = 'Зелена картка';
                        
                        const period = this.querySelector('#green-card-period').value;
                        const countries = this.querySelector('#countries').value;
                        
                        let periodText = '';
                        if (period === '15') periodText = '15 днів';
                        else if (period === '30') periodText = '1 місяць';
                        else if (period === '60') periodText = '2 місяці';
                        else if (period === '90') periodText = '3 місяці';
                        else if (period === '180') periodText = '6 місяців';
                        else if (period === '365') periodText = '1 рік';
                        
                        resultPeriod.textContent = periodText;
                        
                        
                        let basePrice = 0;
                        if (countries === 'all') basePrice = 3600;
                        else if (countries === 'europe') basePrice = 3000;
                        else basePrice = 1800;
                        
                        const price = Math.round(basePrice * (parseInt(period) / 365));
                        resultPrice.textContent = price.toLocaleString() + ' грн';
                        resultCoverage.textContent = 'Відповідно до законодавства країни перебування';
                    }
                    
                    
                    resultPlaceholder.classList.add('hidden');
                    calculationResult.classList.remove('hidden');
                    
                    
                    calculateButton.disabled = false;
                    calculateButton.innerHTML = '<i class="fas fa-calculator mr-2"></i> Розрахувати вартість';
                    
                    
                    calculationResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1500);
            });
        }, 0);
    }
}

customElements.define('calculator-section', CalculatorSection); 