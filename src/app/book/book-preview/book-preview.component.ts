import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {

    @Input() book: Book;
    @Output() rate = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    like() {
        this.rate.emit(5);
    }

    dislike() {
        this.rate.emit(0);
    }

}
