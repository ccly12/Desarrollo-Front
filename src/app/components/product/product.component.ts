import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

// -------------
interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
//----------------

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() {}

  @Input() product!: Product; //
  @Output()productClicked: EventEmitter<any> = new EventEmitter();
  date=new Date();

  ngOnInit(): void {
  }

  addCart(){
    console.log('Añadiendo al Carrito')
    this.productClicked.emit(this.product.id)
  }
}
