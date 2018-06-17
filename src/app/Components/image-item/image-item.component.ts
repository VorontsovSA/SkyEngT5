import {Component, Input, OnInit} from '@angular/core';
import {ImageItem} from '../../Models/ImageItem';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() image: ImageItem;
  constructor() { }

  ngOnInit() {
  }

  popup() {
    window.open(this.image.url, 'Просмотр изображения ' + this.image.title, 'left=0,top=0,fullscreen');
  }
}
