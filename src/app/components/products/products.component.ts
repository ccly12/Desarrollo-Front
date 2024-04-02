import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor() {}
  products = [
    {
      id: '1',
      image: 'assets/images/img1.png',
      title: 'Camisa 1',
      price: 100,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/img2.png',
      title: 'Camisa 2',
      price: 100,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/img3.png',
      title: 'Camisa 3',
      price: 100,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/img4.png',
      title: 'Camisa 4',
      price: 100,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/img5.png',
      title: 'Camisa 5',
      price: 100,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/img6.png',
      title: 'Camisa 6',
      price: 100,
      description: 'bla bla bla bla bla'
    }
  ];
  
  ngOnInit(): void {
      
  }

  clickProduct(id: any){
    console.log('Id producto recibido desde el componente product',id)
  }


}
