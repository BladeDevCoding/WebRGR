class CreditCalculator extends HTMLElement {
    constructor() {
        super();
        this.interestRates = {
            'standard': 12.0,
            'optimal': 9.9,
            'premium': 7.5
        };
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section id="calculator-section" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 scroll-mt-20">
                <h3 class="text-2xl font-semibold mb-4">Кредитний калькулятор</h3>
                <p class="mb-6">Розрахуйте орієнтовний щомісячний платіж та загальну суму виплат за кредитом:</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        ${this.renderCalculatorInputs()}
                    </div>
                    
                    <div id="calculator-results" class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                        <h4 class="text-xl font-semibold mb-4">Результати розрахунку</h4>
                        
                        <div class="space-y-4">
                            ${this.renderCalculatorResults()}
                        </div>
                        
                        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                            <p class="text-sm text-gray-600 dark:text-gray-400">* Розрахунок є орієнтовним. Для отримання точної інформації зверніться до наших фінансових консультантів.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderCalculatorInputs() {
        return `
            <div class="mb-6">
                <label for="credit-program" class="block mb-2 font-medium">Кредитна програма</label>
                <select id="credit-program" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="standard">Стандарт (від 12%)</option>
                    <option value="optimal" selected>Оптимальний (від 9.9%)</option>
                    <option value="premium">Преміум (від 7.5%)</option>
                </select>
            </div>
            
            <div class="mb-6">
                <label for="car-price" class="block mb-2 font-medium">Вартість автомобіля (грн)</label>
                <div class="flex items-center">
                    <input type="number" id="car-price" value="500000" min="100000" max="5000000" step="10000" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <span class="ml-2 text-gray-500">₴</span>
                </div>
                <div class="mt-2">
                    <input type="range" id="car-price-range" min="100000" max="5000000" step="10000" value="500000" class="w-full accent-indigo-600">
                    <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>100 000 ₴</span>
                        <span>5 000 000 ₴</span>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                <label for="down-payment" class="block mb-2 font-medium">Перший внесок (%)</label>
                <div class="flex items-center">
                    <input type="number" id="down-payment" value="20" min="10" max="70" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <span class="ml-2 text-gray-500">%</span>
                </div>
                <div class="mt-2">
                    <input type="range" id="down-payment-range" min="10" max="70" value="20" class="w-full accent-indigo-600">
                    <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>10%</span>
                        <span>70%</span>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                <label for="loan-term" class="block mb-2 font-medium">Термін кредиту (місяців)</label>
                <div class="flex items-center">
                    <input type="number" id="loan-term" value="60" min="12" max="84" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <span class="ml-2 text-gray-500">міс</span>
                </div>
                <div class="mt-2">
                    <input type="range" id="loan-term-range" min="12" max="84" value="60" class="w-full accent-indigo-600">
                    <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>12 міс</span>
                        <span>84 міс</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderCalculatorResults() {
        const results = [
            { id: 'loan-amount', label: 'Сума кредиту:', value: '400 000 грн' },
            { id: 'interest-rate-display', label: 'Відсоткова ставка:', value: '9.9%' },
            { id: 'monthly-payment', label: 'Щомісячний платіж:', value: '8 439 грн' },
            { id: 'total-payment', label: 'Загальна сума виплат:', value: '506 340 грн' },
            { id: 'overpayment', label: 'Переплата:', value: '106 340 грн' }
        ];

        return results.map(result => `
            <div class="transition-all duration-300">
                <div class="text-sm text-gray-600 dark:text-gray-400">${result.label}</div>
                <div id="${result.id}" class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${result.value}</div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        setTimeout(() => {
            // Отримуємо всі елементи керування
            const creditProgram = this.querySelector('#credit-program');
            const carPrice = this.querySelector('#car-price');
            const carPriceRange = this.querySelector('#car-price-range');
            const downPayment = this.querySelector('#down-payment');
            const downPaymentRange = this.querySelector('#down-payment-range');
            const loanTerm = this.querySelector('#loan-term');
            const loanTermRange = this.querySelector('#loan-term-range');
            
            // Синхронізуємо поля введення з повзунками
            this.syncInputWithRange(carPrice, carPriceRange, true);
            this.syncInputWithRange(downPayment, downPaymentRange, true);
            this.syncInputWithRange(loanTerm, loanTermRange, true);
            
            // Додаємо обробники подій для всіх елементів керування
            creditProgram.addEventListener('change', () => this.calculateLoan());
            
            carPrice.addEventListener('input', () => this.calculateLoan());
            carPriceRange.addEventListener('input', () => this.calculateLoan());
            
            downPayment.addEventListener('input', () => this.calculateLoan());
            downPaymentRange.addEventListener('input', () => this.calculateLoan());
            
            loanTerm.addEventListener('input', () => this.calculateLoan());
            loanTermRange.addEventListener('input', () => this.calculateLoan());
            
            // Початковий розрахунок
            this.calculateLoan();
        }, 0);
    }

    syncInputWithRange(input, range, calculateOnChange = false) {
        if (!input || !range) return;
        
        input.addEventListener('input', function() {
            range.value = this.value;
        });
        
        range.addEventListener('input', function() {
            input.value = this.value;
        });
    }

    calculateLoan() {
        const creditProgram = this.querySelector('#credit-program');
        const carPrice = this.querySelector('#car-price');
        const downPayment = this.querySelector('#down-payment');
        const loanTerm = this.querySelector('#loan-term');
        
        if (!creditProgram || !carPrice || !downPayment || !loanTerm) return;
        
        const selectedProgram = creditProgram.value;
        const carPriceValue = parseFloat(carPrice.value) || 500000;
        const downPaymentPercent = parseFloat(downPayment.value) || 20;
        const loanTermMonths = parseFloat(loanTerm.value) || 60;
        const interestRate = this.interestRates[selectedProgram];
        
        const downPaymentAmount = carPriceValue * (downPaymentPercent / 100);
        const loanAmount = carPriceValue - downPaymentAmount;
        const monthlyRate = interestRate / 12 / 100;
        const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths) / (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
        const totalPayment = monthlyPayment * loanTermMonths;
        const overpayment = totalPayment - loanAmount;
        
        // Анімуємо зміну значень
        this.animateValueChange('#loan-amount', Math.round(loanAmount).toLocaleString() + ' грн');
        this.animateValueChange('#interest-rate-display', interestRate + '%');
        this.animateValueChange('#monthly-payment', Math.round(monthlyPayment).toLocaleString() + ' грн');
        this.animateValueChange('#total-payment', Math.round(totalPayment).toLocaleString() + ' грн');
        this.animateValueChange('#overpayment', Math.round(overpayment).toLocaleString() + ' грн');
    }

    animateValueChange(selector, newValue) {
        const element = this.querySelector(selector);
        if (!element) return;
        
        // Додаємо невелику анімацію при зміні значення
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 100);
    }
}

customElements.define('credit-calculator', CreditCalculator); 