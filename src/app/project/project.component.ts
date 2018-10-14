import { Component, OnInit } from '@angular/core';
import {ProjectDisplayComponent} from './project-display/project-display.component';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: number[] = [1, 2, 3];//ProjectDisplayComponent[] = [];
  images: string[] = ["src", "src2", "src3"];
  descriptions: string[] = ["Desc 1", "Desc 2", "Desc 3"];
  // The above two should be loaded some better way.
  constructor() { }

  // Load a project display component for each image + description.
  

  ngOnInit() {
  }

}
