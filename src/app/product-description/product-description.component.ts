import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  // #4: to be able to use a class property we need ...
  // ... to define a one in the class
  albumInfo;

  // #1: in type script: the constructor arguments will be ...
  // ... automatically added to the 'this' object.
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // #2: when the response from the server arrives
    // the callback passed to the subscribe
    // is called by the observable.
    this._productService.getAlbum(1).subscribe(
      // #3: the response now is stored in the class properties
      response => this.albumInfo = response
    );
  }

}
