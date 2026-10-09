import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-rhombus',
  styleUrl: './rhombus.component.css',
  templateUrl: './rhombus.component.html',
})
export class RhombusComponent {
  builder = inject(FormBuilder)

  rhombusForm = this.builder.group({
    diagonalE : ['', [Validators.required, Validators.min(1)]],
    diagonalF : ['', [Validators.required, Validators.min(1)]],

    area : ['',]
  })

  showValue = false 

  startCalc(){
    const area = this.calcArea(
      Number(this.rhombusForm.value.diagonalE),
      Number(this.rhombusForm.value.diagonalF)
    )
    this.rhombusForm.get('area')?.setValue(String(area))
    this.showValue = true
  }

  calcArea(diagonalE: number, diagonalF: number): number{
    return (1/2)*diagonalE*diagonalF;
  }
}
