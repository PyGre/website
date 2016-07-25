import * as moment from 'moment';

// -----------------------------------------------------------------------------

export interface EventJson
{
    id:             string;
    name:           string;
    description:    string;
    start_time:     string; // ISO-8601
    place: {
        id:         string;
        name:       string;
        location: {
            street:         string;
            zip:            string;
            city:           string;
            country:        string;
            latitude:       number;
            longitude:      number;
        };
    };
};

export class Event
{
    getCalendarDay(): string
    {
        return this.start_time.format('DD');
    }
    getMonth(): string
    {
        return this.start_time.format('MMM');
    }
    getStartTime(): string
    {
        return this.start_time.format('LT'); // localized time
    } 

    name:           string;
    description:    string;
    start_time:     moment.Moment;
    location:       Location;
};

// -----------------------------------------------------------------------------

export class Location
{
    name:           string;
    street:         string;
    zip:            string;
    city:           string;
    country:        string;
    latitude:       number;
    longitude:      number;
};
