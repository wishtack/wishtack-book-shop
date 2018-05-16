/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Book {

    pictureUrl?: string;
    title?: string;

    constructor(args: Book = {}) {
        this.pictureUrl = args.pictureUrl;
        this.title = args.title;
    }

}
