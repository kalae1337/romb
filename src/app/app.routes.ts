import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RhombusComponent } from './rhombus/rhombus.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '',  redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'rhombus', component: RhombusComponent}
];
