import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-wide-hoodie',
  templateUrl: './wide-hoodie.component.html',
  styleUrls: ['./wide-hoodie.component.css']
})
export class WideHoodieComponent {

  //changing between images

    mainImage: string = '/assets/hoodie.jpg';

  images: string[] = [
    '/assets/hoodie.jpg',
    '/assets/hoodie.jpg',
    '/assets/hoodie.jpg'
  ];

  changeImage(img: string) {
    this.mainImage = img;
  }
 
 
//Thumbnails

  selectedSize = 'S';

  product = {
    id: 1,
    name: 'Paige Hoodie for Women',
    price: 300,
    image: '/assets/hoodie.jpg'
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
