// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   image: string | null;
//   description: string;
//   categoryId: number;
//   category: string; 
// }


export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  image: string | null;
  categoryId: number;
  category: string;
  badge?: string; // Add this line
}
