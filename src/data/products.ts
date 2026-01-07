import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White Dress Shirt',
    price: 49.99,
    description: 'Premium cotton dress shirt perfect for business and formal occasions. Features a classic fit and wrinkle-resistant fabric.',
    image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
    rating: 4.5,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 15 },
          { size: 'M', availability: 20 },
          { size: 'L', availability: 18 },
          { size: 'XL', availability: 12 },
        ],
      },
      {
        name: 'Light Blue',
        hex: '#E3F2FD',
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 10 },
          { size: 'M', availability: 15 },
          { size: 'L', availability: 12 },
          { size: 'XL', availability: 8 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Slim Fit Denim Jeans',
    price: 79.99,
    description: 'Comfortable slim-fit jeans made from premium denim. Perfect for casual wear with a modern, stylish look.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    rating: 4.8,
    colors: [
      {
        name: 'Classic Blue',
        hex: '#1976D2',
        images: [
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '28', availability: 8 },
          { size: '30', availability: 12 },
          { size: '32', availability: 15 },
          { size: '34', availability: 10 },
          { size: '36', availability: 5 },
        ],
      },
      {
        name: 'Black',
        hex: '#212121',
        images: [
          'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1475179593777-bd12fd56b85d?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '28', availability: 6 },
          { size: '30', availability: 10 },
          { size: '32', availability: 12 },
          { size: '34', availability: 8 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 199.99,
    description: 'Genuine leather jacket with a classic biker style. Features multiple pockets and a comfortable fit for everyday wear.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    rating: 4.7,
    colors: [
      {
        name: 'Brown',
        hex: '#5D4037',
        images: [
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1591047139829-91fce775fc99?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 5 },
          { size: 'M', availability: 8 },
          { size: 'L', availability: 6 },
          { size: 'XL', availability: 3 },
        ],
      },
      {
        name: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1591047139829-91fce775fc99?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 7 },
          { size: 'M', availability: 10 },
          { size: 'L', availability: 8 },
          { size: 'XL', availability: 4 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Navy Blue Blazer',
    price: 149.99,
    description: 'Elegant navy blue blazer perfect for business meetings and formal events. Tailored fit with premium fabric.',
    image: 'https://images.unsplash.com/photo-1591047139829-91fce775fc99?w=500&h=600&fit=crop',
    rating: 4.9,
    colors: [
      {
        name: 'Navy Blue',
        hex: '#0D47A1',
        images: [
          'https://images.unsplash.com/photo-1591047139829-91fce775fc99?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 4 },
          { size: 'M', availability: 8 },
          { size: 'L', availability: 10 },
          { size: 'XL', availability: 6 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Cotton T-Shirt Pack',
    price: 29.99,
    description: 'Set of 3 premium cotton t-shirts in various colors. Soft, breathable fabric perfect for everyday comfort.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    rating: 4.3,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 25 },
          { size: 'M', availability: 30 },
          { size: 'L', availability: 28 },
          { size: 'XL', availability: 20 },
        ],
      },
      {
        name: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 20 },
          { size: 'M', availability: 25 },
          { size: 'L', availability: 22 },
          { size: 'XL', availability: 18 },
        ],
      },
      {
        name: 'Gray',
        hex: '#757575',
        images: [
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 15 },
          { size: 'M', availability: 18 },
          { size: 'L', availability: 20 },
          { size: 'XL', availability: 12 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Chino Trousers',
    price: 59.99,
    description: 'Versatile chino trousers in classic khaki. Perfect for both casual and smart-casual occasions.',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
    rating: 4.6,
    colors: [
      {
        name: 'Khaki',
        hex: '#C3B091',
        images: [
          'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '30', availability: 12 },
          { size: '32', availability: 15 },
          { size: '34', availability: 18 },
          { size: '36', availability: 10 },
        ],
      },
      {
        name: 'Navy',
        hex: '#0D47A1',
        images: [
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '30', availability: 10 },
          { size: '32', availability: 12 },
          { size: '34', availability: 15 },
          { size: '36', availability: 8 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Wool Winter Coat',
    price: 249.99,
    description: 'Warm and stylish wool coat for winter. Features a modern design with excellent insulation and water resistance.',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop',
    rating: 4.8,
    colors: [
      {
        name: 'Charcoal',
        hex: '#424242',
        images: [
          'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 3 },
          { size: 'M', availability: 6 },
          { size: 'L', availability: 5 },
          { size: 'XL', availability: 2 },
        ],
      },
      {
        name: 'Camel',
        hex: '#D2691E',
        images: [
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: 'S', availability: 4 },
          { size: 'M', availability: 5 },
          { size: 'L', availability: 4 },
          { size: 'XL', availability: 3 },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Sneakers',
    price: 89.99,
    description: 'Comfortable and stylish sneakers perfect for everyday wear. Features cushioned insoles and durable construction.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
    rating: 4.4,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '7', availability: 8 },
          { size: '8', availability: 12 },
          { size: '9', availability: 15 },
          { size: '10', availability: 10 },
          { size: '11', availability: 6 },
        ],
      },
      {
        name: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
        ],
        variants: [
          { size: '7', availability: 6 },
          { size: '8', availability: 10 },
          { size: '9', availability: 12 },
          { size: '10', availability: 8 },
          { size: '11', availability: 5 },
        ],
      },
    ],
  },
];

