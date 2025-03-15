/**
 * Сервіс для роботи з даними автомобілів
 */
window.carsService = {
    // Отримання списку всіх автомобілів
    async getCars() {
        try {
            // Завантажуємо дані з JSON файлу
            const response = await fetch('../fs/data/cars/cars_database_2.json');
            
            if (!response.ok) {
                throw new Error('Не вдалося завантажити дані автомобілів');
            }
            
            const data = await response.json();
            
            // Отримуємо дані автомобілів з правильного шляху в JSON
            const cars = data["fs/images/cars"] || [];
            
            // Перетворюємо дані з JSON у потрібний формат
            return cars.map(car => ({
                brand: car.brand,
                model: car.model,
                year: car.year,
                title: car.title,
                configuration: car.configuration,
                mileage: "0", // Нові автомобілі
                engine: this.extractEngineCapacity(car),
                fuel: this.extractFuelType(car),
                transmission: this.extractTransmission(car),
                drive: this.extractDrive(car),
                price: car.price?.current_price_uah || "",
                oldPrice: car.price?.old_price || "",
                discount: car.price?.discount || "",
                image: `../${car.images.main}`, // Шлях до головного зображення
                slug: car.slug,
                // Додаткові дані
                gallery: car.images.gallery.map(img => `../${img}`),
                specifications: car.specifications,
                priceUSD: car.price?.price_usd || "",
                priceEUR: car.price?.price_eur || "",
                // Додаткові характеристики для відображення
                enginePower: this.extractEnginePower(car),
                acceleration: this.extractAcceleration(car),
                maxSpeed: this.extractMaxSpeed(car),
                fuelConsumption: this.extractFuelConsumption(car),
                doors: car.specifications?.body?.doors || "",
                seats: car.specifications?.body?.seats || ""
            }));
            
        } catch (error) {
            console.error("Помилка при отриманні даних автомобілів:", error);
            return [];
        }
    },

    // Допоміжні методи для отримання даних з JSON
    extractEngineCapacity(car) {
        if (!car.specifications?.engine?.capacity) return "";
        
        // Отримуємо об'єм двигуна (тільки число)
        const capacity = car.specifications.engine.capacity.split(' ')[0];
        return capacity;
    },

    extractFuelType(car) {
        return car.specifications?.engine?.fuel || "";
    },

    extractTransmission(car) {
        return car.specifications?.transmission?.gearbox || "";
    },

    extractDrive(car) {
        return car.specifications?.transmission?.drive || "";
    },

    extractEnginePower(car) {
        return car.specifications?.engine?.engine_power || "";
    },

    extractAcceleration(car) {
        return car.specifications?.performance?.acceleration_0_100 || "";
    },

    extractMaxSpeed(car) {
        return car.specifications?.performance?.max_speed || "";
    },

    extractFuelConsumption(car) {
        if (!car.specifications?.engine?.fuel_consumption?.mixed) return "";
        return car.specifications.engine.fuel_consumption.mixed;
    },

    // Отримання списку унікальних брендів
    async getBrands() {
        try {
            const response = await fetch('../fs/data/cars/cars_database_2.json');
            
            if (!response.ok) {
                throw new Error('Не вдалося завантажити дані автомобілів');
            }
            
            const data = await response.json();
            
            // Використовуємо готовий список брендів з метаданих
            if (data.metadata && data.metadata.brands) {
                return data.metadata.brands.sort();
            }
            
            // Якщо метаданих немає, отримуємо з списку автомобілів
            const cars = data["fs/images/cars"] || [];
            const brands = [...new Set(cars.map(car => car.brand))];
            return brands.sort();
        } catch (error) {
            console.error("Помилка при отриманні брендів:", error);
            return [];
        }
    },
    
    // Отримання списку моделей для конкретного бренду
    async getModelsByBrand(brand) {
        try {
            const response = await fetch('../fs/data/cars/cars_database_2.json');
            
            if (!response.ok) {
                throw new Error('Не вдалося завантажити дані автомобілів');
            }
            
            const data = await response.json();
            const cars = data["fs/images/cars"] || [];
            
            const models = [...new Set(cars
                .filter(car => car.brand === brand)
                .map(car => car.model))];
            return models.sort();
        } catch (error) {
            console.error(`Помилка при отриманні моделей для бренду ${brand}:`, error);
            return [];
        }
    },
    
    // Отримання списку типів палива
    async getFuelTypes() {
        try {
            const cars = await this.getCars();
            const fuelTypes = [...new Set(cars
                .map(car => car.fuel)
                .filter(fuel => fuel)) // Видаляємо пусті значення
            ];
            return fuelTypes.sort();
        } catch (error) {
            console.error("Помилка при отриманні типів палива:", error);
            return [];
        }
    },
    
    // Отримання списку типів трансмісії
    async getTransmissionTypes() {
        try {
            const cars = await this.getCars();
            const transmissionTypes = [...new Set(cars
                .map(car => car.transmission)
                .filter(transmission => transmission)) // Видаляємо пусті значення
            ];
            return transmissionTypes.sort();
        } catch (error) {
            console.error("Помилка при отриманні типів трансмісії:", error);
            return [];
        }
    },
    
    // Отримання списку типів приводу
    async getDriveTypes() {
        try {
            const cars = await this.getCars();
            const driveTypes = [...new Set(cars
                .map(car => car.drive)
                .filter(drive => drive)) // Видаляємо пусті значення
            ];
            return driveTypes.sort();
        } catch (error) {
            console.error("Помилка при отриманні типів приводу:", error);
            return [];
        }
    },
    
    // Отримання цінових діапазонів
    async getPriceRanges() {
        return [
            { label: "до 500 000 грн", value: "0-500000" },
            { label: "500 000 - 1 000 000 грн", value: "500000-1000000" },
            { label: "1 000 000 - 1 500 000 грн", value: "1000000-1500000" },
            { label: "1 500 000 - 2 000 000 грн", value: "1500000-2000000" },
            { label: "2 000 000 - 3 000 000 грн", value: "2000000-3000000" },
            { label: "понад 3 000 000 грн", value: "3000000-999999999" }
        ];
    },
    
    // Отримання діапазонів років
    async getYearRanges() {
        const currentYear = new Date().getFullYear();
        return [
            { label: `${currentYear}`, value: `${currentYear}-${currentYear}` },
            { label: `${currentYear-1}`, value: `${currentYear-1}-${currentYear-1}` },
            { label: `${currentYear-2}`, value: `${currentYear-2}-${currentYear-2}` },
            { label: `${currentYear-3} - ${currentYear-2}`, value: `${currentYear-3}-${currentYear-2}` },
            { label: `${currentYear-5} - ${currentYear-3}`, value: `${currentYear-5}-${currentYear-3}` },
            { label: `до ${currentYear-5}`, value: `2000-${currentYear-5}` }
        ];
    },
    
    // Отримання діапазонів потужності двигуна
    async getEnginePowerRanges() {
        return [
            { label: "до 100 к.с.", value: "0-100" },
            { label: "100 - 150 к.с.", value: "100-150" },
            { label: "150 - 200 к.с.", value: "150-200" },
            { label: "200 - 250 к.с.", value: "200-250" },
            { label: "250 - 300 к.с.", value: "250-300" },
            { label: "понад 300 к.с.", value: "300-999" }
        ];
    }
}; 