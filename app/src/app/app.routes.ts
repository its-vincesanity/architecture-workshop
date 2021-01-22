import { Routes } from '@angular/router';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
