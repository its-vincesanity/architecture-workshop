import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ICatActivityData } from '../../../../../../../api/cats/cat.interface';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TTheme } from '../../../../core/services/theme/theme.type';
import { CAT_ACTIVITY_CONSTANTS } from './cat-activity.constants';
import { IChartOptions } from './interfaces/chart-options';

@Component({
    selector: 'app-cat-activity',
    templateUrl: './cat-activity.component.html',
    styleUrls: ['./cat-activity.component.scss']
})
export class CatActivityComponent implements OnInit, OnDestroy {

    public error = false;
    public loading = false;
    public noData = false;

    public columns: string[] = [];
    public data: Array<(string | number)[]> = [];
    public options: IChartOptions | undefined;
    public type = CAT_ACTIVITY_CONSTANTS.CHART.TYPE;
    private theme: TTheme = this.themeService.getCurrentTheme();
    private themeSubscription: Subscription = new Subscription();

    public dynamicResize = true;
    @Input() public activityData: ICatActivityData = {colums: [], data: []};

    constructor(
        private readonly translateService: TranslateService,
        private readonly themeService: ThemeService,
    ) { }

    public onReady(): void {
        this.loading = false;
    }

    public onError(): void {
        this.loading = false;
        this.error = true;
    }

    private setOptions(): void {
        let options: IChartOptions;
        switch (this.theme) {
            case 'dark':
                options = CAT_ACTIVITY_CONSTANTS.CHART.DARK_THEME_OPTIONS;
                break;
            case 'light':
                options = CAT_ACTIVITY_CONSTANTS.CHART.LIGHT_THEME_OPTIONS;
                break;
            default:
                options = CAT_ACTIVITY_CONSTANTS.CHART.BASE_OPTIONS;
                break;
        }
        this.options = options;
    }

    ngOnInit(): void {
        if (this.activityData.data.length > 0) {
            this.loading = true;
            this.columns = this.activityData.colums.map(
                col => this.translateService.instant(`cats.details.chart.${col}`)
            );
            this.data = this.activityData.data;
            this.setOptions();
            this.themeSubscription = this.themeService.$change.subscribe(theme => {
                this.theme = theme;
                this.setOptions();
            });
        } else {
            this.noData = true;
        }
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }

}
