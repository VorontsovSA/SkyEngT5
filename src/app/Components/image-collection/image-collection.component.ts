import { Component, OnInit } from '@angular/core';
import {ImageItem} from '../../Models/ImageItem';
import {ajax} from 'rxjs/observable/dom/ajax';

const LIMIT = 9;

@Component({
  selector: 'app-image-collection',
  templateUrl: './image-collection.component.html',
  styleUrls: ['./image-collection.component.css']
})
export class ImageCollectionComponent implements OnInit {
  start = 4988;
  isLoading = false;
  showButton = true;
  loadedImages: ImageItem[] = [];

  constructor() { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    ajax('https://jsonplaceholder.typicode.com/photos?_start=' + this.start + '&_limit=' + LIMIT)
      .subscribe(data => this.handleData(data));
  }

  handleData(data) {
    if (data.response.length < LIMIT) {
      this.showButton = false;
    }
    for (let row of data.response) {
      this.loadedImages.push({
        albumId: row.albumId,
        id: row.id,
        title: row.title,
        url: row.url,
        thumbnailUrl: row.thumbnailUrl
      });
    }
    this.start += LIMIT;
    this.isLoading = false;
  }
}
