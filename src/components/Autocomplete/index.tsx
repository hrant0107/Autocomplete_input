import { FC } from "react";

import { AutocompleteProvider } from "@src/contexts/AutocompleteContext";

import { AutocompleteInput } from "../AutocompleteInput";
import { AutocompleteResults } from "../AutocompleteResults";

export const Autocomplete: FC = () => {
    return (
        <AutocompleteProvider>
            <div className="autocomplete">
                <h2 className="autocomplete__title">
                    All names comes from 'DUMMYJSON API Service', type something inside text input
                </h2>

                <AutocompleteInput />

                <AutocompleteResults />
            </div>
        </AutocompleteProvider>
    )
}

Autocomplete.displayName = 'Autocomplete'