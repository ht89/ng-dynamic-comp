import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicService } from './dynamic/dynamic.service';


@NgModule({
    declarations: [
        AppComponent,
        DynamicComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [DynamicService],
    bootstrap: [AppComponent],
    //  specify components that should be compiled when this module is defined
    entryComponents: [DynamicComponent]
})
export class AppModule { }
