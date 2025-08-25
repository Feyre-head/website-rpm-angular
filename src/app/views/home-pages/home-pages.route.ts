import { Routes } from '@angular/router';
import { SingleHome4Component } from './single/single-home4/single-home4.component';

export const HOME_PAGES_ROUTES: Routes = [

    {
        path: 'rpm-telecom',
        component: SingleHome4Component,
        data: { title: "Single Home 4" }
    },

];



