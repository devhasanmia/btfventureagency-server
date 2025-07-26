export interface IRecentlyWorking {
    picture: string;
    name: string;
    description: string;
    launch: string;
    status: 'Live' | 'Upcoming'
    link?: string;
}
