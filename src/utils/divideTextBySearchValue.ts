type DivideTextHandlerArguments = {
    text: string,
    searchValue: string
}
export const divideTextBySearchValue = ({text, searchValue}: DivideTextHandlerArguments): string[] => {
    return text.split(new RegExp(`(${searchValue})`, 'gi'));
}