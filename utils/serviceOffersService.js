class ServiceOffersService {
    static async getAllServiceOffers() {
        try {
            const response = await fetch('/fs/data/offers/service.json');
            const data = await response.json();
            return Object.values(data.service);
        } catch (error) {
            console.error('Error loading service offers:', error);
            return [];
        }
    }

    static async getServiceOfferBySlug(slug) {
        try {
            const response = await fetch('/fs/data/offers/service.json');
            const data = await response.json();
            return data.service[slug] || null;
        } catch (error) {
            console.error('Error loading service offer:', error);
            return null;
        }
    }

    static async getActiveServiceOffers() {
        try {
            const offers = await this.getAllServiceOffers();
            return offers.filter(offer => offer.isActive);
        } catch (error) {
            console.error('Error loading active service offers:', error);
            return [];
        }
    }
}

export default ServiceOffersService; 