import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GitHubServiceService } from '../services/git-hub-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  cssData: any;
  constructor(private formBuilder: FormBuilder, private auth: GitHubServiceService) {if (localStorage.getItem('theme') === 'true') {
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
    this.makeForm();
   }

  ngOnInit(): void {
  }

  register(event: Event) {
    event.preventDefault();
    this.auth.register(this.form.value.email, this.form.value.password);
  }

  makeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
