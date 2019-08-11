import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mapper',
    templateUrl: './mapper.component.html',
    styleUrls: ['./mapper.component.scss']
})
export class MapperComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('init');
    }
}
