export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings';
  image: string;
  description: string;
  materials: string[];
  isNew?: boolean;
  bestseller?: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Diamond Ring',
    price: 3250,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80',
    description: 'A timeless piece featuring a brilliant round-cut diamond set in 18k white gold. Perfect for celebrating lifes most precious moments.',
    materials: ['18k White Gold', '1.2ct Diamond'],
    bestseller: true
  },
  {
    id: '2',
    name: 'Luminous Pearl Necklace',
    price: 1850,
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80',
    description: 'A delicate string of Akoya pearls that drape gracefully, adding a touch of sophisticated charm to any eveningwear.',
    materials: ['Akoya Pearls', '18k Yellow Gold Clasp'],
    bestseller: true
  },
  {
    id: '3',
    name: 'Golden Orbit Bracelet',
    price: 4980,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80',
    description: 'Modern and sleek, this rigid bangle wraps around the wrist with a seamless finish, featuring subtle diamond accents.',
    materials: ['14k Yellow Gold', '0.5ct Diamond Pave'],
    bestseller: true
  },
  {
    id: '4',
    name: 'Starlight Drop Earrings',
    price: 2640,
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80',
    description: 'Elegant drop earrings that catch the light from every angle, designed to make a subtle yet striking statement.',
    materials: ['18k Rose Gold', 'Moissanite', 'VVS Diamonds'],
    bestseller: true
  },
  {
    id: '5',
    name: 'Sapphire Halo Ring',
    price: 8400,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80',
    description: 'A mesmerizing deep blue sapphire surrounded by a brilliant halo of pavé diamonds, set on a slender platinum band.',
    materials: ['Platinum', '3.0ct Sapphire', '0.8ct Diamonds'],
    isNew: true
  },
  {
    id: '6',
    name: 'Chevron Gold Choker',
    price: 3100,
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    description: 'A contemporary take on a classic silhouette. This V-shaped collar rests perfectly on the collarbone.',
    materials: ['24k Pure Gold', 'Matte Finish']
  },
  {
    id: '7',
    name: 'Emerald Cut Solitaire',
    price: 12500,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80',
    description: 'An architectural marvel showcasing a flawless 2.5ct emerald-cut diamond mounted on a minimalist platinum band.',
    materials: ['Platinum', '2.5ct Emerald Cut Diamond'],
    isNew: true
  },
  {
    id: '8',
    name: 'Tennis Bracelet Classic',
    price: 9800,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80',
    description: 'The definitive diamond tennis bracelet, featuring a seamless line of brilliantly matched stones.',
    materials: ['18k White Gold', '4.0ct Total Diamond Weight']
  },
  {
    id: '9',
    name: 'Vintage Ruby Pendant',
    price: 4200,
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80',
    description: 'An heirloom-quality ruby, rich in color, suspended eloquently from a delicate fine-link chain.',
    materials: ['18k Yellow Gold', '1.5ct Burmese Ruby']
  },
  {
    id: '10',
    name: 'Aurelia Signature Hoops',
    price: 1450,
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80',
    description: 'Iconic wide hoops crafted from solid gold, striking the perfect balance between bold and sophisticated.',
    materials: ['18k Solid Gold']
  }
];

export const MOCK_CATEGORIES = [
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80',
  },
  {
    name: 'High Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
  }
];

