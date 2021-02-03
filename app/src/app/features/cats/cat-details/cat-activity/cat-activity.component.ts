import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICatActivityData } from '../../../../../../../api/cats/cat.interface';
import { CAT_ACTIVITY_CONSTANTS } from './cat-activity.constants';

@Component({
  selector: 'app-cat-activity',
  templateUrl: './cat-activity.component.html',
  styleUrls: ['./cat-activity.component.scss']
})
export class CatActivityComponent implements OnInit {

  public columns: string[] = [];
  public data: Array<(string | number)[]> = [];
  public options = CAT_ACTIVITY_CONSTANTS.CHART.OPTIONS;
  public type = CAT_ACTIVITY_CONSTANTS.CHART.TYPE;

  public dynamicResize = true;
  @Input() public activityData: ICatActivityData;

  constructor(private readonly translateService: TranslateService) { }

  ngOnInit(): void {
    this.columns = this.activityData.colums.map(
      col => this.translateService.instant(`cats.details.chart.${col}`)
    );
    this.data = this.activityData.data;
  }

}
