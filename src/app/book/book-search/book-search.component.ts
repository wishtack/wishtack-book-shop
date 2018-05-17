import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, map, shareReplay } from 'rxjs/operators';

import { Book } from '../book';
import { BookRepository } from '../book-repository';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

    bookCount$: Observable<number>;
    bookList$: Observable<Book[]>;
    error: Error;

    constructor(private _bookRepository: BookRepository) {
        this._initializeObservables();
    }

    retry() {
        this._initializeObservables();
    }

    private _initializeObservables() {

        this.error = null;

        this.bookList$ = this._bookRepository.getBookList()
            .pipe(
                catchError(error => {
                    this.error = error;
                    return EMPTY;
                }),
                finalize(() => {
                    console.log('Done!');
                }),
                shareReplay(1)
            );

        this.bookCount$ = this.bookList$
            .pipe(
                map(bookList => bookList.length)
            );

    }

}
