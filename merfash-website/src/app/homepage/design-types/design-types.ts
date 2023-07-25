export class DesignTypes{
    id!: number;
    title = '';
    img = '';
    alt = '';
    description = '';
}

export const DESIGNTYPES: DesignTypes[] = [
    {
        id: 1,
        title: 'Birthday',
        img: 'assets/mercedes-santana-designer-haute-couture-6-scaled.jpg',
        alt: 'Example of Birthday outfit design',
        description: 'Classic and modern designs, so you look radiant on your day.'
    },
    {
        id: 2,
        title: 'Daily',
        img: 'assets/mercedes-santana-designer-haute-couture-9.jpg',
        alt: 'Example of Daily outfit design',
        description: 'Take your style, anywhere you go.'
    },
    {
        id: 3,
        title: 'Weddings',
        img: 'assets/wedding-haute-couture.jpg',
        alt: 'Example of Wedding outfit design',
        description: 'A dress, a wish… Wedding dresses that adapt to all styles.'
    },
    {
        id: 4,
        title: 'Event',
        img: 'assets/event-haute-couture.jpg',
        alt: 'Example of Event outfit design',
        description: 'Elegance and intelligence reflected in each garment.'
    },

]