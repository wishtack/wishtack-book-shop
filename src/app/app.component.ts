import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    bookName = 'eXtreme Programming Explained';
    bookPictureUrlList = [
        'https://robohash.org/xp?set=set4',
        'https://robohash.org/xp1?set=set4',
        'https://robohash.org/xp2?set=set4'
    ];
    isAvailable = false;
    selectedPictureIndex = 0;

    getSelectedPictureUrl() {
        return this.bookPictureUrlList[this.selectedPictureIndex];
    }

    selectNextPicture() {
        this.selectedPictureIndex = (this.selectedPictureIndex + 1) % this.bookPictureUrlList.length;
    }

    selectPictureWithIndex(index) {
        this.selectedPictureIndex = index;
    }

}
