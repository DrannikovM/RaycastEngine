export function setupInput(player) {
    const moveSpeed = 0.3;
    const angleStep = 0.1;

    window.addEventListener("keydown", (e) => {
        if (e.defaultPrevented) return;
    
        switch(e.code) {
            case "KeyS":
            case "ArrowDown":
                player.moveForward(-moveSpeed);
                break;
            case "KeyW":
            case "ArrowUp":
                player.moveForward(moveSpeed);
                break;
            case "KeyA":
            case "ArrowLeft":
                player.strafe(-moveSpeed);
                break;
            case "KeyD":
            case "ArrowRight":
                player.strafe(moveSpeed);
                break;
            case "KeyQ":
                player.rotate(-angleStep);
                break;
            case "KeyE":
                player.rotate(angleStep);
                break;
        }
    });
}