import { Minimap } from './UI/Minimap.js'
import { Player } from './Engine/Player.js';
import { mapWidth, mapHeight } from './Engine/Map.js';
import { setupInput } from './Engine/Input.js';
import { RayCaster } from './Engine/Raycaster.js';

const CANVAS = gameCanvas;
const CTX = CANVAS.getContext('2d');

const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

const rayCaster = new RayCaster(CTX, WIDTH, HEIGHT);
const minimap = new Minimap(CTX, 160);
const player = new Player(mapWidth / 2, mapHeight / 2);

setupInput(player);

function gameLoop() {
    CTX.fillStyle = '#1f1f1f';
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    rayCaster.cast(player);
    minimap.draw(player);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);