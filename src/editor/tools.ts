export function applyPaint(
    grid: number[][],
    x: number,
    y: number,
    tileId: number
) {
    if (!grid[y] || grid[x] === undefined) return;
    grid[y][x] = tileId;
}

export function applyErase(
    grid: number[][],
    x: number,
    y: number
) {
    if (!grid[y] || grid[x] === undefined) return;
    grid[y][x] = 0;
}