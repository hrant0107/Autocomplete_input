import { ChangeEvent, FC, useContext, useEffect, useState } from "react";

import { useDebounce } from "@src/hooks/useDebounce";
import { AutocompleteContext } from "@src/contexts/AutocompleteContext";


export const AutocompleteInput: FC = () => {
    const { setSearchValue } = useContext(AutocompleteContext);
    const [value, setValue] = useState<string>('');

    // useDebounce - optimization trick for reducing number of extra requests in typing
    const debouncedValue: string = useDebounce(value, 400)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        setSearchValue(debouncedValue.toLowerCase())
    }, [debouncedValue, setSearchValue])

    return (
        <input
            className="autocomplete__searchInput"
            value={value}
            placeholder="(e.g John Doe)"
            onChange={onInputChange}
        />
    )
};

AutocompleteInput.displayName = 'AutocompleteInput'
