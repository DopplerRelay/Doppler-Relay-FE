export interface ApiEventItem {
    from: Date;
    to: Date;
    hours: number;
    opens: number;
    openings: number;
    clicks: number;
}

export interface ApiEventItemCollection {
    items: ApiEventItem[];
}