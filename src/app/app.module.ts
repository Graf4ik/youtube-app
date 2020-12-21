import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './services/search.pipe';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './shared/Components/header/header.component';
import { FooterComponent } from './shared/Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HomeComponent,
    FavoritesComponent,
    HeaderComponent,
    FooterComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
