import { Component, Input } from '@angular/core';
import { Event } from './facebook.types';

@Component({
    selector: 'pygre-event',
    template: `
        <div class="event">
            <div class="event-header">
                <span class="date">{{event.getCalendarDay()}}</span>
                <span class="name">{{event.name}}</span>
            </div>
            <div class="event-body">
                <p class="description">{{event.description}}</p>
            </div>
        </div>
    `
})
export class EventComponent
{
    @Input()
    event: Event;
}
