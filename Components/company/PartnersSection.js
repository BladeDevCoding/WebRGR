class PartnersSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="partners" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Наші партнери</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <p class="mb-6">
                        AutoPrime співпрацює з провідними автомобільними брендами та фінансовими установами, 
                        щоб забезпечити нашим клієнтам найкращі умови придбання та обслуговування автомобілів.
                    </p>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://img2.freepng.ru/20180712/aup/aawzmaanf.webp" alt="Партнер 1" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://e7.pngegg.com/pngimages/70/512/png-clipart-chery-qq3-car-chery-tiggo-5-hyundai-motor-company-car-angle-emblem-thumbnail.png" alt="Партнер 2" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://img2.freepng.ru/20181117/sze/kisspng-kia-motors-car-kia-sportage-sport-utility-vehicle-1713921370625.webp" alt="Партнер 3" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://e7.pngegg.com/pngimages/769/567/png-clipart-2019-jeep-cherokee-brand-2006-jeep-wrangler-car-jeep-angle-text-thumbnail.png" alt="Партнер 4" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://w7.pngwing.com/pngs/837/893/png-transparent-mercedes-benz-c-class-car-daimler-ag-mercedes-benz-schweiz-ag-mercedes-benz-angle-emblem-trademark-thumbnail.png" alt="Партнер 5" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n-4rlFVNh73pNC8czsx95hZnxhiv99yULA&s" alt="Партнер 6" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://e7.pngegg.com/pngimages/827/329/png-clipart-porsche-car-volkswagen-logo-porsche-emblem-label.png" alt="Партнер 7" class="max-h-16">
                        </div>
                        <div class="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://yablo.tech/storage/app_image/6924383016481900d7cc77ccaa72ad76/911123d639ee8ca1cbcc4999b418b1aa.png" alt="Партнер 8" class="max-h-16">
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('partners-section', PartnersSection); 