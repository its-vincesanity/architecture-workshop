export function deepCompare<T>(item: T, target: T): boolean {
    return JSON.stringify(item) === JSON.stringify(target);
}
