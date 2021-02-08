import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { UserProfileModule } from './features/user-profile/user-profile.module';
import { CatsModule } from './features/cats/cats.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTES),
        CoreModule,

        NavigationModule,
        CatsModule,
        UserProfileModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
