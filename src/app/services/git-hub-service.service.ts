import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {
  isLoggedIn: boolean;
  constructor(private auth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.isLoggedIn = false;
        localStorage.setItem('user', null);
      }
    })
  }

  getUser(user: string): Observable<any> {
    const URL = `https://api.github.com/users/${user}`;
    return this.http.get(URL);
  }

  async login(email: string, password: string) {
    await  this.auth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.user));
    }).finally(() => {
      this.isLoggedIn = true;
    });
    this.router.navigate(['/search']);
  }

  register(email: string, password: string) {
    this.auth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Usuario creado');
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
      alert('Usuario existente');
    });
  }

  async logout() {
    await this.auth.auth.signOut().then(() => {
      localStorage.setItem('user', null);
    });
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
