import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Session } from '../model/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly API_URL = environment.api_url;
  constructor(private htpp: HttpClient) {}

  getAllSession(): Observable<Session[]> {
    return this.htpp.get<Session[]>(`${this.API_URL}/sessions`);
  }
}
