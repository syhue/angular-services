import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ListComponent } from './components/list/list.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { TableService } from './shared/services/table.services';
import { StorageService } from './shared/services/storage.service';
import { AuthService } from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserDetailsComponent,
    ShortenPipe,
    FilterPipe,
    ListComponent,
    LoginComponent,
    MainComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MatListModule,
    FormsModule,
  ],
  providers: [TableService, StorageService, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
