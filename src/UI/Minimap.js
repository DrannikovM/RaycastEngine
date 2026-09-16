import { Map, mapWidth, mapHeight, getCellSize } from "../Engine/Map.js";

export class Minimap {
    constructor(ctx, canvasWidth) {
        this.ctx = ctx;
        this.cellSize = getCellSize(canvasWidth);
        this.mapSize = canvasWidth * 0.15;
        this.wallColor = '#ffffff';
    }
    
    drawMap() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.mapSize, this.mapSize)

        for (let y = 0; y < mapHeight; y++) {
            for (let x = 0; x < mapWidth; x++) {
                if (Map[y][x] == 1) {
                    this.ctx.fillStyle = this.wallColor;
                    this.ctx.fillRect(
                        x * this.cellSize,
                        y * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }
        }
    }

    drawPlayer(player) {
        if (!player) return;
        const playerSize = 4
        this.ctx.fillStyle = '#f00';
        this.ctx.fillRect(
            player.x - (playerSize / 2),
            player.y - (playerSize / 2),
            playerSize,
            playerSize
        );
    }

    draw(player) {
        this.drawMap();
        this.drawPlayer(player);
    }
}
