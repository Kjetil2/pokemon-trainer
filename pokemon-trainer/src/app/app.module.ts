import { AppRoutingMoudle } from './ap-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,   
    LoginPage,
    TrainerComponent,
    CatalogueComponent,
    LoginFormComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingMoudle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
