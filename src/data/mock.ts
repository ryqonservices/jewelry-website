export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings';
  image: string;
  images: string[];
  description: string;
  materials: string[];
  isNew?: boolean;
  bestseller?: boolean;
  variations?: {
    metals: string[];
    sizes?: string[];
  };
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Diamond Ring',
    price: 3250,
    category: 'Rings',
    image: '/images/rings/beautiful-engagement-ring-with-diamonds.jpg',
    images: [
      '/images/rings/beautiful-engagement-ring-with-diamonds.jpg',
      '/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg',
      '/images/rings/beautiful-engagement-ring-with-diamonds (2).jpg'
    ],
    description: 'A timeless piece featuring a brilliant round-cut diamond set in 18k white gold. Perfect for celebrating lifes most precious moments.',
    materials: ['18k White Gold', '1.2ct Diamond'],
    bestseller: true,
    variations: {
      metals: ['White Gold', 'Platinum', 'Yellow Gold'],
      sizes: ['5', '6', '7', '8']
    }
  },
  {
    id: '2',
    name: 'Luminous Pearl Necklace',
    price: 1850,
    category: 'Necklaces',
    image: '/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg',
    images: [
      '/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg',
      '/images/Necklaces/closeup-shot-female-wearing-beautiful-silver-necklace-with-pendant.jpg',
      '/images/Necklaces/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing.jpg'
    ],
    description: 'A delicate string of Akoya pearls that drape gracefully, adding a touch of sophisticated charm to any eveningwear.',
    materials: ['Akoya Pearls', '18k Yellow Gold Clasp'],
    bestseller: true,
    variations: {
      metals: ['Yellow Gold', 'White Gold'],
    }
  },
  {
    id: '3',
    name: 'Golden Orbit Bracelet',
    price: 4980,
    category: 'Bracelets',
    image: '/images/bracelets/side-view-hand-wearing-gold-bracelet.jpg',
    images: [
      '/images/bracelets/side-view-hand-wearing-gold-bracelet.jpg',
      '/images/bracelets/side-view-silver-bracelets-with-diamonds-black-wall.jpg',
      '/images/bracelets/luxury-jewellery-display.jpg'
    ],
    description: 'Modern and sleek, this rigid bangle wraps around the wrist with a seamless finish, featuring subtle diamond accents.',
    materials: ['14k Yellow Gold', '0.5ct Diamond Pave'],
    bestseller: true,
    variations: {
      metals: ['Yellow Gold', 'Rose Gold', 'White Gold'],
      sizes: ['S', 'M', 'L']
    }
  },
  {
    id: '4',
    name: 'Starlight Drop Earrings',
    price: 2640,
    category: 'Earrings',
    image: '/images/Earrings/aesthetic-golden-earrings-arrangement.jpg',
    images: [
      '/images/Earrings/aesthetic-golden-earrings-arrangement.jpg',
      '/images/Earrings/close-up-smiling-pretty-lady-posing-while-demonstrating-designer-jewelry-beauty-concept.jpg',
      '/images/Earrings/portrait-young-female-with-beautiful-make-up-earrings-with-gems-isolated.jpg'
    ],
    description: 'Elegant drop earrings that catch the light from every angle, designed to make a subtle yet striking statement.',
    materials: ['18k Rose Gold', 'Moissanite', 'VVS Diamonds'],
    bestseller: true,
    variations: {
      metals: ['Rose Gold', 'White Gold'],
    }
  },
  {
    id: '5',
    name: 'Sapphire Halo Ring',
    price: 18400,
    category: 'Rings',
    image: '/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg',
    images: [
      '/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg',
      '/images/rings/close-up-elegant-diamond-ring-woman-finger-woman-wearing-black-dress-love-wedding-concept-soft-natural-day-light-selective-focus.jpg',
      '/images/rings/still-life-object.jpg'
    ],
    description: 'A mesmerizing deep blue sapphire surrounded by a brilliant halo of pavé diamonds, set on a slender platinum band.',
    materials: ['Platinum', '3.0ct Sapphire', '0.8ct Diamonds'],
    isNew: true,
    variations: {
      metals: ['Platinum', 'White Gold'],
      sizes: ['5', '6', '7']
    }
  },
  {
    id: '6',
    name: 'Chevron Gold Choker',
    price: 3100,
    category: 'Necklaces',
    image: '/images/Necklaces/closeup-shot-female-wearing-beautiful-silver-necklace-with-pendant.jpg',
    images: [
      '/images/Necklaces/closeup-shot-female-wearing-beautiful-silver-necklace-with-pendant.jpg',
      '/images/Necklaces/luxury-shine-diamonds-digital-art.jpg',
      '/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg'
    ],
    description: 'A contemporary take on a classic silhouette. This V-shaped collar rests perfectly on the collarbone.',
    materials: ['24k Pure Gold', 'Matte Finish'],
    variations: {
      metals: ['Yellow Gold'],
    }
  },
  {
    id: '7',
    name: 'Emerald Cut Solitaire',
    price: 12500,
    category: 'Rings',
    image: '/images/rings/beautiful-engagement-ring-with-diamonds (2).jpg',
    images: [
      '/images/rings/beautiful-engagement-ring-with-diamonds (2).jpg',
      '/images/rings/closeup-shot-female-wearing-beautiful-silver-ring.jpg',
      '/images/rings/beautiful-engagement-ring-with-diamonds.jpg'
    ],
    description: 'An architectural marvel showcasing a flawless 2.5ct emerald-cut diamond mounted on a minimalist platinum band.',
    materials: ['Platinum', '2.5ct Emerald Cut Diamond'],
    isNew: true,
    variations: {
      metals: ['Platinum', 'Yellow Gold'],
      sizes: ['6', '7', '8']
    }
  },
  {
    id: '8',
    name: 'Aurelia Signature Bangles',
    price: 9800,
    category: 'Bracelets',
    image: '/images/bracelets/side-view-silver-bracelets-with-diamonds-black-wall.jpg',
    images: [
      '/images/bracelets/side-view-silver-bracelets-with-diamonds-black-wall.jpg',
      '/images/bracelets/closeup-shot-bride-s-hands.jpg',
      '/images/bracelets/luxury-jewellery-display (1).jpg'
    ],
    description: 'The definitive diamond tennis bracelet, featuring a seamless line of brilliantly matched stones.',
    materials: ['18k White Gold', '4.0ct Total Diamond Weight'],
    variations: {
      metals: ['White Gold', 'Yellow Gold'],
      sizes: ['M', 'L']
    }
  }
];

export const MOCK_CATEGORIES = [
  {
    name: 'Rings',
    image: '/images/rings/still-life-object.jpg',
  },
  {
    name: 'Necklaces',
    image: '/images/Necklaces/luxury-shine-diamonds-digital-art.jpg',
  },
  {
    name: 'High Jewelry',
    image: '/images/bracelets/side-view-silver-bracelets-with-diamonds-black-wall.jpg',
  }
];
