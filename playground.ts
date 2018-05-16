/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

interface ListResponse<T> {
    meta: {
        totalCount: number
    };
    itemList: T[];
}

class BookRepository {

    getBookList(): Observable<ListResponse<Book>> {
        return of({
            meta: {
                totalCount: 100
            },
            itemList: [
                new Book(),
                new Book()
            ]
        });
    }

}

new BookRepository().getBookList()
    .subscribe(bookListResponse => {
        const bookCount = bookListResponse.meta.totalCount;
        const bookList = bookListResponse.itemList;
    });
