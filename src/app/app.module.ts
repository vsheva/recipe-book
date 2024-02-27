import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
import {LoggingService} from "./logging.service";
import { StoreModule } from '@ngrx/store';
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//!
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({}, {}), //!
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
