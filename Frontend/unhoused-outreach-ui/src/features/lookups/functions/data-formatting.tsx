export function getCsvList(ids: number[], lookup: Record<number, string>) {
    if (ids.length === 0) {
        return 'None';
    }
    return ids.map(id => lookup[id]).join(', ');
}