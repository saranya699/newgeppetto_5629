import { Component, OnInit } from '@angular/core';
import { Screentest2Service } from './screentest2.service';

@Component({
  selector: 'app-screentest2',
  templateUrl: './screentest2.component.html',
  styleUrls: ['./screentest2.component.scss'],
})

export class Screentest2Component implements OnInit {

    constructor (
        private screentest2Service: Screentest2Service,
    ) { }

    ngOnInit() {
    }
}