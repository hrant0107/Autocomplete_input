import { FC, useContext } from "react"

import { AutocompleteContext } from "@src/contexts/AutocompleteContext";
import { divideTextBySearchValue } from "@src/utils/divideTextBySearchValue";

import { HighlightText } from "../HighlightedText";

interface UserItemProps {
    name: string;
}

export const UserItem: FC<UserItemProps> = ({ name }) => {
    const { searchValue } = useContext(AutocompleteContext);
    const textPieces: string[] = divideTextBySearchValue({ text: name, searchValue });

    return (
        <div className="autocomplete__results__item">
            {textPieces.map((text, i) => (
                <HighlightText
                    key={`${text}_${i}`}
                    text={text}
                    isHighlighted={text.toLowerCase() === searchValue.toLowerCase()}
                />
            ))}
        </div>
    )
}

UserItem.displayName = 'UserItem';
