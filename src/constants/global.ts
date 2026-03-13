export const NOOP = () => {};

export const EMPTY_ELEMENT = null;

export const REGEX = {
    accents: /[\u0300-\u036f]/g,
    camelCase: /([a-z0-9])([A-Z])/g,
    spacesAndUnderscores: /[_\s]+/g,
    specialCharacters: /[^a-zA-Z0-9-]/g,
    multipleDashes: /-+/g,
    edgeDashes: /^-|-$/g
} as const;
export const STRING = {
    empty: "",
    space: " ",
    colon: ":"
} as const;
