import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component'



const appRoutes: Routes = [
  
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'index', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
