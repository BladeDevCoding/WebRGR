class BodyRepairGallery extends HTMLElement {
    constructor() {
        super();
        this.images = [
            {
                src: 'https://plus.unsplash.com/premium_photo-1737077481251-bb8671f3f877?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Рихтування кузова'
            },
            {
                src: 'https://plus.unsplash.com/premium_photo-1661342433021-c33cf61549d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Фарбування автомобіля'
            },
            {
                src: 'https://plus.unsplash.com/premium_photo-1723651413630-0802b171b3ed?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Ремонт після ДТП'
            },
            {
                src: 'https://images.unsplash.com/photo-1414518876340-9c8737380507?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Полірування кузова'
            },
            {
                src: 'https://images.unsplash.com/photo-1688701108480-0db760644684?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Заміна деталей'
            },
            {
                src: 'https://images.unsplash.com/photo-1596986952526-3be237187071?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Результат ремонту'
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupLightbox();
    }

    render() {
        this.innerHTML = `
            <section id="gallery" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Галерея робіт</h2>
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${this.images.map(image => `
                        <div class="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src="${image.src}" alt="${image.alt}" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    `).join('')}
                </div>
                
                <!-- Лайтбокс для перегляду зображень -->
                <div id="lightbox" class="fixed inset-0 bg-black/90 z-50 hidden flex items-center justify-center">
                    <button id="close-lightbox" class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">
                        <i class="fas fa-times"></i>
                    </button>
                    <button id="prev-image" class="absolute left-4 text-white text-4xl hover:text-gray-300">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <img id="lightbox-image" src="" alt="" class="max-h-[80vh] max-w-[90vw] object-contain">
                    <button id="next-image" class="absolute right-4 text-white text-4xl hover:text-gray-300">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </section>
        `;
    }

    setupLightbox() {
        setTimeout(() => {
            const galleryItems = this.querySelectorAll('.gallery-item');
            const lightbox = this.querySelector('#lightbox');
            const lightboxImage = this.querySelector('#lightbox-image');
            const closeLightbox = this.querySelector('#close-lightbox');
            const prevImage = this.querySelector('#prev-image');
            const nextImage = this.querySelector('#next-image');
            
            let currentIndex = 0;
            
            
            galleryItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    lightboxImage.src = img.src;
                    lightboxImage.alt = img.alt;
                    currentIndex = index;
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            
            closeLightbox.addEventListener('click', () => {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            
            prevImage.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                const img = galleryItems[currentIndex].querySelector('img');
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
            });
            
            
            nextImage.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % galleryItems.length;
                const img = galleryItems[currentIndex].querySelector('img');
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
            });
            
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
            
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                    lightbox.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft' && !lightbox.classList.contains('hidden')) {
                    prevImage.click();
                } else if (e.key === 'ArrowRight' && !lightbox.classList.contains('hidden')) {
                    nextImage.click();
                }
            });
        }, 0);
    }
}

customElements.define('body-repair-gallery', BodyRepairGallery); 