import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary">
      <button
        mat-icon-button
        routerLink="/"
        class="example-icon"
        aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Contact book</span>
      <button mat-icon-button routerLink="/contacts">
        <mat-icon>list_alt</mat-icon>
      </button>
      <span class="spacer"></span>
      <button mat-icon-button (click)="emitClick()">
        <mat-icon>person_add</mat-icon>
      </button>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {
  onNewContactEvent = output<void>();
  emitClick(): void {
    this.onNewContactEvent.emit();
  }
}
