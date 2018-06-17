import { Component, OnInit } from '@angular/core';
import {ImageItem} from '../../Models/ImageItem';
import {ajax} from 'rxjs/observable/dom/ajax';

@Component({
  selector: 'app-image-collection',
  templateUrl: './image-collection.component.html',
  styleUrls: ['./image-collection.component.css']
})
export class ImageCollectionComponent implements OnInit {
  limit = 9;
  start = 0;
  isLoading = false;
  loadedImages: ImageItem[];

  constructor() { }

  ngOnInit() {
    this.loadedImages = [];
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    ajax('https://jsonplaceholder.typicode.com/photos?_start=' + this.start + '&_limit=' + this.limit)
      .subscribe(data => this.handleData(data));
  }

  handleData(data) {
    for (let row of data.response) {
      console.log(this.loadedImages);
      this.loadedImages.push({
        albumId: row.albumId,
        id: row.id,
        title: row.title,
        url: row.url,
        thumbnailUrl: row.thumbnailUrl
      });
    }
    this.start += 9;
    this.isLoading = false;
  }
}
