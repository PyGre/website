import { Component } from '@angular/core';
import { EventComponent } from './event.component';

@Component({
    selector: 'pygre-app',
    template: `
    <ul>
        <pygre-event *ngFor='let event in events' model='event'></pygre-event> 
    </ul>
    `,
    directives: [
        EventComponent,
    ]
})
export class AppComponent
{
    
}