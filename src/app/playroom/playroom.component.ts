import { Component } from '@angular/core';
import {ConstructionComponent} from "../construction/construction.component";

@Component({
  selector: 'app-playroom',
  standalone: true,
    imports: [
        ConstructionComponent
    ],
  templateUrl: './playroom.component.html',
  styleUrl: './playroom.component.css'
})
export class PlayroomComponent {

}
