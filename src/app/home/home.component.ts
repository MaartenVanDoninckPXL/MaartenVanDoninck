import {Component} from '@angular/core';
import {ConstructionComponent} from "../construction/construction.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ConstructionComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
