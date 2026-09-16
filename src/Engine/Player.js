export class Player {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    updatePlayerPosition(x, y) {
        this.x += x;
        this.y -= y;
    }
}