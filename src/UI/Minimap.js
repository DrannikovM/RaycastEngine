import { Map, mapWidth, mapHeight } from "../Engine/Map.js";

export class Minimap {
    constructor(ctx, sizeInPixels = 150) {
        this.ctx = ctx;
        this.sizeInPixels = sizeInPixels;
        this.tileSize = this.sizeInPixels / Math.max(mapWidth, mapHeight);
    }
    
    drawMap() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, mapWidth * this.tileSize, mapHeight * this.tileSize);

        for (let y = 0; y < mapHeight; y++) {
            for (let x = 0; x < mapWidth; x++) {
                if (Map[y][x] == 1) {
                    this.ctx.fillStyle = '#fff';
                    this.ctx.fillRect(
                        Math.floor(x * this.tileSize),
                        Math.floor(y * this.tileSize),
                        Math.ceil(this.tileSize),
                        Math.ceil(this.tileSize)
                    );
                }
            }
        }
    }

    drawPlayer(player) {
        if (!player) return;

        const px = player.x * this.tileSize;
        const py = player.y * this.tileSize;
        const radius = player.radius * this.tileSize;

        this.ctx.fillStyle = '#f00';
        this.ctx.beginPath();
        this.ctx.arc(px, py, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    draw(player) {
        this.drawMap();
        this.drawPlayer(player);
    }
}
