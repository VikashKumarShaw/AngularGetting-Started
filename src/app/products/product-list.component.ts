import { Component } from '@angular/core';
import {IProduct} from './product'
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

    pageTitle : string = "Product List";
    imageWidth : number = 50
    imagemargin : number = 2 
    showImage : boolean = false
    listFilter : string = "cart"
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 219.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 2332.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2019",
            "description": "Curved claw steel hammer",
            "price": 218.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2019",
            "description": "15-inch steel blade hand saw",
            "price": 113.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2018",
            "description": "Standard two-button video game controller",
            "price": 535.95,
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}