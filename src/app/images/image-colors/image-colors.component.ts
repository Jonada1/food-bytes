import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../image.model';

@Component({
  selector: 'app-image-colors',
  templateUrl: './image-colors.component.html',
  styleUrls: ['./image-colors.component.scss'],
})
export class ImageColorsComponent implements OnInit {

  @Input() colors: Color[]

  get totalPopulation() {
    return this.colors.reduce((a, b) => a + b.population, 0);
  }

  getPercentage(population: number) {
    return Math.round(population / this.totalPopulation * 100 * 100) / 100;
  }

  getStyle(color: Color) {
    // tslint:disable-next-line: max-line-length
    return { width: '20px', height: '20px', 'background-color': `rgb(${color.rgb[0]},${color.rgb[1]}, ${color.rgb[2]}`};
  }

  ngOnInit() { }

}
