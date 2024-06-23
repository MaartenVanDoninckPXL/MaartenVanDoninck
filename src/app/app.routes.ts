import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NgModel} from "@angular/forms";
import {WhoamiComponent} from "./whoami/whoami.component";
import {PlayroomComponent} from "./playroom/playroom.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Maarten\'s Home'},
    {path: 'whoami', component: WhoamiComponent, title: 'Maarten - Who Am I?'},
    {path: 'playroom', component: PlayroomComponent, title: 'Maarten\'s Playroom'}
];
