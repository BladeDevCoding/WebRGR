class OffersService {
    static async getAllOffers() {
        try {
            const response = await fetch('/fs/data/offers/offers.json');
            const data = await response.json();
            return Object.values(data.offers);
        } catch (error) {
            console.error('Error loading offers:', error);
            return [];
        }
    }

    static async getOfferBySlug(slug) {
        try {
            const response = await fetch('/fs/data/offers/offers.json');
            const data = await response.json();
            return data.offers[slug] || null;
        } catch (error) {
            console.error('Error loading offer:', error);
            return null;
        }
    }

    static async getOfferById(id) {
        try {
            const offers = await this.getAllOffers();
            return offers.find(offer => offer.id === id) || null;
        } catch (error) {
            console.error('Error loading offer by ID:', error);
            return null;
        }
    }

    static async getSpecialOffers() {
        try {
            const offers = await this.getAllOffers();
            return offers.filter(offer => offer.isSpecial);
        } catch (error) {
            console.error('Error loading special offers:', error);
            return [];
        }
    }

    static async getOffersByCategory(category) {
        try {
            const offers = await this.getAllOffers();
            return category === 'all' 
                ? offers 
                : offers.filter(offer => offer.category === category);
        } catch (error) {
            console.error('Error loading offers by category:', error);
            return [];
        }
    }

    static async getModelOffers() {
        try {
            const offers = await this.getAllOffers();
            return offers.filter(offer => offer.category === 'models');
        } catch (error) {
            console.error('Error loading model offers:', error);
            return [];
        }
    }
}

export default OffersService;

export async function getOffers() {
    try {
        console.log('Fetching offers data...');
        const response = await fetch('/fs/data/offers/offers.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Offers data received:', data);
        
        if (data.offers) {
            return Object.values(data.offers);
        } else if (Array.isArray(data)) {
            return data;
        } else {
            console.warn('Unexpected data structure:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
}

export async function getOfferDetails(id) {
    try {
        const offers = await getOffers();
        return offers.find(offer => offer.id == id) || null;
    } catch (error) {
        console.error('Error fetching offer details:', error);
        return null;
    }
}

export async function getAllOffers() {
    return getOffers();
} 