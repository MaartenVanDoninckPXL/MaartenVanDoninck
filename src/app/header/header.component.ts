import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    styleUrl: './header.component.css'
})
export class HeaderComponent{
}
