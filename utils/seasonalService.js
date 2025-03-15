class SeasonalService {
    static async getAllSeasonalOffers() {
        try {
            const response = await fetch('/fs/data/offers/seasonal.json');
            const data = await response.json();
            return Object.values(data.seasonal);
        } catch (error) {
            console.error('Error loading seasonal offers:', error);
            return [];
        }
    }

    static async getSeasonalOfferBySlug(slug) {
        try {
            const response = await fetch('/fs/data/offers/seasonal.json');
            const data = await response.json();
            return data.seasonal[slug] || null;
        } catch (error) {
            console.error('Error loading seasonal offer:', error);
            return null;
        }
    }

    static async getActiveSeasonalOffers() {
        try {
            const offers = await this.getAllSeasonalOffers();
            return offers.filter(offer => offer.isActive);
        } catch (error) {
            console.error('Error loading active seasonal offers:', error);
            return [];
        }
    }

    static async getCurrentSeasonOffer() {
        try {
            const offers = await this.getAllSeasonalOffers();
            const currentMonth = new Date().getMonth();
            
            // Визначаємо поточний сезон
            let season;
            if (currentMonth >= 11 || currentMonth <= 1) season = 'winter';
            else if (currentMonth >= 2 && currentMonth <= 4) season = 'spring';
            else if (currentMonth >= 5 && currentMonth <= 7) season = 'summer';
            else season = 'autumn';
            
            // Знаходимо відповідну пропозицію
            return offers.find(offer => offer.slug.includes(season));
        } catch (error) {
            console.error('Error loading current season offer:', error);
            return null;
        }
    }
}

export default SeasonalService; 