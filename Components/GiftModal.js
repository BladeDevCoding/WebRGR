class GiftModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gifts = [
            { id: 1, name: 'Знижка 10%', description: 'Знижка 10% на будь-який автомобіль', icon: 'fa-percent' },
            { id: 2, name: 'Безкоштовне ТО', description: 'Перше ТО безкоштовно', icon: 'fa-wrench' },
            { id: 3, name: 'Комплект зимової гуми', description: 'Комплект зимової гуми в подарунок', icon: 'fa-snowflake' },
            { id: 4, name: 'Страхування КАСКО -20%', description: 'Знижка 20% на страхування КАСКО', icon: 'fa-shield-alt' },
            { id: 5, name: 'Бонусні 5000 грн', description: 'Бонус 5000 грн на додаткове обладнання', icon: 'fa-gift' },
            { id: 6, name: 'Безкоштовний тест-драйв', description: 'Тест-драйв будь-якого авто безкоштовно', icon: 'fa-car' },
            { id: 7, name: 'Кредит 0.01%', description: 'Кредит під 0.01% на перший рік', icon: 'fa-credit-card' },
            { id: 8, name: 'Захист двигуна', description: 'Захист двигуна в подарунок', icon: 'fa-cog' },
            { id: 9, name: 'Комплект килимків', description: 'Комплект килимків в подарунок', icon: 'fa-square' },
            { id: 10, name: 'Тонування скла', description: 'Безкоштовне тонування скла', icon: 'fa-tint' },
            { id: 11, name: 'Антикорозійна обробка', description: 'Безкоштовна антикорозійна обробка', icon: 'fa-spray-can' },
            { id: 12, name: 'Сигналізація', description: 'Сигналізація в подарунок', icon: 'fa-bell' },
            { id: 13, name: 'Паркувальні сенсори', description: 'Паркувальні сенсори в подарунок', icon: 'fa-parking' },
            { id: 14, name: 'Відеореєстратор', description: 'Відеореєстратор у подарунок', icon: 'fa-video' },
            { id: 15, name: 'VIP-обслуговування', description: 'VIP-обслуговування на рік', icon: 'fa-crown' }
        ];
        this.selectedGifts = [];
        this.maxSelections = 3;
        this.promoCode = this.generatePromoCode();
        this.isFirstVisit = this.checkFirstVisit();
        this.colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#FF9800'];
        this.darkMode = document.documentElement.classList.contains('dark');
    }

    connectedCallback() {
        if (this.isFirstVisit) {
            // Слухаємо зміни теми через MutationObserver
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        this.darkMode = document.documentElement.classList.contains('dark');
                        this.updateTheme();
                    }
                });
            });
            
            observer.observe(document.documentElement, { attributes: true });
            
            this.render();
            this.setupEventListeners();
            this.updateTheme();
            
            // Показуємо модальне вікно з невеликою затримкою
            setTimeout(() => {
                this.showModal();
            }, 1500);
        }
    }

    checkFirstVisit() {
        if (localStorage.getItem('giftModalShown')) {
            return false;
        }
        return true;
    }

    generatePromoCode() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = 'AUTOPRIME-';
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --primary-color: #4F46E5;
                    --primary-hover: #4338CA;
                    --light-bg: #F9FAFB;
                    --dark-bg: #111827;
                    --border-color-light: #E5E7EB;
                    --border-color-dark: #374151;
                    --text-color-light: #1F2937;
                    --text-color-dark: #F9FAFB;
                    --text-light-light: #6B7280;
                    --text-light-dark: #9CA3AF;
                    --white: #FFFFFF;
                    --black: #111827;
                    --success: #10B981;
                    --warning: #F59E0B;
                    --error: #EF4444;
                    --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    --shadow-dark: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18);
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s, visibility 0.3s;
                    backdrop-filter: blur(5px);
                }

                .modal-overlay.show {
                    opacity: 1;
                    visibility: visible;
                }

                .modal-container {
                    background-color: var(--white);
                    color: var(--text-color-light);
                    border-radius: 1rem;
                    box-shadow: var(--shadow-light);
                    width: 90%;
                    max-width: 800px;
                    max-height: 90vh;
                    overflow-y: auto;
                    transform: scale(0.95);
                    transition: transform 0.3s;
                    position: relative;
                }

                .dark .modal-container {
                    background-color: var(--dark-bg);
                    color: var(--text-color-dark);
                    box-shadow: var(--shadow-dark);
                }

                .modal-overlay.show .modal-container {
                    transform: scale(1);
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid var(--border-color-light);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: linear-gradient(135deg, var(--primary-color), #6366F1);
                    color: white;
                    border-radius: 1rem 1rem 0 0;
                }

                .dark .modal-header {
                    border-color: var(--border-color-dark);
                }

                .modal-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0;
                }

                .close-button {
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s;
                }

                .close-button:hover {
                    transform: scale(1.1);
                }

                .modal-body {
                    padding: 1.5rem;
                }

                .modal-description {
                    margin-bottom: 1.5rem;
                    color: var(--text-light-light);
                    line-height: 1.5;
                }

                .dark .modal-description {
                    color: var(--text-light-dark);
                }

                .gifts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    gap: 1rem;
                }

                @media (min-width: 640px) {
                    .gifts-grid {
                        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    }
                }

                .gift-box {
                    perspective: 1000px;
                    cursor: pointer;
                    aspect-ratio: 1;
                }

                .gift-box-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.8s;
                    transform-style: preserve-3d;
                }

                .gift-box.opened .gift-box-inner {
                    transform: rotateY(180deg);
                }

                .gift-box-front, .gift-box-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .gift-box-front {
                    overflow: hidden;
                }

                .gift-box-back {
                    background-color: white;
                    transform: rotateY(180deg);
                    padding: 0.75rem;
                    text-align: center;
                }

                .dark .gift-box-back {
                    background-color: #1F2937;
                    color: white;
                }

                .gift-ribbon {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .ribbon-h, .ribbon-v {
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.7);
                }

                .ribbon-h {
                    width: 100%;
                    height: 20%;
                    top: 40%;
                }

                .ribbon-v {
                    height: 100%;
                    width: 20%;
                    left: 40%;
                }

                .ribbon-knot {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40%;
                    height: 40%;
                    background-color: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: #FF5252;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .shine {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        rgba(255,255,255,0) 0%,
                        rgba(255,255,255,0.1) 50%,
                        rgba(255,255,255,0) 100%
                    );
                    animation: shine 3s infinite;
                    pointer-events: none;
                }

                @keyframes shine {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }

                .gift-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: var(--primary-color);
                }

                .gift-name {
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }

                .gift-description {
                    font-size: 0.75rem;
                    color: var(--text-light-light);
                }

                .dark .gift-description {
                    color: var(--text-light-dark);
                }

                .modal-footer {
                    padding: 1rem 1.5rem;
                    border-top: 1px solid var(--border-color-light);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .dark .modal-footer {
                    border-color: var(--border-color-dark);
                }

                .selection-info {
                    font-size: 0.875rem;
                    color: var(--text-light-light);
                }

                .dark .selection-info {
                    color: var(--text-light-dark);
                }

                .continue-button {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .continue-button:hover:not(:disabled) {
                    background-color: var(--primary-hover);
                }

                .continue-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .promo-view {
                    padding: 1.5rem;
                }

                .promo-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .selected-gifts {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    margin: 1rem 0 2rem;
                }

                .selected-gift-card {
                    background-color: #F3F4F6;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    width: 100%;
                    max-width: 200px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }

                .dark .selected-gift-card {
                    background-color: #374151;
                }

                .promo-code {
                    font-size: 1.5rem;
                    font-weight: 700;
                    padding: 1rem 2rem;
                    background-color: #F3F4F6;
                    border-radius: 0.5rem;
                    margin: 1rem 0;
                    letter-spacing: 0.1em;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }

                .dark .promo-code {
                    background-color: #374151;
                }

                .pulse {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
                }

                .promo-instructions {
                    margin: 1rem 0;
                    color: var(--text-light-light);
                }

                .dark .promo-instructions {
                    color: var(--text-light-dark);
                }

                .screenshot-tip {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1.5rem;
                    padding: 0.75rem;
                    background-color: #FEF3C7;
                    color: #92400E;
                    border-radius: 0.375rem;
                }

                .dark .screenshot-tip {
                    background-color: #78350F;
                    color: #FEF3C7;
                }

                .screenshot-icon {
                    font-size: 1.25rem;
                }

                .confetti {
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    z-index: 10000;
                    opacity: 0.8;
                    pointer-events: none;
                }

                @keyframes confettiDrop {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            </style>

            <div class="modal-overlay">
                <div class="modal-container">
                    <div class="modal-header">
                        <h2 class="modal-title">Ваші подарунки</h2>
                        <button class="close-button">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="selection-view">
                            <p class="modal-description">
                                Ми раді вітати вас на нашому сайті! Оберіть 3 подарунки, які ви отримаєте при першому візиті до нашого автосалону.
                            </p>
                            <div class="gifts-grid">
                                ${this.gifts.map((gift, index) => {
                                    const colorIndex = index % this.colors.length;
                                    return `
                                        <div class="gift-box" data-id="${gift.id}">
                                            <div class="gift-box-inner">
                                                <div class="gift-box-front" style="background-color: ${this.colors[colorIndex]}">
                                                    <div class="gift-ribbon">
                                                        <div class="ribbon-h"></div>
                                                        <div class="ribbon-v"></div>
                                                        <div class="ribbon-knot">
                                                            <i class="fas fa-gift"></i>
                                                        </div>
                                                    </div>
                                                    <div class="shine"></div>
                                                </div>
                                                <div class="gift-box-back">
                                                    <div class="gift-icon">
                                                        <i class="fas ${gift.icon}"></i>
                                                    </div>
                                                    <div class="gift-name">${gift.name}</div>
                                                    <div class="gift-description">${gift.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        <div class="promo-view" style="display: none;">
                            <div class="promo-container">
                                <h3>Ваші подарунки:</h3>
                                <div class="selected-gifts">
                                    <!-- Тут будуть обрані подарунки -->
                                </div>
                                <h3>Ваш промокод:</h3>
                                <div class="promo-code pulse">${this.promoCode}</div>
                                <p class="promo-instructions">
                                    Покажіть цей промокод нашому менеджеру при відвідуванні автосалону, щоб отримати ваші подарунки.
                                </p>
                                <div class="screenshot-tip">
                                    <i class="fas fa-camera screenshot-icon"></i>
                                    <span>Зробіть скріншот цієї сторінки, щоб не втратити ваші подарунки!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="selection-info">Обрано: <span class="selected-count">0</span>/${this.maxSelections}</div>
                        <button class="continue-button" disabled>Продовжити</button>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const modalOverlay = this.shadowRoot.querySelector('.modal-overlay');
        const closeButton = this.shadowRoot.querySelector('.close-button');
        const giftBoxes = this.shadowRoot.querySelectorAll('.gift-box');
        const continueButton = this.shadowRoot.querySelector('.continue-button');
        const selectedCountElement = this.shadowRoot.querySelector('.selected-count');

        // Закриття модального вікна
        closeButton.addEventListener('click', () => {
            this.hideModal();
            localStorage.setItem('giftModalShown', 'true');
        });

        // Вибір подарунків
        giftBoxes.forEach(box => {
            box.addEventListener('click', () => {
                if (this.selectedGifts.length < this.maxSelections && !box.classList.contains('opened')) {
                    const giftId = parseInt(box.getAttribute('data-id'));
                    box.classList.add('opened');
                    
                    // Додаємо подарунок до вибраних
                    const gift = this.gifts.find(g => g.id === giftId);
                    this.selectedGifts.push(gift);
                    
                    // Оновлюємо лічильник
                    selectedCountElement.textContent = this.selectedGifts.length;
                    
                    // Створюємо конфетті
                    this.createConfetti(box);
                    
                    // Активуємо кнопку, якщо вибрано максимальну кількість подарунків
                    if (this.selectedGifts.length === this.maxSelections) {
                        continueButton.removeAttribute('disabled');
                    }
                }
            });
        });

        // Перехід до екрану з промокодом
        continueButton.addEventListener('click', () => {
            this.showPromoView();
        });
    }

    updateTheme() {
        const modalOverlay = this.shadowRoot.querySelector('.modal-overlay');
        if (modalOverlay) {
            if (this.darkMode) {
                modalOverlay.classList.add('dark');
            } else {
                modalOverlay.classList.remove('dark');
            }
        }
    }

    createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${centerX}px`;
            confetti.style.top = `${centerY}px`;
            confetti.style.backgroundColor = this.getRandomColor();
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Різні форми конфетті
            if (i % 3 === 0) {
                confetti.style.borderRadius = '50%'; // Круг
            } else if (i % 3 === 1) {
                confetti.style.width = '5px';
                confetti.style.height = '15px';
            } else {
                confetti.style.width = '15px';
                confetti.style.height = '5px';
            }
            
            document.body.appendChild(confetti);
            
            // Анімація падіння
            const animationDuration = 1 + Math.random() * 2;
            const xDistance = (Math.random() - 0.5) * 200;
            
            confetti.style.animation = `confettiDrop ${animationDuration}s forwards`;
            confetti.style.animationTimingFunction = 'cubic-bezier(.25,.46,.45,.94)';
            confetti.style.transform = `translateX(${xDistance}px) rotate(${Math.random() * 360}deg)`;
            
            // Видаляємо після анімації
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }

    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    showModal() {
        const modalOverlay = this.shadowRoot.querySelector('.modal-overlay');
        modalOverlay.classList.add('show');
    }

    hideModal() {
        const modalOverlay = this.shadowRoot.querySelector('.modal-overlay');
        modalOverlay.classList.remove('show');
    }

    showPromoView() {
        const selectionView = this.shadowRoot.querySelector('.selection-view');
        const promoView = this.shadowRoot.querySelector('.promo-view');
        const modalFooter = this.shadowRoot.querySelector('.modal-footer');
        const selectedGiftsContainer = this.shadowRoot.querySelector('.selected-gifts');
        
        // Заповнюємо контейнер вибраними подарунками
        selectedGiftsContainer.innerHTML = this.selectedGifts.map(gift => `
            <div class="selected-gift-card">
                <div class="gift-icon">
                    <i class="fas ${gift.icon}"></i>
                </div>
                <div class="gift-name">${gift.name}</div>
                <div class="gift-description">${gift.description}</div>
            </div>
        `).join('');
        
        // Перемикаємо відображення
        selectionView.style.display = 'none';
        promoView.style.display = 'block';
        modalFooter.style.display = 'none';
        
        // Створюємо святковий ефект конфетті
        this.celebrateWithConfetti();
    }
    
    celebrateWithConfetti() {
        // Додаємо стилі для анімації конфетті
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes confettiDrop {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.position = 'fixed';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = '-20px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = this.getRandomColor();
                confetti.style.opacity = '0.8';
                confetti.style.zIndex = '10000';
                confetti.style.pointerEvents = 'none';
                
                // Різні форми конфетті
                if (i % 3 === 0) {
                    confetti.style.borderRadius = '50%'; // Круг
                } else if (i % 3 === 1) {
                    confetti.style.width = '7px';
                    confetti.style.height = '20px';
                } else {
                    confetti.style.width = '20px';
                    confetti.style.height = '7px';
                }
                
                document.body.appendChild(confetti);
                
                // Анімація падіння
                const animationDuration = 3 + Math.random() * 3;
                
                confetti.style.animation = `confettiDrop ${animationDuration}s forwards`;
                confetti.style.animationTimingFunction = 'cubic-bezier(.25,.46,.45,.94)';
                
                // Видаляємо після анімації
                setTimeout(() => {
                    confetti.remove();
                }, animationDuration * 1000);
            }, i * 50);
        }
    }
}

// Реєструємо веб-компонент
customElements.define('gift-modal', GiftModal); 