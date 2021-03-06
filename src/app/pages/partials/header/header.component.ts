import { Component } from '@angular/core';

interface Nav {
    link: string,
    name: string,
    exact: boolean
}

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.sass' ]
})
export class HeaderComponent {

    constructor() {
    }

    // boolean for toggle

    mainMenuIsExpanded: boolean = false;
    shopListIsExpanded: boolean = false;
    martialArtIsExpanded: boolean = false;
    strikingIsExpanded: boolean = false;
    grapplingIsExpanded: boolean = false;
    weaponIsExpanded: boolean = false;

    // nav menu list

    shopLists: Nav[] = [
        {
            name: '- SHOP ALL -',
            link: '/shop-all',
            exact: true
        },
        {
            name: 'TEES',
            link: '/tees',
            exact: true
        },
        {   name: 'TANKS',
            link: '/tanks',
            exact: true
        },
        {   name: 'SWEATSHIRTS',
            link: '/sweatshirts',
            exact: true
        },
        {
            name: 'SWEATPANTS',
            link: '/sweatpants',
            exact: true
        },
        {
            name: 'SHORTS',
            link: '/shorts',
            exact: true
        },
        {
            name: 'HATS',
            link: '/hats',
            exact: true
        },
        {
            name: 'JACKETS',
            link: '/jackets',
            exact: true
        }
    ];

    strikingArts: Nav[] = [
        {
            name: 'BOXING',
            link: '/boxing',
            exact: true
        },
        {
            name: 'KARATE',
            link: '/karate',
            exact: true
        },
        {
            name: 'TAEKWONDO',
            link: '/taekwondo',
            exact: true
        },
        {
            name: 'MUAY THAI',
            link: '/muay-thai',
            exact: true
        },
        {
            name: 'SAVATE',
            link: '/savate',
            exact: true
        },
        {
            name: 'SANDA',
            link: '/sanda',
            exact: true
        }
    ];

    grapplingArts: Nav[] = [
        {
            name: 'JUDO',
            link: '/judo',
            exact: true
        },
        {
            name: 'BRAZILIAN JIU-JITSU',
            link: '/brazilian-jiu-jitsu',
            exact: true
        },
        {
            name: 'GRECO ROMAN WRESTLING',
            link: '/greco-roman-wrestling',
            exact: true
        },
        {
            name: 'CHINESE WRESTLING',
            link: '/chinese-wrestling',
            exact: true
        }
    ];

    weaponArts: Nav[] = [
        {
            name: 'SILAT',
            link: '/silat',
            exact: true
        },
        {
            name: 'KALI',
            link: '/kali',
            exact: true
        },
        {
            name: 'ISREAL COMBAT KNIFE',
            link: '/isreal-combat-knife',
            exact: true
        }
    ];

    toggle(expanded) {
        this[ expanded ] = !this[ expanded ];
    }


}
