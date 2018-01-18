import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AuthenticationResponse} from './AuthenticationResponse';

@Injectable()
export class AuthenticationService {
  private authUrl = 'http://localhost:8080/auth';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Boolean> {
    return this.http.post<AuthenticationResponse>(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
      .map(response => {
        let token = response.token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}))
          return true;
        } else {
          return false;
        }
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
    var token: String = this.getToken();
    return token && token.length>0;
  }
}
