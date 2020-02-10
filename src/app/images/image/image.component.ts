import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }
  get totalPopulation() {
    return this.image.colors.reduce((a, b) => a + b.population, 0);
  }
  getPercentage(population: number) {
    return Math.round(population / this.totalPopulation * 100 * 100) / 100;
  }
  getStyle(color: Color) {
    return { width: '100px', height: '100px', 'background-color': `rgb(${color.rgb[0]},${color.rgb[1]}, ${color.rgb[2]}` };
  }
  ngOnInit() { }

}
