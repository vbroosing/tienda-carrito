// MODULO DEL BOTON LOGO QUE DESPLEGA EL MENÚ
import { Component } from '@angular/core';
import { MenuCarritoComponent } from '../menu-carrito/menu-carrito.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  activarMenu: MenuCarritoComponent = new MenuCarritoComponent;
  mostrarCarrito(){
    this.activarMenu.desplegarMenu()
    console.log('siuuuu');
  }

}
