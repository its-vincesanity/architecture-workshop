import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICat } from '../../../../../../../api/cats/cat.interface';

@Component({
  selector: 'app-cat-delete-dialog',
  templateUrl: './cat-delete-dialog.component.html',
  styleUrls: ['./cat-delete-dialog.component.scss']
})
export class CatDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CatDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cat: ICat,
  ) {
  }


  public close(): void {
    this.dialogRef.close();
  }

  public delete(): void {
    this.dialogRef.close(this.cat);
  }

}
