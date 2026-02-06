import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-wide-leg',
  templateUrl: './wide-leg.component.html',
  styleUrls: ['./wide-leg.component.css']
})
export class WideLegComponent {
//changing between images

    mainImage: string = '/assets/widJeans.jpg';

  images: string[] = [
    '/assets/widJeans.jpg',
    '/assets/widJeans.jpg',
    '/assets/widJeans.jpg'
  ];

  changeImage(img: string) {
    this.mainImage = img;
  }



    selectedSize = 'S';

  product = {
    id: 2, // ⚠️ unique ID
    name: 'Light Jeans for Women',
    price: 400,
    image: '/assets/widJeans.jpg'
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      size: this.selectedSize,
      quantity: 1
    });

    this.router.navigate(['/Cart']);
  }
}
