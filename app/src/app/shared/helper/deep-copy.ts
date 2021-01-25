export function deepCopy<T>(item: any): T {
    return Object.assign({}, item) as T;
}
