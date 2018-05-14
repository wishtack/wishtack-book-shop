import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BookModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
