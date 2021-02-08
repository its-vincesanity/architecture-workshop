import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomethingWentWrongComponent } from './components/something-went-wrong/something-went-wrong.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { TitlePipe } from './pipes/title.pipe';

@NgModule({
    declarations: [
        SomethingWentWrongComponent,
        LoadingComponent,
        NoDataFoundComponent,
        TitlePipe,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        TranslateModule
    ],
    exports: [
        SomethingWentWrongComponent,
        LoadingComponent,
        NoDataFoundComponent,
    ],
})
export class SharedModule { }
