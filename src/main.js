import {Minimap} from './UI/Minimap.js'
import {Player} from './Engine/Player.js';
import { mapWidth, mapHeight, getCellSize} from './Engine/Map.js';
import { setupInput } from './Engine/Input.js';

const CANVAS = gameCanvas;
const CTX = CANVAS.getContext('2d');

const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

var minimap = new Minimap(CTX, WIDTH);
var player = new Player(
    (mapWidth / 2) * getCellSize(WIDTH),
    (mapHeight / 2) * getCellSize(WIDTH)
);

setupInput(player);

function gameLoop() {
    CTX.fillStyle = '#1f1f1f';
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    minimap.draw(player);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);