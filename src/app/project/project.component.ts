import { Component, OnInit } from '@angular/core';
import {ProjectDisplayComponent} from './project-display/project-display.component';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: number[] = [1, 2, 3]; // ProjectDisplayComponent[] = [];
  images: string[] = ["./images/kitten1.png", "./images/picography-lab-puppy-dog.png", "./images/kitten2.png"];
  descriptions: string[] = ["This site is my current personal project. Since I learned a bit about Angular and JavaScript during my internship last summer I decided to build my own website. Progress is slow, and it certainly doesn’t look as pretty as it would if I used a website builder. But creating it myself is satisfying, and I’m learning so please recognize it as a WIP by a game programmer."
  , "I co-designed and created an app to classify customer feedback using machine learning while interning at Fidelity Investments. This was an awesome project because I learned a bit more about machine learning, and got a crash course in full-stack development including Angular, CSS, Python, and Django REST framework"
  , "This is an educational game for 1st to 3rd graders targeting food allergy awareness created with a team at Champlain College. I created project specific tools in Unity and did some light scripting for the designers."
  ];
  titles: string[] = ["My Portfolio Site",
  "Machine Learning"
  , "Lunch Rush"];
  // The above should be loaded some better way.

}
