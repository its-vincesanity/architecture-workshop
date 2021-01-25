import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from 'src/app/app.config';
import { ICat } from '../../../../../../api/cats/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private backendUrl = APP_CONFIG.backend;

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getAll(): Observable<ICat[]> {
    return this.http.get<ICat[]>(`${this.backendUrl}/cats`);
  }

  public getOne(id: string): Observable<ICat> {
    return this.http.get<ICat>(`${this.backendUrl}/cats/${id}`);
  }

  public add(cat: ICat): Observable<ICat> {
    return this.http.put<ICat>(`${this.backendUrl}/cats`, cat);
  }

  public update(cat: ICat): Observable<ICat> {
    return this.http.post<ICat>(`${this.backendUrl}/cats/${cat.id}`, cat);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/cats/${id}`);
  }
}
