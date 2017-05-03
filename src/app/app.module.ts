import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { ActivityComponent } from './activity/activity.component';
import { LogoComponent } from './logo/logo.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RecentlyPublishedComponent } from './recently-published/recently-published.component';
import { ToDoComponent } from './to-do/to-do.component';
import { UnfinishedProjectsComponent } from './unfinished-projects/unfinished-projects.component';

import {MaterialModule, MdButtonModule, MdCheckboxModule, MdMenuModule} from '@angular/material';
import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    ActivityComponent,
    LogoComponent,
    MenuItemComponent,
    RecentlyPublishedComponent,
    ToDoComponent,
    UnfinishedProjectsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MdButtonModule,
    MdCheckboxModule]
})
export class AppModule { }
//export class MyOwnCustomMaterialModule { }
//export class PizzaPartyAppModule { }
