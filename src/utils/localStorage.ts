export const setLocalStorageItem = <T>(key: string, value: T) => {
    const serializedValue = JSON.stringify(value);

    localStorage.setItem(key, serializedValue);
};

export const getLocalStorageItem = <T>(key: string) => {
    const storedItem = localStorage.getItem(key);

    if (!storedItem) return null;

    return JSON.parse(storedItem) as T;
};

export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();
