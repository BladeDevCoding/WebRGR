class FaqSection extends HTMLElement {
    constructor() {
        super();
        this.faqItems = [
            {
                question: 'Що таке ОСЦПВ і чи обов\'язково його оформлювати?',
                answer: 'ОСЦПВ (Обов\'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів) — це обов\'язковий вид страхування в Україні. Згідно з законодавством, кожен власник транспортного засобу зобов\'язаний мати поліс ОСЦПВ. Він захищає вас від фінансових втрат у разі, якщо ви стали винуватцем ДТП.'
            },
            {
                question: 'Яка різниця між ОСЦПВ і КАСКО?',
                answer: 'ОСЦПВ покриває лише шкоду, заподіяну третім особам (їхньому здоров\'ю, життю та майну) з вашої вини. КАСКО ж захищає безпосередньо ваш автомобіль від різних ризиків (ДТП, викрадення, стихійні лиха тощо), незалежно від того, хто є винуватцем події.'
            },
            {
                question: 'Що таке франшиза в страхуванні КАСКО?',
                answer: 'Франшиза — це частина збитку, яку страхувальник зобов\'язується покрити самостійно при настанні страхового випадку. Наприклад, якщо у вас франшиза 1% і вартість ремонту становить 10 000 грн, то страхова компанія виплатить 9 900 грн, а 100 грн ви сплатите самостійно. Чим вища франшиза, тим нижча вартість страхового поліса.'
            },
            {
                question: 'Коли потрібна Зелена картка?',
                answer: 'Зелена картка необхідна при виїзді на автомобілі за кордон. Це міжнародний сертифікат страхування автоцивільної відповідальності, який діє в країнах-учасницях міжнародної системи автострахування "Зелена картка". Без цього документа ви не зможете перетнути кордон на автомобілі.'
            },
            {
                question: 'Як діяти при настанні страхового випадку?',
                answer: 'При настанні страхового випадку необхідно: 1) Викликати поліцію (якщо це ДТП); 2) Повідомити страхову компанію про подію за номером гарячої лінії; 3) Зібрати всі необхідні документи (протокол ДТП, медичні довідки тощо); 4) Подати заяву на виплату страхового відшкодування. Детальну інструкцію ви отримаєте при оформленні поліса.'
            },
            {
                question: 'Чи можна оформити страховку онлайн?',
                answer: 'Так, ми пропонуємо можливість оформлення електронних полісів ОСЦПВ онлайн. Для цього вам потрібно заповнити форму на нашому сайті, оплатити страховку, і електронний поліс буде надісланий на вашу електронну пошту. Для оформлення КАСКО та Зеленої картки вам потрібно звернутися до наших консультантів.'
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupAccordion();
    }

    render() {
        this.innerHTML = `
            <section id="faq" class="mb-12 scroll-mt-20">
                <h2 class="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Часті запитання</h2>
                
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    ${this.faqItems.map((item, index) => `
                        <div class="faq-item border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                            <div class="faq-question p-4 cursor-pointer flex justify-between items-center">
                                <h3 class="text-lg font-medium">${item.question}</h3>
                                <div class="faq-icon ml-4 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                                </div>
                            </div>
                            <div class="faq-answer px-4 pb-4 hidden">
                                <div class="pt-2 pb-3 text-gray-700 dark:text-gray-300">
                                    ${item.answer}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    setupAccordion() {
        setTimeout(() => {
            const faqItems = this.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                question.addEventListener('click', () => {
                    answer.classList.toggle('hidden');
                    question.querySelector('.faq-icon').classList.toggle('rotate-180');
                });
            });
        }, 0);
    }
}

customElements.define('faq-section', FaqSection); 