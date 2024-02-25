import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LiveActionComponent } from './components/live-action/live-action.component';
import { CategoryComponent } from './components/category/category.component';
import { MasterplaceComponent } from './components/masterplace/masterplace.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { HowItsWorkComponent } from './components/how-its-work/how-its-work.component';
import { PopularCollectionsComponent } from './components/popular-collections/popular-collections.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    LiveActionComponent,
    CategoryComponent,
    MasterplaceComponent,
    AuthorsComponent,
    HowItsWorkComponent,
    PopularCollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
