import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  standalone: false,

  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  precioMoto: number = 6000;
  precioFinal: number | null = null;

  calcularDescuento(dia: string): void {
    let descuento: number = 0;

    switch (dia) {
      case 'martes':
        descuento = 0.12;
        break;
      case 'sabado':
        descuento = 0.18;
        break;
      case 'feriado':
        descuento = 0.25;
        break;
    }

    this.precioFinal = this.precioMoto - (this.precioMoto * descuento);
  }
}
