import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../services/git-hub-service.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nameUser: FormControl;
  userData: any;
  cssData: any;

  constructor(protected auth: GitHubServiceService) {
    this.userData = null;
    this.nameUser = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.checkTheme();
   }

  ngOnInit(): void {
  }

  checkTheme() {
    if (localStorage.getItem('theme') === 'true') {
      this.cssData = 'row maximo bg-dark ';
    } else {
      this.cssData = 'row maximo bg-primary ';
    }
  }

  changeTheme() {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'true');
    } else {
      if (localStorage.getItem('theme') === 'true') {
        localStorage.setItem('theme', 'false');
      } else {
        localStorage.setItem('theme', 'true');
      }
    }
    this.checkTheme();
  }

  logout() {
    this.auth.logout();
  }

  search() {
    this.auth.getUser(this.nameUser.value).toPromise().then((res) => {
      console.log(res);
      this.userData = res;
    }).catch((err) => {
      alert('El usuario no existe');
      console.log(err);
      this.userData = null;
    });
  }
}
