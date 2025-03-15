class CallToAction extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="bg-indigo-600 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <h2 class="text-3xl font-bold mb-4">Потрібна консультація?</h2>
                <p class="text-xl mb-6 opacity-90">Наші фінансові експерти допоможуть вам обрати оптимальне рішення</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+380441234567" class="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                        <i class="fas fa-phone-alt mr-2"></i> +38 (044) 123-45-67
                    </a>
                    <a href="#form-section" class="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                        <i class="fas fa-comments mr-2"></i> Онлайн-консультація
                    </a>
                </div>
            </section>
        `;

        // Додаємо плавну прокрутку для кнопки "Онлайн-консультація"
        this.querySelector('a[href="#form-section"]').addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.getElementById('form-section');
            if (formSection) {
                window.scrollTo({
                    top: formSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

customElements.define('call-to-action', CallToAction); 