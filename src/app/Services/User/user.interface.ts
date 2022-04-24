export interface User{
    _id: string;
    name: string;
    password: string;
    email: string;
    phone: string;
    image: string;
    address: string;
}

export interface UserCreate{
    name: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    image: File
}