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
// бизнес
    if (mapVariable !== 'director' && mapVariable !== 'snackBar') {
    if (Player.business && typeof Player.business === 'object') {
        if (Player.business.owned === true) {
            if (typeof Player.business.balance !== 'number' || Number.isNaN(Player.business.balance)) {
                Player.business.balance = 0
            }
            Player.business.balance += 50
        }
    } else {
        Player.business = { owned: false, balance: 0 }
    }
}
    upInterface()
    return true
}
