import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { CatDetailsModule } from './cat-details/cat-details.module';
import { CatsService } from './services/cats.service';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { CatDeleteDialogComponent } from './dialogs/cat-delete-dialog/cat-delete-dialog.component';
import { CatAddDialogComponent } from './dialogs/cat-add-dialog/cat-add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CatUpdateDialogComponent } from './dialogs/cat-update-dialog/cat-update-dialog.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CatsComponent,
    CatDeleteDialogComponent,
    CatAddDialogComponent,
    CatUpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    CatDetailsModule,

    SharedModule,

    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [CatsService]
})
export class CatsModule {}
