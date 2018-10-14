import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  // Neither of these are working right now
  @Input() imageSource: string = "default";
  @Input() description: string = "Default Description";

  constructor() { }

  ngOnInit() {
  }

}
