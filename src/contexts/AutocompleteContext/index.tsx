import {createContext, useState, FC, useEffect, useCallback, Dispatch, SetStateAction, ReactNode} from "react";

import { getUsers } from "@src/api/getUsers";
import { UsersDataType } from "@src/types/user";

interface AutocompleteContextProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    usersData: UsersDataType;
    setUsersData: Dispatch<SetStateAction<UsersDataType>>;
    isLoading: boolean;
    isError: boolean;
}

interface AutocompleteProviderProps {
    children: ReactNode;
}

export const AutocompleteContext = createContext<AutocompleteContextProps>({
    searchValue: '',
    setSearchValue: () => {},
    usersData: {
        limit: 0,
        skip: 0,
        total: 0,
        users: [],
    },
    setUsersData: () => {},
    isLoading: false,
    isError: false,
});

export const AutocompleteProvider: FC<AutocompleteProviderProps> = ({children}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [usersData, setUsersData] = useState<UsersDataType>({
        limit: 0,
        skip: 0,
        total: 0,
        users: []
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const getUsersData = useCallback(async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const data = await getUsers(searchValue);
            setUsersData(data);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            console.log(error, 'error while fetching users');
        }
    }, [searchValue])

    useEffect(() => {
        getUsersData()
    }, [getUsersData])

    return (
        <AutocompleteContext.Provider
            value={{
                searchValue,
                setSearchValue,
                usersData,
                setUsersData,
                isLoading,
                isError
            }}
        >
            {children}
        </AutocompleteContext.Provider>
    )
}
