import { Map, mapHeight, mapWidth } from "./Map.js";

const FOV = Math.PI / 3;
const DEPTH = 20.0;

export class RayCaster {
    constructor(ctx, screenWidth, screenHeight) {
        this.ctx = ctx;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }

    cast(player) {
        for (let x = 0; x < this.screenWidth; x++) {
            const rayAngle = (player.angle - FOV/2) + (x / this.screenWidth) * FOV;
            
            let distanceToWall = 0.0;
            let hitWall = false;

            const eyeX = Math.cos(rayAngle);
            const eyeY = Math.sin(rayAngle);

            while (!hitWall && distanceToWall < DEPTH) {
                distanceToWall += 0.5;

                const testX = (player.x + eyeX*distanceToWall);
                const testY = (player.y + eyeY*distanceToWall);

                if (testX < 0 || testX >= mapWidth || testY < 0 || testY >= mapHeight) {
                    hitWall = true;
                    distanceToWall = DEPTH;
                } else {
                    const gridX = Math.floor(testX);
                    const gridY = Math.floor(testY);

                    if (Map[gridY][gridX] === 1) {
                        hitWall = true;
                    }
                }
            }
            
            let shade;

            if (distanceToWall <= DEPTH / 3) shade = '#fff';
            else if (distanceToWall <= DEPTH / 2) shade = '#c7c7c7';
            else if (distanceToWall <= DEPTH / 1.5) shade = '#737373';
            else shade = '#1f1f1f'

            const ceiling = (this.screenHeight/2.0) - this.screenHeight / distanceToWall;
            const floor = this.screenHeight - ceiling;

            this.ctx.fillStyle = shade;
            this.ctx.fillRect(x, ceiling, 1, floor - ceiling);
        }
    }
}