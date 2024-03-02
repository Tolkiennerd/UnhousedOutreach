export function getCsvList(ids: number[], lookup: Record<number, string>) {
    if (ids.length === 0) {
        return 'None';
    }
    return ids.map(id => lookup[id]).join(', ');
}

export function getLookupValue(id: number | undefined, lookup: Record<number, string>): string | undefined {
    if (!id) {
        return undefined;
    }
    return lookup[id];
}

export function getLookupString(id: number | undefined, lookup: Record<number, string>, defaultValue: string = 'Unknown'): string {
    if (!id) {
        return defaultValue;
    }
    return lookup[id];
}