import { Component, OnInit } from '@angular/core';
import { Screentest1Service } from './screentest1.service';

@Component({
  selector: 'app-screentest1',
  templateUrl: './screentest1.component.html',
  styleUrls: ['./screentest1.component.scss'],
})

export class Screentest1Component implements OnInit {

    constructor (
        private screentest1Service: Screentest1Service,
    ) { }

    ngOnInit() {
    }
}