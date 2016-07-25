import { Component } from '@angular/core';
import { Event } from './facebook.types.ts';

@Component({
    selector: 'pygre-event',
    template: `
        <div class="event">
            <div class="event-header">
                <span class="date">{{getCalendarDay()}}</span>
                <span class="name">{{name}}</span>
            </div>
            <div class="event-body">
                <p class="description">{{description}}</p>
            </div>
        </div>
    `
})
export class EventComponent extends Event
{
    
}
