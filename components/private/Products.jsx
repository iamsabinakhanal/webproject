import type { Product } from "@shared/schema";

export const categories = [
  "Electronics",
  "Lab Equipment",
  "Books",
  "Study Tools",
  "Sports Equipment"
];

export function getAvailableCount(products: Product[]): number {
  return products.filter(p => p.available).length;
}

export function getRentedCount(products: Product[]): number {
  return products.filter(p => !p.available).length;
}

export function getTotalValue(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.price, 0);
}
