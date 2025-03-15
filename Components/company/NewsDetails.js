import NewsService from '../../utils/newsService.js';

class NewsDetails extends HTMLElement {
    constructor() {
        super();
        this.news = null;
    }

    async connectedCallback() {
        await this.loadNewsDetails();
        this.setupShareButtons();
    }

    async loadNewsDetails() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const slug = urlParams.get('slug');

            if (!slug) {
                this.showError('Новину не знайдено');
                return;
            }

            const news = await NewsService.getNewsBySlug(slug);
            
            if (!news) {
                this.showError('Новину не знайдено');
                return;
            }

            this.news = news;
            document.title = `${news.title} | AutoPrime`;
            this.render();

        } catch (error) {
            console.error('Error loading news details:', error);
            this.showError('Помилка завантаження даних');
        }
    }

    showError(message) {
        this.innerHTML = `
            <div class="text-center py-16">
                <div class="text-gray-400 text-6xl mb-4">
                    <i class="fas fa-newspaper"></i>
                </div>
                <h2 class="text-2xl font-bold mb-2">${message}</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Спробуйте повернутися до списку новин</p>
                <a href="/company/news.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                    <i class="fas fa-arrow-left mr-2"></i> До списку новин
                </a>
            </div>
        `;
    }

    setupShareButtons() {
        setTimeout(() => {
            const shareButtons = this.querySelectorAll('.share-btn');
            
            shareButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const platform = button.dataset.platform;
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent(this.news.title);
                    
                    let shareUrl = '';
                    
                    switch (platform) {
                        case 'facebook':
                            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                            break;
                        case 'twitter':
                            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                            break;
                        case 'linkedin':
                            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                            break;
                        case 'telegram':
                            shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                            break;
                    }
                    
                    if (shareUrl) {
                        window.open(shareUrl, '_blank', 'width=600,height=400');
                    }
                });
            });
            
            // Копіювання посилання
            const copyLinkBtn = this.querySelector('#copy-link');
            if (copyLinkBtn) {
                copyLinkBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        const tooltip = copyLinkBtn.querySelector('.tooltip');
                        tooltip.textContent = 'Скопійовано!';
                        tooltip.classList.remove('opacity-0');
                        
                        setTimeout(() => {
                            tooltip.classList.add('opacity-0');
                            setTimeout(() => {
                                tooltip.textContent = 'Копіювати посилання';
                            }, 300);
                        }, 2000);
                    });
                });
            }
        }, 0);
    }

    render() {
        this.innerHTML = `
            <div>
                <!-- Навігаційний ланцюжок -->
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <a href="../index.html" class="hover:text-indigo-600 dark:hover:text-indigo-400">Головна</a>
                    <i class="fas fa-chevron-right mx-2 text-xs"></i>
                    <a href="../company.html" class="hover:text-indigo-600 dark:hover:text-indigo-400">Про компанію</a>
                    <i class="fas fa-chevron-right mx-2 text-xs"></i>
                    <a href="./news.html" class="hover:text-indigo-600 dark:hover:text-indigo-400">Новини</a>
                    <i class="fas fa-chevron-right mx-2 text-xs"></i>
                    <span>${this.news.title}</span>
                </div>

                <!-- Заголовок і дата -->
                <div class="mb-8">
                    <div class="flex items-center mb-4">
                        <span class="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm font-semibold px-3 py-1 rounded-full">
                            ${NewsService.formatDate(this.news.date)}
                        </span>
                    </div>
                    <h1 class="text-4xl font-bold mb-4">${this.news.title}</h1>
                    <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <span class="flex items-center">
                            <i class="fas fa-user-edit mr-2"></i>
                            ${this.news.author}
                        </span>
                        <span class="mx-3">•</span>
                        <div class="flex flex-wrap gap-2">
                            ${this.news.tags.map(tag => `
                                <a href="./news.html?tag=${tag}" class="text-indigo-600 dark:text-indigo-400 hover:underline">#${tag}</a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Головне зображення -->
                <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <img src="${this.news.image}" alt="${this.news.title}" class="w-full h-auto">
                </div>

                <!-- Контент новини -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8 border border-gray-100 dark:border-gray-700">
                    <div class="prose dark:prose-invert max-w-none">
                        ${this.news.content}
                    </div>
                </div>

                <!-- Поділитися -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <h3 class="text-lg font-semibold mb-4">Поділитися новиною</h3>
                    <div class="flex flex-wrap gap-3">
                        <button class="share-btn bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200" data-platform="facebook">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                        <button class="share-btn bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors duration-200" data-platform="twitter">
                            <i class="fab fa-twitter"></i>
                        </button>
                        <button class="share-btn bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors duration-200" data-platform="linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </button>
                        <button class="share-btn bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-200" data-platform="telegram">
                            <i class="fab fa-telegram-plane"></i>
                        </button>
                        <button id="copy-link" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 p-3 rounded-full transition-colors duration-200 relative">
                            <i class="fas fa-link"></i>
                            <span class="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-300 whitespace-nowrap">
                                Копіювати посилання
                            </span>
                        </button>
                    </div>
                </div>

                <!-- Повернутися до списку новин -->
                <div class="mt-8 text-center">
                    <a href="./news.html" class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                        <i class="fas fa-arrow-left mr-2"></i> До списку новин
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('news-details', NewsDetails); 