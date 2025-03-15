// Додаємо стилі для темної теми
(function addThemeStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Базові стилі для темної теми */
        :root {
            --text-color: #111827;
            --bg-color: #ffffff;
            --nav-bg: #ffffff;
            --border-color: #e5e7eb;
        }

        .dark {
            --text-color: #ffffff;
            --bg-color: #111827;
            --nav-bg: #1f2937;
            --border-color: #374151;
        }

        /* Застосування змінних */
        body {
            color: var(--text-color);
            background-color: var(--bg-color);
        }

        /* Додаткові стилі для темної теми */
        .dark body {
            background-color: #111827;
            color: white;
        }

        .dark .bg-white {
            background-color: #1f2937 !important;
        }

        .dark .text-gray-700 {
            color: #d1d5db !important;
        }

        .dark .border-b {
            border-color: #374151 !important;
        }

        /* Інші стилі */
        * {
            transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }

        /* Стилі для скролбару */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        
        .dark ::-webkit-scrollbar-track {
            background: #1f2937;
        }
        
        .dark ::-webkit-scrollbar-thumb {
            background: #4b5563;
        }
    `;
    document.head.appendChild(styleElement);
})();

// Налаштування Tailwind для темної теми
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    // Можна додати кастомні кольори якщо потрібно
                }
            }
        }
    };
}

// Глобальна функція для перемикання теми
function toggleTheme() {
    try {
        // Отримуємо елемент html
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        
        // Перемикаємо тему
        if (isDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        
        // Оновлюємо іконки
        updateThemeIcons();
    } catch (error) {
        console.error("Помилка при зміні теми:", error);
    }
}

// Функція для оновлення іконок
function updateThemeIcons() {
    try {
        const isDark = document.documentElement.classList.contains('dark');
        const themeButtons = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
        
        themeButtons.forEach(button => {
            if (button) {
                button.innerHTML = isDark ? 
                    '<i class="fas fa-sun text-lg"></i>' : 
                    '<i class="fas fa-moon text-lg"></i>';
            }
        });
    } catch (error) {
        console.error("Помилка при оновленні іконок:", error);
    }
}

// Функція для ініціалізації обробників подій
function initThemeHandlers() {
    try {
        // Знаходимо всі кнопки теми
        const themeButtons = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
        
        // Додаємо обробники для кожної кнопки
        themeButtons.forEach((button, index) => {
            // Видаляємо всі існуючі обробники
            const newButton = button.cloneNode(true);
            if (button.parentNode) {
                button.parentNode.replaceChild(newButton, button);
            }
            
            // Додаємо новий обробник
            newButton.addEventListener('click', function(event) {
                toggleTheme();
                event.preventDefault();
            });
            
            // Додаємо атрибут для відлагодження
            newButton.setAttribute('data-theme-button', index + 1);
        });
        
        // Додаємо глобальний обробник як запасний варіант
        document.addEventListener('click', function(event) {
            const target = event.target.closest('#theme-toggle, #mobile-theme-toggle');
            if (target) {
                toggleTheme();
                event.preventDefault();
            }
        });
    } catch (error) {
        console.error("Помилка при ініціалізації обробників:", error);
    }
}

// Ініціалізація теми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Встановлюємо початкову тему
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Оновлюємо іконки
        updateThemeIcons();
        
        // Ініціалізуємо обробники подій з затримкою
        setTimeout(initThemeHandlers, 500);
    } catch (error) {
        console.error("Помилка при ініціалізації теми:", error);
    }
});

// Додаємо обробник для змін у медіа-запиті
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Якщо немає збереженої теми, застосовуємо системну
    if (!localStorage.getItem('theme')) {
        if (event.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeIcons();
    }
});

// Експортуємо функції для глобального доступу
window.toggleTheme = toggleTheme;
window.updateThemeIcons = updateThemeIcons; 