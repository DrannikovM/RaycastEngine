export function setupInput(player) {
    const moveSpeed = 0.3;

    window.addEventListener("keydown", (e) => {
        if (e.defaultPrevented) return;
    
        switch(e.code) {
            case "KeyS":
            case "ArrowDown":
                player.move(0, moveSpeed);
                break;
            case "KeyW":
            case "ArrowUp":
                player.move(0, -moveSpeed);
                break;
            case "KeyA":
            case "ArrowLeft":
                player.move(-moveSpeed, 0);
                break;
            case "KeyD":
            case "ArrowRight":
                player.move(moveSpeed, 0);
                break;
        }
    });
}