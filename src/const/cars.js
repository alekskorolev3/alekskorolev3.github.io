export const cars = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1758228674135-ccb8865f1b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2xrc3dhZ2VuJTIwY29tcGFjdCUyMFNVVnxlbnwxfHx8fDE3Njc1NDAzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        brand: 'VW T-ROC',
        model: '1.5',
        year: 2020,
        power: '150',
        mileage: '80',
        priceBy: '18,000',
        priceRu: '24,000',
        savings: '6,000'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1719387449145-57036392eca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWElMjBTZWx0b3MlMjBTVVZ8ZW58MXx8fHwxNzY3NTQwMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        brand: 'KIA SELTOS',
        model: '2.0',
        year: 2020,
        power: '150',
        mileage: '70',
        priceBy: '20,000',
        priceRu: '26,000',
        savings: '6,000'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1610738489867-fa0ed63b5c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWVyUyMFBvbG8lMjBzZWRhbnxlbnwxfHx8fDE3Njc1NDAzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        brand: 'BUICK ENCORE',
        model: '1.6',
        year: 2020,
        power: '110',
        mileage: '60',
        priceBy: '12,000',
        priceRu: '16,500',
        savings: '4,500'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1610738489867-fa0ed63b5c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWVyUyMFBvbG8lMjBzZWRhbnxlbnwxfHx8fDE3Njc1NDAzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        brand: 'BUICK ENCORE',
        model: '1.6',
        year: 2020,
        power: '110',
        mileage: '60',
        priceBy: '12,000',
        priceRu: '16,500',
        savings: '4,500'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1610738489867-fa0ed63b5c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWVyUyMFBvbG8lMjBzZWRhbnxlbnwxfHx8fDE3Njc1NDAzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        brand: 'BUICK ENCORE',
        model: '1.6',
        year: 2020,
        power: '110',
        mileage: '60',
        priceBy: '12,000',
        priceRu: '16,500',
        savings: '4,500'
    }
]

export const car360Sets = {
    'VW T-ROC': Array.from({ length: 12 }, (_, i) => {
        const index = String(i + 1).padStart(3, '0');
        return {
            small: `https://i.infocar.ua/i/13/7325/${index}/700x350.jpg`,
            large: `https://i.infocar.ua/i/13/7325/${index}/1400x700.jpg`,
        };
    }),

    'KIA SELTOS': Array.from({ length: 70 }, (_, i) => {
        const index = String(i + 1).padStart(3, '0');
        return {
            small: `https://i.infocar.ua/i/13/6016/${index}/700x350.jpg`,
            large: `https://i.infocar.ua/i/13/6016/${index}/1400x700.jpg`,
        };
    }),
    'BUICK ENCORE': Array.from({ length: 81 }, (_, i) => {
        const index = String(i + 1).padStart(3, '0');
        return {
            small: `https://i.infocar.ua/i/13/7183/${index}/700x350.jpg`,
            large: `https://i.infocar.ua/i/13/6804/${index}/1400x700.jpg`,
        };
    }),
};
