import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SnackBarService {
    private readonly _snackBar = inject(MatSnackBar);
    showSnackBar(messaje: string, action = 'ok'):void{
        this._snackBar.open(messaje, action, {
            duration: 1500,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        })
    }
    
}