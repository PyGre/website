import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Event, EventJson } from './facebook.types.ts';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Injectable()
export class FacebookService
{
    private url: string;
    constructor(private http: Http)
    {
        this.url = 'http://pi3.fortyseveneffects.com:8000';
    }

    loadEvents(): Promise<Array<Event>>
    {
        return this.fetchData()
                .then(response => this.handleResponse(response))
                .catch((error) => {
                    console.log('Failed to load events: ' + error.message);
                })
    }
    private fetchData(): Promise<Response>
    {
        const mock = true;
        return mock ? this.mockFacebookApi() 
                    : this.http.get(this.url).toPromise();
    }
    private mockFacebookApi(): Promise<Response>
    {
        const jsonMock = `[
            {
                "start_time": "2016-07-23T15:00:00+0200",
                "id": "1796706637282684",
                "place": {
                "name": "Pain et cie",
                "location": {
                    "latitude": 45.192009,
                    "country": "France",
                    "longitude": 5.7296901,
                    "street": "1Bis Rue Lafayette, 38000 Grenoble",
                    "city": "Grenoble",
                    "zip": "38000"
                },
                "id": "218936628226271"
                },
                "attending": 1,
                "description": "Testing the Facebook Graph API, not an actual event.",
                "interested": 0,
                "name": "Test"
            }
        ]`;
        const responseOpts = new ResponseOptions({
            body: jsonMock,
            status: 200,
            url: this.url,
        })
        return Promise.resolve(new Response(responseOpts));
    }
    private handleResponse(response: Response): Promise<Array<Event>>
    {
        return new Promise((resolve, reject) => {
            const data: Array<EventJson> = response.json();
            let events = [];
            for (let entry of data)
            {
                const event = new Event();
                event.name                  = entry.name;
                event.description           = entry.description;
                event.start_time            = moment(entry.start_time);
                Object.assign(event.location, entry.place.location, entry.place.name);
                events.push(event);
            }
            resolve(events);
        });
    }
}
