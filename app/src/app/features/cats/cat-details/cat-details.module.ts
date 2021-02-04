import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDetailsComponent } from './cat-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CatsService } from '../services/cats.service';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CatActivityModule } from './cat-activity/cat-activity.module';

@NgModule({
  declarations: [CatDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    CatActivityModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [CatsService]
})
export class CatDetailsModule { }
