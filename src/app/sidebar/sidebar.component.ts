import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'BGP Features',             icon:'nc-diamond',    class: '' },
    //{ path: '/maps',          title: 'Historico Anomalias',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Anomalias BGP',     icon:'nc-bell-55',    class: '' },
    //{ path: '/user',          title: 'Historico BGP features',      icon:'nc-single-02',  class: '' },
    //{ path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    //{ path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
