import { Component } from '@angular/core';
import {PlayroomComponent} from "../playroom/playroom.component";
import {ConstructionComponent} from "../construction/construction.component";

@Component({
  selector: 'app-whoami',
  standalone: true,
    imports: [
        PlayroomComponent,
        ConstructionComponent
    ],
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.css'
})
export class WhoamiComponent {

}
