import { Component } from '@angular/core';
import { Book } from './book/book';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    bookList = [
        new Book({
            title: 'eXtreme Programming Explained'
        }),
        new Book({
            title: 'ReWork'
        })
    ];

    ratingInfoList: { book: Book; rating: number }[] = [];

    onRate({book, rating}: { book: Book; rating: number }) {

        const ratingInfo = {
            book,
            rating
        };

        this.ratingInfoList = [...this.ratingInfoList, ratingInfo];

    }

}
