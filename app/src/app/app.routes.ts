import { Routes } from '@angular/router';
import { CatDetailsComponent } from './features/cats/cat-details/cat-details.component';
import { CatsComponent } from './features/cats/cats.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

export const APP_ROUTES: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: '',
        component: CatsComponent,
    },
    {
        path: 'cat/:id',
        component: CatDetailsComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
