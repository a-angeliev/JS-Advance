function solve(face, suit){
    faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K", "A"]
    suits = {
        S:"♠",
        H:"♥",
        D:"♦",
        C:"♣",
    }

    if(!faces.includes(face) || !suits[suit]){
        throw new Error
    }
    return {
        face,
        suit,
        toString(){
            return `${this.face}${suits[this.suit]}`
        },
    }
}

let a = solve("1", "C")
a.toString()