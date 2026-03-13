import { STRING } from "~constants";

export const formatClassName = (classes: (string | undefined)[]) => {
    const filteredClasses = classes.filter((currentClass) => {
        const isUndefined = currentClass === undefined;
        const isEmpty = currentClass?.trim() === STRING.empty;

        return !isUndefined && !isEmpty;
    });

    return filteredClasses.join(STRING.space);
};
