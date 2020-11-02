import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app.routing';
import {AppComponent} from './app.component';

import {MainModule} from './main/main.module';
import {AccessModule} from './access/access.module';
import {HeaderModule} from './header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        MainModule,
        AccessModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
