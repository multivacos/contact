import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interface';
import { ContactService } from '../contact.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
        <app-grid [displayedColumns]="displayedColums" [data]="contacts()" [sortableColumns]="sortables"/>
    </section>
  `,
  styles: ``
})
export class ListComponent implements OnInit{
  contacts = signal<Contact[]>([]);

  displayedColums: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action'];
  sortables:ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef);


  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      tap((contacts:Contact[])=> this.contacts.set(contacts))
    )
    .subscribe()
  }

}
