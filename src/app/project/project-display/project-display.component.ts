import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() imageSource: string = "default";
  @Input() description: string = "Default Description";
  @Input() title: string = "Default Title";
  constructor() { }

  ngOnInit() {
  }

}
