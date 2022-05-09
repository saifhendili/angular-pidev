import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionDetails } from '../models/connection-details';
import { LoginDetails } from '../models/login-details';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public http: HttpClient) {}

  private baseUrl = 'http://localhost:8083';

  authenticate(cd: ConnectionDetails): Observable<LoginDetails> {
    return this.http.post<LoginDetails>(
      this.baseUrl + '/women/user/signin',
      cd
    );
  }

  getUserByEmail(email:String): Observable<User> {
    return this.http.get<User>(
      this.baseUrl + '/women/user/getUserByEmail'+'/'+email
    );
  }

  logout() {
    localStorage.removeItem("loginDetails")
    localStorage.removeItem("token")
    console.log(this.isUserLoggedIn());
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token');
    if (!user || user === '') return false;
    else return true;
  }
}
