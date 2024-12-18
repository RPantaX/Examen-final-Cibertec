import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  standalone: false,

  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {
  horasTrabajadas: number = 0;
  salario: number | null = null;

  calcularSalario(): void {
    if (this.horasTrabajadas <= 40) {
      this.salario = this.horasTrabajadas * 16;
    } else {
      const horasExtra = this.horasTrabajadas - 40;
      this.salario = (40 * 16) + (horasExtra * 20);
    }
  }
}
