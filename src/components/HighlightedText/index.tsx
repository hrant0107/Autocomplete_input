import { FC } from "react";

interface HighlightTextPropsType {
    text: string;
    isHighlighted: boolean;
}

export const HighlightText: FC<HighlightTextPropsType> = ({text, isHighlighted}) => {
    return (
        <span
            className={isHighlighted ? 'highlight' : undefined}
            aria-label={isHighlighted ? `Highlighted: ${text}` : undefined}
        >
            {text}
        </span>
    )
};

HighlightText.displayName = 'HighlightText';
