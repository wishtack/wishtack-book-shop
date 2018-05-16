import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookRepository } from '../book-repository';


export interface GoogleVolumeListResponse {
    totalItems: number;
    items: Array<{
        volumeInfo: {
            title: string;
        }
    }>;
}

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];
​

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {

        this._bookRepository.getBookList()
            .subscribe(bookList => this.bookList = bookList);

    }

}
