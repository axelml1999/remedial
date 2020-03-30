import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { EmperadorGuard } from './guards/emperador.guard';
import { EmperadorLoginGuard } from './guards/emperador-login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [EmperadorLoginGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [EmperadorGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
