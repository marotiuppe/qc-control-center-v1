// authentication.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    localStorage.setItem('token', "sample.response.token");
    const expirationTime = new Date().getTime() + 5 * 1000;
    localStorage.setItem('expirationTime', expirationTime.toString());
    localStorage.setItem('role','Admin');
    // let response:any={
    //   "status":200,
    //   "message":"Success"
    // };
    const url = 'https://dummyjson.com/auth/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 5, // optional
    });
    return this.http.post<any>(url, body, { headers }).pipe(
      tap((response) => {
        // Save token and expiration time in local storage
        localStorage.setItem('token', response.token);
        // const expirationTime = new Date().getTime() + response.expiresIn * 1000;
        const expirationTime = new Date().getTime() + 10 * 1000;
        localStorage.setItem('expirationTime', expirationTime.toString());
        localStorage.setItem('role','Admin');
        console.log(response);
      }),
      catchError((error) => {
        // Handle error
        console.error('Login failed:', error);
        return of(null);
      })
    );
  }

  hasRole(role: string): boolean {
    return localStorage.getItem('role') === role;
    // return true;
  }

  logout(): void {
    // Remove token and expiration time from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
  }

  isAuthenticated(): boolean {
    // Check if token is not expired
    const expirationTime = parseInt(localStorage.getItem('expirationTime') || '0', 10);
    return !!localStorage.getItem('token') && expirationTime > new Date().getTime();
    // return true;
  }
}

// {
    //   "id": 15,
    //   "username": "kminchelle",
    //   "email": "kminchelle@qq.com",
    //   "firstName": "Jeanne",
    //   "lastName": "Halvorson",
    //   "gender": "female",
    //   "image": "https://robohash.org/Jeanne.png?set=set4",
    //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    // }
