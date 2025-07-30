export interface IBlog {
    picture: string;
    title: string;
    description: string;
    tags?: string[];
    category?: string;
    isPublished: boolean;
}