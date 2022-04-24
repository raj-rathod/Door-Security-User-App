export interface Notifications{
    name: string;
    _id: string;
    date: Date;
    isReaded: boolean;
    yourAction: boolean;
    image: string
}

export interface NotificationUpdate{
    id: string | undefined;
    update:{
        yourAction: boolean;
        isReaded: boolean
    }
}