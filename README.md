# 🚗 AutoPrime - Веб-сайт автомобільного дилерського центру

<div align="center">
  <img src="assets/logo.png" alt="AutoPrime Logo" width="200"/>
  <p><em>Ваш надійний партнер у світі автомобілів</em></p>
</div>

## 📋 Зміст
- [🎯 Про проект](#-про-проект)
- [🛠 Технології](#-технології)
- [🚀 Функціонал](#-функціонал)
- [📂 Структура проекту](#-структура-проекту)
- [✨ Особливості](#-особливості)
- [⚙️ Встановлення](#-встановлення)
- [👨‍💻 Розробка](#-розробка)

## 🎯 Про проект

**AutoPrime** - це сучасний веб-сайт офіційного дилерського центру, створений з любов'ю до деталей та турботою про користувачів. Наша мета - зробити вибір та обслуговування автомобіля максимально комфортним та приємним процесом.

### ✨ Ключові переваги
- 🌐 Елегантний адаптивний дизайн
- 🔍 Інтуїтивний пошук та розумна фільтрація
- 📱 Бездоганна робота на всіх пристроях
- 🌙 Стильна темна та світла теми
- ♿ Розширена доступність для всіх користувачів

## 🛠 Технології

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>

## 🚀 Функціонал

### 🚘 Каталог автомобілів
- **🆕 Нові автомобілі** - розширений каталог з детальними характеристиками та фотогалереєю
- **🔄 Вживані автомобілі** - ретельно перевірені авто з повною історією обслуговування
- **📊 Порівняння** - зручний інструмент для порівняння характеристик різних моделей

### 💼 Преміум послуги
| Послуга | Опис |
|---------|------|
| 🎯 Тест-драйв | Швидкий онлайн запис на тест-драйв вашої омріяної моделі |
| 🔄 Trade-in | Вигідний та прозорий обмін вашого авто на нове |
| 💳 Кредитування | Індивідуальні програми фінансування під ваші потреби |
| 🛡️ Страхування | Комплексний захист вашого автомобіля |

### 🔧 Технічний центр
- Професійна діагностика
- Планове обслуговування
- Гарантійний ремонт
- Встановлення додаткового обладнання

## ✨ Особливості
- 📱 Адаптивний дизайн для всіх пристроїв
- 🌓 Елегантна темна та світла теми
- ♿ Розширене меню доступності
- 📝 Інтерактивні смарт-форми
- 🔄 Динамічне завантаження контенту
- 🧩 Модульна веб-компонентна архітектура

## 📂 Структура проекту

```
autoprime/
├── catalog/ # Каталог автомобілів
│ └──  all-offers.html # Всі акції та спеціальні пропозиції
│ └── car-details.html # Детальна інформація про автомобіль
│ └── credit.html # Лізингова програма
│ └── new-cars.html # Нові автомобілі
│ └── offer-details.html # Детальна інформація про акцію
│ └── seasonal-details.html # Детальна інформація про сезонну акцію
│ └── seasonal-offers.html # Сезонні акції
│ └── service-details.html # Детальна інформація про послугу
│ └── service-offers.html # Всі послуги
│ └── special-offers.html # Спеціальні пропозиції
│ └── test-drive.html # Тест-драйв
│ └── trade-in.html # Trade-in
│ └── used-cars.html # Вживані автомобілі
│
├── company/ # Про компанію
│ └── news-details.html # Детальна інформація про новину
│ └── news-page.html # Сторінка новини

├── Components/ # Веб-компоненти
│ └── body-repair/ # Компоненти сторінки ремонту кузова
│ │ └── BodyRepairAbout.js # Про послуги ремонту
│ │ └── BodyRepairAdvantages.js # Переваги сервісу
│ │ └── BodyRepairForm.js # Форма запису
│ │ └── BodyRepairGallery.js # Галерея робіт
│ │ └── BodyRepairHero.js # Головний банер
│ │ └── BodyRepairNavigation.js # Навігація
│ │ └── BodyRepairProcess.js # Процес ремонту
│ │ └── BodyRepairServices.js # Послуги
│ └── cars-catalog/ # Компоненти каталогу авто
│ │ └── CarDetails.js # Деталі автомобіля
│ │ └── CarsCatalogFilters.js # Фільтри каталогу
│ │ └── CarsCatalogGrid.js # Сітка автомобілів
│ │ └── CarsCatalogHero.js # Головний банер
│ └── company/ # Компоненти розділу про компанію
│ │ └── AllNews.js # Всі новини
│ │ └── CertificateSection.js # Сертифікати
│ │ └── CompanyHero.js # Головний банер
│ │ └── CompanyNavigation.js # Навігація
│ │ └── HistorySection.js # Історія компанії
│ │ └── Mission.js # Місія компанії
│ │ └── NewsDetails.js # Деталі новини
│ │ └── NewsSection.js # Секція новин
│ │ └── PartnersSection.js # Партнери
│ └── contacts/ # Компоненти сторінки контактів
│ │ └── ContactsHero.js # Головний банер
│ │ └── ContactsNavigation.js # Навігація
│ │ └── DirectionsSection.js # Як доїхати
│ │ └── FeedbackForm.js # Форма зворотного зв'язку
│ │ └── MapSection.js # Карта
│ │ └── PhonesSection.js # Телефони
│ │ └── WorkingHoursSection.js # Години роботи
│ └── corporate/ # Компоненти корпоративного розділу
│ │ └── AdvantagesSection.js # Переваги
│ │ └── OffersSection.js # Пропозиції
│ │ └── CorporateHero.js # Головний банер
│ │ └── CorporateNavigation.js # Навігація
│ │ └── FleetSection.js # Автопарк
│ │ └── LeasingSection.js # Лізинг
│ └── credit/ # Компоненти кредитного розділу
│ │ └── CallToAction.js # Заклик до дії
│ │ └── CreditForm.js # Кредитна форма
│ │ └── CreditCalculator.js # Калькулятор
│ │ └── CreditHero.js # Головний банер
│ │ └── CreditIntro.js # Вступ
│ │ └── CreditNavigation.js # Навігація
│ │ └── CreditPrograms.js # Програми
│ │ └── LeasingSection.js # Лізинг
│ │ └── PartnersSection.js # Партнери
│ └── diagnostics/ # Компоненти діагностики
│ │ └── DiagnosticsAbout.js # Про діагностику
│ │ └── DiagnosticsEquipment.js # Обладнання
│ │ └── DiagnosticsForm.js # Форма діагностики
│ │ └── DiagnosticsHero.js # Головний банер
│ │ └── DiagnosticsNavigation.js # Навігація
│ │ └── DiagnosticsPrices.js # Ціни
│ │ └── DiagnosticsProcess.js # Процес діагностики
│ │ └── DiagnosticsTypes.js # Типи діагностики
│ └── equipment/ # Компоненти обладнання
│ │ └── ComfortSection.js # Комфорт
│ │ └── EquipmentForm.js # Форма обладнання
│ │ └── EquipmentHero.js # Головний банер
│ │ └── EquipmentNavigation.js # Навігація
│ │ └── ExteriorSection.js # Екстер'єр
│ │ └── MultimediaSection.js # Мультимедіа
│ │ └── SecuritySection.js # Безпека
│ │ └── TuningSection.js # Тюнінг
│ └── home/ # Компоненти домашньої сторінки
│ │ └── HomeAdvantages.js # Переваги
│ │ └── HomeCatalog.js # Каталог
│ │ └── HomeHero.js # Головний банер
│ │ └── HomeServices.js # Послуги
│ │ └── HomeTestimonials.js # Відгуки
│ └── insurance/ # Компоненти страхування
│ │ └── CalculatorSection.js # Калькулятор
│ │ └── FaqSection.js # Поширені запитання
│ │ └── GreenCardSection.js # Зелена карта
│ │ └── InsuranceHero.js # Головний банер
│ │ └── InsuranceNavigation.js # Навігація
│ │ └── InsuranceTypesSection.js # Типи страхування
│ │ └── KaskoSection.js # Каско
│ │ └── OsagoSection.js # ОСАГО
│ └── loyalty/ # Компоненти лояльності
│ │ └── AboutSection.js # Про програму
│ │ └── BenefitsSection.js # Переваги
│ │ └── FaqSection.js # Поширені запитання
│ │ └── HowToJoinSection.js # Як приєднатися
│ │ └── LevelsSection.js # Рівні
│ │ └── LoyaltyHero.js # Головний банер
│ │ └── LoyaltyNavigation.js # Навігація
│ │ └── RegistrationForm.js # Форма реєстрації
│ └── maintenance/ # Компоненти обслуговування
│ │ └── MaintenanceBenefits.js # Переваги обслуговування
│ │ └── MaintenanceForm.js # Форма обслуговування
│ │ └── MaintenanceHero.js # Головний банер
│ │ └── MaintenanceIntervals.js # Інтервали обслуговування
│ │ └── MaintenanceNavigation.js # Навігація
│ │ └── MaintenanceTypes.js # Типи обслуговування
│ │ └── RegularMaintenance.js # Регулярне обслуговування
│ └── offers/ # Компоненти акцій
│ │ └── AllOffers.js # Всі акції
│ │ └── CurrentOffers.js # Поточні акції
│ │ └── OfferDetails.js # Деталі акції
│ │ └── OffersHero.js # Головний банер
│ │ └── OffersNavigation.js # Навігація
│ │ └── SeasonalOffers.js # Сезонні акції
│ │ └── ServiceOffers.js # Сервісні акції
│ │ └── SpecialModels.js # Спеціальні моделі
│ │ └── SubscribeForm.js # Форма підписки
│ └── registration/ # Компоненти реєстрації
│ │ └── ApplicationForm.js # Форма заявки
│ │ └── DocumentsSection.js # Документи
│ │ └── FaqSection.js # Поширені запитання
│ │ └── PriceSection.js # Ціни
│ │ └── ProcessSection.js # Процес
│ │ └── RegistrationHero.js # Головний банер
│ │ └── RegistrationNavigation.js # Навігація
│ │ └── ServiceSection.js # Послуги
│ └── repair/ # Компоненти ремонту
│ │ └── RepairAbout.js # Про ремонт
│ │ └── RepairAdvantages.js # Переваги
│ │ └── RepairForm.js # Форма ремонту
│ │ └── RepairHero.js # Головний банер
│ │ └── RepairNavigation.js # Навігація
│ │ └── RepairProcess.js # Процес ремонту
│ │ └── RepairServices.js # Послуги ремонту
│ └── service/ # Компоненти сервісу
│ │ └── AppointmentForm.js # Форма запису
│ │ └── ServiceAbout.js # Про сервіс
│ │ └── ServiceAdvantages.js # Переваги
│ │ └── ServiceBooking.js # Бронювання
│ │ └── ServiceHero.js # Головний банер
│ │ └── ServiceNavigation.js # Навігація
│ │ └── ServiceTypes.js # Види послуг
│ └── test-drive/ # Компоненти тест-драйву
│ │ └── TestDriveAbout.js # Про тест-драйв
│ │ └── TestDriveBooking.js # Бронювання
│ │ └── TestDriveConditions.js # Умови
│ │ └── TestDriveFaq.js # Поширені запитання
│ │ └── TestDriveHero.js # Головний банер
│ │ └── TestDriveNavigation.js # Навігація
│ │ └── TestDrivePage.js # Сторінка тест-драйву
│ └── trade-in/ # Компоненти трейд-ін
│ │ └── CarEvaluation.js # Оцінка авто
│ │ └── ContactSection.js # Контакти
│ │ └── HowItWorks.js # Як це працює
│ │ └── TradeInBenefits.js # Переваги
│ │ └── TradeInFaq.js # Поширені запитання
│ │ └── TradeInForm.js # Форма заявки
│ │ └── TradeInHero.js # Головний банер
│ │ └── TradeInNavigation.js # Навігація
│ └── warranty/ # Компоненти гарантії
│ │ └── WarrantyConditions.js # Умови гарантії
│ │ └── WarrantyExtension.js # Розширена гарантія
│ │ └── WarrantyFaq.js # Поширені запитання
│ │ └── WarrantyHero.js # Головний банер
│ │ └── WarrantyInfo.js # Інформація
│ │ └── WarrantyNavigation.js # Навігація
│ │ └── WarrantyService.js # Гарантійне обслуговування
│ └── accessibility-menu.js # Меню доступності
│ └── navbar.js # Навігаційна панель
│ └── SiteFooter.js # Підвал сайту
│
├── fs/
│ └── data/ # JSON дані
│ └── images/ # Ілюстрації
│
├── services/ # Преміум послуги
│ └── corporate.html # Корпоративний сервіс
│ └── insurance.html # Страхування
│ └── loyalty.html # Лояльність
│ └── registration.html # Реєстрація
│ └── warranty.html # Гарантія
│ 
├── styles/ # Стилі
│ └── style.css # Основні стилі
│ 
├── technical-center/ # Технічний центр
│ └── body-repair.html # Ремонт кузова
│ └── diagnostics.html # Діагностика
│ └── equipment.html # Обладнання
│ └── maintenance.html # Обслуговування
│ └── repair.html # Ремонт
│ └── service-appointment.html # Запис на сервіс
│ 
├── utils/ # Утиліти
│ └── carsService.js # Сервіс для авто
│ └── newsService.js # Сервіс для новини
│ └── offersService.js # Сервіс для акцій
│ └── seasonalService.js # Сервіс для сезонних акцій
│ └── seasonalOffersService.js # Сервіс для сезонних акцій
│
└── company.html # Сторінка про компанію
└── contacts.html # Сторінка контактів
└── index.html # Головна сторінка
└── readme.md # README
└── theme.js # Тема
```
