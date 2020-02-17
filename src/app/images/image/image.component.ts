import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image, Color } from '../image.model';
import { apiBase } from '../../../environments/urls';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  apiBase = apiBase;
  @Input() image: Image;
  @Output() delete = new EventEmitter();
  ngOnInit() { }
}
