import NewsService from '../../utils/newsService.js';

class AllNews extends HTMLElement {
    constructor() {
        super();
        this.allNews = [];
        this.filteredNews = [];
        this.currentFilter = 'all';
    }

    async connectedCallback() {
        this.allNews = await NewsService.getAllNews();
        this.filteredNews = [...this.allNews];
        this.render();
        this.setupFilters();
    }

    render() {
        this.innerHTML = `
            <div class="space-y-8" id="news-list">
                ${this.filteredNews.map(news => this.renderNewsItem(news)).join('')}
            </div>
            
            ${this.filteredNews.length === 0 ? `
                <div class="text-center py-12">
                    <div class="text-gray-400 text-6xl mb-4">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <h2 class="text-2xl font-bold mb-2">Новин не знайдено</h2>
                    <p class="text-gray-600 dark:text-gray-400">Спробуйте змінити параметри фільтрації</p>
                </div>
            ` : ''}
        `;
    }

    renderNewsItem(news) {
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div class="md:flex">
                    <div class="md:w-1/3">
                        <img src="${news.image}" alt="${news.title}" class="h-full w-full object-cover">
                    </div>
                    <div class="p-6 md:w-2/3">
                        <div class="flex items-center mb-2">
                            <span class="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-2 py-1 rounded mr-2">
                                ${NewsService.formatDate(news.date)}
                            </span>
                            <div class="flex flex-wrap gap-1">
                                ${news.tags.map(tag => `
                                    <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600" data-tag="${tag}">
                                        #${tag}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">${news.title}</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">${news.shortDescription}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500 dark:text-gray-400">${news.author}</span>
                            <a href="news-details.html?slug=${news.slug}" 
                               class="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                                Читати далі <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-indigo-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'dark:bg-gray-700');
                });
                button.classList.remove('bg-gray-100', 'dark:bg-gray-700');
                button.classList.add('bg-indigo-600', 'text-white');
                
                
                this.currentFilter = filter;
                this.filterNews();
            });
        });
        
        
        setTimeout(() => {
            const tagButtons = this.querySelectorAll('[data-tag]');
            tagButtons.forEach(tag => {
                tag.addEventListener('click', () => {
                    const tagName = tag.dataset.tag;
                    
                    
                    filterButtons.forEach(btn => {
                        btn.classList.remove('bg-indigo-600', 'text-white');
                        btn.classList.add('bg-gray-100', 'dark:bg-gray-700');
                    });
                    
                    
                    this.filteredNews = this.allNews.filter(news => news.tags.includes(tagName));
                    this.render();
                    this.setupFilters(); 
                });
            });
        }, 0);
    }
}

customElements.define('all-news', AllNews); 