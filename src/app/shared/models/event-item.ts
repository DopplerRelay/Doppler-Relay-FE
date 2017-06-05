import { ApiEventItem } from "app/shared/models/api/api-event-item-collection";

export class EventItem {

    constructor(apiEventItem: ApiEventItem) {
        this.clicks = apiEventItem.clicks;
        this.from = apiEventItem.from;
        this.hours = apiEventItem.hours;
        this.openings = apiEventItem.openings;
        this.opens = apiEventItem.opens;
        this.to = apiEventItem.to;
    }

    from: Date;
    to: Date;
    hours: number;
    opens: number;
    openings: number;
    clicks: number;    
}