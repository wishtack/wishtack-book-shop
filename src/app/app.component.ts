import { Component, OnInit } from '@angular/core';
import { Book } from './book/book';
import { BookRepository } from './book/book-repository';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    bookList: Book[];

    ratingInfoList: { book: Book; rating: number }[] = [];

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {
        this.bookList = this._bookRepository.getBookList();
    }

    onRate({book, rating}: { book: Book; rating: number }) {

        const ratingInfo = {
            book,
            rating
        };

        this.ratingInfoList = [...this.ratingInfoList, ratingInfo];

    }

}
