export interface Member{
    _id: string;
    name: string;
    relation: string;
    permissions: boolean;
    image: string;
}

export interface AddMember{
    name: string;
    userId: string;
    relation: string;
    permissions: boolean;
    image: File
}