import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GitHubServiceService } from '../services/git-hub-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  cssData: any;

  constructor(private formBuilder: FormBuilder, private auth: GitHubServiceService,
    private router: Router) {
    if (localStorage.getItem('theme') === 'true') {
      this.cssData = {
        background: 'bg-dark',
        texto: 'text-light'
      };
    } else {
      this.cssData = {
        background: 'bg-primary',
        texto: 'text-dark'
      };
    }
    this.buildForm();
   }

  ngOnInit(): void {
  }

  sendData(event: Event) {
    event.preventDefault();
    this.auth.login(this.form.value.email, this.form.value.password);
  }
  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
