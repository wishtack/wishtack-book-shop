/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookPreviewComponent,
        BookSearchComponent
    ],
    exports: [
        BookPreviewComponent,
        BookSearchComponent
    ],
    imports: [
        HttpClientModule,
        SharedModule
    ]
})
export class BookModule {
}
