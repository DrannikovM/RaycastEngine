import {Minimap} from './UI/Minimap.js'

const CANVAS = gameCanvas;
const CTX = CANVAS.getContext('2d');

const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

var minimap = new Minimap(CTX, WIDTH);

function gameLoop() {
    CTX.fillStyle = '#1f1f1f';
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    minimap.drawMap();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);