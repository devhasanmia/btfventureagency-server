export interface ITeam {
    picture?: string;
    name: string;
    email: string;
    designation: string;
    bio: string;
    socials?: {
        facebook?: string;
        linkedin?: string;
        twitter?: string;
        telegram?: string;
        discord?: string;
        github?: string;
        website?: string;
    };
}
