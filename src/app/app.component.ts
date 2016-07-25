import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event.component';
import { Event } from './facebook.types';
import { FacebookService } from './facebook.service';

@Component({
    selector: 'pygre-app',
    template: `
    <h1>Upcoming events:</h1>
    <ul>
        <pygre-event *ngFor='let event of events' [event]='event'></pygre-event> 
    </ul>
    `,
    directives: [
        EventComponent,
    ],
    providers: [
        FacebookService,
    ]
})
export class AppComponent implements OnInit
{
    events: Event[];

    constructor(private facebookService: FacebookService)
    {
    }

    ngOnInit()
    {
        this.loadEvents();
    }

    loadEvents()
    {
        this.facebookService.loadEvents().then(events => this.events = events);
    }

}