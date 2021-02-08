import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { validateAge } from '../../helper/validate-age';
import { ICat } from '../../../../../../../api/cats/cat.interface';

@Component({
    selector: 'app-cat-add-dialog',
    templateUrl: './cat-add-dialog.component.html',
    styleUrls: ['./cat-add-dialog.component.scss']
})
export class CatAddDialogComponent {

    public newCat: ICat = {
        id: Math.random().toString(36).substr(2, 9),
        name: '',
        age: 1,
        housebroken: true,
        profilePictureUrl: null,
        activityData: { colums: [], data: [] }
    };

    constructor(
        public dialogRef: MatDialogRef<CatAddDialogComponent>
    ) { }

    public validateAge(): void {
        this.newCat.age = validateAge(this.newCat.age);
    }

    public close(): void {
        this.dialogRef.close();
    }

    public add(): void {
        this.dialogRef.close(this.newCat);
    }

}
