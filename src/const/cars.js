export const cars = [
    {
        id: 1,
        brand: 'VW T-ROC',
        engine: '1.5',
        year: 2020,
        power: '150',
        mileage: '80',
        priceBy: '1500000',
        priceRu: '1950000',
        savings: '450000',
        images: Array.from({ length: 10 }, (_, i) => `/vw_t_roc/${i + 1}.webp`),
        images360: Array.from({ length: 12 }, (_, i) => {
            // const index = String(i + 1).padStart(3, '0')
            const index = String(i + 1)
            return {
                // small: `https://i.infocar.ua/i/13/7325/${index}/700x350.jpg`,
                small: `/vw_t_roc/360/${index}.webp`,
                large: `https://i.infocar.ua/i/13/7325/${index}/1400x700.jpg`,
            }
        }),
    },
    {
        id: 2,
        brand: 'KIA SELTOS',
        engine: '2.0',
        year: 2020,
        power: '149',
        mileage: '70',
        priceBy: '1600000',
        priceRu: '2050000',
        savings: '450000',
        images: Array.from({ length: 6 }, (_, i) => `/kia_seltos/${i + 1}.webp`),
        images360: Array.from({ length: 70 }, (_, i) => {
            const index = String(i + 1).padStart(3, '0')
            return {
                small: `https://i.infocar.ua/i/13/6016/${index}/700x350.jpg`,
                large: `https://i.infocar.ua/i/13/6016/${index}/1400x700.jpg`,
            }
        }),
    },
    {
        id: 3,
        brand: 'BUICK ENCORE GX',
        engine: '1.3',
        year: 2020,
        power: '155',
        mileage: '60',
        priceBy: '970000',
        priceRu: '1320000',
        savings: '350000',
        images: Array.from({ length: 6 }, (_, i) => `/buick_encore_gx/${i + 1}.webp`),
        images360: Array.from({ length: 81 }, (_, i) => {
            const index = String(i + 1).padStart(3, '0')
            return {
                small: `https://i.infocar.ua/i/13/7183/${index}/700x350.jpg`,
                large: `https://i.infocar.ua/i/13/6804/${index}/1400x700.jpg`,
            }
        }),
    },
    // остальные BUICK ENCORE — те же 360
    {
        id: 4,
        brand: 'CHEVROLET MALIBU',
        engine: '1.5',
        year: 2020,
        power: '160',
        mileage: '60',
        priceBy: '950000',
        priceRu: '1300000',
        savings: '350000',
        images: Array.from({ length: 9 }, (_, i) => `/chevrolet_malibu/${i + 1}.webp`),
        images360: Array.from({ length: 36 }, (_, i) => {
            const index = String(i + 1).padStart(2, '0')
            return {
                small: `https://i.infocar.ua/img/360/4676/${index}.jpg`,
                large: `https://i.infocar.ua/img/360/4676/${index}.jpg`,
            }
        }),
    }
]
