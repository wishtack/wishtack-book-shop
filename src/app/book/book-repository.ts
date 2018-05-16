import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { ListResponse } from '../../lib/list-response';
import { Book } from './book';
import { GoogleVolumeListResponse } from './google-volume-list-response';

@Injectable({
    providedIn: 'root'
})
export class BookRepository {

    private _bookListUrl = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';

    constructor(private _httpClient: HttpClient) {

    }

    getBookList() {
        return this.getBookListWithMeta()
            .pipe(map(bookListResponse => bookListResponse.itemList));
    }

    getBookListWithMeta(): Observable<ListResponse<Book>> {

        return this._httpClient.get<GoogleVolumeListResponse>(this._bookListUrl)
            .pipe(map(googleVolumeListResponse => {

                const itemList = googleVolumeListResponse.items
                    .map(item => new Book({
                        title: item.volumeInfo.title
                    }));

                return {
                    meta: {
                        totalCount: googleVolumeListResponse.totalItems
                    },
                    itemList
                };

            }));

    }

}
