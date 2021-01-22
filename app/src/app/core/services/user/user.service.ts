import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APP_CONFIG } from 'src/app/app.config';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;
  public $update: Subject<IUser> = new Subject();

  private backendUrl = APP_CONFIG.backend;

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.backendUrl}/user`);
  }

  public updateUser(user: IUser) {
    return this.http
      .post<IUser>(`${this.backendUrl}/user`, user)
      .pipe(
        tap((user: IUser) => this.$update.next(user))
      )
  }
}
