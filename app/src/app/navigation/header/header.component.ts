import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
import { IUser } from 'src/app/core/services/user/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { HEADER_CONSTANTS } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly userService: UserService,
    ) {}

  public title: string;
  public version: string;
  public mode: string;

  public user: IUser;

  public readonly lightMode = HEADER_CONSTANTS.LIGHT_MODE;
  public readonly darkMode = HEADER_CONSTANTS.DARK_MODE;

  public changeTheme(isLightDesign: boolean): void {
    switch (isLightDesign) {
      case true:
        this.mode = HEADER_CONSTANTS.LIGHT_MODE;
        this.document.body.classList.add('light-theme');
        break;
      case false:
        this.mode = HEADER_CONSTANTS.DARK_MODE;
        this.document.body.classList.remove('light-theme');
        break;
      default:
        this.mode = HEADER_CONSTANTS.DARK_MODE;
        this.document.body.classList.remove('light-theme');
    }

  }

  private setCurrentUser() {
    this.userService.getCurrentUser().subscribe(response => {
      this.user = response;
    });
  }

  ngOnInit(): void {
    this.title = APP_CONFIG.title;
    this.version = APP_CONFIG.version;
    this.mode = HEADER_CONSTANTS.DARK_MODE;

    this.setCurrentUser();

    this.userService.$update.subscribe((user: IUser) => {
      this.user = user;
    });
  }

}
