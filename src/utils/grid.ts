export function screenToGrid(
    mouseX: number,
    mouseY: number,
    tileSize: number
){
    return {
        x: Math.floor(mouseX / tileSize),
        y: Math.floor(mouseY / tileSize)
    };
}