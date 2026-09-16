export const Map = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]

export const mapWidth = Math.max(...Map.map(row => row.length));
export const mapHeight = Map.length;

export function getCellSize(screenWidth) {
    const mapSize = screenWidth * 0.15;
    return mapSize / Math.max(mapWidth, mapHeight);
}