export interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
}

export interface UsersDataType {
    limit: number;
    total: number;
    skip: number;
    users: UserType[];
}