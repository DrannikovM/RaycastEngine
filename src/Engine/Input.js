export function setupInput(player) {
    window.addEventListener("keydown", (e) => {
        if (e.defaultPrevented) return;
    
        switch(e.code) {
            case "KeyS":
            case "ArrowDown":
                player.updatePlayerPosition(0, -1);
                break;
            case "KeyW":
            case "ArrowUp":
                player.updatePlayerPosition(0, 1);
                break;
            case "KeyA":
            case "ArrowLeft":
                player.updatePlayerPosition(-1, 0);
                break;
            case "KeyD":
            case "ArrowRight":
                player.updatePlayerPosition(1, 0);
                break;
        }
    });
}