import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { ICat } from '../../../../../../api/cats/cat.interface';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {

    public currentCat: ICat | undefined;
    private catId: string = this.activatedRoute.snapshot.params['id'];

    public loading = false;
    public error = false;

    constructor(
        private readonly catsService: CatsService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly notificationService: NotificationService
    ) {}

    private setCurrentCat(): void {
        this.loading = true;
        if (this.catId !== undefined) {
            this.catsService.getOne(this.catId).subscribe(cat => {
                this.currentCat = cat;
                this.loading = false;
            }, () => {
                this.error = true;
                this.loading = false;
                this.notificationService.notify('actions.get_one.error', {translate: 'cats.one'});
            });
        } else {
            this.notificationService.notify('actions.get_id.error', {translate: 'cats.one'});
            this.error = true;
            this.loading = false;
        }
    }

    ngOnInit(): void {
        this.setCurrentCat();
    }
}
