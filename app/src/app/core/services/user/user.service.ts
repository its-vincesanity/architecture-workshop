import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APP_CONFIG } from '../../../app.config';
import { IUser } from '../../../../../../api/user/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public $update: Subject<IUser> = new Subject();

    private backendUrl = APP_CONFIG.backend;

    constructor(
        private readonly http: HttpClient,
    ) {}

    public getCurrentUser(): Observable<IUser> {
        return this.http.get<IUser>(`${this.backendUrl}/user`);
    }

    public updateUser(currentUser: IUser): Observable<IUser> {
        return this.http
        .post<IUser>(`${this.backendUrl}/user`, currentUser)
        .pipe(
            tap((user: IUser) => this.$update.next(user))
        );
    }
}
