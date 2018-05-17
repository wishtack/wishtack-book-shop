import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];

    private _isDead$ = new Subject();

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {
        this._bookRepository.getBookList()
            .pipe(takeUntil(this._isDead$))
            .subscribe(bookList => this.bookList = bookList);
    }

    ngOnDestroy() {
        this._isDead$.next();
    }

}
