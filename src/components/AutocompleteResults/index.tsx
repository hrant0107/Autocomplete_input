import { FC, useContext } from "react"

import { AutocompleteContext } from "@src/contexts/AutocompleteContext";

import { UserItem } from "../UserItem";

export const AutocompleteResults: FC = () => {
    const {
        isLoading,
        isError,
        usersData,
    } = useContext(AutocompleteContext);

    if (isError) {
        return (
            <div>
                Something went wrong...
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (usersData.total === 0) {
        return (
            <div>
                No Matches Found!
            </div>
        )
    }

    return (
        <div className="autocomplete__results">
            {usersData.users.map(({ id, firstName, lastName, username }) => (
                <UserItem key={id} name={`${firstName} ${lastName} (${username})`} />
            ))}
        </div>
    )
};

AutocompleteResults.displayName = 'AutocompleteResults';

