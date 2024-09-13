import { UsersDataType } from "../types/user"
import { fetcher } from "./fetcher"

export const getUsers = (param: string): Promise<UsersDataType> => {
    return fetcher<UsersDataType>(`users/search?q=${param}`)
}