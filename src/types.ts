export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'coffee' | 'snacks' | 'combos';
  prices: {
    small?: number;
    medium?: number;
    large?: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: 'small' | 'medium' | 'large';
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  orders: Order[];
}

export interface Order {
  id: number;
  date: string;
  items: CartItem[];
  total: number;
  status: 'completed' | 'processing' | 'delivered';
}