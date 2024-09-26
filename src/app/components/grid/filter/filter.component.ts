import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const MATERIAL_MODULES = [MatLabel, MatFormField, MatInputModule]

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MATERIAL_MODULES],
  template: `
    <mat-form-field>
      <mat-label>{{label()}}</mat-label>
      <input matInput type="text" [(ngModel)]="filter" [placeholder]="placeHolder()">
    </mat-form-field>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeHolder = input<string>('Ejm: Nombre');
}
