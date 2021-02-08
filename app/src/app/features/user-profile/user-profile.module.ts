import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [UserProfileComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        SharedModule,

        MatInputModule,
        MatButtonModule,
    ]
})
export class UserProfileModule { }
