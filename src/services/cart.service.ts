import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  getCart() {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existing = this.cartItems.find(
      p => p.id === item.id && p.size === item.size
    );

    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push(item);
    }
  }

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    );
  }

  clearCart() {
    this.cartItems = [];
  }
}
