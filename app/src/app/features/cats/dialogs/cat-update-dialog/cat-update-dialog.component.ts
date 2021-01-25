import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deepCopy } from 'src/app/shared/helper/deep-copy';
import { validateAge } from '../../helper/validate-age';
import { ICat } from '../../../../../../../api/cats/cat.interface';

@Component({
  selector: 'app-cat-update-dialog',
  templateUrl: './cat-update-dialog.component.html',
  styleUrls: ['./cat-update-dialog.component.scss']
})
export class CatUpdateDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CatUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cat: ICat,
  ) {
    this.cat = deepCopy(cat);
  }

  public validateAge(): void {
    this.cat.age = validateAge(this.cat.age);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public update(): void {
    this.dialogRef.close(this.cat);
  }

}
