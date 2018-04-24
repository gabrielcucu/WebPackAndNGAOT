import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'
import {AutoCompleteModule} from 'primeng/autocomplete';

import { RouterModule, Routes } from '@angular/router';
import * as _routes from './app.routes'
var routes = _routes.appRoutes;


import { AppComponent }  from './app.component';
import { NavbarComponent } from './Components/navigation/navbar/navbar.component';

import { HomeComponent } from './Components/Home/home.component';
import { FooterComponent } from './Components/footer/footer.component';

import { NotFoundComponent } from './Components/not-found/notfound.component';

//in memmory
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceService } from './services/in-memory-data-service.service';
import { HeroService } from './services/hero-service.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:
   [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataServiceService),
    RouterModule.forRoot(
      routes,{enableTracing:false}
    ),
    MessagesModule,
    MessageModule,
    GrowlModule,
    AutoCompleteModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    NavbarComponent
   ],
   providers:[
    MessageService,
    InMemoryDataServiceService,
    HeroService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
