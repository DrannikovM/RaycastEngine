import { Map, mapWidth, mapHeight } from './Map.js';

export class Player {
    constructor(x, y, angle = 0) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.radius = 0.25;
    }

    isWall(x, y) {
        if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) return true;
        return Map[Math.floor(y)][Math.floor(x)] !== 0;
    }

    moveForward(speed) {
        const dx = Math.cos(this.angle) * speed;
        const dy = Math.sin(this.angle) * speed;
        this.move(dx, dy);
    }

    strafe(speed) {
        const dx = Math.cos(this.angle + Math.PI / 2) * speed;
        const dy = Math.sin(this.angle + Math.PI / 2) * speed;
        this.move(dx, dy);
    }

    move(dx, dy) {
        const newX = this.x + dx;
        const newY = this.y + dy;

        const paddingX = dx > 0 ? this.radius : -this.radius;
        if (!this.isWall(newX + paddingX, this.y)) {
            this.x = newX;
        }

        const paddingY = dy > 0 ? this.radius : -this.radius;
        if (!this.isWall(this.x, newY + paddingY)) {
            this.y = newY;
        }
    }
    
    rotate(angle) {
        this.angle += angle;

        if (this.angle < 0) this.angle += Math.PI * 2;
        if (this.angle >= Math.PI * 2) this.angle -= Math.PI * 2;
    }
}