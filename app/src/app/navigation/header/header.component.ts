import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../app/app.config';
import { UserService } from '../../../app/core/services/user/user.service';
import { IUser } from '../../../../../api/user/user.interface';
import { TTheme } from '../../core/services/theme/theme.type';
import { ThemeService } from '../../core/services/theme/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private readonly userService: UserService,
        private readonly themeService: ThemeService,
    ) {}

    public title: string = APP_CONFIG.title;
    public version: string = APP_CONFIG.version;
    public theme: TTheme = this.themeService.getCurrentTheme();

    public user: IUser | undefined;

    public readonly lightTheme: TTheme = 'light';
    public readonly darkTheme: TTheme = 'dark';

    public toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    private setCurrentUser(): void {
        this.userService.getCurrentUser().subscribe(response => {
        this.user = response;
        });
    }

    ngOnInit(): void {
        this.setCurrentUser();
        this.userService.$update.subscribe((user: IUser) => {
            this.user = user;
        });
        this.themeService.$change.subscribe((theme: TTheme) => {
            this.theme = theme;
        });
    }
}
