import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDetailsComponent } from './cat-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CatsService } from '../services/cats.service';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CatDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,

    SharedModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [CatsService]
})
export class CatDetailsModule { }
