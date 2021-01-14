import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component'



const appRoutes: Routes = [
  
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'index', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'data-list', component: DataListComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
