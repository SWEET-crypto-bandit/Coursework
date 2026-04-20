async function applyTurnCosts() {
    if (mapVariable === 'desert') {
        if(Player.radiation + 1 < 100) {
            Player.radiation += 2
        } else if (Player.health > 0) {
        Player.health -= 4
        } 
    }
    if (Player.health < 1 && Player.radiation > 99){
            Player.radiation = 80
            hospital()
            return false
        }
    if(Player.food - 1 > 0) {
    Player.food -= 2
    } else if (Player.health - 2 >= 0) {
        Player.health -= 2
    } 
    if (Player.health < 1 && Player.food < 1){
        Player.food = 20
        hospital()
        return false
    }
    upInterface()
    return true
}
