class AccessibilityMenu extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.settings = {
            fontSize: 100,
            letterSpacing: 0,
            lineHeight: 150,
            contrast: false,
            grayscale: false,
            hideImages: false,
            dyslexicFont: false
        };
        
        this.addStyles();
        this.render();
        this.loadSettings();
        this.setupEventListeners();
        this.setupGlobalToggle();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Базові стилі для всіх екранів */
            .a11y-panel {
                position: fixed;
                left: 0;
                right: 0;
                background: var(--bg-primary, #ffffff);
                border-bottom: 1px solid var(--border-color, #e5e7eb);
                z-index: 999;
                display: none;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .dark .a11y-panel {
                background: var(--dark-bg, #1f2937);
                border-color: var(--dark-border, #374151);
            }

            .no-effects {
                font-size: 13px !important;
                line-height: normal !important;
                letter-spacing: normal !important;
                filter: none !important;
            }

            .a11y-panel.show {
                display: block;
            }

            .a11y-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 12px 16px;
                display: flex;
                gap: 16px;
            }

            .a11y-group {
                display: flex;
                gap: 12px;
                padding: 8px;
                background: var(--bg-secondary, #f3f4f6);
                border-radius: 8px;
            }

            .dark .a11y-group {
                background: var(--dark-bg-secondary, #374151);
            }

            .a11y-item {
                display: flex;
                align-items: center;
                gap: 8px;
                background: var(--bg-primary, #ffffff);
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
            }

            .dark .a11y-item {
                background: var(--dark-bg, #1f2937);
            }

            .a11y-item span,
            .a11y-toggle span {
                display: inline-block;
                white-space: nowrap;
            }

            .a11y-controls {
                display: flex;
                gap: 4px;
            }

            .a11y-controls button,
            .a11y-toggle {
                height: 32px;
                padding: 0 12px;
                border-radius: 6px;
                border: 1px solid var(--border-color, #e5e7eb);
                background: var(--bg-primary, #ffffff);
                color: var(--text-primary, #374151);
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .dark .a11y-controls button,
            .dark .a11y-toggle {
                background: var(--dark-bg, #1f2937);
                border-color: var(--dark-border, #4b5563);
                color: var(--dark-text, #e5e7eb);
            }

            .a11y-toggle {
                background: var(--bg-secondary, #f3f4f6);
                justify-content: space-between;
                min-width: 200px;
            }

            .dark .a11y-toggle {
                background: var(--dark-bg-secondary, #374151);
            }

            .a11y-toggle.active {
                background: var(--accent-color, #4f46e5);
                color: white;
                border-color: var(--accent-color, #4f46e5);
            }

            .a11y-reset {
                height: 32px;
                padding: 0 16px;
                border-radius: 6px;
                background: #ef4444;
                color: white;
                border: none;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                margin-left: auto;
                transition: all 0.2s ease;
            }

            /* Десктопна версія */
            @media (min-width: 769px) {
                .a11y-panel {
                    top: 56px;
                    height: auto;
                }

                .a11y-content {
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .a11y-group {
                    flex: 1;
                    flex-wrap: wrap;
                }
            }

            /* Мобільна версія */
            @media (max-width: 768px) {
                .a11y-panel {
                    top: 56px;
                    height: auto;
                    max-height: calc(100vh - 56px);
                    overflow-y: auto;
                }

                .a11y-content {
                    flex-direction: column;
                }

                .a11y-group {
                    flex-direction: column;
                    width: 100%;
                }

                .a11y-item {
                    width: 100%;
                    justify-content: space-between;
                }

                .a11y-toggle {
                    width: 100%;
                }

                .a11y-controls {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }

                .a11y-controls button {
                    width: 100%;
                    justify-content: center;
                }

                .a11y-reset {
                    width: 100%;
                    justify-content: center;
                    margin: 0;
                }
            }

            /* Інтерактивність */
            .a11y-toggle:hover,
            .a11y-controls button:hover,
            .a11y-reset:hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .a11y-toggle:active,
            .a11y-controls button:active,
            .a11y-reset:active {
                transform: translateY(0);
                box-shadow: none;
            }

            .a11y-toggle:focus,
            .a11y-controls button:focus,
            .a11y-reset:focus {
                outline: 2px solid var(--accent-color, #4f46e5);
                outline-offset: 2px;
            }

            /* Стилі для функцій доступності - більш глобальні селектори */
            html.a11y-grayscale,
            body.a11y-grayscale {
                filter: grayscale(100%) !important;
            }

            html.a11y-contrast,
            body.a11y-contrast {
                filter: contrast(150%) !important;
            }

            /* Інші стилі доступності */
            body.a11y-font-size *:not(nav-bar):not(nav-bar *):not(.no-effects):not(.no-effects *) {
                font-size: var(--a11y-font-size) !important;
            }

            body.a11y-spacing *:not(nav-bar):not(nav-bar *):not(.no-effects):not(.no-effects *) {
                letter-spacing: var(--a11y-letter-spacing) !important;
                line-height: var(--a11y-line-height) !important;
            }

            body.a11y-hide-images img:not(nav-bar img):not(nav-bar * img):not(.no-effects):not(.no-effects *) {
                opacity: 0 !important;
                position: relative !important;
                min-height: 30px !important;
                background: #f0f0f0 !important;
            }

            body.a11y-dyslexic-font *:not(nav-bar):not(nav-bar *):not(.no-effects):not(.no-effects *) {
                font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;
            }
        `;
        this.appendChild(style);
    }

    render() {
        this.innerHTML += `
            <div id="accessibility-panel" class="a11y-panel hidden no-effects">
                <div class="a11y-content">
                    <div class="a11y-group">
                        <div class="a11y-item">
                            <span>Розмір тексту</span>
                            <div class="a11y-controls">
                                <button data-id="fontSize" data-action="decrease" title="Зменшити">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button data-id="fontSize" data-action="increase" title="Збільшити">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="a11y-item">
                            <span>Інтервали</span>
                            <div class="a11y-controls">
                                <button data-id="spacing" data-action="decrease" title="Зменшити">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button data-id="spacing" data-action="increase" title="Збільшити">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="a11y-group">
                        <button id="contrast" class="a11y-toggle">
                            <i class="fas fa-circle-half-stroke"></i>
                            <span>Контрастність</span>
                        </button>
                        <button id="grayscale" class="a11y-toggle">
                            <i class="fas fa-adjust"></i>
                            <span>Чорно-білий режим</span>
                        </button>
                        <button id="hideImages" class="a11y-toggle">
                            <i class="fas fa-images"></i>
                            <span>Приховати зображення</span>
                        </button>
                        <button id="dyslexicFont" class="a11y-toggle">
                            <i class="fas fa-font"></i>
                            <span>Шрифт для дислексії</span>
                        </button>
                    </div>

                    <button id="resetAccessibility" class="a11y-reset">
                        <i class="fas fa-rotate-left"></i>
                        <span>Скинути</span>
                    </button>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Обробка кнопок збільшення/зменшення
        this.querySelectorAll('[data-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.closest('[data-id]').dataset.id;
                const action = e.target.closest('[data-action]').dataset.action;
                this.handleAdjustment(id, action);
            });
        });

        // Обробка перемикачів
        this.querySelectorAll('.a11y-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const id = e.target.closest('.a11y-toggle').id;
                this.handleToggle(id);
            });
        });

        // Кнопка скидання
        this.querySelector('#resetAccessibility').addEventListener('click', () => {
            this.resetSettings();
        });

        // Закриття по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.querySelector('#accessibility-panel').classList.contains('hidden')) {
                this.togglePanel();
            }
        });
    }

    handleAdjustment(id, action) {
        switch(id) {
            case 'fontSize':
                this.settings.fontSize = Math.max(80, Math.min(200, 
                    this.settings.fontSize + (action === 'increase' ? 10 : -10)
                ));
                break;
            case 'spacing':
                if (action === 'increase') {
                    this.settings.letterSpacing = Math.min(10, this.settings.letterSpacing + 1);
                    this.settings.lineHeight = Math.min(200, this.settings.lineHeight + 10);
                } else {
                    this.settings.letterSpacing = Math.max(0, this.settings.letterSpacing - 1);
                    this.settings.lineHeight = Math.max(100, this.settings.lineHeight - 10);
                }
                break;
        }
        this.applySettings();
    }

    handleToggle(id) {
        this.settings[id] = !this.settings[id];
        this.applySettings();
    }

    applySettings() {
        // Додаємо класи до html елемента також
        document.documentElement.classList.toggle('a11y-grayscale', this.settings.grayscale);
        document.documentElement.classList.toggle('a11y-contrast', this.settings.contrast);
        
        // Додаємо або видаляємо класи для body
        document.body.classList.toggle('a11y-font-size', this.settings.fontSize !== 100);
        document.body.classList.toggle('a11y-spacing', this.settings.letterSpacing !== 0 || this.settings.lineHeight !== 150);
        document.body.classList.toggle('a11y-contrast', this.settings.contrast);
        document.body.classList.toggle('a11y-grayscale', this.settings.grayscale);
        document.body.classList.toggle('a11y-hide-images', this.settings.hideImages);
        document.body.classList.toggle('a11y-dyslexic-font', this.settings.dyslexicFont);
        
        // Встановлюємо CSS змінні для використання в стилях
        document.documentElement.style.setProperty('--a11y-font-size', `${this.settings.fontSize}%`);
        document.documentElement.style.setProperty('--a11y-letter-spacing', `${this.settings.letterSpacing}px`);
        document.documentElement.style.setProperty('--a11y-line-height', `${this.settings.lineHeight}%`);
        
        // Оновлення стану кнопок
        this.querySelectorAll('.a11y-toggle').forEach(btn => {
            btn.classList.toggle('active', this.settings[btn.id]);
        });

        this.saveSettings();
    }

    setupGlobalToggle() {
        // Глобальна функція для відкриття панелі
        window.toggleAccessibilityPanel = () => {
            this.togglePanel();
        };

        // Знаходимо всі кнопки доступності
        const accessibilityButtons = document.querySelectorAll(
            '#accessibility-toggle, #mobile-accessibility-toggle, [aria-label="Accessibility"], .accessibility-button'
        );

        accessibilityButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.togglePanel();
            });
        });

        // Закриття при кліку поза панеллю
        document.addEventListener('click', (e) => {
            if (this.isOpen) {
                const panel = this.querySelector('#accessibility-panel');
                const isClickInside = e.target.closest('#accessibility-panel');
                const isClickOnToggle = e.target.closest('[aria-label="Accessibility"]') || 
                                      e.target.closest('#accessibility-toggle') ||
                                      e.target.closest('#mobile-accessibility-toggle') ||
                                      e.target.closest('.accessibility-button');
                
                if (!isClickInside && !isClickOnToggle) {
                    this.togglePanel(false);
                }
            }
        });
    }

    togglePanel(force = null) {
        const panel = this.querySelector('#accessibility-panel');
        this.isOpen = force !== null ? force : !this.isOpen;
        
        if (this.isOpen) {
            panel.classList.remove('hidden');
            panel.classList.add('show');
            document.body.classList.add('accessibility-panel-open');
        } else {
            panel.classList.remove('show');
            panel.classList.add('hidden');
            document.body.classList.remove('accessibility-panel-open');
        }
    }

    resetSettings() {
        this.settings = {
            fontSize: 100,
            letterSpacing: 0,
            lineHeight: 150,
            contrast: false,
            grayscale: false,
            hideImages: false,
            dyslexicFont: false
        };
        this.applySettings();
    }

    saveSettings() {
        localStorage.setItem('accessibilitySettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('accessibilitySettings');
        if (saved) {
            this.settings = JSON.parse(saved);
            this.applySettings();
        }
    }
}

customElements.define('accessibility-menu', AccessibilityMenu); 