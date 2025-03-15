class NewsService {
    static async getAllNews() {
        try {
            const response = await fetch('/fs/data/company/news.json');
            const data = await response.json();
            return data.news.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    }

    static async getFeaturedNews(limit = 3) {
        try {
            const allNews = await this.getAllNews();
            return allNews
                .filter(news => news.featured)
                .slice(0, limit);
        } catch (error) {
            console.error('Error fetching featured news:', error);
            return [];
        }
    }

    static async getRecentNews(limit = 5) {
        try {
            const allNews = await this.getAllNews();
            return allNews.slice(0, limit);
        } catch (error) {
            console.error('Error fetching recent news:', error);
            return [];
        }
    }

    static async getNewsBySlug(slug) {
        try {
            const allNews = await this.getAllNews();
            return allNews.find(news => news.slug === slug) || null;
        } catch (error) {
            console.error('Error fetching news by slug:', error);
            return null;
        }
    }

    static async getNewsByTag(tag) {
        try {
            const allNews = await this.getAllNews();
            return allNews.filter(news => news.tags.includes(tag));
        } catch (error) {
            console.error('Error fetching news by tag:', error);
            return [];
        }
    }

    static formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('uk-UA', options);
    }
}

export default NewsService; 