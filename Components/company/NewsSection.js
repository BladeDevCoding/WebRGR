import NewsService from '../../utils/newsService.js';

class NewsSection extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const news = await NewsService.getRecentNews(3);
        this.render(news);
    }

    render(news) {
        this.innerHTML = `
            <section id="news" class="mb-12 scroll-mt-20">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-newspaper text-xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Новини компанії</h2>
                    </div>
                    <a href="/company/news.html" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                        Всі новини <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                
                <div class="grid md:grid-cols-3 gap-6">
                    ${news.map(item => this.renderNewsCard(item)).join('')}
                </div>
            </section>
        `;
    }

    renderNewsCard(news) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-48">
                    <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover">
                    <div class="absolute top-3 left-3">
                        <span class="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-2 py-1 rounded">
                            ${NewsService.formatDate(news.date)}
                        </span>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-bold mb-2 line-clamp-2">${news.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${news.shortDescription}</p>
                    <a href="/company/news-details.html?slug=${news.slug}" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                        Читати далі <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('news-section', NewsSection); 