
const jacobKowalski = new Muggle({
    name: 'Jacob Kowalski'
})


const harryPotter = new goodWizard({
    spells: [A, B, C],
    charms: [W],
    name: 'Harry Potter',
    house: 'Gryffindor',
    health: 500,
    power: MMM
  });
  
  const hermioneGranger = new goodWizard({
    spells: [A, B, D],
    charms: [W],
    name: 'Hermione Granger',
    house: 'Gryffindor',
    health: 500,
    power: MMM
  });
  
  const ronWeasley = new goodWizard({
    spells: [B, C, D],
    charms: [W],
    name: 'Ron Weasley',
    house: 'Gryffindor',
    health: 500,
    power: MMM
  });

  const justinFinchFletchley = new Student({
    spells: [E],
    charms: [X, Y, Z],
    name: 'Justin Finch Fletchley',
    house: 'Hufflepuff',
    health: 100
  });
  
  const ernieMacmillan = new Student({
    spells: [E],
    charms: [X, Y, Z],
    name: 'Ernie Macmillan',
    house: 'Hufflepuff',
    health: 100
  });
  
  const cedricDiggery = new Student({
    spells: [E],
    charms: [X, Y, Z],
    name: 'Cedric Diggery',
    house: 'Hufflepuff',
    health: 100
  });

  const choChang = new Student({
    spells: [I, J, K],
    charms: [AA],
    name: 'Cho Chang',
    house: 'Ravenclaw',
    health: 400
  });
  
  const eddieCarmichael = new Student({
    spells: [I, J, L],
    charms: [AA],
    name: 'Eddie Carmichael',
    house: 'Ravenclaw',
    health: 400
  });
  
  const mariettaEdgecombe = new Student({
    spells: [J, K, L],
    charms: [AA],
    name: 'Harry Potter',
    house: 'Ravenclaw',
    health: 400
  });

  const dracoMalfoy = new badWizard({
    spells: [M, N, O],
    name: 'Draco Malfoy',
    house: 'Slytherin',
    health: 500
  });
  
  const gregoryGoyle = new badWizard({
    spells: [M, N, P],
    name: 'Gregory Goyle',
    house: 'Slytherin',
    health: 500
  });
  
  const mariettaEdgecombe = new badWizard({
    spells: [N, O, P],
    name: 'Pansy Parkinson',
    house: 'Slytherin',
    health: 500
  });

  const albusDumbledore = new Professor({
    spells: [Q],
    charms: [BB],
    name: 'Professor Albus Dumbledore',
    house: 'Gryffindor',
    power: AAA,
    health: 10000,
    superPower: PPP
  });

  const pomonaSprout = new Professor({
    spells: [S],
    charms: [CC],
    name: 'Professor Pomona Sprout',
    house: 'Hufflepuff',
    power: BBB,
    health: 5000,
    superPower: QQQ
  });
  
  const filiusFlitwick = new Professor({
    spells: [T],
    charms: [DD],
    name: 'Professor Filius Flitwick',
    house: 'Ravenclaw';
    power: CCC,
    health: 5000,
    superPower: YYY
  });
  
  const severusSnape = new Professor({
    spells: [V],
    charms: [EE],
    name: 'Professor Severus Snape',
    house: 'Slytherin';
    power: DDD,
    health: 5000,
    superPower: ZZZ
  });

  
class Mugggle {
    constructor(atts){
        this.name = atts.name;
    }
speak(){
    console.log(`${this.name} says hello`);
}
}

class badWizard extends Muggle {
    constructor (badAtts){
        super(badAtts);
        this.spells=badAtts.spells;
        this.house=badAtts.house;
        this.health=badAtts.health
    }
    fight(target){
        target.health -= damage;
    }
}

class Student extends badWizard{
    constructor (goodAtts){
        super(goodAtts);
        this.charms=goodAtts.charms;
    }
    heal(target){
        target.health += heal;
    }
}

class goodWizard extends Student{
    constructor (greatAtts){
        super(greatAtts);
        this.power= greatAtts.power
    }
}

class Professor extends goodWizard {
    constructor (topAtts){
        super (topAtts);
        this.superPower=topAtts.superPower
    }
}

//accepts parameters of one wizard per each house

function theGreatBattle (a, b, c, d){
        

}