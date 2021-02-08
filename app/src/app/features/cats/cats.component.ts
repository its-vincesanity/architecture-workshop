import { Component, OnInit } from '@angular/core';
import { CatsService } from './services/cats.service';
import { ICat } from '../../../../../api/cats/cat.interface';
import { MatDialog } from '@angular/material/dialog';
import { CatAddDialogComponent } from './dialogs/cat-add-dialog/cat-add-dialog.component';
import { NotificationService } from '../../core/services/notification/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { CatDeleteDialogComponent } from './dialogs/cat-delete-dialog/cat-delete-dialog.component';
import { CatUpdateDialogComponent } from './dialogs/cat-update-dialog/cat-update-dialog.component';

@Component({
    selector: 'app-cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

    public tabelData: MatTableDataSource<ICat> = new MatTableDataSource();

    public loading = false;
    public error = false;
    public noData = false;

    public tableColumns: string[] = ['name', 'age', 'housebroken', 'actions'];

    constructor(
        private readonly catsService: CatsService,
        private readonly notificationService: NotificationService,
        private readonly dialog: MatDialog,
    ) { }

    public addCat(): void {
        this.dialog
            .open(CatAddDialogComponent)
            .afterClosed()
            .subscribe(response => {
            if (response !== undefined) {
                this.loading = true;
                this.catsService.add(response).subscribe(cat => {
                this.tabelData.data.push(cat);
                this.tabelData._updateChangeSubscription();
                this.notificationService.notify('actions.add.success', {item: cat.name});
                this.noData = this.tabelData.data.length === 0;
                this.loading = false;
                }, () => {
                this.notificationService.notify('actions.add.error', {item: response.name});
                this.loading = false;
                });
            }
            });
    }

    public updateCat(update: ICat): void {
        this.dialog
            .open(CatUpdateDialogComponent, {data: update})
            .afterClosed()
            .subscribe(response => {
                if (response !== undefined) {
                    this.loading = true;
                    this.catsService.update(response).subscribe(cat => {
                    this.tabelData.data = this.tabelData.data.map(item => {
                        if (item.id === response.id) {
                        item = response;
                        }
                        return item;
                    });
                    this.tabelData._updateChangeSubscription();
                    this.notificationService.notify('actions.update.success', {item: cat.name});
                    this.loading = false;
                    }, () => {
                    this.notificationService.notify('actions.update.error', {item: response.name});
                    this.loading = false;
                    });
                }
            });
        }

    public deleteCat(cat: ICat): void {
        this.dialog
            .open(CatDeleteDialogComponent, { data: cat})
            .afterClosed()
            .subscribe(response => {
            if (response !== undefined) {
                this.loading = true;
                this.catsService.delete(response.id).subscribe(() => {
                this.tabelData.data = this.tabelData.data.filter(item => item.id !== response.id);
                this.tabelData._updateChangeSubscription();
                this.notificationService.notify('actions.delete.success', {item: response.name});
                this.noData = this.tabelData.data.length === 0;
                this.loading = false;
                }, () => {
                this.notificationService.notify('actions.delete.error', {item: response.name});
                this.loading = false;
                });
            }
            });
    }

    private setCats(): void {
        this.loading = true;
        this.catsService.getAll().subscribe(response => {
        this.tabelData = new MatTableDataSource(response);
        this.noData = this.tabelData.data.length === 0;
        this.loading = false;
        }, () => {
        this.notificationService.notify('actions.get_all.error', {translate: 'cats.all'});
        this.error = true;
        this.loading = false;
        });
    }

    ngOnInit(): void {
        this.setCats();
    }

}
