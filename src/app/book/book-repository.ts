import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { v } from '@angular/core/src/render3';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { ListResponse } from '../../lib/list-response';
import { Book } from './book';
import { GoogleVolume, GoogleVolumeListResponse } from './google-volume-list-response';

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
            .pipe(map((googleVolumeListResponse: GoogleVolumeListResponse) => {

                const itemList = googleVolumeListResponse.items
                    .map(volume => this._googleVolumeInfoToBook(volume));

                return {
                    meta: {
                        totalCount: googleVolumeListResponse.totalItems
                    },
                    itemList
                };

            }));

    }

    private _googleVolumeInfoToBook(volume: GoogleVolume) {

        const { volumeInfo } = volume;
        const { imageLinks, title }  = volumeInfo;
        let pictureUrl = null;

        if (imageLinks != null) {
            pictureUrl = imageLinks.thumbnail;
        }

        return new Book({
            pictureUrl,
            title
        });

    }

}
