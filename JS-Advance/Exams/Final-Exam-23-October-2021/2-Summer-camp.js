class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.lastOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    for (let el of this.lastOfParticipants) {
      if (el.name == name) {
        return `The ${name} is already registered at the camp.`;
      }
    }
    for (let el in this.priceForTheCamp) {
      if (el == condition) {
        let campPrice = this.priceForTheCamp[el];
        if (campPrice <= money) {
          this.lastOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0,
          });
          return `The ${name} was successfully registered.`;
        } else {
          return `The money is not enough to pay the stay at the camp.`;
        }
      }
    }
    throw new Error("Unsuccessful registration at the camp.");
  }

  unregisterParticipant(name) {
    console.log(this.lastOfParticipants);
    for (let i = 0; i < this.lastOfParticipants.length; i++) {
      if (this.lastOfParticipants[i].name == name) {
        this.lastOfParticipants.splice(i, 1);
        console.log(this.lastOfParticipants);
        return `The ${name} removed successfully.`;
      }
    }
    throw new Error(`The ${name} is not registered in the camp.`);
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let names = [];
    for (let el of this.lastOfParticipants) {
      names.push(el.name);
    }
    if (typeOfGame == "WaterBalloonFights") {
      let player1 = participant1;
      let player2 = participant2;
      if (!names.includes(player1) || !names.includes(player2)) {
        throw new Error(`Invalid entered name/s.`);
      }
      let player1Con = "";
      let player2Con = "";
      for (let el of this.lastOfParticipants) {
        if (el.name == player2) {
          player2 = el;
        }
        if (el.name == player1) {
          player1 = el;
        }
      }
      if (player2.condition != player1.condition) {
        throw new Error(`Choose players with equal condition.`);
      }
      if (player1.power > player2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game WaterBalloonFights.`;
      } else if (player2.power > player1.power) {
        player2.wins += 1;
        return `The ${player2.name} is winner in the game WaterBalloonFights.`;
      } else {
        return `There is no winner.`;
      }
    } else if (typeOfGame == "Battleship") {
      let player;
      if (!names.includes(participant1)) {
        throw new Error(`Invalid entered name/s.`);
      }

      for (let el of this.lastOfParticipants) {
        if (el.name == participant1) {
          player = el;
        }
      }
      player.power += 20;
      return `The ${player.name} successfully completed the game Battleship.`;
    }
  }

  toString() {
    let result = `${this.organizer} will take ${this.lastOfParticipants.length} participants on camping to ${this.location}\n`;
    let sorted = this.lastOfParticipants.sort((a, b) => b.wins - a.wins);
    for (let el of sorted) {
      result += `${el.name} - ${el.condition} - ${el.power} - ${el.wins}\n`;
    }
    return result.slice(0, result.length - 1);
  }
}
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

/////////////////////////////////////
// Unexpected error: expected
//  'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\n
//  Petar Petarson - child - 100 - 0\n
//  Sara Dickinson - child - 120 - 1'
//   to equal
//   'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\n
//   Sara Dickinson - child - 120 - 1\n
//   Petar Petarson - child - 100 - 0'
