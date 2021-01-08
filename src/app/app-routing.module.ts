import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UserDetailsComponent } from './user-details/user-details.component'


const appRoutes: Routes = [
  
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'index', component: TableComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
