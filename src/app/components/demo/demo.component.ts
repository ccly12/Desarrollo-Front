import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {

  constructor() {}
  title = 'curso-tdap';
  items = ['Perez', 'Lopez', 'Estrada', 'Gonzalez', 'Sanchez'];


  ngOnInit(): void {
  }

  agregarElemento(){
    this.items.push('nuevo item');
  }
  eliminarElemento(i:any){
    this.items.splice(i, 1);
  }

}
